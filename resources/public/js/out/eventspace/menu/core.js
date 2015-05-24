// Compiled by ClojureScript 0.0-3269 {}
goog.provide('eventspace.menu.core');
goog.require('cljs.core');
goog.require('re_frame.core');
eventspace.menu.core.new_space = (function eventspace$menu$core$new_space(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/add.svg"], null)], null);
});
eventspace.menu.core.header = (function eventspace$menu$core$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-menu-heading","a.pure-menu-heading",-1079374794),"eventspace"], null);
});
eventspace.menu.core.spaces_item = (function eventspace$menu$core$spaces_item(p__39755){
var map__39759 = p__39755;
var map__39759__$1 = ((cljs.core.seq_QMARK_.call(null,map__39759))?cljs.core.apply.call(null,cljs.core.hash_map,map__39759):map__39759);
var id = cljs.core.get.call(null,map__39759__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__39759__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_space = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null));
return ((function (selected_space,map__39759,map__39759__$1,id,title){
return (function (p__39760){
var map__39761 = p__39760;
var map__39761__$1 = ((cljs.core.seq_QMARK_.call(null,map__39761))?cljs.core.apply.call(null,cljs.core.hash_map,map__39761):map__39761);
var id__$1 = cljs.core.get.call(null,map__39761__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title__$1 = cljs.core.get.call(null,map__39761__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selected_space));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pure-menu-item","li.pure-menu-item",1104592210),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-menu-link","a.pure-menu-link",1231931163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,selected_id,id__$1))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_id,map__39761,map__39761__$1,id__$1,title__$1,selected_space,map__39759,map__39759__$1,id,title){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-space","select-space",-912501586),id__$1], null));
});})(selected_id,map__39761,map__39761__$1,id__$1,title__$1,selected_space,map__39759,map__39759__$1,id,title))
], null),title__$1], null)], null);
});
;})(selected_space,map__39759,map__39759__$1,id,title))
});
eventspace.menu.core.spaces_list = (function eventspace$menu$core$spaces_list(){
var spaces = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spaces-list","spaces-list",1902246415)], null));
return ((function (spaces){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.pure-menu-list","ul.pure-menu-list",1943879978),(function (){var iter__32856__auto__ = ((function (spaces){
return (function eventspace$menu$core$spaces_list_$_iter__39766(s__39767){
return (new cljs.core.LazySeq(null,((function (spaces){
return (function (){
var s__39767__$1 = s__39767;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__39767__$1);
if(temp__4423__auto__){
var s__39767__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39767__$2)){
var c__32854__auto__ = cljs.core.chunk_first.call(null,s__39767__$2);
var size__32855__auto__ = cljs.core.count.call(null,c__32854__auto__);
var b__39769 = cljs.core.chunk_buffer.call(null,size__32855__auto__);
if((function (){var i__39768 = (0);
while(true){
if((i__39768 < size__32855__auto__)){
var space = cljs.core._nth.call(null,c__32854__auto__,i__39768);
cljs.core.chunk_append.call(null,b__39769,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eventspace.menu.core.spaces_item,space], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(space)], null)));

var G__39770 = (i__39768 + (1));
i__39768 = G__39770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39769),eventspace$menu$core$spaces_list_$_iter__39766.call(null,cljs.core.chunk_rest.call(null,s__39767__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39769),null);
}
} else {
var space = cljs.core.first.call(null,s__39767__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eventspace.menu.core.spaces_item,space], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(space)], null)),eventspace$menu$core$spaces_list_$_iter__39766.call(null,cljs.core.rest.call(null,s__39767__$2)));
}
} else {
return null;
}
break;
}
});})(spaces))
,null,null));
});})(spaces))
;
return iter__32856__auto__.call(null,cljs.core.deref.call(null,spaces));
})()], null);
});
;})(spaces))
});
eventspace.menu.core.render_menu = (function eventspace$menu$core$render_menu(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-menu","div.pure-menu",-368246773),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eventspace.menu.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eventspace.menu.core.spaces_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eventspace.menu.core.new_space], null)], null);
});

//# sourceMappingURL=core.js.map