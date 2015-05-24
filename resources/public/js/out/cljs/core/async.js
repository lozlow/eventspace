// Compiled by ClojureScript 0.0-3269 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t42303 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42303 = (function (fn_handler,f,meta42304){
this.fn_handler = fn_handler;
this.f = f;
this.meta42304 = meta42304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t42303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42305,meta42304__$1){
var self__ = this;
var _42305__$1 = this;
return (new cljs.core.async.t42303(self__.fn_handler,self__.f,meta42304__$1));
});

cljs.core.async.t42303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42305){
var self__ = this;
var _42305__$1 = this;
return self__.meta42304;
});

cljs.core.async.t42303.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t42303.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t42303.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t42303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta42304","meta42304",538078109,null)], null);
});

cljs.core.async.t42303.cljs$lang$type = true;

cljs.core.async.t42303.cljs$lang$ctorStr = "cljs.core.async/t42303";

cljs.core.async.t42303.cljs$lang$ctorPrWriter = (function (this__32592__auto__,writer__32593__auto__,opt__32594__auto__){
return cljs.core._write.call(null,writer__32593__auto__,"cljs.core.async/t42303");
});

cljs.core.async.__GT_t42303 = (function cljs$core$async$fn_handler_$___GT_t42303(fn_handler__$1,f__$1,meta42304){
return (new cljs.core.async.t42303(fn_handler__$1,f__$1,meta42304));
});

}

return (new cljs.core.async.t42303(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__42307 = buff;
if(G__42307){
var bit__32687__auto__ = null;
if(cljs.core.truth_((function (){var or__32013__auto__ = bit__32687__auto__;
if(cljs.core.truth_(or__32013__auto__)){
return or__32013__auto__;
} else {
return G__42307.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__42307.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__42307);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__42307);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__42309 = arguments.length;
switch (G__42309) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__42312 = arguments.length;
switch (G__42312) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_42314 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42314);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42314,ret){
return (function (){
return fn1.call(null,val_42314);
});})(val_42314,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__42316 = arguments.length;
switch (G__42316) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__32898__auto___42318 = n;
var x_42319 = (0);
while(true){
if((x_42319 < n__32898__auto___42318)){
(a[x_42319] = (0));

var G__42320 = (x_42319 + (1));
x_42319 = G__42320;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__42321 = (i + (1));
i = G__42321;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t42325 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42325 = (function (alt_flag,flag,meta42326){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta42326 = meta42326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t42325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42327,meta42326__$1){
var self__ = this;
var _42327__$1 = this;
return (new cljs.core.async.t42325(self__.alt_flag,self__.flag,meta42326__$1));
});})(flag))
;

cljs.core.async.t42325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42327){
var self__ = this;
var _42327__$1 = this;
return self__.meta42326;
});})(flag))
;

cljs.core.async.t42325.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t42325.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t42325.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t42325.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42326","meta42326",244293801,null)], null);
});})(flag))
;

cljs.core.async.t42325.cljs$lang$type = true;

cljs.core.async.t42325.cljs$lang$ctorStr = "cljs.core.async/t42325";

cljs.core.async.t42325.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__32592__auto__,writer__32593__auto__,opt__32594__auto__){
return cljs.core._write.call(null,writer__32593__auto__,"cljs.core.async/t42325");
});})(flag))
;

cljs.core.async.__GT_t42325 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t42325(alt_flag__$1,flag__$1,meta42326){
return (new cljs.core.async.t42325(alt_flag__$1,flag__$1,meta42326));
});})(flag))
;

}

return (new cljs.core.async.t42325(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t42331 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t42331 = (function (alt_handler,flag,cb,meta42332){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta42332 = meta42332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t42331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42333,meta42332__$1){
var self__ = this;
var _42333__$1 = this;
return (new cljs.core.async.t42331(self__.alt_handler,self__.flag,self__.cb,meta42332__$1));
});

cljs.core.async.t42331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42333){
var self__ = this;
var _42333__$1 = this;
return self__.meta42332;
});

cljs.core.async.t42331.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t42331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t42331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t42331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42332","meta42332",869416170,null)], null);
});

cljs.core.async.t42331.cljs$lang$type = true;

cljs.core.async.t42331.cljs$lang$ctorStr = "cljs.core.async/t42331";

cljs.core.async.t42331.cljs$lang$ctorPrWriter = (function (this__32592__auto__,writer__32593__auto__,opt__32594__auto__){
return cljs.core._write.call(null,writer__32593__auto__,"cljs.core.async/t42331");
});

cljs.core.async.__GT_t42331 = (function cljs$core$async$alt_handler_$___GT_t42331(alt_handler__$1,flag__$1,cb__$1,meta42332){
return (new cljs.core.async.t42331(alt_handler__$1,flag__$1,cb__$1,meta42332));
});

}

