// Compiled by ClojureScript 0.0-3269 {}
goog.provide('eventspace.subscriptions');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"spaces-list","spaces-list",1902246415),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"selected-space","selected-space",613834726),(function (db,_){
var id = reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"selected-space","selected-space",613834726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
var spaces = new cljs.core.Keyword(null,"spaces","spaces",365984563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
return reagent.ratom.make_reaction.call(null,((function (id,spaces){
return (function (){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (id,spaces){
return (function (p1__39569_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__39569_SHARP_),cljs.core.deref.call(null,id));
});})(id,spaces))
,spaces));
});})(id,spaces))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"feed","feed",-1566486205),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));

//# sourceMappingURL=subscriptions.js.map