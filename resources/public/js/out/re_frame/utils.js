// Compiled by ClojureScript 0.0-3269 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
re_frame.utils.warn = (function re_frame$utils$warn(){
var argseq__33055__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__33055__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.warn(cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq39813){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39813));
});
re_frame.utils.dbg = (function re_frame$utils$dbg(){
var argseq__33055__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_frame.utils.dbg.cljs$core$IFn$_invoke$arity$variadic(argseq__33055__auto__);
});

re_frame.utils.dbg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.debug(cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.dbg.cljs$lang$maxFixedArity = (0);

re_frame.utils.dbg.cljs$lang$applyTo = (function (seq39814){
return re_frame.utils.dbg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39814));
});
re_frame.utils.log = (function re_frame$utils$log(){
var argseq__33055__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__33055__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq39815){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39815));
});
re_frame.utils.group = (function re_frame$utils$group(){
var argseq__33055__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__33055__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.group(cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq39816){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39816));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(){
return console.groupEnd();
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.warn.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map