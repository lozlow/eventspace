// Compiled by ClojureScript 0.0-3269 {}
goog.provide('re_frame.middleware');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('re_frame.undo');
goog.require('re_frame.utils');
goog.require('clojure.data');
/**
 * Acts as an adaptor, allowing handlers to be writen as pure functions.
 * The re-frame router passes the `app-db` atom as the first parameter to any handler.
 * This middleware adapts that atom to be the value within the atom.
 * If you strip away the error/efficiency checks, this middleware is doing:
 * (reset! app-db (handler @app-db event-vec))
 * You don't have to use this middleware directly. It is automatically applied to
 * your handler's middleware when you use "register-handler".
 * In fact, the only way to by-pass automatic use of "pure" in your middleware
 * is to use the low level registration function "re-frame.handlers/register-handler-base"
 */
re_frame.middleware.pure = (function re_frame$middleware$pure(handler){
return (function re_frame$middleware$pure_$_pure_handler(app_db,event_vec){
if(!((function (){var G__39785 = app_db;
if(G__39785){
var bit__32689__auto__ = null;
if(cljs.core.truth_((function (){var or__32015__auto__ = bit__32689__auto__;
if(cljs.core.truth_(or__32015__auto__)){
return or__32015__auto__;
} else {
return G__39785.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__39785.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__39785);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__39785);
}
})())){
if(cljs.core.map_QMARK_.call(null,app_db)){
re_frame.utils.warn.call(null,"re-frame: Looks like \"pure\" is in the middleware pipeline twice. Ignoring.");
} else {
re_frame.utils.warn.call(null,"re-frame: \"pure\" middleware not given a Ratom.  Got: ",app_db);
}

return handler;
} else {
var db = cljs.core.deref.call(null,app_db);
var new_db = handler.call(null,db,event_vec);
if((new_db == null)){
return re_frame.utils.warn.call(null,"re-frame: your pure handler returned nil. It should return the new db state.");
} else {
if(!((db === new_db))){
return cljs.core.reset_BANG_.call(null,app_db,new_db);
} else {
return null;
}
}
}
});
});
/**
 * Middleware which catches and prints any handler-generated exceptions to console.
 * Handlers are called from within a core.async go-loop, and core.async produces
 * a special kind of hell when in comes to stacktraces. By the time an exception
 * has passed through a go-loop its stack is mangled beyond repair and you'll
 * have no idea where the exception was thrown.
 * So this middleware catches and prints to stacktrace before the core.async sausage
 * machine has done its work.
 * 
 */
re_frame.middleware.log_ex = (function re_frame$middleware$log_ex(handler){
return (function re_frame$middleware$log_ex_$_log_ex_handler(db,v){
try{return handler.call(null,db,v);
}catch (e39789){var e = e39789;
console.error(e.stack);

throw e;
}});
});
/**
 * Middleware which logs debug information to js/console for each event.
 * Includes a clojure.data/diff of the db, before vs after, showing the changes
 * caused by the event.
 */
re_frame.middleware.debug = (function re_frame$middleware$debug(handler){
return (function re_frame$middleware$debug_$_debug_handler(db,v){
re_frame.utils.log.call(null,"-- New Event ----------------------------------------------------");

re_frame.utils.group.call(null,"re-frame event: ",v);

var new_db = handler.call(null,db,v);
var diff = clojure.data.diff.call(null,db,new_db);
re_frame.utils.log.call(null,"only before: ",cljs.core.first.call(null,diff));

re_frame.utils.log.call(null,"only after : ",cljs.core.second.call(null,diff));

re_frame.utils.groupEnd.call(null);

return new_db;
});
});
/**
 * Middleware which removes the first element of v, allowing you to write
 * more aesthetically pleasing handlers. No leading underscore on the event-v!
 * Your handlers will look like this:
 * (defn my-handler
 * [db [x y z]]    ;; <-- instead of [_ x y z]
 * ....)
 * 
 */
re_frame.middleware.trim_v = (function re_frame$middleware$trim_v(handler){
return (function re_frame$middleware$trim_v_$_trim_v_handler(db,v){
return handler.call(null,db,cljs.core.vec.call(null,cljs.core.rest.call(null,v)));
});
});
/**
 * A middleware factory which supplies a sub-tree of `db` to the handler.
 * Works a bit like update-in. Supplies a narrowed data structure for the handler.
 * Afterwards, grafts the result of the handler back into db.
 * Usage:
 * (path :some :path)
 * (path [:some :path])
 * (path [:some :path] :to :here)
 * (path [:some :path] [:to] :here)
 * 
 */
re_frame.middleware.path = (function re_frame$middleware$path(){
var argseq__33055__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_frame.middleware.path.cljs$core$IFn$_invoke$arity$variadic(argseq__33055__auto__);
});

re_frame.middleware.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten.call(null,args);
var _ = ((cljs.core.empty_QMARK_.call(null,path))?re_frame.utils.warn.call(null,"re-frame: \"path\" middleware given no params. Probably a mistake."):null);
return ((function (path,_){
return (function re_frame$middleware$path_middleware(handler){
return ((function (path,_){
return (function re_frame$middleware$path_middleware_$_path_handler(db,v){
return cljs.core.assoc_in.call(null,db,path,handler.call(null,cljs.core.get_in.call(null,db,path),v));
});
;})(path,_))
});
;})(path,_))
});

re_frame.middleware.path.cljs$lang$maxFixedArity = (0);

re_frame.middleware.path.cljs$lang$applyTo = (function (seq39790){
return re_frame.middleware.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39790));
});
/**
 * A Middleware factory which stores an undo checkpoint.
 * "explanation" can be either a string or a function. If it is a
 * function then must be:  (db event-vec) -> string.
 * "explanation" can be nil. in which case "" is recorded.
 * 
 */
