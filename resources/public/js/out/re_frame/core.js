// Compiled by ClojureScript 0.0-3269 {}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.handlers');
goog.require('re_frame.subs');
goog.require('re_frame.router');
goog.require('re_frame.middleware');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.register_sub = re_frame.subs.register;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.pure = re_frame.middleware.pure;
re_frame.core.debug = re_frame.middleware.debug;
re_frame.core.undoable = re_frame.middleware.undoable;
re_frame.core.path = re_frame.middleware.path;
re_frame.core.enrich = re_frame.middleware.enrich;
re_frame.core.trim_v = re_frame.middleware.trim_v;
re_frame.core.after = re_frame.middleware.after;
re_frame.core.log_ex = re_frame.middleware.log_ex;
re_frame.core.register_handler = (function re_frame$core$register_handler(){
var G__39778 = arguments.length;
switch (G__39778) {
case 2:
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.handlers.register_base.call(null,id,re_frame.core.pure,handler);
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3 = (function (id,middleware,handler){
return re_frame.handlers.register_base.call(null,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.pure,middleware], null),handler);
});

re_frame.core.register_handler.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map