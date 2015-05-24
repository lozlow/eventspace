// Compiled by ClojureScript 0.0-3269 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41530_41542 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41531_41543 = null;
var count__41532_41544 = (0);
var i__41533_41545 = (0);
while(true){
if((i__41533_41545 < count__41532_41544)){
var f_41546 = cljs.core._nth.call(null,chunk__41531_41543,i__41533_41545);
cljs.core.println.call(null,"  ",f_41546);

var G__41547 = seq__41530_41542;
var G__41548 = chunk__41531_41543;
var G__41549 = count__41532_41544;
var G__41550 = (i__41533_41545 + (1));
seq__41530_41542 = G__41547;
chunk__41531_41543 = G__41548;
count__41532_41544 = G__41549;
i__41533_41545 = G__41550;
continue;
} else {
var temp__4423__auto___41551 = cljs.core.seq.call(null,seq__41530_41542);
if(temp__4423__auto___41551){
var seq__41530_41552__$1 = temp__4423__auto___41551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41530_41552__$1)){
var c__32798__auto___41553 = cljs.core.chunk_first.call(null,seq__41530_41552__$1);
var G__41554 = cljs.core.chunk_rest.call(null,seq__41530_41552__$1);
var G__41555 = c__32798__auto___41553;
var G__41556 = cljs.core.count.call(null,c__32798__auto___41553);
var G__41557 = (0);
seq__41530_41542 = G__41554;
chunk__41531_41543 = G__41555;
count__41532_41544 = G__41556;
i__41533_41545 = G__41557;
continue;
} else {
var f_41558 = cljs.core.first.call(null,seq__41530_41552__$1);
cljs.core.println.call(null,"  ",f_41558);

var G__41559 = cljs.core.next.call(null,seq__41530_41552__$1);
var G__41560 = null;
var G__41561 = (0);
var G__41562 = (0);
seq__41530_41542 = G__41559;
chunk__41531_41543 = G__41560;
count__41532_41544 = G__41561;
i__41533_41545 = G__41562;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41563 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__32013__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__32013__auto__)){
return or__32013__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41563);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41563)))?cljs.core.second.call(null,arglists_41563):arglists_41563));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41535 = null;
var count__41536 = (0);
var i__41537 = (0);
while(true){
if((i__41537 < count__41536)){
var vec__41538 = cljs.core._nth.call(null,chunk__41535,i__41537);
var name = cljs.core.nth.call(null,vec__41538,(0),null);
var map__41539 = cljs.core.nth.call(null,vec__41538,(1),null);
var map__41539__$1 = ((cljs.core.seq_QMARK_.call(null,map__41539))?cljs.core.apply.call(null,cljs.core.hash_map,map__41539):map__41539);
var doc = cljs.core.get.call(null,map__41539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41539__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41564 = seq__41534;
var G__41565 = chunk__41535;
var G__41566 = count__41536;
var G__41567 = (i__41537 + (1));
seq__41534 = G__41564;
chunk__41535 = G__41565;
count__41536 = G__41566;
i__41537 = G__41567;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__41534);
if(temp__4423__auto__){
var seq__41534__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41534__$1)){
var c__32798__auto__ = cljs.core.chunk_first.call(null,seq__41534__$1);
var G__41568 = cljs.core.chunk_rest.call(null,seq__41534__$1);
var G__41569 = c__32798__auto__;
var G__41570 = cljs.core.count.call(null,c__32798__auto__);
var G__41571 = (0);
seq__41534 = G__41568;
chunk__41535 = G__41569;
count__41536 = G__41570;
i__41537 = G__41571;
continue;
} else {
var vec__41540 = cljs.core.first.call(null,seq__41534__$1);
var name = cljs.core.nth.call(null,vec__41540,(0),null);
var map__41541 = cljs.core.nth.call(null,vec__41540,(1),null);
var map__41541__$1 = ((cljs.core.seq_QMARK_.call(null,map__41541))?cljs.core.apply.call(null,cljs.core.hash_map,map__41541):map__41541);
var doc = cljs.core.get.call(null,map__41541__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41541__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41572 = cljs.core.next.call(null,seq__41534__$1);
var G__41573 = null;
var G__41574 = (0);
var G__41575 = (0);
seq__41534 = G__41572;
chunk__41535 = G__41573;
count__41536 = G__41574;
i__41537 = G__41575;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map