re_frame.middleware.undoable = (function re_frame$middleware$undoable(explanation){
return (function re_frame$middleware$undoable_$_undoable_middleware(handler){
return (function re_frame$middleware$undoable_$_undoable_middleware_$_undoable_handler(db,event_vec){
var explanation__$1 = ((cljs.core.fn_QMARK_.call(null,explanation))?explanation.call(null,db,event_vec):((typeof explanation === 'string')?explanation:(((explanation == null))?"":re_frame.utils.warn.call(null,"re-frame: \"undoable\" middleware given a bad parameter. Got: ",explanation)
)));
re_frame.undo.store_now_BANG_.call(null,explanation__$1);

return handler.call(null,db,event_vec);
});
});
});
/**
 * Middleware factory which runs a given function "f" in the after position.
 * "f" is (db v) -> db
 * Unlike "after" which is about side effects, "enrich" expects f to process and alter
 * db in some useful way, contributing to the derived data, flowing vibe.
 * Imagine that todomvc needed to do duplicate detection - if any two todos had
 * the same text, then highlight their background, and report them in a warning
 * down the bottom.
 * Almost any action (edit text, add new todo, remove a todo) requires a
 * complete reassesment of duplication errors and warnings. Eg: that edit
 * update might have introduced a new duplicate or removed one. Same with a
 * todo removal.
 * And to perform this enrichment, a function has to inspect all the todos,
 * possibly set flags on each, and set some overall list of duplicates.
 * And this duplication check might just be one check amoung many.
 * "f" would need to be both adding and removing the duplicate warnings.
 * By applying "f" in middleware, we keep the handlers simple and yet we
 * ensure this important step is not missed.
 */
re_frame.middleware.enrich = (function re_frame$middleware$enrich(f){
return (function re_frame$middleware$enrich_$_enrich_middleware(handler){
return (function re_frame$middleware$enrich_$_enrich_middleware_$_enrich_handler(db,v){
return f.call(null,handler.call(null,db,v),v);
});
});
});
/**
 * Middleware factory which runs a function "f" in the "after handler"
 * position presumably for side effects.
 * "f" is given the new value of "db". It's return value is ignored.
 * Examples: "f" can run schema validation. Or write current state to localstorage. etc.
 * In effect, "f" is meant to sideeffect. It gets no chance to change db. See "enrich"
 * (if you need that.)
 */
re_frame.middleware.after = (function re_frame$middleware$after(f){
return (function re_frame$middleware$after_$_after_middleware(handler){
return (function re_frame$middleware$after_$_after_middleware_$_after_handler(db,v){
var new_db = handler.call(null,db,v);
f.call(null,new_db,v);

return new_db;
});
});
});

//# sourceMappingURL=middleware.js.map