return (new cljs.core.async.t42331(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42334_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42334_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42335_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42335_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__32013__auto__ = wport;
if(cljs.core.truth_(or__32013__auto__)){
return or__32013__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42336 = (i + (1));
i = G__42336;
continue;
}
} else {
return null;
}
break;
}
})();
var or__32013__auto__ = ret;
if(cljs.core.truth_(or__32013__auto__)){
return or__32013__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__32001__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__32001__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__32001__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__33053__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33053__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42339){
var map__42340 = p__42339;
var map__42340__$1 = ((cljs.core.seq_QMARK_.call(null,map__42340))?cljs.core.apply.call(null,cljs.core.hash_map,map__42340):map__42340);
var opts = map__42340__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42337){
var G__42338 = cljs.core.first.call(null,seq42337);
var seq42337__$1 = cljs.core.next.call(null,seq42337);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42338,seq42337__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__42342 = arguments.length;
switch (G__42342) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35970__auto___42391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___42391){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___42391){
return (function (state_42366){
var state_val_42367 = (state_42366[(1)]);
if((state_val_42367 === (7))){
var inst_42362 = (state_42366[(2)]);
var state_42366__$1 = state_42366;
var statearr_42368_42392 = state_42366__$1;
(statearr_42368_42392[(2)] = inst_42362);

(statearr_42368_42392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42367 === (1))){
var state_42366__$1 = state_42366;
var statearr_42369_42393 = state_42366__$1;
(statearr_42369_42393[(2)] = null);

(statearr_42369_42393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42367 === (4))){
var inst_42345 = (state_42366[(7)]);
var inst_42345__$1 = (state_42366[(2)]);
var inst_42346 = (inst_42345__$1 == null);
var state_42366__$1 = (function (){var statearr_42370 = state_42366;
(statearr_42370[(7)] = inst_42345__$1);

return statearr_42370;
})();
if(cljs.core.truth_(inst_42346)){
var statearr_42371_42394 = state_42366__$1;
(statearr_42371_42394[(1)] = (5));

} else {
var statearr_42372_42395 = state_42366__$1;
(statearr_42372_42395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42367 === (13))){
var state_42366__$1 = state_42366;
var statearr_42373_42396 = state_42366__$1;
(statearr_42373_42396[(2)] = null);

(statearr_42373_42396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42367 === (6))){
var inst_42345 = (state_42366[(7)]);
var state_42366__$1 = state_42366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42366__$1,(11),to,inst_42345);
} else {
if((state_val_42367 === (3))){
var inst_42364 = (state_42366[(2)]);
var state_42366__$1 = state_42366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42366__$1,inst_42364);
} else {
if((state_val_42367 === (12))){
var state_42366__$1 = state_42366;
var statearr_42374_42397 = state_42366__$1;
(statearr_42374_42397[(2)] = null);

(statearr_42374_42397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42367 === (2))){
var state_42366__$1 = state_42366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42366__$1,(4),from);
} else {
if((state_val_42367 === (11))){
var inst_42355 = (state_42366[(2)]);
var state_42366__$1 = state_42366;
if(cljs.core.truth_(inst_42355)){
var statearr_42375_42398 = state_42366__$1;
(statearr_42375_42398[(1)] = (12));

} else {
var statearr_42376_42399 = state_42366__$1;
(statearr_42376_42399[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42367 === (9))){
var state_42366__$1 = state_42366;
var statearr_42377_42400 = state_42366__$1;
(statearr_42377_42400[(2)] = null);

(statearr_42377_42400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42367 === (5))){
var state_42366__$1 = state_42366;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42378_42401 = state_42366__$1;
(statearr_42378_42401[(1)] = (8));

} else {
var statearr_42379_42402 = state_42366__$1;
(statearr_42379_42402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42367 === (14))){
var inst_42360 = (state_42366[(2)]);
var state_42366__$1 = state_42366;
var statearr_42380_42403 = state_42366__$1;
(statearr_42380_42403[(2)] = inst_42360);

(statearr_42380_42403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42367 === (10))){
var inst_42352 = (state_42366[(2)]);
var state_42366__$1 = state_42366;
var statearr_42381_42404 = state_42366__$1;
(statearr_42381_42404[(2)] = inst_42352);

(statearr_42381_42404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42367 === (8))){
var inst_42349 = cljs.core.async.close_BANG_.call(null,to);
var state_42366__$1 = state_42366;
var statearr_42382_42405 = state_42366__$1;
(statearr_42382_42405[(2)] = inst_42349);

(statearr_42382_42405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___42391))
;
return ((function (switch__35908__auto__,c__35970__auto___42391){
return (function() {
var cljs$core$async$state_machine__35909__auto__ = null;
var cljs$core$async$state_machine__35909__auto____0 = (function (){
var statearr_42386 = [null,null,null,null,null,null,null,null];
(statearr_42386[(0)] = cljs$core$async$state_machine__35909__auto__);

(statearr_42386[(1)] = (1));

return statearr_42386;
});
var cljs$core$async$state_machine__35909__auto____1 = (function (state_42366){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_42366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e42387){if((e42387 instanceof Object)){
var ex__35912__auto__ = e42387;
var statearr_42388_42406 = state_42366;
(statearr_42388_42406[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42407 = state_42366;
state_42366 = G__42407;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$state_machine__35909__auto__ = function(state_42366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35909__auto____1.call(this,state_42366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35909__auto____0;
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35909__auto____1;
return cljs$core$async$state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___42391))
})();
var state__35972__auto__ = (function (){var statearr_42389 = f__35971__auto__.call(null);
(statearr_42389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___42391);

return statearr_42389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___42391))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__42591){
var vec__42592 = p__42591;
var v = cljs.core.nth.call(null,vec__42592,(0),null);
var p = cljs.core.nth.call(null,vec__42592,(1),null);
var job = vec__42592;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35970__auto___42774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___42774,res,vec__42592,v,p,job,jobs,results){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___42774,res,vec__42592,v,p,job,jobs,results){
return (function (state_42597){
var state_val_42598 = (state_42597[(1)]);
if((state_val_42598 === (1))){
var state_42597__$1 = state_42597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42597__$1,(2),res,v);
} else {
if((state_val_42598 === (2))){
var inst_42594 = (state_42597[(2)]);
var inst_42595 = cljs.core.async.close_BANG_.call(null,res);
var state_42597__$1 = (function (){var statearr_42599 = state_42597;
(statearr_42599[(7)] = inst_42594);

return statearr_42599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42597__$1,inst_42595);
} else {
return null;
}
}
});})(c__35970__auto___42774,res,vec__42592,v,p,job,jobs,results))
;
return ((function (switch__35908__auto__,c__35970__auto___42774,res,vec__42592,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0 = (function (){
var statearr_42603 = [null,null,null,null,null,null,null,null];
(statearr_42603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__);

(statearr_42603[(1)] = (1));

return statearr_42603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1 = (function (state_42597){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_42597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e42604){if((e42604 instanceof Object)){
var ex__35912__auto__ = e42604;
var statearr_42605_42775 = state_42597;
(statearr_42605_42775[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42776 = state_42597;
state_42597 = G__42776;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__ = function(state_42597){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1.call(this,state_42597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___42774,res,vec__42592,v,p,job,jobs,results))
})();
var state__35972__auto__ = (function (){var statearr_42606 = f__35971__auto__.call(null);
(statearr_42606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___42774);

return statearr_42606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___42774,res,vec__42592,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42607){
var vec__42608 = p__42607;
var v = cljs.core.nth.call(null,vec__42608,(0),null);
var p = cljs.core.nth.call(null,vec__42608,(1),null);
var job = vec__42608;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__32898__auto___42777 = n;
var __42778 = (0);
while(true){
if((__42778 < n__32898__auto___42777)){
var G__42609_42779 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__42609_42779) {
case "compute":
var c__35970__auto___42781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42778,c__35970__auto___42781,G__42609_42779,n__32898__auto___42777,jobs,results,process,async){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (__42778,c__35970__auto___42781,G__42609_42779,n__32898__auto___42777,jobs,results,process,async){
return (function (state_42622){
var state_val_42623 = (state_42622[(1)]);
if((state_val_42623 === (1))){
var state_42622__$1 = state_42622;
var statearr_42624_42782 = state_42622__$1;
(statearr_42624_42782[(2)] = null);

(statearr_42624_42782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42623 === (2))){
var state_42622__$1 = state_42622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42622__$1,(4),jobs);
} else {
if((state_val_42623 === (3))){
var inst_42620 = (state_42622[(2)]);
var state_42622__$1 = state_42622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42622__$1,inst_42620);
} else {
if((state_val_42623 === (4))){
var inst_42612 = (state_42622[(2)]);
var inst_42613 = process.call(null,inst_42612);
var state_42622__$1 = state_42622;
if(cljs.core.truth_(inst_42613)){
var statearr_42625_42783 = state_42622__$1;
(statearr_42625_42783[(1)] = (5));

} else {
var statearr_42626_42784 = state_42622__$1;
(statearr_42626_42784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42623 === (5))){
var state_42622__$1 = state_42622;
var statearr_42627_42785 = state_42622__$1;
(statearr_42627_42785[(2)] = null);

(statearr_42627_42785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42623 === (6))){
var state_42622__$1 = state_42622;
var statearr_42628_42786 = state_42622__$1;
(statearr_42628_42786[(2)] = null);

(statearr_42628_42786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42623 === (7))){
var inst_42618 = (state_42622[(2)]);
var state_42622__$1 = state_42622;
var statearr_42629_42787 = state_42622__$1;
(statearr_42629_42787[(2)] = inst_42618);

(statearr_42629_42787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42778,c__35970__auto___42781,G__42609_42779,n__32898__auto___42777,jobs,results,process,async))
;
return ((function (__42778,switch__35908__auto__,c__35970__auto___42781,G__42609_42779,n__32898__auto___42777,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0 = (function (){
var statearr_42633 = [null,null,null,null,null,null,null];
(statearr_42633[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__);

(statearr_42633[(1)] = (1));

return statearr_42633;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1 = (function (state_42622){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_42622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e42634){if((e42634 instanceof Object)){
var ex__35912__auto__ = e42634;
var statearr_42635_42788 = state_42622;
(statearr_42635_42788[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42789 = state_42622;
state_42622 = G__42789;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__ = function(state_42622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1.call(this,state_42622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__;
})()
;})(__42778,switch__35908__auto__,c__35970__auto___42781,G__42609_42779,n__32898__auto___42777,jobs,results,process,async))
})();
var state__35972__auto__ = (function (){var statearr_42636 = f__35971__auto__.call(null);
(statearr_42636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___42781);

return statearr_42636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(__42778,c__35970__auto___42781,G__42609_42779,n__32898__auto___42777,jobs,results,process,async))
);


break;
case "async":
var c__35970__auto___42790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42778,c__35970__auto___42790,G__42609_42779,n__32898__auto___42777,jobs,results,process,async){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (__42778,c__35970__auto___42790,G__42609_42779,n__32898__auto___42777,jobs,results,process,async){
return (function (state_42649){
var state_val_42650 = (state_42649[(1)]);
if((state_val_42650 === (1))){
var state_42649__$1 = state_42649;
var statearr_42651_42791 = state_42649__$1;
(statearr_42651_42791[(2)] = null);

(statearr_42651_42791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42650 === (2))){
var state_42649__$1 = state_42649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42649__$1,(4),jobs);
} else {
if((state_val_42650 === (3))){
var inst_42647 = (state_42649[(2)]);
var state_42649__$1 = state_42649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42649__$1,inst_42647);
} else {
if((state_val_42650 === (4))){
var inst_42639 = (state_42649[(2)]);
var inst_42640 = async.call(null,inst_42639);
var state_42649__$1 = state_42649;
if(cljs.core.truth_(inst_42640)){
var statearr_42652_42792 = state_42649__$1;
(statearr_42652_42792[(1)] = (5));

} else {
var statearr_42653_42793 = state_42649__$1;
(statearr_42653_42793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42650 === (5))){
var state_42649__$1 = state_42649;
var statearr_42654_42794 = state_42649__$1;
(statearr_42654_42794[(2)] = null);

(statearr_42654_42794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42650 === (6))){
var state_42649__$1 = state_42649;
var statearr_42655_42795 = state_42649__$1;
(statearr_42655_42795[(2)] = null);

(statearr_42655_42795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42650 === (7))){
var inst_42645 = (state_42649[(2)]);
var state_42649__$1 = state_42649;
var statearr_42656_42796 = state_42649__$1;
(statearr_42656_42796[(2)] = inst_42645);

(statearr_42656_42796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42778,c__35970__auto___42790,G__42609_42779,n__32898__auto___42777,jobs,results,process,async))
;
return ((function (__42778,switch__35908__auto__,c__35970__auto___42790,G__42609_42779,n__32898__auto___42777,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0 = (function (){
var statearr_42660 = [null,null,null,null,null,null,null];
(statearr_42660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__);

(statearr_42660[(1)] = (1));

return statearr_42660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1 = (function (state_42649){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_42649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e42661){if((e42661 instanceof Object)){
var ex__35912__auto__ = e42661;
var statearr_42662_42797 = state_42649;
(statearr_42662_42797[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42798 = state_42649;
state_42649 = G__42798;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__ = function(state_42649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1.call(this,state_42649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__;
})()
;})(__42778,switch__35908__auto__,c__35970__auto___42790,G__42609_42779,n__32898__auto___42777,jobs,results,process,async))
})();
var state__35972__auto__ = (function (){var statearr_42663 = f__35971__auto__.call(null);
(statearr_42663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___42790);

return statearr_42663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(__42778,c__35970__auto___42790,G__42609_42779,n__32898__auto___42777,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__42799 = (__42778 + (1));
__42778 = G__42799;
continue;
} else {
}
break;
}

var c__35970__auto___42800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___42800,jobs,results,process,async){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___42800,jobs,results,process,async){
return (function (state_42685){
var state_val_42686 = (state_42685[(1)]);
if((state_val_42686 === (1))){
var state_42685__$1 = state_42685;
var statearr_42687_42801 = state_42685__$1;
(statearr_42687_42801[(2)] = null);

(statearr_42687_42801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42686 === (2))){
var state_42685__$1 = state_42685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42685__$1,(4),from);
} else {
if((state_val_42686 === (3))){
var inst_42683 = (state_42685[(2)]);
var state_42685__$1 = state_42685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42685__$1,inst_42683);
} else {
if((state_val_42686 === (4))){
var inst_42666 = (state_42685[(7)]);
var inst_42666__$1 = (state_42685[(2)]);
var inst_42667 = (inst_42666__$1 == null);
var state_42685__$1 = (function (){var statearr_42688 = state_42685;
(statearr_42688[(7)] = inst_42666__$1);

return statearr_42688;
})();
if(cljs.core.truth_(inst_42667)){
var statearr_42689_42802 = state_42685__$1;
(statearr_42689_42802[(1)] = (5));

} else {
var statearr_42690_42803 = state_42685__$1;
(statearr_42690_42803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42686 === (5))){
var inst_42669 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42685__$1 = state_42685;
var statearr_42691_42804 = state_42685__$1;
(statearr_42691_42804[(2)] = inst_42669);

(statearr_42691_42804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42686 === (6))){
var inst_42666 = (state_42685[(7)]);
var inst_42671 = (state_42685[(8)]);
var inst_42671__$1 = cljs.core.async.chan.call(null,(1));
var inst_42672 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42673 = [inst_42666,inst_42671__$1];
var inst_42674 = (new cljs.core.PersistentVector(null,2,(5),inst_42672,inst_42673,null));
var state_42685__$1 = (function (){var statearr_42692 = state_42685;
(statearr_42692[(8)] = inst_42671__$1);

return statearr_42692;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42685__$1,(8),jobs,inst_42674);
} else {
if((state_val_42686 === (7))){
var inst_42681 = (state_42685[(2)]);
var state_42685__$1 = state_42685;
var statearr_42693_42805 = state_42685__$1;
(statearr_42693_42805[(2)] = inst_42681);

(statearr_42693_42805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42686 === (8))){
var inst_42671 = (state_42685[(8)]);
var inst_42676 = (state_42685[(2)]);
var state_42685__$1 = (function (){var statearr_42694 = state_42685;
(statearr_42694[(9)] = inst_42676);

return statearr_42694;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42685__$1,(9),results,inst_42671);
} else {
if((state_val_42686 === (9))){
var inst_42678 = (state_42685[(2)]);
var state_42685__$1 = (function (){var statearr_42695 = state_42685;
(statearr_42695[(10)] = inst_42678);

return statearr_42695;
})();
var statearr_42696_42806 = state_42685__$1;
(statearr_42696_42806[(2)] = null);

(statearr_42696_42806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___42800,jobs,results,process,async))
;
return ((function (switch__35908__auto__,c__35970__auto___42800,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0 = (function (){
var statearr_42700 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__);

(statearr_42700[(1)] = (1));

return statearr_42700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1 = (function (state_42685){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_42685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e42701){if((e42701 instanceof Object)){
var ex__35912__auto__ = e42701;
var statearr_42702_42807 = state_42685;
(statearr_42702_42807[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42808 = state_42685;
state_42685 = G__42808;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__ = function(state_42685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1.call(this,state_42685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___42800,jobs,results,process,async))
})();
var state__35972__auto__ = (function (){var statearr_42703 = f__35971__auto__.call(null);
(statearr_42703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___42800);

return statearr_42703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___42800,jobs,results,process,async))
);


var c__35970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto__,jobs,results,process,async){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto__,jobs,results,process,async){
return (function (state_42741){
var state_val_42742 = (state_42741[(1)]);
if((state_val_42742 === (7))){
var inst_42737 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42743_42809 = state_42741__$1;
(statearr_42743_42809[(2)] = inst_42737);

(statearr_42743_42809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (20))){
var state_42741__$1 = state_42741;
var statearr_42744_42810 = state_42741__$1;
(statearr_42744_42810[(2)] = null);

(statearr_42744_42810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (1))){
var state_42741__$1 = state_42741;
var statearr_42745_42811 = state_42741__$1;
(statearr_42745_42811[(2)] = null);

(statearr_42745_42811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (4))){
var inst_42706 = (state_42741[(7)]);
var inst_42706__$1 = (state_42741[(2)]);
var inst_42707 = (inst_42706__$1 == null);
var state_42741__$1 = (function (){var statearr_42746 = state_42741;
(statearr_42746[(7)] = inst_42706__$1);

return statearr_42746;
})();
if(cljs.core.truth_(inst_42707)){
var statearr_42747_42812 = state_42741__$1;
(statearr_42747_42812[(1)] = (5));

} else {
var statearr_42748_42813 = state_42741__$1;
(statearr_42748_42813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (15))){
var inst_42719 = (state_42741[(8)]);
var state_42741__$1 = state_42741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42741__$1,(18),to,inst_42719);
} else {
if((state_val_42742 === (21))){
var inst_42732 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42749_42814 = state_42741__$1;
(statearr_42749_42814[(2)] = inst_42732);

(statearr_42749_42814[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (13))){
var inst_42734 = (state_42741[(2)]);
var state_42741__$1 = (function (){var statearr_42750 = state_42741;
(statearr_42750[(9)] = inst_42734);

return statearr_42750;
})();
var statearr_42751_42815 = state_42741__$1;
(statearr_42751_42815[(2)] = null);

(statearr_42751_42815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (6))){
var inst_42706 = (state_42741[(7)]);
var state_42741__$1 = state_42741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42741__$1,(11),inst_42706);
} else {
if((state_val_42742 === (17))){
var inst_42727 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
if(cljs.core.truth_(inst_42727)){
var statearr_42752_42816 = state_42741__$1;
(statearr_42752_42816[(1)] = (19));

} else {
var statearr_42753_42817 = state_42741__$1;
(statearr_42753_42817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (3))){
var inst_42739 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42741__$1,inst_42739);
} else {
if((state_val_42742 === (12))){
var inst_42716 = (state_42741[(10)]);
var state_42741__$1 = state_42741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42741__$1,(14),inst_42716);
} else {
if((state_val_42742 === (2))){
var state_42741__$1 = state_42741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42741__$1,(4),results);
} else {
if((state_val_42742 === (19))){
var state_42741__$1 = state_42741;
var statearr_42754_42818 = state_42741__$1;
(statearr_42754_42818[(2)] = null);

(statearr_42754_42818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (11))){
var inst_42716 = (state_42741[(2)]);
var state_42741__$1 = (function (){var statearr_42755 = state_42741;
(statearr_42755[(10)] = inst_42716);

return statearr_42755;
})();
var statearr_42756_42819 = state_42741__$1;
(statearr_42756_42819[(2)] = null);

(statearr_42756_42819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (9))){
var state_42741__$1 = state_42741;
var statearr_42757_42820 = state_42741__$1;
(statearr_42757_42820[(2)] = null);

(statearr_42757_42820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (5))){
var state_42741__$1 = state_42741;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42758_42821 = state_42741__$1;
(statearr_42758_42821[(1)] = (8));

} else {
var statearr_42759_42822 = state_42741__$1;
(statearr_42759_42822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (14))){
var inst_42719 = (state_42741[(8)]);
var inst_42721 = (state_42741[(11)]);
var inst_42719__$1 = (state_42741[(2)]);
var inst_42720 = (inst_42719__$1 == null);
var inst_42721__$1 = cljs.core.not.call(null,inst_42720);
var state_42741__$1 = (function (){var statearr_42760 = state_42741;
(statearr_42760[(8)] = inst_42719__$1);

(statearr_42760[(11)] = inst_42721__$1);

return statearr_42760;
})();
if(inst_42721__$1){
var statearr_42761_42823 = state_42741__$1;
(statearr_42761_42823[(1)] = (15));

} else {
var statearr_42762_42824 = state_42741__$1;
(statearr_42762_42824[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (16))){
var inst_42721 = (state_42741[(11)]);
var state_42741__$1 = state_42741;
var statearr_42763_42825 = state_42741__$1;
(statearr_42763_42825[(2)] = inst_42721);

(statearr_42763_42825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (10))){
var inst_42713 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42764_42826 = state_42741__$1;
(statearr_42764_42826[(2)] = inst_42713);

(statearr_42764_42826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (18))){
var inst_42724 = (state_42741[(2)]);
var state_42741__$1 = state_42741;
var statearr_42765_42827 = state_42741__$1;
(statearr_42765_42827[(2)] = inst_42724);

(statearr_42765_42827[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42742 === (8))){
var inst_42710 = cljs.core.async.close_BANG_.call(null,to);
var state_42741__$1 = state_42741;
var statearr_42766_42828 = state_42741__$1;
(statearr_42766_42828[(2)] = inst_42710);

(statearr_42766_42828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto__,jobs,results,process,async))
;
return ((function (switch__35908__auto__,c__35970__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0 = (function (){
var statearr_42770 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__);

(statearr_42770[(1)] = (1));

return statearr_42770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1 = (function (state_42741){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_42741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e42771){if((e42771 instanceof Object)){
var ex__35912__auto__ = e42771;
var statearr_42772_42829 = state_42741;
(statearr_42772_42829[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42830 = state_42741;
state_42741 = G__42830;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__ = function(state_42741){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1.call(this,state_42741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto__,jobs,results,process,async))
})();
var state__35972__auto__ = (function (){var statearr_42773 = f__35971__auto__.call(null);
(statearr_42773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto__);

return statearr_42773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto__,jobs,results,process,async))
);

return c__35970__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__42832 = arguments.length;
switch (G__42832) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__42835 = arguments.length;
switch (G__42835) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__42838 = arguments.length;
switch (G__42838) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35970__auto___42890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___42890,tc,fc){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___42890,tc,fc){
return (function (state_42864){
var state_val_42865 = (state_42864[(1)]);
if((state_val_42865 === (7))){
var inst_42860 = (state_42864[(2)]);
var state_42864__$1 = state_42864;
var statearr_42866_42891 = state_42864__$1;
(statearr_42866_42891[(2)] = inst_42860);

(statearr_42866_42891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42865 === (1))){
var state_42864__$1 = state_42864;
var statearr_42867_42892 = state_42864__$1;
(statearr_42867_42892[(2)] = null);

(statearr_42867_42892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42865 === (4))){
var inst_42841 = (state_42864[(7)]);
var inst_42841__$1 = (state_42864[(2)]);
var inst_42842 = (inst_42841__$1 == null);
var state_42864__$1 = (function (){var statearr_42868 = state_42864;
(statearr_42868[(7)] = inst_42841__$1);

return statearr_42868;
})();
if(cljs.core.truth_(inst_42842)){
var statearr_42869_42893 = state_42864__$1;
(statearr_42869_42893[(1)] = (5));

} else {
var statearr_42870_42894 = state_42864__$1;
(statearr_42870_42894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42865 === (13))){
var state_42864__$1 = state_42864;
var statearr_42871_42895 = state_42864__$1;
(statearr_42871_42895[(2)] = null);

(statearr_42871_42895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42865 === (6))){
var inst_42841 = (state_42864[(7)]);
var inst_42847 = p.call(null,inst_42841);
var state_42864__$1 = state_42864;
if(cljs.core.truth_(inst_42847)){
var statearr_42872_42896 = state_42864__$1;
(statearr_42872_42896[(1)] = (9));

} else {
var statearr_42873_42897 = state_42864__$1;
(statearr_42873_42897[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42865 === (3))){
var inst_42862 = (state_42864[(2)]);
var state_42864__$1 = state_42864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42864__$1,inst_42862);
} else {
if((state_val_42865 === (12))){
var state_42864__$1 = state_42864;
var statearr_42874_42898 = state_42864__$1;
(statearr_42874_42898[(2)] = null);

(statearr_42874_42898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42865 === (2))){
var state_42864__$1 = state_42864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42864__$1,(4),ch);
} else {
if((state_val_42865 === (11))){
var inst_42841 = (state_42864[(7)]);
var inst_42851 = (state_42864[(2)]);
var state_42864__$1 = state_42864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42864__$1,(8),inst_42851,inst_42841);
} else {
if((state_val_42865 === (9))){
var state_42864__$1 = state_42864;
var statearr_42875_42899 = state_42864__$1;
(statearr_42875_42899[(2)] = tc);

(statearr_42875_42899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42865 === (5))){
var inst_42844 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42845 = cljs.core.async.close_BANG_.call(null,fc);
var state_42864__$1 = (function (){var statearr_42876 = state_42864;
(statearr_42876[(8)] = inst_42844);

return statearr_42876;
})();
var statearr_42877_42900 = state_42864__$1;
(statearr_42877_42900[(2)] = inst_42845);

(statearr_42877_42900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42865 === (14))){
var inst_42858 = (state_42864[(2)]);
var state_42864__$1 = state_42864;
var statearr_42878_42901 = state_42864__$1;
(statearr_42878_42901[(2)] = inst_42858);

(statearr_42878_42901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42865 === (10))){
var state_42864__$1 = state_42864;
var statearr_42879_42902 = state_42864__$1;
(statearr_42879_42902[(2)] = fc);

(statearr_42879_42902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42865 === (8))){
var inst_42853 = (state_42864[(2)]);
var state_42864__$1 = state_42864;
if(cljs.core.truth_(inst_42853)){
var statearr_42880_42903 = state_42864__$1;
(statearr_42880_42903[(1)] = (12));

} else {
var statearr_42881_42904 = state_42864__$1;
(statearr_42881_42904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___42890,tc,fc))
;
return ((function (switch__35908__auto__,c__35970__auto___42890,tc,fc){
return (function() {
var cljs$core$async$state_machine__35909__auto__ = null;
var cljs$core$async$state_machine__35909__auto____0 = (function (){
var statearr_42885 = [null,null,null,null,null,null,null,null,null];
(statearr_42885[(0)] = cljs$core$async$state_machine__35909__auto__);

(statearr_42885[(1)] = (1));

return statearr_42885;
});
var cljs$core$async$state_machine__35909__auto____1 = (function (state_42864){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_42864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e42886){if((e42886 instanceof Object)){
var ex__35912__auto__ = e42886;
var statearr_42887_42905 = state_42864;
(statearr_42887_42905[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42906 = state_42864;
state_42864 = G__42906;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$state_machine__35909__auto__ = function(state_42864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35909__auto____1.call(this,state_42864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35909__auto____0;
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35909__auto____1;
return cljs$core$async$state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___42890,tc,fc))
})();
var state__35972__auto__ = (function (){var statearr_42888 = f__35971__auto__.call(null);
(statearr_42888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___42890);

return statearr_42888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___42890,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto__){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto__){
return (function (state_42953){
var state_val_42954 = (state_42953[(1)]);
if((state_val_42954 === (1))){
var inst_42939 = init;
var state_42953__$1 = (function (){var statearr_42955 = state_42953;
(statearr_42955[(7)] = inst_42939);

return statearr_42955;
})();
var statearr_42956_42971 = state_42953__$1;
(statearr_42956_42971[(2)] = null);

(statearr_42956_42971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42954 === (2))){
var state_42953__$1 = state_42953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42953__$1,(4),ch);
} else {
if((state_val_42954 === (3))){
var inst_42951 = (state_42953[(2)]);
var state_42953__$1 = state_42953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42953__$1,inst_42951);
} else {
if((state_val_42954 === (4))){
var inst_42942 = (state_42953[(8)]);
var inst_42942__$1 = (state_42953[(2)]);
var inst_42943 = (inst_42942__$1 == null);
var state_42953__$1 = (function (){var statearr_42957 = state_42953;
(statearr_42957[(8)] = inst_42942__$1);

return statearr_42957;
})();
if(cljs.core.truth_(inst_42943)){
var statearr_42958_42972 = state_42953__$1;
(statearr_42958_42972[(1)] = (5));

} else {
var statearr_42959_42973 = state_42953__$1;
(statearr_42959_42973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42954 === (5))){
var inst_42939 = (state_42953[(7)]);
var state_42953__$1 = state_42953;
var statearr_42960_42974 = state_42953__$1;
(statearr_42960_42974[(2)] = inst_42939);

(statearr_42960_42974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42954 === (6))){
var inst_42942 = (state_42953[(8)]);
var inst_42939 = (state_42953[(7)]);
var inst_42946 = f.call(null,inst_42939,inst_42942);
var inst_42939__$1 = inst_42946;
var state_42953__$1 = (function (){var statearr_42961 = state_42953;
(statearr_42961[(7)] = inst_42939__$1);

return statearr_42961;
})();
var statearr_42962_42975 = state_42953__$1;
(statearr_42962_42975[(2)] = null);

(statearr_42962_42975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42954 === (7))){
var inst_42949 = (state_42953[(2)]);
var state_42953__$1 = state_42953;
var statearr_42963_42976 = state_42953__$1;
(statearr_42963_42976[(2)] = inst_42949);

(statearr_42963_42976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__35970__auto__))
;
return ((function (switch__35908__auto__,c__35970__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35909__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35909__auto____0 = (function (){
var statearr_42967 = [null,null,null,null,null,null,null,null,null];
(statearr_42967[(0)] = cljs$core$async$reduce_$_state_machine__35909__auto__);

(statearr_42967[(1)] = (1));

return statearr_42967;
});
var cljs$core$async$reduce_$_state_machine__35909__auto____1 = (function (state_42953){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_42953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e42968){if((e42968 instanceof Object)){
var ex__35912__auto__ = e42968;
var statearr_42969_42977 = state_42953;
(statearr_42969_42977[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42978 = state_42953;
state_42953 = G__42978;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35909__auto__ = function(state_42953){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35909__auto____1.call(this,state_42953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35909__auto____0;
cljs$core$async$reduce_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35909__auto____1;
return cljs$core$async$reduce_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto__))
})();
var state__35972__auto__ = (function (){var statearr_42970 = f__35971__auto__.call(null);
(statearr_42970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto__);

return statearr_42970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto__))
);

return c__35970__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__42980 = arguments.length;
switch (G__42980) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto__){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto__){
return (function (state_43005){
var state_val_43006 = (state_43005[(1)]);
if((state_val_43006 === (7))){
var inst_42987 = (state_43005[(2)]);
var state_43005__$1 = state_43005;
var statearr_43007_43031 = state_43005__$1;
(statearr_43007_43031[(2)] = inst_42987);

(statearr_43007_43031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (1))){
var inst_42981 = cljs.core.seq.call(null,coll);
var inst_42982 = inst_42981;
var state_43005__$1 = (function (){var statearr_43008 = state_43005;
(statearr_43008[(7)] = inst_42982);

return statearr_43008;
})();
var statearr_43009_43032 = state_43005__$1;
(statearr_43009_43032[(2)] = null);

(statearr_43009_43032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (4))){
var inst_42982 = (state_43005[(7)]);
var inst_42985 = cljs.core.first.call(null,inst_42982);
var state_43005__$1 = state_43005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43005__$1,(7),ch,inst_42985);
} else {
if((state_val_43006 === (13))){
var inst_42999 = (state_43005[(2)]);
var state_43005__$1 = state_43005;
var statearr_43010_43033 = state_43005__$1;
(statearr_43010_43033[(2)] = inst_42999);

(statearr_43010_43033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (6))){
var inst_42990 = (state_43005[(2)]);
var state_43005__$1 = state_43005;
if(cljs.core.truth_(inst_42990)){
var statearr_43011_43034 = state_43005__$1;
(statearr_43011_43034[(1)] = (8));

} else {
var statearr_43012_43035 = state_43005__$1;
(statearr_43012_43035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (3))){
var inst_43003 = (state_43005[(2)]);
var state_43005__$1 = state_43005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43005__$1,inst_43003);
} else {
if((state_val_43006 === (12))){
var state_43005__$1 = state_43005;
var statearr_43013_43036 = state_43005__$1;
(statearr_43013_43036[(2)] = null);

(statearr_43013_43036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (2))){
var inst_42982 = (state_43005[(7)]);
var state_43005__$1 = state_43005;
if(cljs.core.truth_(inst_42982)){
var statearr_43014_43037 = state_43005__$1;
(statearr_43014_43037[(1)] = (4));

} else {
var statearr_43015_43038 = state_43005__$1;
(statearr_43015_43038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (11))){
var inst_42996 = cljs.core.async.close_BANG_.call(null,ch);
var state_43005__$1 = state_43005;
var statearr_43016_43039 = state_43005__$1;
(statearr_43016_43039[(2)] = inst_42996);

(statearr_43016_43039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (9))){
var state_43005__$1 = state_43005;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43017_43040 = state_43005__$1;
(statearr_43017_43040[(1)] = (11));

} else {
var statearr_43018_43041 = state_43005__$1;
(statearr_43018_43041[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (5))){
var inst_42982 = (state_43005[(7)]);
var state_43005__$1 = state_43005;
var statearr_43019_43042 = state_43005__$1;
(statearr_43019_43042[(2)] = inst_42982);

(statearr_43019_43042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (10))){
var inst_43001 = (state_43005[(2)]);
var state_43005__$1 = state_43005;
var statearr_43020_43043 = state_43005__$1;
(statearr_43020_43043[(2)] = inst_43001);

(statearr_43020_43043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43006 === (8))){
var inst_42982 = (state_43005[(7)]);
var inst_42992 = cljs.core.next.call(null,inst_42982);
var inst_42982__$1 = inst_42992;
var state_43005__$1 = (function (){var statearr_43021 = state_43005;
(statearr_43021[(7)] = inst_42982__$1);

return statearr_43021;
})();
var statearr_43022_43044 = state_43005__$1;
(statearr_43022_43044[(2)] = null);

(statearr_43022_43044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto__))
;
return ((function (switch__35908__auto__,c__35970__auto__){
return (function() {
var cljs$core$async$state_machine__35909__auto__ = null;
var cljs$core$async$state_machine__35909__auto____0 = (function (){
var statearr_43026 = [null,null,null,null,null,null,null,null];
(statearr_43026[(0)] = cljs$core$async$state_machine__35909__auto__);

(statearr_43026[(1)] = (1));

return statearr_43026;
});
var cljs$core$async$state_machine__35909__auto____1 = (function (state_43005){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_43005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e43027){if((e43027 instanceof Object)){
var ex__35912__auto__ = e43027;
var statearr_43028_43045 = state_43005;
(statearr_43028_43045[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43046 = state_43005;
state_43005 = G__43046;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$state_machine__35909__auto__ = function(state_43005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35909__auto____1.call(this,state_43005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35909__auto____0;
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35909__auto____1;
return cljs$core$async$state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto__))
})();
var state__35972__auto__ = (function (){var statearr_43029 = f__35971__auto__.call(null);
(statearr_43029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto__);

return statearr_43029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto__))
);

return c__35970__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj43048 = {};
return obj43048;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__32001__auto__ = _;
if(and__32001__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__32001__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__32649__auto__ = (((_ == null))?null:_);
return (function (){var or__32013__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj43050 = {};
return obj43050;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__32001__auto__ = m;
if(and__32001__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__32001__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__32649__auto__ = (((m == null))?null:m);
return (function (){var or__32013__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__32001__auto__ = m;
if(and__32001__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__32001__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__32649__auto__ = (((m == null))?null:m);
return (function (){var or__32013__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__32001__auto__ = m;
if(and__32001__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__32001__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__32649__auto__ = (((m == null))?null:m);
return (function (){var or__32013__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t43272 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t43272 = (function (mult,ch,cs,meta43273){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta43273 = meta43273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t43272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43274,meta43273__$1){
var self__ = this;
var _43274__$1 = this;
return (new cljs.core.async.t43272(self__.mult,self__.ch,self__.cs,meta43273__$1));
});})(cs))
;

cljs.core.async.t43272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43274){
var self__ = this;
var _43274__$1 = this;
return self__.meta43273;
});})(cs))
;

cljs.core.async.t43272.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t43272.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t43272.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t43272.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t43272.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t43272.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t43272.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43273","meta43273",-353617096,null)], null);
});})(cs))
;

cljs.core.async.t43272.cljs$lang$type = true;

cljs.core.async.t43272.cljs$lang$ctorStr = "cljs.core.async/t43272";

cljs.core.async.t43272.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__32592__auto__,writer__32593__auto__,opt__32594__auto__){
return cljs.core._write.call(null,writer__32593__auto__,"cljs.core.async/t43272");
});})(cs))
;

cljs.core.async.__GT_t43272 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t43272(mult__$1,ch__$1,cs__$1,meta43273){
return (new cljs.core.async.t43272(mult__$1,ch__$1,cs__$1,meta43273));
});})(cs))
;

}

return (new cljs.core.async.t43272(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__35970__auto___43493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___43493,cs,m,dchan,dctr,done){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___43493,cs,m,dchan,dctr,done){
return (function (state_43405){
var state_val_43406 = (state_43405[(1)]);
if((state_val_43406 === (7))){
var inst_43401 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43407_43494 = state_43405__$1;
(statearr_43407_43494[(2)] = inst_43401);

(statearr_43407_43494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (20))){
var inst_43306 = (state_43405[(7)]);
var inst_43316 = cljs.core.first.call(null,inst_43306);
var inst_43317 = cljs.core.nth.call(null,inst_43316,(0),null);
var inst_43318 = cljs.core.nth.call(null,inst_43316,(1),null);
var state_43405__$1 = (function (){var statearr_43408 = state_43405;
(statearr_43408[(8)] = inst_43317);

return statearr_43408;
})();
if(cljs.core.truth_(inst_43318)){
var statearr_43409_43495 = state_43405__$1;
(statearr_43409_43495[(1)] = (22));

} else {
var statearr_43410_43496 = state_43405__$1;
(statearr_43410_43496[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (27))){
var inst_43277 = (state_43405[(9)]);
var inst_43346 = (state_43405[(10)]);
var inst_43348 = (state_43405[(11)]);
var inst_43353 = (state_43405[(12)]);
var inst_43353__$1 = cljs.core._nth.call(null,inst_43346,inst_43348);
var inst_43354 = cljs.core.async.put_BANG_.call(null,inst_43353__$1,inst_43277,done);
var state_43405__$1 = (function (){var statearr_43411 = state_43405;
(statearr_43411[(12)] = inst_43353__$1);

return statearr_43411;
})();
if(cljs.core.truth_(inst_43354)){
var statearr_43412_43497 = state_43405__$1;
(statearr_43412_43497[(1)] = (30));

} else {
var statearr_43413_43498 = state_43405__$1;
(statearr_43413_43498[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (1))){
var state_43405__$1 = state_43405;
var statearr_43414_43499 = state_43405__$1;
(statearr_43414_43499[(2)] = null);

(statearr_43414_43499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (24))){
var inst_43306 = (state_43405[(7)]);
var inst_43323 = (state_43405[(2)]);
var inst_43324 = cljs.core.next.call(null,inst_43306);
var inst_43286 = inst_43324;
var inst_43287 = null;
var inst_43288 = (0);
var inst_43289 = (0);
var state_43405__$1 = (function (){var statearr_43415 = state_43405;
(statearr_43415[(13)] = inst_43288);

(statearr_43415[(14)] = inst_43323);

(statearr_43415[(15)] = inst_43286);

(statearr_43415[(16)] = inst_43289);

(statearr_43415[(17)] = inst_43287);

return statearr_43415;
})();
var statearr_43416_43500 = state_43405__$1;
(statearr_43416_43500[(2)] = null);

(statearr_43416_43500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (39))){
var state_43405__$1 = state_43405;
var statearr_43420_43501 = state_43405__$1;
(statearr_43420_43501[(2)] = null);

(statearr_43420_43501[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (4))){
var inst_43277 = (state_43405[(9)]);
var inst_43277__$1 = (state_43405[(2)]);
var inst_43278 = (inst_43277__$1 == null);
var state_43405__$1 = (function (){var statearr_43421 = state_43405;
(statearr_43421[(9)] = inst_43277__$1);

return statearr_43421;
})();
if(cljs.core.truth_(inst_43278)){
var statearr_43422_43502 = state_43405__$1;
(statearr_43422_43502[(1)] = (5));

} else {
var statearr_43423_43503 = state_43405__$1;
(statearr_43423_43503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (15))){
var inst_43288 = (state_43405[(13)]);
var inst_43286 = (state_43405[(15)]);
var inst_43289 = (state_43405[(16)]);
var inst_43287 = (state_43405[(17)]);
var inst_43302 = (state_43405[(2)]);
var inst_43303 = (inst_43289 + (1));
var tmp43417 = inst_43288;
var tmp43418 = inst_43286;
var tmp43419 = inst_43287;
var inst_43286__$1 = tmp43418;
var inst_43287__$1 = tmp43419;
var inst_43288__$1 = tmp43417;
var inst_43289__$1 = inst_43303;
var state_43405__$1 = (function (){var statearr_43424 = state_43405;
(statearr_43424[(13)] = inst_43288__$1);

(statearr_43424[(18)] = inst_43302);

(statearr_43424[(15)] = inst_43286__$1);

(statearr_43424[(16)] = inst_43289__$1);

(statearr_43424[(17)] = inst_43287__$1);

return statearr_43424;
})();
var statearr_43425_43504 = state_43405__$1;
(statearr_43425_43504[(2)] = null);

(statearr_43425_43504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (21))){
var inst_43327 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43429_43505 = state_43405__$1;
(statearr_43429_43505[(2)] = inst_43327);

(statearr_43429_43505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (31))){
var inst_43353 = (state_43405[(12)]);
var inst_43357 = done.call(null,null);
var inst_43358 = cljs.core.async.untap_STAR_.call(null,m,inst_43353);
var state_43405__$1 = (function (){var statearr_43430 = state_43405;
(statearr_43430[(19)] = inst_43357);

return statearr_43430;
})();
var statearr_43431_43506 = state_43405__$1;
(statearr_43431_43506[(2)] = inst_43358);

(statearr_43431_43506[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (32))){
var inst_43346 = (state_43405[(10)]);
var inst_43347 = (state_43405[(20)]);
var inst_43345 = (state_43405[(21)]);
var inst_43348 = (state_43405[(11)]);
var inst_43360 = (state_43405[(2)]);
var inst_43361 = (inst_43348 + (1));
var tmp43426 = inst_43346;
var tmp43427 = inst_43347;
var tmp43428 = inst_43345;
var inst_43345__$1 = tmp43428;
var inst_43346__$1 = tmp43426;
var inst_43347__$1 = tmp43427;
var inst_43348__$1 = inst_43361;
var state_43405__$1 = (function (){var statearr_43432 = state_43405;
(statearr_43432[(10)] = inst_43346__$1);

(statearr_43432[(20)] = inst_43347__$1);

(statearr_43432[(21)] = inst_43345__$1);

(statearr_43432[(11)] = inst_43348__$1);

(statearr_43432[(22)] = inst_43360);

return statearr_43432;
})();
var statearr_43433_43507 = state_43405__$1;
(statearr_43433_43507[(2)] = null);

(statearr_43433_43507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (40))){
var inst_43373 = (state_43405[(23)]);
var inst_43377 = done.call(null,null);
var inst_43378 = cljs.core.async.untap_STAR_.call(null,m,inst_43373);
var state_43405__$1 = (function (){var statearr_43434 = state_43405;
(statearr_43434[(24)] = inst_43377);

return statearr_43434;
})();
var statearr_43435_43508 = state_43405__$1;
(statearr_43435_43508[(2)] = inst_43378);

(statearr_43435_43508[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (33))){
var inst_43364 = (state_43405[(25)]);
var inst_43366 = cljs.core.chunked_seq_QMARK_.call(null,inst_43364);
var state_43405__$1 = state_43405;
if(inst_43366){
var statearr_43436_43509 = state_43405__$1;
(statearr_43436_43509[(1)] = (36));

} else {
var statearr_43437_43510 = state_43405__$1;
(statearr_43437_43510[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (13))){
var inst_43296 = (state_43405[(26)]);
var inst_43299 = cljs.core.async.close_BANG_.call(null,inst_43296);
var state_43405__$1 = state_43405;
var statearr_43438_43511 = state_43405__$1;
(statearr_43438_43511[(2)] = inst_43299);

(statearr_43438_43511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (22))){
var inst_43317 = (state_43405[(8)]);
var inst_43320 = cljs.core.async.close_BANG_.call(null,inst_43317);
var state_43405__$1 = state_43405;
var statearr_43439_43512 = state_43405__$1;
(statearr_43439_43512[(2)] = inst_43320);

(statearr_43439_43512[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (36))){
var inst_43364 = (state_43405[(25)]);
var inst_43368 = cljs.core.chunk_first.call(null,inst_43364);
var inst_43369 = cljs.core.chunk_rest.call(null,inst_43364);
var inst_43370 = cljs.core.count.call(null,inst_43368);
var inst_43345 = inst_43369;
var inst_43346 = inst_43368;
var inst_43347 = inst_43370;
var inst_43348 = (0);
var state_43405__$1 = (function (){var statearr_43440 = state_43405;
(statearr_43440[(10)] = inst_43346);

(statearr_43440[(20)] = inst_43347);

(statearr_43440[(21)] = inst_43345);

(statearr_43440[(11)] = inst_43348);

return statearr_43440;
})();
var statearr_43441_43513 = state_43405__$1;
(statearr_43441_43513[(2)] = null);

(statearr_43441_43513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (41))){
var inst_43364 = (state_43405[(25)]);
var inst_43380 = (state_43405[(2)]);
var inst_43381 = cljs.core.next.call(null,inst_43364);
var inst_43345 = inst_43381;
var inst_43346 = null;
var inst_43347 = (0);
var inst_43348 = (0);
var state_43405__$1 = (function (){var statearr_43442 = state_43405;
(statearr_43442[(27)] = inst_43380);

(statearr_43442[(10)] = inst_43346);

(statearr_43442[(20)] = inst_43347);

(statearr_43442[(21)] = inst_43345);

(statearr_43442[(11)] = inst_43348);

return statearr_43442;
})();
var statearr_43443_43514 = state_43405__$1;
(statearr_43443_43514[(2)] = null);

(statearr_43443_43514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (43))){
var state_43405__$1 = state_43405;
var statearr_43444_43515 = state_43405__$1;
(statearr_43444_43515[(2)] = null);

(statearr_43444_43515[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (29))){
var inst_43389 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43445_43516 = state_43405__$1;
(statearr_43445_43516[(2)] = inst_43389);

(statearr_43445_43516[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (44))){
var inst_43398 = (state_43405[(2)]);
var state_43405__$1 = (function (){var statearr_43446 = state_43405;
(statearr_43446[(28)] = inst_43398);

return statearr_43446;
})();
var statearr_43447_43517 = state_43405__$1;
(statearr_43447_43517[(2)] = null);

(statearr_43447_43517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (6))){
var inst_43337 = (state_43405[(29)]);
var inst_43336 = cljs.core.deref.call(null,cs);
var inst_43337__$1 = cljs.core.keys.call(null,inst_43336);
var inst_43338 = cljs.core.count.call(null,inst_43337__$1);
var inst_43339 = cljs.core.reset_BANG_.call(null,dctr,inst_43338);
var inst_43344 = cljs.core.seq.call(null,inst_43337__$1);
var inst_43345 = inst_43344;
var inst_43346 = null;
var inst_43347 = (0);
var inst_43348 = (0);
var state_43405__$1 = (function (){var statearr_43448 = state_43405;
(statearr_43448[(30)] = inst_43339);

(statearr_43448[(29)] = inst_43337__$1);

(statearr_43448[(10)] = inst_43346);

(statearr_43448[(20)] = inst_43347);

(statearr_43448[(21)] = inst_43345);

(statearr_43448[(11)] = inst_43348);

return statearr_43448;
})();
var statearr_43449_43518 = state_43405__$1;
(statearr_43449_43518[(2)] = null);

(statearr_43449_43518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (28))){
var inst_43364 = (state_43405[(25)]);
var inst_43345 = (state_43405[(21)]);
var inst_43364__$1 = cljs.core.seq.call(null,inst_43345);
var state_43405__$1 = (function (){var statearr_43450 = state_43405;
(statearr_43450[(25)] = inst_43364__$1);

return statearr_43450;
})();
if(inst_43364__$1){
var statearr_43451_43519 = state_43405__$1;
(statearr_43451_43519[(1)] = (33));

} else {
var statearr_43452_43520 = state_43405__$1;
(statearr_43452_43520[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (25))){
var inst_43347 = (state_43405[(20)]);
var inst_43348 = (state_43405[(11)]);
var inst_43350 = (inst_43348 < inst_43347);
var inst_43351 = inst_43350;
var state_43405__$1 = state_43405;
if(cljs.core.truth_(inst_43351)){
var statearr_43453_43521 = state_43405__$1;
(statearr_43453_43521[(1)] = (27));

} else {
var statearr_43454_43522 = state_43405__$1;
(statearr_43454_43522[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (34))){
var state_43405__$1 = state_43405;
var statearr_43455_43523 = state_43405__$1;
(statearr_43455_43523[(2)] = null);

(statearr_43455_43523[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (17))){
var state_43405__$1 = state_43405;
var statearr_43456_43524 = state_43405__$1;
(statearr_43456_43524[(2)] = null);

(statearr_43456_43524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (3))){
var inst_43403 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43405__$1,inst_43403);
} else {
if((state_val_43406 === (12))){
var inst_43332 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43457_43525 = state_43405__$1;
(statearr_43457_43525[(2)] = inst_43332);

(statearr_43457_43525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (2))){
var state_43405__$1 = state_43405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43405__$1,(4),ch);
} else {
if((state_val_43406 === (23))){
var state_43405__$1 = state_43405;
var statearr_43458_43526 = state_43405__$1;
(statearr_43458_43526[(2)] = null);

(statearr_43458_43526[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (35))){
var inst_43387 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43459_43527 = state_43405__$1;
(statearr_43459_43527[(2)] = inst_43387);

(statearr_43459_43527[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (19))){
var inst_43306 = (state_43405[(7)]);
var inst_43310 = cljs.core.chunk_first.call(null,inst_43306);
var inst_43311 = cljs.core.chunk_rest.call(null,inst_43306);
var inst_43312 = cljs.core.count.call(null,inst_43310);
var inst_43286 = inst_43311;
var inst_43287 = inst_43310;
var inst_43288 = inst_43312;
var inst_43289 = (0);
var state_43405__$1 = (function (){var statearr_43460 = state_43405;
(statearr_43460[(13)] = inst_43288);

(statearr_43460[(15)] = inst_43286);

(statearr_43460[(16)] = inst_43289);

(statearr_43460[(17)] = inst_43287);

return statearr_43460;
})();
var statearr_43461_43528 = state_43405__$1;
(statearr_43461_43528[(2)] = null);

(statearr_43461_43528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (11))){
var inst_43286 = (state_43405[(15)]);
var inst_43306 = (state_43405[(7)]);
var inst_43306__$1 = cljs.core.seq.call(null,inst_43286);
var state_43405__$1 = (function (){var statearr_43462 = state_43405;
(statearr_43462[(7)] = inst_43306__$1);

return statearr_43462;
})();
if(inst_43306__$1){
var statearr_43463_43529 = state_43405__$1;
(statearr_43463_43529[(1)] = (16));

} else {
var statearr_43464_43530 = state_43405__$1;
(statearr_43464_43530[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (9))){
var inst_43334 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43465_43531 = state_43405__$1;
(statearr_43465_43531[(2)] = inst_43334);

(statearr_43465_43531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (5))){
var inst_43284 = cljs.core.deref.call(null,cs);
var inst_43285 = cljs.core.seq.call(null,inst_43284);
var inst_43286 = inst_43285;
var inst_43287 = null;
var inst_43288 = (0);
var inst_43289 = (0);
var state_43405__$1 = (function (){var statearr_43466 = state_43405;
(statearr_43466[(13)] = inst_43288);

(statearr_43466[(15)] = inst_43286);

(statearr_43466[(16)] = inst_43289);

(statearr_43466[(17)] = inst_43287);

return statearr_43466;
})();
var statearr_43467_43532 = state_43405__$1;
(statearr_43467_43532[(2)] = null);

(statearr_43467_43532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (14))){
var state_43405__$1 = state_43405;
var statearr_43468_43533 = state_43405__$1;
(statearr_43468_43533[(2)] = null);

(statearr_43468_43533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (45))){
var inst_43395 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43469_43534 = state_43405__$1;
(statearr_43469_43534[(2)] = inst_43395);

(statearr_43469_43534[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (26))){
var inst_43337 = (state_43405[(29)]);
var inst_43391 = (state_43405[(2)]);
var inst_43392 = cljs.core.seq.call(null,inst_43337);
var state_43405__$1 = (function (){var statearr_43470 = state_43405;
(statearr_43470[(31)] = inst_43391);

return statearr_43470;
})();
if(inst_43392){
var statearr_43471_43535 = state_43405__$1;
(statearr_43471_43535[(1)] = (42));

} else {
var statearr_43472_43536 = state_43405__$1;
(statearr_43472_43536[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (16))){
var inst_43306 = (state_43405[(7)]);
var inst_43308 = cljs.core.chunked_seq_QMARK_.call(null,inst_43306);
var state_43405__$1 = state_43405;
if(inst_43308){
var statearr_43473_43537 = state_43405__$1;
(statearr_43473_43537[(1)] = (19));

} else {
var statearr_43474_43538 = state_43405__$1;
(statearr_43474_43538[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (38))){
var inst_43384 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43475_43539 = state_43405__$1;
(statearr_43475_43539[(2)] = inst_43384);

(statearr_43475_43539[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (30))){
var state_43405__$1 = state_43405;
var statearr_43476_43540 = state_43405__$1;
(statearr_43476_43540[(2)] = null);

(statearr_43476_43540[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (10))){
var inst_43289 = (state_43405[(16)]);
var inst_43287 = (state_43405[(17)]);
var inst_43295 = cljs.core._nth.call(null,inst_43287,inst_43289);
var inst_43296 = cljs.core.nth.call(null,inst_43295,(0),null);
var inst_43297 = cljs.core.nth.call(null,inst_43295,(1),null);
var state_43405__$1 = (function (){var statearr_43477 = state_43405;
(statearr_43477[(26)] = inst_43296);

return statearr_43477;
})();
if(cljs.core.truth_(inst_43297)){
var statearr_43478_43541 = state_43405__$1;
(statearr_43478_43541[(1)] = (13));

} else {
var statearr_43479_43542 = state_43405__$1;
(statearr_43479_43542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (18))){
var inst_43330 = (state_43405[(2)]);
var state_43405__$1 = state_43405;
var statearr_43480_43543 = state_43405__$1;
(statearr_43480_43543[(2)] = inst_43330);

(statearr_43480_43543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (42))){
var state_43405__$1 = state_43405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43405__$1,(45),dchan);
} else {
if((state_val_43406 === (37))){
var inst_43277 = (state_43405[(9)]);
var inst_43364 = (state_43405[(25)]);
var inst_43373 = (state_43405[(23)]);
var inst_43373__$1 = cljs.core.first.call(null,inst_43364);
var inst_43374 = cljs.core.async.put_BANG_.call(null,inst_43373__$1,inst_43277,done);
var state_43405__$1 = (function (){var statearr_43481 = state_43405;
(statearr_43481[(23)] = inst_43373__$1);

return statearr_43481;
})();
if(cljs.core.truth_(inst_43374)){
var statearr_43482_43544 = state_43405__$1;
(statearr_43482_43544[(1)] = (39));

} else {
var statearr_43483_43545 = state_43405__$1;
(statearr_43483_43545[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43406 === (8))){
var inst_43288 = (state_43405[(13)]);
var inst_43289 = (state_43405[(16)]);
var inst_43291 = (inst_43289 < inst_43288);
var inst_43292 = inst_43291;
var state_43405__$1 = state_43405;
if(cljs.core.truth_(inst_43292)){
var statearr_43484_43546 = state_43405__$1;
(statearr_43484_43546[(1)] = (10));

} else {
var statearr_43485_43547 = state_43405__$1;
(statearr_43485_43547[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___43493,cs,m,dchan,dctr,done))
;
return ((function (switch__35908__auto__,c__35970__auto___43493,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35909__auto__ = null;
var cljs$core$async$mult_$_state_machine__35909__auto____0 = (function (){
var statearr_43489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43489[(0)] = cljs$core$async$mult_$_state_machine__35909__auto__);

(statearr_43489[(1)] = (1));

return statearr_43489;
});
var cljs$core$async$mult_$_state_machine__35909__auto____1 = (function (state_43405){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_43405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e43490){if((e43490 instanceof Object)){
var ex__35912__auto__ = e43490;
var statearr_43491_43548 = state_43405;
(statearr_43491_43548[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43549 = state_43405;
state_43405 = G__43549;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35909__auto__ = function(state_43405){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35909__auto____1.call(this,state_43405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35909__auto____0;
cljs$core$async$mult_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35909__auto____1;
return cljs$core$async$mult_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___43493,cs,m,dchan,dctr,done))
})();
var state__35972__auto__ = (function (){var statearr_43492 = f__35971__auto__.call(null);
(statearr_43492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___43493);

return statearr_43492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___43493,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__43551 = arguments.length;
switch (G__43551) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj43554 = {};
return obj43554;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__32001__auto__ = m;
if(and__32001__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__32001__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__32649__auto__ = (((m == null))?null:m);
return (function (){var or__32013__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__32001__auto__ = m;
if(and__32001__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__32001__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__32649__auto__ = (((m == null))?null:m);
return (function (){var or__32013__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__32001__auto__ = m;
if(and__32001__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__32001__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__32649__auto__ = (((m == null))?null:m);
return (function (){var or__32013__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__32001__auto__ = m;
if(and__32001__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__32001__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__32649__auto__ = (((m == null))?null:m);
return (function (){var or__32013__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__32001__auto__ = m;
if(and__32001__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__32001__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__32649__auto__ = (((m == null))?null:m);
return (function (){var or__32013__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__33053__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__33053__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43559){
var map__43560 = p__43559;
var map__43560__$1 = ((cljs.core.seq_QMARK_.call(null,map__43560))?cljs.core.apply.call(null,cljs.core.hash_map,map__43560):map__43560);
var opts = map__43560__$1;
var statearr_43561_43564 = state;
(statearr_43561_43564[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__43560,map__43560__$1,opts){
return (function (val){
var statearr_43562_43565 = state;
(statearr_43562_43565[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43560,map__43560__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_43563_43566 = state;
(statearr_43563_43566[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43555){
var G__43556 = cljs.core.first.call(null,seq43555);
var seq43555__$1 = cljs.core.next.call(null,seq43555);
var G__43557 = cljs.core.first.call(null,seq43555__$1);
var seq43555__$2 = cljs.core.next.call(null,seq43555__$1);
var G__43558 = cljs.core.first.call(null,seq43555__$2);
var seq43555__$3 = cljs.core.next.call(null,seq43555__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43556,G__43557,G__43558,seq43555__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t43686 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t43686 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43687){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43687 = meta43687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t43686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43688,meta43687__$1){
var self__ = this;
var _43688__$1 = this;
return (new cljs.core.async.t43686(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43687__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t43686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43688){
var self__ = this;
var _43688__$1 = this;
return self__.meta43687;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t43686.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t43686.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t43686.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t43686.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t43686.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t43686.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t43686.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t43686.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t43686.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43687","meta43687",523937654,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t43686.cljs$lang$type = true;

cljs.core.async.t43686.cljs$lang$ctorStr = "cljs.core.async/t43686";

cljs.core.async.t43686.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__32592__auto__,writer__32593__auto__,opt__32594__auto__){
return cljs.core._write.call(null,writer__32593__auto__,"cljs.core.async/t43686");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t43686 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t43686(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43687){
return (new cljs.core.async.t43686(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43687));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t43686(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35970__auto___43805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___43805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___43805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43758){
var state_val_43759 = (state_43758[(1)]);
if((state_val_43759 === (7))){
var inst_43702 = (state_43758[(7)]);
var inst_43707 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43702);
var state_43758__$1 = state_43758;
var statearr_43760_43806 = state_43758__$1;
(statearr_43760_43806[(2)] = inst_43707);

(statearr_43760_43806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (20))){
var inst_43717 = (state_43758[(8)]);
var state_43758__$1 = state_43758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43758__$1,(23),out,inst_43717);
} else {
if((state_val_43759 === (1))){
var inst_43692 = (state_43758[(9)]);
var inst_43692__$1 = calc_state.call(null);
var inst_43693 = cljs.core.seq_QMARK_.call(null,inst_43692__$1);
var state_43758__$1 = (function (){var statearr_43761 = state_43758;
(statearr_43761[(9)] = inst_43692__$1);

return statearr_43761;
})();
if(inst_43693){
var statearr_43762_43807 = state_43758__$1;
(statearr_43762_43807[(1)] = (2));

} else {
var statearr_43763_43808 = state_43758__$1;
(statearr_43763_43808[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (24))){
var inst_43710 = (state_43758[(10)]);
var inst_43702 = inst_43710;
var state_43758__$1 = (function (){var statearr_43764 = state_43758;
(statearr_43764[(7)] = inst_43702);

return statearr_43764;
})();
var statearr_43765_43809 = state_43758__$1;
(statearr_43765_43809[(2)] = null);

(statearr_43765_43809[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (4))){
var inst_43692 = (state_43758[(9)]);
var inst_43698 = (state_43758[(2)]);
var inst_43699 = cljs.core.get.call(null,inst_43698,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43700 = cljs.core.get.call(null,inst_43698,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43701 = cljs.core.get.call(null,inst_43698,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43702 = inst_43692;
var state_43758__$1 = (function (){var statearr_43766 = state_43758;
(statearr_43766[(11)] = inst_43701);

(statearr_43766[(12)] = inst_43699);

(statearr_43766[(7)] = inst_43702);

(statearr_43766[(13)] = inst_43700);

return statearr_43766;
})();
var statearr_43767_43810 = state_43758__$1;
(statearr_43767_43810[(2)] = null);

(statearr_43767_43810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (15))){
var state_43758__$1 = state_43758;
var statearr_43768_43811 = state_43758__$1;
(statearr_43768_43811[(2)] = null);

(statearr_43768_43811[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (21))){
var inst_43710 = (state_43758[(10)]);
var inst_43702 = inst_43710;
var state_43758__$1 = (function (){var statearr_43769 = state_43758;
(statearr_43769[(7)] = inst_43702);

return statearr_43769;
})();
var statearr_43770_43812 = state_43758__$1;
(statearr_43770_43812[(2)] = null);

(statearr_43770_43812[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (13))){
var inst_43754 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
var statearr_43771_43813 = state_43758__$1;
(statearr_43771_43813[(2)] = inst_43754);

(statearr_43771_43813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (22))){
var inst_43752 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
var statearr_43772_43814 = state_43758__$1;
(statearr_43772_43814[(2)] = inst_43752);

(statearr_43772_43814[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (6))){
var inst_43756 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43758__$1,inst_43756);
} else {
if((state_val_43759 === (25))){
var state_43758__$1 = state_43758;
var statearr_43773_43815 = state_43758__$1;
(statearr_43773_43815[(2)] = null);

(statearr_43773_43815[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (17))){
var inst_43732 = (state_43758[(14)]);
var state_43758__$1 = state_43758;
var statearr_43774_43816 = state_43758__$1;
(statearr_43774_43816[(2)] = inst_43732);

(statearr_43774_43816[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (3))){
var inst_43692 = (state_43758[(9)]);
var state_43758__$1 = state_43758;
var statearr_43775_43817 = state_43758__$1;
(statearr_43775_43817[(2)] = inst_43692);

(statearr_43775_43817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (12))){
var inst_43732 = (state_43758[(14)]);
var inst_43718 = (state_43758[(15)]);
var inst_43711 = (state_43758[(16)]);
var inst_43732__$1 = inst_43711.call(null,inst_43718);
var state_43758__$1 = (function (){var statearr_43776 = state_43758;
(statearr_43776[(14)] = inst_43732__$1);

return statearr_43776;
})();
if(cljs.core.truth_(inst_43732__$1)){
var statearr_43777_43818 = state_43758__$1;
(statearr_43777_43818[(1)] = (17));

} else {
var statearr_43778_43819 = state_43758__$1;
(statearr_43778_43819[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (2))){
var inst_43692 = (state_43758[(9)]);
var inst_43695 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43692);
var state_43758__$1 = state_43758;
var statearr_43779_43820 = state_43758__$1;
(statearr_43779_43820[(2)] = inst_43695);

(statearr_43779_43820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (23))){
var inst_43743 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
if(cljs.core.truth_(inst_43743)){
var statearr_43780_43821 = state_43758__$1;
(statearr_43780_43821[(1)] = (24));

} else {
var statearr_43781_43822 = state_43758__$1;
(statearr_43781_43822[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (19))){
var inst_43740 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
if(cljs.core.truth_(inst_43740)){
var statearr_43782_43823 = state_43758__$1;
(statearr_43782_43823[(1)] = (20));

} else {
var statearr_43783_43824 = state_43758__$1;
(statearr_43783_43824[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (11))){
var inst_43717 = (state_43758[(8)]);
var inst_43723 = (inst_43717 == null);
var state_43758__$1 = state_43758;
if(cljs.core.truth_(inst_43723)){
var statearr_43784_43825 = state_43758__$1;
(statearr_43784_43825[(1)] = (14));

} else {
var statearr_43785_43826 = state_43758__$1;
(statearr_43785_43826[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (9))){
var inst_43710 = (state_43758[(10)]);
var inst_43710__$1 = (state_43758[(2)]);
var inst_43711 = cljs.core.get.call(null,inst_43710__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43712 = cljs.core.get.call(null,inst_43710__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43713 = cljs.core.get.call(null,inst_43710__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43758__$1 = (function (){var statearr_43786 = state_43758;
(statearr_43786[(10)] = inst_43710__$1);

(statearr_43786[(17)] = inst_43712);

(statearr_43786[(16)] = inst_43711);

return statearr_43786;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43758__$1,(10),inst_43713);
} else {
if((state_val_43759 === (5))){
var inst_43702 = (state_43758[(7)]);
var inst_43705 = cljs.core.seq_QMARK_.call(null,inst_43702);
var state_43758__$1 = state_43758;
if(inst_43705){
var statearr_43787_43827 = state_43758__$1;
(statearr_43787_43827[(1)] = (7));

} else {
var statearr_43788_43828 = state_43758__$1;
(statearr_43788_43828[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (14))){
var inst_43718 = (state_43758[(15)]);
var inst_43725 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43718);
var state_43758__$1 = state_43758;
var statearr_43789_43829 = state_43758__$1;
(statearr_43789_43829[(2)] = inst_43725);

(statearr_43789_43829[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (26))){
var inst_43748 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
var statearr_43790_43830 = state_43758__$1;
(statearr_43790_43830[(2)] = inst_43748);

(statearr_43790_43830[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (16))){
var inst_43728 = (state_43758[(2)]);
var inst_43729 = calc_state.call(null);
var inst_43702 = inst_43729;
var state_43758__$1 = (function (){var statearr_43791 = state_43758;
(statearr_43791[(18)] = inst_43728);

(statearr_43791[(7)] = inst_43702);

return statearr_43791;
})();
var statearr_43792_43831 = state_43758__$1;
(statearr_43792_43831[(2)] = null);

(statearr_43792_43831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (10))){
var inst_43717 = (state_43758[(8)]);
var inst_43718 = (state_43758[(15)]);
var inst_43716 = (state_43758[(2)]);
var inst_43717__$1 = cljs.core.nth.call(null,inst_43716,(0),null);
var inst_43718__$1 = cljs.core.nth.call(null,inst_43716,(1),null);
var inst_43719 = (inst_43717__$1 == null);
var inst_43720 = cljs.core._EQ_.call(null,inst_43718__$1,change);
var inst_43721 = (inst_43719) || (inst_43720);
var state_43758__$1 = (function (){var statearr_43793 = state_43758;
(statearr_43793[(8)] = inst_43717__$1);

(statearr_43793[(15)] = inst_43718__$1);

return statearr_43793;
})();
if(cljs.core.truth_(inst_43721)){
var statearr_43794_43832 = state_43758__$1;
(statearr_43794_43832[(1)] = (11));

} else {
var statearr_43795_43833 = state_43758__$1;
(statearr_43795_43833[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (18))){
var inst_43712 = (state_43758[(17)]);
var inst_43718 = (state_43758[(15)]);
var inst_43711 = (state_43758[(16)]);
var inst_43735 = cljs.core.empty_QMARK_.call(null,inst_43711);
var inst_43736 = inst_43712.call(null,inst_43718);
var inst_43737 = cljs.core.not.call(null,inst_43736);
var inst_43738 = (inst_43735) && (inst_43737);
var state_43758__$1 = state_43758;
var statearr_43796_43834 = state_43758__$1;
(statearr_43796_43834[(2)] = inst_43738);

(statearr_43796_43834[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (8))){
var inst_43702 = (state_43758[(7)]);
var state_43758__$1 = state_43758;
var statearr_43797_43835 = state_43758__$1;
(statearr_43797_43835[(2)] = inst_43702);

(statearr_43797_43835[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___43805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35908__auto__,c__35970__auto___43805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35909__auto__ = null;
var cljs$core$async$mix_$_state_machine__35909__auto____0 = (function (){
var statearr_43801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43801[(0)] = cljs$core$async$mix_$_state_machine__35909__auto__);

(statearr_43801[(1)] = (1));

return statearr_43801;
});
var cljs$core$async$mix_$_state_machine__35909__auto____1 = (function (state_43758){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_43758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e43802){if((e43802 instanceof Object)){
var ex__35912__auto__ = e43802;
var statearr_43803_43836 = state_43758;
(statearr_43803_43836[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43837 = state_43758;
state_43758 = G__43837;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35909__auto__ = function(state_43758){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35909__auto____1.call(this,state_43758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35909__auto____0;
cljs$core$async$mix_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35909__auto____1;
return cljs$core$async$mix_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___43805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35972__auto__ = (function (){var statearr_43804 = f__35971__auto__.call(null);
(statearr_43804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___43805);

return statearr_43804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___43805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj43839 = {};
return obj43839;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__32001__auto__ = p;
if(and__32001__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__32001__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__32649__auto__ = (((p == null))?null:p);
return (function (){var or__32013__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__32001__auto__ = p;
if(and__32001__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__32001__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__32649__auto__ = (((p == null))?null:p);
return (function (){var or__32013__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__43841 = arguments.length;
switch (G__43841) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__32001__auto__ = p;
if(and__32001__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__32001__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__32649__auto__ = (((p == null))?null:p);
return (function (){var or__32013__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__32001__auto__ = p;
if(and__32001__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__32001__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__32649__auto__ = (((p == null))?null:p);
return (function (){var or__32013__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__32649__auto__)]);
if(or__32013__auto__){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__32013__auto____$1){
return or__32013__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__43845 = arguments.length;
switch (G__43845) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__32013__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__32013__auto__)){
return or__32013__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__32013__auto__,mults){
return (function (p1__43843_SHARP_){
if(cljs.core.truth_(p1__43843_SHARP_.call(null,topic))){
return p1__43843_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43843_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__32013__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t43846 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t43846 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43847){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43847 = meta43847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t43846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43848,meta43847__$1){
var self__ = this;
var _43848__$1 = this;
return (new cljs.core.async.t43846(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43847__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t43846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43848){
var self__ = this;
var _43848__$1 = this;
return self__.meta43847;
});})(mults,ensure_mult))
;

cljs.core.async.t43846.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t43846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t43846.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t43846.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t43846.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t43846.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t43846.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t43846.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43847","meta43847",-12158126,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t43846.cljs$lang$type = true;

cljs.core.async.t43846.cljs$lang$ctorStr = "cljs.core.async/t43846";

cljs.core.async.t43846.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__32592__auto__,writer__32593__auto__,opt__32594__auto__){
return cljs.core._write.call(null,writer__32593__auto__,"cljs.core.async/t43846");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t43846 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t43846(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43847){
return (new cljs.core.async.t43846(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43847));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t43846(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35970__auto___43969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___43969,mults,ensure_mult,p){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___43969,mults,ensure_mult,p){
return (function (state_43920){
var state_val_43921 = (state_43920[(1)]);
if((state_val_43921 === (7))){
var inst_43916 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
var statearr_43922_43970 = state_43920__$1;
(statearr_43922_43970[(2)] = inst_43916);

(statearr_43922_43970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (20))){
var state_43920__$1 = state_43920;
var statearr_43923_43971 = state_43920__$1;
(statearr_43923_43971[(2)] = null);

(statearr_43923_43971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (1))){
var state_43920__$1 = state_43920;
var statearr_43924_43972 = state_43920__$1;
(statearr_43924_43972[(2)] = null);

(statearr_43924_43972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (24))){
var inst_43899 = (state_43920[(7)]);
var inst_43908 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43899);
var state_43920__$1 = state_43920;
var statearr_43925_43973 = state_43920__$1;
(statearr_43925_43973[(2)] = inst_43908);

(statearr_43925_43973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (4))){
var inst_43851 = (state_43920[(8)]);
var inst_43851__$1 = (state_43920[(2)]);
var inst_43852 = (inst_43851__$1 == null);
var state_43920__$1 = (function (){var statearr_43926 = state_43920;
(statearr_43926[(8)] = inst_43851__$1);

return statearr_43926;
})();
if(cljs.core.truth_(inst_43852)){
var statearr_43927_43974 = state_43920__$1;
(statearr_43927_43974[(1)] = (5));

} else {
var statearr_43928_43975 = state_43920__$1;
(statearr_43928_43975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (15))){
var inst_43893 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
var statearr_43929_43976 = state_43920__$1;
(statearr_43929_43976[(2)] = inst_43893);

(statearr_43929_43976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (21))){
var inst_43913 = (state_43920[(2)]);
var state_43920__$1 = (function (){var statearr_43930 = state_43920;
(statearr_43930[(9)] = inst_43913);

return statearr_43930;
})();
var statearr_43931_43977 = state_43920__$1;
(statearr_43931_43977[(2)] = null);

(statearr_43931_43977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (13))){
var inst_43875 = (state_43920[(10)]);
var inst_43877 = cljs.core.chunked_seq_QMARK_.call(null,inst_43875);
var state_43920__$1 = state_43920;
if(inst_43877){
var statearr_43932_43978 = state_43920__$1;
(statearr_43932_43978[(1)] = (16));

} else {
var statearr_43933_43979 = state_43920__$1;
(statearr_43933_43979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (22))){
var inst_43905 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
if(cljs.core.truth_(inst_43905)){
var statearr_43934_43980 = state_43920__$1;
(statearr_43934_43980[(1)] = (23));

} else {
var statearr_43935_43981 = state_43920__$1;
(statearr_43935_43981[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (6))){
var inst_43901 = (state_43920[(11)]);
var inst_43851 = (state_43920[(8)]);
var inst_43899 = (state_43920[(7)]);
var inst_43899__$1 = topic_fn.call(null,inst_43851);
var inst_43900 = cljs.core.deref.call(null,mults);
var inst_43901__$1 = cljs.core.get.call(null,inst_43900,inst_43899__$1);
var state_43920__$1 = (function (){var statearr_43936 = state_43920;
(statearr_43936[(11)] = inst_43901__$1);

(statearr_43936[(7)] = inst_43899__$1);

return statearr_43936;
})();
if(cljs.core.truth_(inst_43901__$1)){
var statearr_43937_43982 = state_43920__$1;
(statearr_43937_43982[(1)] = (19));

} else {
var statearr_43938_43983 = state_43920__$1;
(statearr_43938_43983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (25))){
var inst_43910 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
var statearr_43939_43984 = state_43920__$1;
(statearr_43939_43984[(2)] = inst_43910);

(statearr_43939_43984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (17))){
var inst_43875 = (state_43920[(10)]);
var inst_43884 = cljs.core.first.call(null,inst_43875);
var inst_43885 = cljs.core.async.muxch_STAR_.call(null,inst_43884);
var inst_43886 = cljs.core.async.close_BANG_.call(null,inst_43885);
var inst_43887 = cljs.core.next.call(null,inst_43875);
var inst_43861 = inst_43887;
var inst_43862 = null;
var inst_43863 = (0);
var inst_43864 = (0);
var state_43920__$1 = (function (){var statearr_43940 = state_43920;
(statearr_43940[(12)] = inst_43862);

(statearr_43940[(13)] = inst_43864);

(statearr_43940[(14)] = inst_43863);

(statearr_43940[(15)] = inst_43861);

(statearr_43940[(16)] = inst_43886);

return statearr_43940;
})();
var statearr_43941_43985 = state_43920__$1;
(statearr_43941_43985[(2)] = null);

(statearr_43941_43985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (3))){
var inst_43918 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43920__$1,inst_43918);
} else {
if((state_val_43921 === (12))){
var inst_43895 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
var statearr_43942_43986 = state_43920__$1;
(statearr_43942_43986[(2)] = inst_43895);

(statearr_43942_43986[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (2))){
var state_43920__$1 = state_43920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43920__$1,(4),ch);
} else {
if((state_val_43921 === (23))){
var state_43920__$1 = state_43920;
var statearr_43943_43987 = state_43920__$1;
(statearr_43943_43987[(2)] = null);

(statearr_43943_43987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (19))){
var inst_43901 = (state_43920[(11)]);
var inst_43851 = (state_43920[(8)]);
var inst_43903 = cljs.core.async.muxch_STAR_.call(null,inst_43901);
var state_43920__$1 = state_43920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43920__$1,(22),inst_43903,inst_43851);
} else {
if((state_val_43921 === (11))){
var inst_43875 = (state_43920[(10)]);
var inst_43861 = (state_43920[(15)]);
var inst_43875__$1 = cljs.core.seq.call(null,inst_43861);
var state_43920__$1 = (function (){var statearr_43944 = state_43920;
(statearr_43944[(10)] = inst_43875__$1);

return statearr_43944;
})();
if(inst_43875__$1){
var statearr_43945_43988 = state_43920__$1;
(statearr_43945_43988[(1)] = (13));

} else {
var statearr_43946_43989 = state_43920__$1;
(statearr_43946_43989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (9))){
var inst_43897 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
var statearr_43947_43990 = state_43920__$1;
(statearr_43947_43990[(2)] = inst_43897);

(statearr_43947_43990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (5))){
var inst_43858 = cljs.core.deref.call(null,mults);
var inst_43859 = cljs.core.vals.call(null,inst_43858);
var inst_43860 = cljs.core.seq.call(null,inst_43859);
var inst_43861 = inst_43860;
var inst_43862 = null;
var inst_43863 = (0);
var inst_43864 = (0);
var state_43920__$1 = (function (){var statearr_43948 = state_43920;
(statearr_43948[(12)] = inst_43862);

(statearr_43948[(13)] = inst_43864);

(statearr_43948[(14)] = inst_43863);

(statearr_43948[(15)] = inst_43861);

return statearr_43948;
})();
var statearr_43949_43991 = state_43920__$1;
(statearr_43949_43991[(2)] = null);

(statearr_43949_43991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (14))){
var state_43920__$1 = state_43920;
var statearr_43953_43992 = state_43920__$1;
(statearr_43953_43992[(2)] = null);

(statearr_43953_43992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (16))){
var inst_43875 = (state_43920[(10)]);
var inst_43879 = cljs.core.chunk_first.call(null,inst_43875);
var inst_43880 = cljs.core.chunk_rest.call(null,inst_43875);
var inst_43881 = cljs.core.count.call(null,inst_43879);
var inst_43861 = inst_43880;
var inst_43862 = inst_43879;
var inst_43863 = inst_43881;
var inst_43864 = (0);
var state_43920__$1 = (function (){var statearr_43954 = state_43920;
(statearr_43954[(12)] = inst_43862);

(statearr_43954[(13)] = inst_43864);

(statearr_43954[(14)] = inst_43863);

(statearr_43954[(15)] = inst_43861);

return statearr_43954;
})();
var statearr_43955_43993 = state_43920__$1;
(statearr_43955_43993[(2)] = null);

(statearr_43955_43993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (10))){
var inst_43862 = (state_43920[(12)]);
var inst_43864 = (state_43920[(13)]);
var inst_43863 = (state_43920[(14)]);
var inst_43861 = (state_43920[(15)]);
var inst_43869 = cljs.core._nth.call(null,inst_43862,inst_43864);
var inst_43870 = cljs.core.async.muxch_STAR_.call(null,inst_43869);
var inst_43871 = cljs.core.async.close_BANG_.call(null,inst_43870);
var inst_43872 = (inst_43864 + (1));
var tmp43950 = inst_43862;
var tmp43951 = inst_43863;
var tmp43952 = inst_43861;
var inst_43861__$1 = tmp43952;
var inst_43862__$1 = tmp43950;
var inst_43863__$1 = tmp43951;
var inst_43864__$1 = inst_43872;
var state_43920__$1 = (function (){var statearr_43956 = state_43920;
(statearr_43956[(12)] = inst_43862__$1);

(statearr_43956[(17)] = inst_43871);

(statearr_43956[(13)] = inst_43864__$1);

(statearr_43956[(14)] = inst_43863__$1);

(statearr_43956[(15)] = inst_43861__$1);

return statearr_43956;
})();
var statearr_43957_43994 = state_43920__$1;
(statearr_43957_43994[(2)] = null);

(statearr_43957_43994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (18))){
var inst_43890 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
var statearr_43958_43995 = state_43920__$1;
(statearr_43958_43995[(2)] = inst_43890);

(statearr_43958_43995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (8))){
var inst_43864 = (state_43920[(13)]);
var inst_43863 = (state_43920[(14)]);
var inst_43866 = (inst_43864 < inst_43863);
var inst_43867 = inst_43866;
var state_43920__$1 = state_43920;
if(cljs.core.truth_(inst_43867)){
var statearr_43959_43996 = state_43920__$1;
(statearr_43959_43996[(1)] = (10));

} else {
var statearr_43960_43997 = state_43920__$1;
(statearr_43960_43997[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___43969,mults,ensure_mult,p))
;
return ((function (switch__35908__auto__,c__35970__auto___43969,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35909__auto__ = null;
var cljs$core$async$state_machine__35909__auto____0 = (function (){
var statearr_43964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43964[(0)] = cljs$core$async$state_machine__35909__auto__);

(statearr_43964[(1)] = (1));

return statearr_43964;
});
var cljs$core$async$state_machine__35909__auto____1 = (function (state_43920){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_43920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e43965){if((e43965 instanceof Object)){
var ex__35912__auto__ = e43965;
var statearr_43966_43998 = state_43920;
(statearr_43966_43998[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43999 = state_43920;
state_43920 = G__43999;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$state_machine__35909__auto__ = function(state_43920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35909__auto____1.call(this,state_43920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35909__auto____0;
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35909__auto____1;
return cljs$core$async$state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___43969,mults,ensure_mult,p))
})();
var state__35972__auto__ = (function (){var statearr_43967 = f__35971__auto__.call(null);
(statearr_43967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___43969);

return statearr_43967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___43969,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__44001 = arguments.length;
switch (G__44001) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__44004 = arguments.length;
switch (G__44004) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__44007 = arguments.length;
switch (G__44007) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__35970__auto___44077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___44077,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___44077,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44046){
var state_val_44047 = (state_44046[(1)]);
if((state_val_44047 === (7))){
var state_44046__$1 = state_44046;
var statearr_44048_44078 = state_44046__$1;
(statearr_44048_44078[(2)] = null);

(statearr_44048_44078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44047 === (1))){
var state_44046__$1 = state_44046;
var statearr_44049_44079 = state_44046__$1;
(statearr_44049_44079[(2)] = null);

(statearr_44049_44079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44047 === (4))){
var inst_44010 = (state_44046[(7)]);
var inst_44012 = (inst_44010 < cnt);
var state_44046__$1 = state_44046;
if(cljs.core.truth_(inst_44012)){
var statearr_44050_44080 = state_44046__$1;
(statearr_44050_44080[(1)] = (6));

} else {
var statearr_44051_44081 = state_44046__$1;
(statearr_44051_44081[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44047 === (15))){
var inst_44042 = (state_44046[(2)]);
var state_44046__$1 = state_44046;
var statearr_44052_44082 = state_44046__$1;
(statearr_44052_44082[(2)] = inst_44042);

(statearr_44052_44082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44047 === (13))){
var inst_44035 = cljs.core.async.close_BANG_.call(null,out);
var state_44046__$1 = state_44046;
var statearr_44053_44083 = state_44046__$1;
(statearr_44053_44083[(2)] = inst_44035);

(statearr_44053_44083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44047 === (6))){
var state_44046__$1 = state_44046;
var statearr_44054_44084 = state_44046__$1;
(statearr_44054_44084[(2)] = null);

(statearr_44054_44084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44047 === (3))){
var inst_44044 = (state_44046[(2)]);
var state_44046__$1 = state_44046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44046__$1,inst_44044);
} else {
if((state_val_44047 === (12))){
var inst_44032 = (state_44046[(8)]);
var inst_44032__$1 = (state_44046[(2)]);
var inst_44033 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44032__$1);
var state_44046__$1 = (function (){var statearr_44055 = state_44046;
(statearr_44055[(8)] = inst_44032__$1);

return statearr_44055;
})();
if(cljs.core.truth_(inst_44033)){
var statearr_44056_44085 = state_44046__$1;
(statearr_44056_44085[(1)] = (13));

} else {
var statearr_44057_44086 = state_44046__$1;
(statearr_44057_44086[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44047 === (2))){
var inst_44009 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44010 = (0);
var state_44046__$1 = (function (){var statearr_44058 = state_44046;
(statearr_44058[(9)] = inst_44009);

(statearr_44058[(7)] = inst_44010);

return statearr_44058;
})();
var statearr_44059_44087 = state_44046__$1;
(statearr_44059_44087[(2)] = null);

(statearr_44059_44087[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44047 === (11))){
var inst_44010 = (state_44046[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44046,(10),Object,null,(9));
var inst_44019 = chs__$1.call(null,inst_44010);
var inst_44020 = done.call(null,inst_44010);
var inst_44021 = cljs.core.async.take_BANG_.call(null,inst_44019,inst_44020);
var state_44046__$1 = state_44046;
var statearr_44060_44088 = state_44046__$1;
(statearr_44060_44088[(2)] = inst_44021);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44046__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44047 === (9))){
var inst_44010 = (state_44046[(7)]);
var inst_44023 = (state_44046[(2)]);
var inst_44024 = (inst_44010 + (1));
var inst_44010__$1 = inst_44024;
var state_44046__$1 = (function (){var statearr_44061 = state_44046;
(statearr_44061[(7)] = inst_44010__$1);

(statearr_44061[(10)] = inst_44023);

return statearr_44061;
})();
var statearr_44062_44089 = state_44046__$1;
(statearr_44062_44089[(2)] = null);

(statearr_44062_44089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44047 === (5))){
var inst_44030 = (state_44046[(2)]);
var state_44046__$1 = (function (){var statearr_44063 = state_44046;
(statearr_44063[(11)] = inst_44030);

return statearr_44063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44046__$1,(12),dchan);
} else {
if((state_val_44047 === (14))){
var inst_44032 = (state_44046[(8)]);
var inst_44037 = cljs.core.apply.call(null,f,inst_44032);
var state_44046__$1 = state_44046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44046__$1,(16),out,inst_44037);
} else {
if((state_val_44047 === (16))){
var inst_44039 = (state_44046[(2)]);
var state_44046__$1 = (function (){var statearr_44064 = state_44046;
(statearr_44064[(12)] = inst_44039);

return statearr_44064;
})();
var statearr_44065_44090 = state_44046__$1;
(statearr_44065_44090[(2)] = null);

(statearr_44065_44090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44047 === (10))){
var inst_44014 = (state_44046[(2)]);
var inst_44015 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_44046__$1 = (function (){var statearr_44066 = state_44046;
(statearr_44066[(13)] = inst_44014);

return statearr_44066;
})();
var statearr_44067_44091 = state_44046__$1;
(statearr_44067_44091[(2)] = inst_44015);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44046__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44047 === (8))){
var inst_44028 = (state_44046[(2)]);
var state_44046__$1 = state_44046;
var statearr_44068_44092 = state_44046__$1;
(statearr_44068_44092[(2)] = inst_44028);

(statearr_44068_44092[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___44077,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35908__auto__,c__35970__auto___44077,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35909__auto__ = null;
var cljs$core$async$state_machine__35909__auto____0 = (function (){
var statearr_44072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44072[(0)] = cljs$core$async$state_machine__35909__auto__);

(statearr_44072[(1)] = (1));

return statearr_44072;
});
var cljs$core$async$state_machine__35909__auto____1 = (function (state_44046){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_44046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e44073){if((e44073 instanceof Object)){
var ex__35912__auto__ = e44073;
var statearr_44074_44093 = state_44046;
(statearr_44074_44093[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44094 = state_44046;
state_44046 = G__44094;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$state_machine__35909__auto__ = function(state_44046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35909__auto____1.call(this,state_44046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35909__auto____0;
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35909__auto____1;
return cljs$core$async$state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___44077,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35972__auto__ = (function (){var statearr_44075 = f__35971__auto__.call(null);
(statearr_44075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___44077);

return statearr_44075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___44077,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__44097 = arguments.length;
switch (G__44097) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35970__auto___44152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___44152,out){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___44152,out){
return (function (state_44127){
var state_val_44128 = (state_44127[(1)]);
if((state_val_44128 === (7))){
var inst_44107 = (state_44127[(7)]);
var inst_44106 = (state_44127[(8)]);
var inst_44106__$1 = (state_44127[(2)]);
var inst_44107__$1 = cljs.core.nth.call(null,inst_44106__$1,(0),null);
var inst_44108 = cljs.core.nth.call(null,inst_44106__$1,(1),null);
var inst_44109 = (inst_44107__$1 == null);
var state_44127__$1 = (function (){var statearr_44129 = state_44127;
(statearr_44129[(7)] = inst_44107__$1);

(statearr_44129[(9)] = inst_44108);

(statearr_44129[(8)] = inst_44106__$1);

return statearr_44129;
})();
if(cljs.core.truth_(inst_44109)){
var statearr_44130_44153 = state_44127__$1;
(statearr_44130_44153[(1)] = (8));

} else {
var statearr_44131_44154 = state_44127__$1;
(statearr_44131_44154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (1))){
var inst_44098 = cljs.core.vec.call(null,chs);
var inst_44099 = inst_44098;
var state_44127__$1 = (function (){var statearr_44132 = state_44127;
(statearr_44132[(10)] = inst_44099);

return statearr_44132;
})();
var statearr_44133_44155 = state_44127__$1;
(statearr_44133_44155[(2)] = null);

(statearr_44133_44155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (4))){
var inst_44099 = (state_44127[(10)]);
var state_44127__$1 = state_44127;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44127__$1,(7),inst_44099);
} else {
if((state_val_44128 === (6))){
var inst_44123 = (state_44127[(2)]);
var state_44127__$1 = state_44127;
var statearr_44134_44156 = state_44127__$1;
(statearr_44134_44156[(2)] = inst_44123);

(statearr_44134_44156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (3))){
var inst_44125 = (state_44127[(2)]);
var state_44127__$1 = state_44127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44127__$1,inst_44125);
} else {
if((state_val_44128 === (2))){
var inst_44099 = (state_44127[(10)]);
var inst_44101 = cljs.core.count.call(null,inst_44099);
var inst_44102 = (inst_44101 > (0));
var state_44127__$1 = state_44127;
if(cljs.core.truth_(inst_44102)){
var statearr_44136_44157 = state_44127__$1;
(statearr_44136_44157[(1)] = (4));

} else {
var statearr_44137_44158 = state_44127__$1;
(statearr_44137_44158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (11))){
var inst_44099 = (state_44127[(10)]);
var inst_44116 = (state_44127[(2)]);
var tmp44135 = inst_44099;
var inst_44099__$1 = tmp44135;
var state_44127__$1 = (function (){var statearr_44138 = state_44127;
(statearr_44138[(11)] = inst_44116);

(statearr_44138[(10)] = inst_44099__$1);

return statearr_44138;
})();
var statearr_44139_44159 = state_44127__$1;
(statearr_44139_44159[(2)] = null);

(statearr_44139_44159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (9))){
var inst_44107 = (state_44127[(7)]);
var state_44127__$1 = state_44127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44127__$1,(11),out,inst_44107);
} else {
if((state_val_44128 === (5))){
var inst_44121 = cljs.core.async.close_BANG_.call(null,out);
var state_44127__$1 = state_44127;
var statearr_44140_44160 = state_44127__$1;
(statearr_44140_44160[(2)] = inst_44121);

(statearr_44140_44160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (10))){
var inst_44119 = (state_44127[(2)]);
var state_44127__$1 = state_44127;
var statearr_44141_44161 = state_44127__$1;
(statearr_44141_44161[(2)] = inst_44119);

(statearr_44141_44161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (8))){
var inst_44107 = (state_44127[(7)]);
var inst_44108 = (state_44127[(9)]);
var inst_44099 = (state_44127[(10)]);
var inst_44106 = (state_44127[(8)]);
var inst_44111 = (function (){var cs = inst_44099;
var vec__44104 = inst_44106;
var v = inst_44107;
var c = inst_44108;
return ((function (cs,vec__44104,v,c,inst_44107,inst_44108,inst_44099,inst_44106,state_val_44128,c__35970__auto___44152,out){
return (function (p1__44095_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__44095_SHARP_);
});
;})(cs,vec__44104,v,c,inst_44107,inst_44108,inst_44099,inst_44106,state_val_44128,c__35970__auto___44152,out))
})();
var inst_44112 = cljs.core.filterv.call(null,inst_44111,inst_44099);
var inst_44099__$1 = inst_44112;
var state_44127__$1 = (function (){var statearr_44142 = state_44127;
(statearr_44142[(10)] = inst_44099__$1);

return statearr_44142;
})();
var statearr_44143_44162 = state_44127__$1;
(statearr_44143_44162[(2)] = null);

(statearr_44143_44162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___44152,out))
;
return ((function (switch__35908__auto__,c__35970__auto___44152,out){
return (function() {
var cljs$core$async$state_machine__35909__auto__ = null;
var cljs$core$async$state_machine__35909__auto____0 = (function (){
var statearr_44147 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44147[(0)] = cljs$core$async$state_machine__35909__auto__);

(statearr_44147[(1)] = (1));

return statearr_44147;
});
var cljs$core$async$state_machine__35909__auto____1 = (function (state_44127){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_44127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e44148){if((e44148 instanceof Object)){
var ex__35912__auto__ = e44148;
var statearr_44149_44163 = state_44127;
(statearr_44149_44163[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44164 = state_44127;
state_44127 = G__44164;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$state_machine__35909__auto__ = function(state_44127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35909__auto____1.call(this,state_44127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35909__auto____0;
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35909__auto____1;
return cljs$core$async$state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___44152,out))
})();
var state__35972__auto__ = (function (){var statearr_44150 = f__35971__auto__.call(null);
(statearr_44150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___44152);

return statearr_44150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___44152,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__44166 = arguments.length;
switch (G__44166) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35970__auto___44214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___44214,out){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___44214,out){
return (function (state_44190){
var state_val_44191 = (state_44190[(1)]);
if((state_val_44191 === (7))){
var inst_44172 = (state_44190[(7)]);
var inst_44172__$1 = (state_44190[(2)]);
var inst_44173 = (inst_44172__$1 == null);
var inst_44174 = cljs.core.not.call(null,inst_44173);
var state_44190__$1 = (function (){var statearr_44192 = state_44190;
(statearr_44192[(7)] = inst_44172__$1);

return statearr_44192;
})();
if(inst_44174){
var statearr_44193_44215 = state_44190__$1;
(statearr_44193_44215[(1)] = (8));

} else {
var statearr_44194_44216 = state_44190__$1;
(statearr_44194_44216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44191 === (1))){
var inst_44167 = (0);
var state_44190__$1 = (function (){var statearr_44195 = state_44190;
(statearr_44195[(8)] = inst_44167);

return statearr_44195;
})();
var statearr_44196_44217 = state_44190__$1;
(statearr_44196_44217[(2)] = null);

(statearr_44196_44217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44191 === (4))){
var state_44190__$1 = state_44190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44190__$1,(7),ch);
} else {
if((state_val_44191 === (6))){
var inst_44185 = (state_44190[(2)]);
var state_44190__$1 = state_44190;
var statearr_44197_44218 = state_44190__$1;
(statearr_44197_44218[(2)] = inst_44185);

(statearr_44197_44218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44191 === (3))){
var inst_44187 = (state_44190[(2)]);
var inst_44188 = cljs.core.async.close_BANG_.call(null,out);
var state_44190__$1 = (function (){var statearr_44198 = state_44190;
(statearr_44198[(9)] = inst_44187);

return statearr_44198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44190__$1,inst_44188);
} else {
if((state_val_44191 === (2))){
var inst_44167 = (state_44190[(8)]);
var inst_44169 = (inst_44167 < n);
var state_44190__$1 = state_44190;
if(cljs.core.truth_(inst_44169)){
var statearr_44199_44219 = state_44190__$1;
(statearr_44199_44219[(1)] = (4));

} else {
var statearr_44200_44220 = state_44190__$1;
(statearr_44200_44220[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44191 === (11))){
var inst_44167 = (state_44190[(8)]);
var inst_44177 = (state_44190[(2)]);
var inst_44178 = (inst_44167 + (1));
var inst_44167__$1 = inst_44178;
var state_44190__$1 = (function (){var statearr_44201 = state_44190;
(statearr_44201[(8)] = inst_44167__$1);

(statearr_44201[(10)] = inst_44177);

return statearr_44201;
})();
var statearr_44202_44221 = state_44190__$1;
(statearr_44202_44221[(2)] = null);

(statearr_44202_44221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44191 === (9))){
var state_44190__$1 = state_44190;
var statearr_44203_44222 = state_44190__$1;
(statearr_44203_44222[(2)] = null);

(statearr_44203_44222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44191 === (5))){
var state_44190__$1 = state_44190;
var statearr_44204_44223 = state_44190__$1;
(statearr_44204_44223[(2)] = null);

(statearr_44204_44223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44191 === (10))){
var inst_44182 = (state_44190[(2)]);
var state_44190__$1 = state_44190;
var statearr_44205_44224 = state_44190__$1;
(statearr_44205_44224[(2)] = inst_44182);

(statearr_44205_44224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44191 === (8))){
var inst_44172 = (state_44190[(7)]);
var state_44190__$1 = state_44190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44190__$1,(11),out,inst_44172);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___44214,out))
;
return ((function (switch__35908__auto__,c__35970__auto___44214,out){
return (function() {
var cljs$core$async$state_machine__35909__auto__ = null;
var cljs$core$async$state_machine__35909__auto____0 = (function (){
var statearr_44209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44209[(0)] = cljs$core$async$state_machine__35909__auto__);

(statearr_44209[(1)] = (1));

return statearr_44209;
});
var cljs$core$async$state_machine__35909__auto____1 = (function (state_44190){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_44190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e44210){if((e44210 instanceof Object)){
var ex__35912__auto__ = e44210;
var statearr_44211_44225 = state_44190;
(statearr_44211_44225[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44226 = state_44190;
state_44190 = G__44226;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$state_machine__35909__auto__ = function(state_44190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35909__auto____1.call(this,state_44190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35909__auto____0;
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35909__auto____1;
return cljs$core$async$state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___44214,out))
})();
var state__35972__auto__ = (function (){var statearr_44212 = f__35971__auto__.call(null);
(statearr_44212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___44214);

return statearr_44212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___44214,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t44234 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t44234 = (function (map_LT_,f,ch,meta44235){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta44235 = meta44235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t44234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44236,meta44235__$1){
var self__ = this;
var _44236__$1 = this;
return (new cljs.core.async.t44234(self__.map_LT_,self__.f,self__.ch,meta44235__$1));
});

cljs.core.async.t44234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44236){
var self__ = this;
var _44236__$1 = this;
return self__.meta44235;
});

cljs.core.async.t44234.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t44234.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t44234.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t44234.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t44234.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t44237 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t44237 = (function (map_LT_,f,ch,meta44235,_,fn1,meta44238){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta44235 = meta44235;
this._ = _;
this.fn1 = fn1;
this.meta44238 = meta44238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t44237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_44239,meta44238__$1){
var self__ = this;
var _44239__$1 = this;
return (new cljs.core.async.t44237(self__.map_LT_,self__.f,self__.ch,self__.meta44235,self__._,self__.fn1,meta44238__$1));
});})(___$1))
;

cljs.core.async.t44237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_44239){
var self__ = this;
var _44239__$1 = this;
return self__.meta44238;
});})(___$1))
;

cljs.core.async.t44237.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t44237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t44237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__44227_SHARP_){
return f1.call(null,(((p1__44227_SHARP_ == null))?null:self__.f.call(null,p1__44227_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t44237.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44235","meta44235",410225985,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44238","meta44238",-711829142,null)], null);
});})(___$1))
;

cljs.core.async.t44237.cljs$lang$type = true;

cljs.core.async.t44237.cljs$lang$ctorStr = "cljs.core.async/t44237";

cljs.core.async.t44237.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__32592__auto__,writer__32593__auto__,opt__32594__auto__){
return cljs.core._write.call(null,writer__32593__auto__,"cljs.core.async/t44237");
});})(___$1))
;

cljs.core.async.__GT_t44237 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t44237(map_LT___$1,f__$1,ch__$1,meta44235__$1,___$2,fn1__$1,meta44238){
return (new cljs.core.async.t44237(map_LT___$1,f__$1,ch__$1,meta44235__$1,___$2,fn1__$1,meta44238));
});})(___$1))
;

}

return (new cljs.core.async.t44237(self__.map_LT_,self__.f,self__.ch,self__.meta44235,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__32001__auto__ = ret;
if(cljs.core.truth_(and__32001__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__32001__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t44234.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t44234.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t44234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44235","meta44235",410225985,null)], null);
});

cljs.core.async.t44234.cljs$lang$type = true;

cljs.core.async.t44234.cljs$lang$ctorStr = "cljs.core.async/t44234";

cljs.core.async.t44234.cljs$lang$ctorPrWriter = (function (this__32592__auto__,writer__32593__auto__,opt__32594__auto__){
return cljs.core._write.call(null,writer__32593__auto__,"cljs.core.async/t44234");
});

cljs.core.async.__GT_t44234 = (function cljs$core$async$map_LT__$___GT_t44234(map_LT___$1,f__$1,ch__$1,meta44235){
return (new cljs.core.async.t44234(map_LT___$1,f__$1,ch__$1,meta44235));
});

}

return (new cljs.core.async.t44234(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t44243 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t44243 = (function (map_GT_,f,ch,meta44244){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta44244 = meta44244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t44243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44245,meta44244__$1){
var self__ = this;
var _44245__$1 = this;
return (new cljs.core.async.t44243(self__.map_GT_,self__.f,self__.ch,meta44244__$1));
});

cljs.core.async.t44243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44245){
var self__ = this;
var _44245__$1 = this;
return self__.meta44244;
});

cljs.core.async.t44243.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t44243.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t44243.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t44243.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t44243.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t44243.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t44243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44244","meta44244",-1232245635,null)], null);
});

cljs.core.async.t44243.cljs$lang$type = true;

cljs.core.async.t44243.cljs$lang$ctorStr = "cljs.core.async/t44243";

cljs.core.async.t44243.cljs$lang$ctorPrWriter = (function (this__32592__auto__,writer__32593__auto__,opt__32594__auto__){
return cljs.core._write.call(null,writer__32593__auto__,"cljs.core.async/t44243");
});

cljs.core.async.__GT_t44243 = (function cljs$core$async$map_GT__$___GT_t44243(map_GT___$1,f__$1,ch__$1,meta44244){
return (new cljs.core.async.t44243(map_GT___$1,f__$1,ch__$1,meta44244));
});

}

return (new cljs.core.async.t44243(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t44249 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t44249 = (function (filter_GT_,p,ch,meta44250){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta44250 = meta44250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t44249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44251,meta44250__$1){
var self__ = this;
var _44251__$1 = this;
return (new cljs.core.async.t44249(self__.filter_GT_,self__.p,self__.ch,meta44250__$1));
});

cljs.core.async.t44249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44251){
var self__ = this;
var _44251__$1 = this;
return self__.meta44250;
});

cljs.core.async.t44249.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t44249.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t44249.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t44249.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t44249.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t44249.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t44249.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t44249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44250","meta44250",825774025,null)], null);
});

cljs.core.async.t44249.cljs$lang$type = true;

cljs.core.async.t44249.cljs$lang$ctorStr = "cljs.core.async/t44249";

cljs.core.async.t44249.cljs$lang$ctorPrWriter = (function (this__32592__auto__,writer__32593__auto__,opt__32594__auto__){
return cljs.core._write.call(null,writer__32593__auto__,"cljs.core.async/t44249");
});

cljs.core.async.__GT_t44249 = (function cljs$core$async$filter_GT__$___GT_t44249(filter_GT___$1,p__$1,ch__$1,meta44250){
return (new cljs.core.async.t44249(filter_GT___$1,p__$1,ch__$1,meta44250));
});

}

return (new cljs.core.async.t44249(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__44253 = arguments.length;
switch (G__44253) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35970__auto___44296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___44296,out){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___44296,out){
return (function (state_44274){
var state_val_44275 = (state_44274[(1)]);
if((state_val_44275 === (7))){
var inst_44270 = (state_44274[(2)]);
var state_44274__$1 = state_44274;
var statearr_44276_44297 = state_44274__$1;
(statearr_44276_44297[(2)] = inst_44270);

(statearr_44276_44297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44275 === (1))){
var state_44274__$1 = state_44274;
var statearr_44277_44298 = state_44274__$1;
(statearr_44277_44298[(2)] = null);

(statearr_44277_44298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44275 === (4))){
var inst_44256 = (state_44274[(7)]);
var inst_44256__$1 = (state_44274[(2)]);
var inst_44257 = (inst_44256__$1 == null);
var state_44274__$1 = (function (){var statearr_44278 = state_44274;
(statearr_44278[(7)] = inst_44256__$1);

return statearr_44278;
})();
if(cljs.core.truth_(inst_44257)){
var statearr_44279_44299 = state_44274__$1;
(statearr_44279_44299[(1)] = (5));

} else {
var statearr_44280_44300 = state_44274__$1;
(statearr_44280_44300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44275 === (6))){
var inst_44256 = (state_44274[(7)]);
var inst_44261 = p.call(null,inst_44256);
var state_44274__$1 = state_44274;
if(cljs.core.truth_(inst_44261)){
var statearr_44281_44301 = state_44274__$1;
(statearr_44281_44301[(1)] = (8));

} else {
var statearr_44282_44302 = state_44274__$1;
(statearr_44282_44302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44275 === (3))){
var inst_44272 = (state_44274[(2)]);
var state_44274__$1 = state_44274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44274__$1,inst_44272);
} else {
if((state_val_44275 === (2))){
var state_44274__$1 = state_44274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44274__$1,(4),ch);
} else {
if((state_val_44275 === (11))){
var inst_44264 = (state_44274[(2)]);
var state_44274__$1 = state_44274;
var statearr_44283_44303 = state_44274__$1;
(statearr_44283_44303[(2)] = inst_44264);

(statearr_44283_44303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44275 === (9))){
var state_44274__$1 = state_44274;
var statearr_44284_44304 = state_44274__$1;
(statearr_44284_44304[(2)] = null);

(statearr_44284_44304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44275 === (5))){
var inst_44259 = cljs.core.async.close_BANG_.call(null,out);
var state_44274__$1 = state_44274;
var statearr_44285_44305 = state_44274__$1;
(statearr_44285_44305[(2)] = inst_44259);

(statearr_44285_44305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44275 === (10))){
var inst_44267 = (state_44274[(2)]);
var state_44274__$1 = (function (){var statearr_44286 = state_44274;
(statearr_44286[(8)] = inst_44267);

return statearr_44286;
})();
var statearr_44287_44306 = state_44274__$1;
(statearr_44287_44306[(2)] = null);

(statearr_44287_44306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44275 === (8))){
var inst_44256 = (state_44274[(7)]);
var state_44274__$1 = state_44274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44274__$1,(11),out,inst_44256);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___44296,out))
;
return ((function (switch__35908__auto__,c__35970__auto___44296,out){
return (function() {
var cljs$core$async$state_machine__35909__auto__ = null;
var cljs$core$async$state_machine__35909__auto____0 = (function (){
var statearr_44291 = [null,null,null,null,null,null,null,null,null];
(statearr_44291[(0)] = cljs$core$async$state_machine__35909__auto__);

(statearr_44291[(1)] = (1));

return statearr_44291;
});
var cljs$core$async$state_machine__35909__auto____1 = (function (state_44274){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_44274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e44292){if((e44292 instanceof Object)){
var ex__35912__auto__ = e44292;
var statearr_44293_44307 = state_44274;
(statearr_44293_44307[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44308 = state_44274;
state_44274 = G__44308;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$state_machine__35909__auto__ = function(state_44274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35909__auto____1.call(this,state_44274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35909__auto____0;
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35909__auto____1;
return cljs$core$async$state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___44296,out))
})();
var state__35972__auto__ = (function (){var statearr_44294 = f__35971__auto__.call(null);
(statearr_44294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___44296);

return statearr_44294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___44296,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__44310 = arguments.length;
switch (G__44310) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto__){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto__){
return (function (state_44477){
var state_val_44478 = (state_44477[(1)]);
if((state_val_44478 === (7))){
var inst_44473 = (state_44477[(2)]);
var state_44477__$1 = state_44477;
var statearr_44479_44520 = state_44477__$1;
(statearr_44479_44520[(2)] = inst_44473);

(statearr_44479_44520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (20))){
var inst_44443 = (state_44477[(7)]);
var inst_44454 = (state_44477[(2)]);
var inst_44455 = cljs.core.next.call(null,inst_44443);
var inst_44429 = inst_44455;
var inst_44430 = null;
var inst_44431 = (0);
var inst_44432 = (0);
var state_44477__$1 = (function (){var statearr_44480 = state_44477;
(statearr_44480[(8)] = inst_44429);

(statearr_44480[(9)] = inst_44432);

(statearr_44480[(10)] = inst_44430);

(statearr_44480[(11)] = inst_44454);

(statearr_44480[(12)] = inst_44431);

return statearr_44480;
})();
var statearr_44481_44521 = state_44477__$1;
(statearr_44481_44521[(2)] = null);

(statearr_44481_44521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (1))){
var state_44477__$1 = state_44477;
var statearr_44482_44522 = state_44477__$1;
(statearr_44482_44522[(2)] = null);

(statearr_44482_44522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (4))){
var inst_44418 = (state_44477[(13)]);
var inst_44418__$1 = (state_44477[(2)]);
var inst_44419 = (inst_44418__$1 == null);
var state_44477__$1 = (function (){var statearr_44483 = state_44477;
(statearr_44483[(13)] = inst_44418__$1);

return statearr_44483;
})();
if(cljs.core.truth_(inst_44419)){
var statearr_44484_44523 = state_44477__$1;
(statearr_44484_44523[(1)] = (5));

} else {
var statearr_44485_44524 = state_44477__$1;
(statearr_44485_44524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (15))){
var state_44477__$1 = state_44477;
var statearr_44489_44525 = state_44477__$1;
(statearr_44489_44525[(2)] = null);

(statearr_44489_44525[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (21))){
var state_44477__$1 = state_44477;
var statearr_44490_44526 = state_44477__$1;
(statearr_44490_44526[(2)] = null);

(statearr_44490_44526[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (13))){
var inst_44429 = (state_44477[(8)]);
var inst_44432 = (state_44477[(9)]);
var inst_44430 = (state_44477[(10)]);
var inst_44431 = (state_44477[(12)]);
var inst_44439 = (state_44477[(2)]);
var inst_44440 = (inst_44432 + (1));
var tmp44486 = inst_44429;
var tmp44487 = inst_44430;
var tmp44488 = inst_44431;
var inst_44429__$1 = tmp44486;
var inst_44430__$1 = tmp44487;
var inst_44431__$1 = tmp44488;
var inst_44432__$1 = inst_44440;
var state_44477__$1 = (function (){var statearr_44491 = state_44477;
(statearr_44491[(8)] = inst_44429__$1);

(statearr_44491[(14)] = inst_44439);

(statearr_44491[(9)] = inst_44432__$1);

(statearr_44491[(10)] = inst_44430__$1);

(statearr_44491[(12)] = inst_44431__$1);

return statearr_44491;
})();
var statearr_44492_44527 = state_44477__$1;
(statearr_44492_44527[(2)] = null);

(statearr_44492_44527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (22))){
var state_44477__$1 = state_44477;
var statearr_44493_44528 = state_44477__$1;
(statearr_44493_44528[(2)] = null);

(statearr_44493_44528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (6))){
var inst_44418 = (state_44477[(13)]);
var inst_44427 = f.call(null,inst_44418);
var inst_44428 = cljs.core.seq.call(null,inst_44427);
var inst_44429 = inst_44428;
var inst_44430 = null;
var inst_44431 = (0);
var inst_44432 = (0);
var state_44477__$1 = (function (){var statearr_44494 = state_44477;
(statearr_44494[(8)] = inst_44429);

(statearr_44494[(9)] = inst_44432);

(statearr_44494[(10)] = inst_44430);

(statearr_44494[(12)] = inst_44431);

return statearr_44494;
})();
var statearr_44495_44529 = state_44477__$1;
(statearr_44495_44529[(2)] = null);

(statearr_44495_44529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (17))){
var inst_44443 = (state_44477[(7)]);
var inst_44447 = cljs.core.chunk_first.call(null,inst_44443);
var inst_44448 = cljs.core.chunk_rest.call(null,inst_44443);
var inst_44449 = cljs.core.count.call(null,inst_44447);
var inst_44429 = inst_44448;
var inst_44430 = inst_44447;
var inst_44431 = inst_44449;
var inst_44432 = (0);
var state_44477__$1 = (function (){var statearr_44496 = state_44477;
(statearr_44496[(8)] = inst_44429);

(statearr_44496[(9)] = inst_44432);

(statearr_44496[(10)] = inst_44430);

(statearr_44496[(12)] = inst_44431);

return statearr_44496;
})();
var statearr_44497_44530 = state_44477__$1;
(statearr_44497_44530[(2)] = null);

(statearr_44497_44530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (3))){
var inst_44475 = (state_44477[(2)]);
var state_44477__$1 = state_44477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44477__$1,inst_44475);
} else {
if((state_val_44478 === (12))){
var inst_44463 = (state_44477[(2)]);
var state_44477__$1 = state_44477;
var statearr_44498_44531 = state_44477__$1;
(statearr_44498_44531[(2)] = inst_44463);

(statearr_44498_44531[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (2))){
var state_44477__$1 = state_44477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44477__$1,(4),in$);
} else {
if((state_val_44478 === (23))){
var inst_44471 = (state_44477[(2)]);
var state_44477__$1 = state_44477;
var statearr_44499_44532 = state_44477__$1;
(statearr_44499_44532[(2)] = inst_44471);

(statearr_44499_44532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (19))){
var inst_44458 = (state_44477[(2)]);
var state_44477__$1 = state_44477;
var statearr_44500_44533 = state_44477__$1;
(statearr_44500_44533[(2)] = inst_44458);

(statearr_44500_44533[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (11))){
var inst_44429 = (state_44477[(8)]);
var inst_44443 = (state_44477[(7)]);
var inst_44443__$1 = cljs.core.seq.call(null,inst_44429);
var state_44477__$1 = (function (){var statearr_44501 = state_44477;
(statearr_44501[(7)] = inst_44443__$1);

return statearr_44501;
})();
if(inst_44443__$1){
var statearr_44502_44534 = state_44477__$1;
(statearr_44502_44534[(1)] = (14));

} else {
var statearr_44503_44535 = state_44477__$1;
(statearr_44503_44535[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (9))){
var inst_44465 = (state_44477[(2)]);
var inst_44466 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_44477__$1 = (function (){var statearr_44504 = state_44477;
(statearr_44504[(15)] = inst_44465);

return statearr_44504;
})();
if(cljs.core.truth_(inst_44466)){
var statearr_44505_44536 = state_44477__$1;
(statearr_44505_44536[(1)] = (21));

} else {
var statearr_44506_44537 = state_44477__$1;
(statearr_44506_44537[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (5))){
var inst_44421 = cljs.core.async.close_BANG_.call(null,out);
var state_44477__$1 = state_44477;
var statearr_44507_44538 = state_44477__$1;
(statearr_44507_44538[(2)] = inst_44421);

(statearr_44507_44538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (14))){
var inst_44443 = (state_44477[(7)]);
var inst_44445 = cljs.core.chunked_seq_QMARK_.call(null,inst_44443);
var state_44477__$1 = state_44477;
if(inst_44445){
var statearr_44508_44539 = state_44477__$1;
(statearr_44508_44539[(1)] = (17));

} else {
var statearr_44509_44540 = state_44477__$1;
(statearr_44509_44540[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (16))){
var inst_44461 = (state_44477[(2)]);
var state_44477__$1 = state_44477;
var statearr_44510_44541 = state_44477__$1;
(statearr_44510_44541[(2)] = inst_44461);

(statearr_44510_44541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44478 === (10))){
var inst_44432 = (state_44477[(9)]);
var inst_44430 = (state_44477[(10)]);
var inst_44437 = cljs.core._nth.call(null,inst_44430,inst_44432);
var state_44477__$1 = state_44477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44477__$1,(13),out,inst_44437);
} else {
if((state_val_44478 === (18))){
var inst_44443 = (state_44477[(7)]);
var inst_44452 = cljs.core.first.call(null,inst_44443);
var state_44477__$1 = state_44477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44477__$1,(20),out,inst_44452);
} else {
if((state_val_44478 === (8))){
var inst_44432 = (state_44477[(9)]);
var inst_44431 = (state_44477[(12)]);
var inst_44434 = (inst_44432 < inst_44431);
var inst_44435 = inst_44434;
var state_44477__$1 = state_44477;
if(cljs.core.truth_(inst_44435)){
var statearr_44511_44542 = state_44477__$1;
(statearr_44511_44542[(1)] = (10));

} else {
var statearr_44512_44543 = state_44477__$1;
(statearr_44512_44543[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto__))
;
return ((function (switch__35908__auto__,c__35970__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35909__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35909__auto____0 = (function (){
var statearr_44516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44516[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35909__auto__);

(statearr_44516[(1)] = (1));

return statearr_44516;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35909__auto____1 = (function (state_44477){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_44477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e44517){if((e44517 instanceof Object)){
var ex__35912__auto__ = e44517;
var statearr_44518_44544 = state_44477;
(statearr_44518_44544[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44545 = state_44477;
state_44477 = G__44545;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35909__auto__ = function(state_44477){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35909__auto____1.call(this,state_44477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35909__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35909__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto__))
})();
var state__35972__auto__ = (function (){var statearr_44519 = f__35971__auto__.call(null);
(statearr_44519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto__);

return statearr_44519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto__))
);

return c__35970__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__44547 = arguments.length;
switch (G__44547) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__44550 = arguments.length;
switch (G__44550) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__44553 = arguments.length;
switch (G__44553) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35970__auto___44603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___44603,out){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___44603,out){
return (function (state_44577){
var state_val_44578 = (state_44577[(1)]);
if((state_val_44578 === (7))){
var inst_44572 = (state_44577[(2)]);
var state_44577__$1 = state_44577;
var statearr_44579_44604 = state_44577__$1;
(statearr_44579_44604[(2)] = inst_44572);

(statearr_44579_44604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (1))){
var inst_44554 = null;
var state_44577__$1 = (function (){var statearr_44580 = state_44577;
(statearr_44580[(7)] = inst_44554);

return statearr_44580;
})();
var statearr_44581_44605 = state_44577__$1;
(statearr_44581_44605[(2)] = null);

(statearr_44581_44605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (4))){
var inst_44557 = (state_44577[(8)]);
var inst_44557__$1 = (state_44577[(2)]);
var inst_44558 = (inst_44557__$1 == null);
var inst_44559 = cljs.core.not.call(null,inst_44558);
var state_44577__$1 = (function (){var statearr_44582 = state_44577;
(statearr_44582[(8)] = inst_44557__$1);

return statearr_44582;
})();
if(inst_44559){
var statearr_44583_44606 = state_44577__$1;
(statearr_44583_44606[(1)] = (5));

} else {
var statearr_44584_44607 = state_44577__$1;
(statearr_44584_44607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (6))){
var state_44577__$1 = state_44577;
var statearr_44585_44608 = state_44577__$1;
(statearr_44585_44608[(2)] = null);

(statearr_44585_44608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (3))){
var inst_44574 = (state_44577[(2)]);
var inst_44575 = cljs.core.async.close_BANG_.call(null,out);
var state_44577__$1 = (function (){var statearr_44586 = state_44577;
(statearr_44586[(9)] = inst_44574);

return statearr_44586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44577__$1,inst_44575);
} else {
if((state_val_44578 === (2))){
var state_44577__$1 = state_44577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44577__$1,(4),ch);
} else {
if((state_val_44578 === (11))){
var inst_44557 = (state_44577[(8)]);
var inst_44566 = (state_44577[(2)]);
var inst_44554 = inst_44557;
var state_44577__$1 = (function (){var statearr_44587 = state_44577;
(statearr_44587[(7)] = inst_44554);

(statearr_44587[(10)] = inst_44566);

return statearr_44587;
})();
var statearr_44588_44609 = state_44577__$1;
(statearr_44588_44609[(2)] = null);

(statearr_44588_44609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (9))){
var inst_44557 = (state_44577[(8)]);
var state_44577__$1 = state_44577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44577__$1,(11),out,inst_44557);
} else {
if((state_val_44578 === (5))){
var inst_44554 = (state_44577[(7)]);
var inst_44557 = (state_44577[(8)]);
var inst_44561 = cljs.core._EQ_.call(null,inst_44557,inst_44554);
var state_44577__$1 = state_44577;
if(inst_44561){
var statearr_44590_44610 = state_44577__$1;
(statearr_44590_44610[(1)] = (8));

} else {
var statearr_44591_44611 = state_44577__$1;
(statearr_44591_44611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (10))){
var inst_44569 = (state_44577[(2)]);
var state_44577__$1 = state_44577;
var statearr_44592_44612 = state_44577__$1;
(statearr_44592_44612[(2)] = inst_44569);

(statearr_44592_44612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44578 === (8))){
var inst_44554 = (state_44577[(7)]);
var tmp44589 = inst_44554;
var inst_44554__$1 = tmp44589;
var state_44577__$1 = (function (){var statearr_44593 = state_44577;
(statearr_44593[(7)] = inst_44554__$1);

return statearr_44593;
})();
var statearr_44594_44613 = state_44577__$1;
(statearr_44594_44613[(2)] = null);

(statearr_44594_44613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___44603,out))
;
return ((function (switch__35908__auto__,c__35970__auto___44603,out){
return (function() {
var cljs$core$async$state_machine__35909__auto__ = null;
var cljs$core$async$state_machine__35909__auto____0 = (function (){
var statearr_44598 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44598[(0)] = cljs$core$async$state_machine__35909__auto__);

(statearr_44598[(1)] = (1));

return statearr_44598;
});
var cljs$core$async$state_machine__35909__auto____1 = (function (state_44577){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_44577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e44599){if((e44599 instanceof Object)){
var ex__35912__auto__ = e44599;
var statearr_44600_44614 = state_44577;
(statearr_44600_44614[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44615 = state_44577;
state_44577 = G__44615;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$state_machine__35909__auto__ = function(state_44577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35909__auto____1.call(this,state_44577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35909__auto____0;
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35909__auto____1;
return cljs$core$async$state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___44603,out))
})();
var state__35972__auto__ = (function (){var statearr_44601 = f__35971__auto__.call(null);
(statearr_44601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___44603);

return statearr_44601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___44603,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__44617 = arguments.length;
switch (G__44617) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35970__auto___44686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___44686,out){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___44686,out){
return (function (state_44655){
var state_val_44656 = (state_44655[(1)]);
if((state_val_44656 === (7))){
var inst_44651 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44657_44687 = state_44655__$1;
(statearr_44657_44687[(2)] = inst_44651);

(statearr_44657_44687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (1))){
var inst_44618 = (new Array(n));
var inst_44619 = inst_44618;
var inst_44620 = (0);
var state_44655__$1 = (function (){var statearr_44658 = state_44655;
(statearr_44658[(7)] = inst_44619);

(statearr_44658[(8)] = inst_44620);

return statearr_44658;
})();
var statearr_44659_44688 = state_44655__$1;
(statearr_44659_44688[(2)] = null);

(statearr_44659_44688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (4))){
var inst_44623 = (state_44655[(9)]);
var inst_44623__$1 = (state_44655[(2)]);
var inst_44624 = (inst_44623__$1 == null);
var inst_44625 = cljs.core.not.call(null,inst_44624);
var state_44655__$1 = (function (){var statearr_44660 = state_44655;
(statearr_44660[(9)] = inst_44623__$1);

return statearr_44660;
})();
if(inst_44625){
var statearr_44661_44689 = state_44655__$1;
(statearr_44661_44689[(1)] = (5));

} else {
var statearr_44662_44690 = state_44655__$1;
(statearr_44662_44690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (15))){
var inst_44645 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44663_44691 = state_44655__$1;
(statearr_44663_44691[(2)] = inst_44645);

(statearr_44663_44691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (13))){
var state_44655__$1 = state_44655;
var statearr_44664_44692 = state_44655__$1;
(statearr_44664_44692[(2)] = null);

(statearr_44664_44692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (6))){
var inst_44620 = (state_44655[(8)]);
var inst_44641 = (inst_44620 > (0));
var state_44655__$1 = state_44655;
if(cljs.core.truth_(inst_44641)){
var statearr_44665_44693 = state_44655__$1;
(statearr_44665_44693[(1)] = (12));

} else {
var statearr_44666_44694 = state_44655__$1;
(statearr_44666_44694[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (3))){
var inst_44653 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44655__$1,inst_44653);
} else {
if((state_val_44656 === (12))){
var inst_44619 = (state_44655[(7)]);
var inst_44643 = cljs.core.vec.call(null,inst_44619);
var state_44655__$1 = state_44655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44655__$1,(15),out,inst_44643);
} else {
if((state_val_44656 === (2))){
var state_44655__$1 = state_44655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44655__$1,(4),ch);
} else {
if((state_val_44656 === (11))){
var inst_44635 = (state_44655[(2)]);
var inst_44636 = (new Array(n));
var inst_44619 = inst_44636;
var inst_44620 = (0);
var state_44655__$1 = (function (){var statearr_44667 = state_44655;
(statearr_44667[(7)] = inst_44619);

(statearr_44667[(8)] = inst_44620);

(statearr_44667[(10)] = inst_44635);

return statearr_44667;
})();
var statearr_44668_44695 = state_44655__$1;
(statearr_44668_44695[(2)] = null);

(statearr_44668_44695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (9))){
var inst_44619 = (state_44655[(7)]);
var inst_44633 = cljs.core.vec.call(null,inst_44619);
var state_44655__$1 = state_44655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44655__$1,(11),out,inst_44633);
} else {
if((state_val_44656 === (5))){
var inst_44619 = (state_44655[(7)]);
var inst_44620 = (state_44655[(8)]);
var inst_44628 = (state_44655[(11)]);
var inst_44623 = (state_44655[(9)]);
var inst_44627 = (inst_44619[inst_44620] = inst_44623);
var inst_44628__$1 = (inst_44620 + (1));
var inst_44629 = (inst_44628__$1 < n);
var state_44655__$1 = (function (){var statearr_44669 = state_44655;
(statearr_44669[(12)] = inst_44627);

(statearr_44669[(11)] = inst_44628__$1);

return statearr_44669;
})();
if(cljs.core.truth_(inst_44629)){
var statearr_44670_44696 = state_44655__$1;
(statearr_44670_44696[(1)] = (8));

} else {
var statearr_44671_44697 = state_44655__$1;
(statearr_44671_44697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (14))){
var inst_44648 = (state_44655[(2)]);
var inst_44649 = cljs.core.async.close_BANG_.call(null,out);
var state_44655__$1 = (function (){var statearr_44673 = state_44655;
(statearr_44673[(13)] = inst_44648);

return statearr_44673;
})();
var statearr_44674_44698 = state_44655__$1;
(statearr_44674_44698[(2)] = inst_44649);

(statearr_44674_44698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (10))){
var inst_44639 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44675_44699 = state_44655__$1;
(statearr_44675_44699[(2)] = inst_44639);

(statearr_44675_44699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (8))){
var inst_44619 = (state_44655[(7)]);
var inst_44628 = (state_44655[(11)]);
var tmp44672 = inst_44619;
var inst_44619__$1 = tmp44672;
var inst_44620 = inst_44628;
var state_44655__$1 = (function (){var statearr_44676 = state_44655;
(statearr_44676[(7)] = inst_44619__$1);

(statearr_44676[(8)] = inst_44620);

return statearr_44676;
})();
var statearr_44677_44700 = state_44655__$1;
(statearr_44677_44700[(2)] = null);

(statearr_44677_44700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___44686,out))
;
return ((function (switch__35908__auto__,c__35970__auto___44686,out){
return (function() {
var cljs$core$async$state_machine__35909__auto__ = null;
var cljs$core$async$state_machine__35909__auto____0 = (function (){
var statearr_44681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44681[(0)] = cljs$core$async$state_machine__35909__auto__);

(statearr_44681[(1)] = (1));

return statearr_44681;
});
var cljs$core$async$state_machine__35909__auto____1 = (function (state_44655){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_44655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e44682){if((e44682 instanceof Object)){
var ex__35912__auto__ = e44682;
var statearr_44683_44701 = state_44655;
(statearr_44683_44701[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44702 = state_44655;
state_44655 = G__44702;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$state_machine__35909__auto__ = function(state_44655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35909__auto____1.call(this,state_44655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35909__auto____0;
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35909__auto____1;
return cljs$core$async$state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___44686,out))
})();
var state__35972__auto__ = (function (){var statearr_44684 = f__35971__auto__.call(null);
(statearr_44684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___44686);

return statearr_44684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___44686,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__44704 = arguments.length;
switch (G__44704) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35970__auto___44777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___44777,out){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___44777,out){
return (function (state_44746){
var state_val_44747 = (state_44746[(1)]);
if((state_val_44747 === (7))){
var inst_44742 = (state_44746[(2)]);
var state_44746__$1 = state_44746;
var statearr_44748_44778 = state_44746__$1;
(statearr_44748_44778[(2)] = inst_44742);

(statearr_44748_44778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (1))){
var inst_44705 = [];
var inst_44706 = inst_44705;
var inst_44707 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44746__$1 = (function (){var statearr_44749 = state_44746;
(statearr_44749[(7)] = inst_44706);

(statearr_44749[(8)] = inst_44707);

return statearr_44749;
})();
var statearr_44750_44779 = state_44746__$1;
(statearr_44750_44779[(2)] = null);

(statearr_44750_44779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (4))){
var inst_44710 = (state_44746[(9)]);
var inst_44710__$1 = (state_44746[(2)]);
var inst_44711 = (inst_44710__$1 == null);
var inst_44712 = cljs.core.not.call(null,inst_44711);
var state_44746__$1 = (function (){var statearr_44751 = state_44746;
(statearr_44751[(9)] = inst_44710__$1);

return statearr_44751;
})();
if(inst_44712){
var statearr_44752_44780 = state_44746__$1;
(statearr_44752_44780[(1)] = (5));

} else {
var statearr_44753_44781 = state_44746__$1;
(statearr_44753_44781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (15))){
var inst_44736 = (state_44746[(2)]);
var state_44746__$1 = state_44746;
var statearr_44754_44782 = state_44746__$1;
(statearr_44754_44782[(2)] = inst_44736);

(statearr_44754_44782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (13))){
var state_44746__$1 = state_44746;
var statearr_44755_44783 = state_44746__$1;
(statearr_44755_44783[(2)] = null);

(statearr_44755_44783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (6))){
var inst_44706 = (state_44746[(7)]);
var inst_44731 = inst_44706.length;
var inst_44732 = (inst_44731 > (0));
var state_44746__$1 = state_44746;
if(cljs.core.truth_(inst_44732)){
var statearr_44756_44784 = state_44746__$1;
(statearr_44756_44784[(1)] = (12));

} else {
var statearr_44757_44785 = state_44746__$1;
(statearr_44757_44785[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (3))){
var inst_44744 = (state_44746[(2)]);
var state_44746__$1 = state_44746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44746__$1,inst_44744);
} else {
if((state_val_44747 === (12))){
var inst_44706 = (state_44746[(7)]);
var inst_44734 = cljs.core.vec.call(null,inst_44706);
var state_44746__$1 = state_44746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44746__$1,(15),out,inst_44734);
} else {
if((state_val_44747 === (2))){
var state_44746__$1 = state_44746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44746__$1,(4),ch);
} else {
if((state_val_44747 === (11))){
var inst_44714 = (state_44746[(10)]);
var inst_44710 = (state_44746[(9)]);
var inst_44724 = (state_44746[(2)]);
var inst_44725 = [];
var inst_44726 = inst_44725.push(inst_44710);
var inst_44706 = inst_44725;
var inst_44707 = inst_44714;
var state_44746__$1 = (function (){var statearr_44758 = state_44746;
(statearr_44758[(11)] = inst_44726);

(statearr_44758[(7)] = inst_44706);

(statearr_44758[(8)] = inst_44707);

(statearr_44758[(12)] = inst_44724);

return statearr_44758;
})();
var statearr_44759_44786 = state_44746__$1;
(statearr_44759_44786[(2)] = null);

(statearr_44759_44786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (9))){
var inst_44706 = (state_44746[(7)]);
var inst_44722 = cljs.core.vec.call(null,inst_44706);
var state_44746__$1 = state_44746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44746__$1,(11),out,inst_44722);
} else {
if((state_val_44747 === (5))){
var inst_44714 = (state_44746[(10)]);
var inst_44707 = (state_44746[(8)]);
var inst_44710 = (state_44746[(9)]);
var inst_44714__$1 = f.call(null,inst_44710);
var inst_44715 = cljs.core._EQ_.call(null,inst_44714__$1,inst_44707);
var inst_44716 = cljs.core.keyword_identical_QMARK_.call(null,inst_44707,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44717 = (inst_44715) || (inst_44716);
var state_44746__$1 = (function (){var statearr_44760 = state_44746;
(statearr_44760[(10)] = inst_44714__$1);

return statearr_44760;
})();
if(cljs.core.truth_(inst_44717)){
var statearr_44761_44787 = state_44746__$1;
(statearr_44761_44787[(1)] = (8));

} else {
var statearr_44762_44788 = state_44746__$1;
(statearr_44762_44788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (14))){
var inst_44739 = (state_44746[(2)]);
var inst_44740 = cljs.core.async.close_BANG_.call(null,out);
var state_44746__$1 = (function (){var statearr_44764 = state_44746;
(statearr_44764[(13)] = inst_44739);

return statearr_44764;
})();
var statearr_44765_44789 = state_44746__$1;
(statearr_44765_44789[(2)] = inst_44740);

(statearr_44765_44789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (10))){
var inst_44729 = (state_44746[(2)]);
var state_44746__$1 = state_44746;
var statearr_44766_44790 = state_44746__$1;
(statearr_44766_44790[(2)] = inst_44729);

(statearr_44766_44790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (8))){
var inst_44706 = (state_44746[(7)]);
var inst_44714 = (state_44746[(10)]);
var inst_44710 = (state_44746[(9)]);
var inst_44719 = inst_44706.push(inst_44710);
var tmp44763 = inst_44706;
var inst_44706__$1 = tmp44763;
var inst_44707 = inst_44714;
var state_44746__$1 = (function (){var statearr_44767 = state_44746;
(statearr_44767[(14)] = inst_44719);

(statearr_44767[(7)] = inst_44706__$1);

(statearr_44767[(8)] = inst_44707);

return statearr_44767;
})();
var statearr_44768_44791 = state_44746__$1;
(statearr_44768_44791[(2)] = null);

(statearr_44768_44791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35970__auto___44777,out))
;
return ((function (switch__35908__auto__,c__35970__auto___44777,out){
return (function() {
var cljs$core$async$state_machine__35909__auto__ = null;
var cljs$core$async$state_machine__35909__auto____0 = (function (){
var statearr_44772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44772[(0)] = cljs$core$async$state_machine__35909__auto__);

(statearr_44772[(1)] = (1));

return statearr_44772;
});
var cljs$core$async$state_machine__35909__auto____1 = (function (state_44746){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_44746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e44773){if((e44773 instanceof Object)){
var ex__35912__auto__ = e44773;
var statearr_44774_44792 = state_44746;
(statearr_44774_44792[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44793 = state_44746;
state_44746 = G__44793;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
cljs$core$async$state_machine__35909__auto__ = function(state_44746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35909__auto____1.call(this,state_44746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35909__auto____0;
cljs$core$async$state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35909__auto____1;
return cljs$core$async$state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___44777,out))
})();
var state__35972__auto__ = (function (){var statearr_44775 = f__35971__auto__.call(null);
(statearr_44775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___44777);

return statearr_44775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___44777,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map