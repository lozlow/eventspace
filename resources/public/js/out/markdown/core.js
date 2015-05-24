// Compiled by ClojureScript 0.0-3269 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__40461){
var map__40467 = p__40461;
var map__40467__$1 = ((cljs.core.seq_QMARK_.call(null,map__40467))?cljs.core.apply.call(null,cljs.core.hash_map,map__40467):map__40467);
var replacement_transformers = cljs.core.get.call(null,map__40467__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__40467__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__40467,map__40467__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_40468 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__40469 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_40468,map__40467,map__40467__$1,replacement_transformers,custom_transformers){
return (function (p__40470,transformer){
var vec__40471 = p__40470;
var text = cljs.core.nth.call(null,vec__40471,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__40471,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_40468,map__40467,map__40467__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__32013__auto__ = replacement_transformers;
if(cljs.core.truth_(or__32013__auto__)){
return or__32013__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__40469,(0),null);
var new_state = cljs.core.nth.call(null,vec__40469,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_40468;
}});
;})(map__40467,map__40467__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(){
var argseq__33053__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33053__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq40472){
var G__40473 = cljs.core.first.call(null,seq40472);
var seq40472__$1 = cljs.core.next.call(null,seq40472);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__40473,seq40472__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__40478_40482 = cljs.core.seq.call(null,lines);
var chunk__40479_40483 = null;
var count__40480_40484 = (0);
var i__40481_40485 = (0);
while(true){
if((i__40481_40485 < count__40480_40484)){
var line_40486 = cljs.core._nth.call(null,chunk__40479_40483,i__40481_40485);
markdown.transformers.parse_reference_link.call(null,line_40486,references);

var G__40487 = seq__40478_40482;
var G__40488 = chunk__40479_40483;
var G__40489 = count__40480_40484;
var G__40490 = (i__40481_40485 + (1));
seq__40478_40482 = G__40487;
chunk__40479_40483 = G__40488;
count__40480_40484 = G__40489;
i__40481_40485 = G__40490;
continue;
} else {
var temp__4423__auto___40491 = cljs.core.seq.call(null,seq__40478_40482);
if(temp__4423__auto___40491){
var seq__40478_40492__$1 = temp__4423__auto___40491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40478_40492__$1)){
var c__32798__auto___40493 = cljs.core.chunk_first.call(null,seq__40478_40492__$1);
var G__40494 = cljs.core.chunk_rest.call(null,seq__40478_40492__$1);
var G__40495 = c__32798__auto___40493;
var G__40496 = cljs.core.count.call(null,c__32798__auto___40493);
var G__40497 = (0);
seq__40478_40482 = G__40494;
chunk__40479_40483 = G__40495;
count__40480_40484 = G__40496;
i__40481_40485 = G__40497;
continue;
} else {
var line_40498 = cljs.core.first.call(null,seq__40478_40492__$1);
markdown.transformers.parse_reference_link.call(null,line_40498,references);

var G__40499 = cljs.core.next.call(null,seq__40478_40492__$1);
var G__40500 = null;
var G__40501 = (0);
var G__40502 = (0);
seq__40478_40482 = G__40499;
chunk__40479_40483 = G__40500;
count__40480_40484 = G__40501;
i__40481_40485 = G__40502;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md__GT_html = (function markdown$core$md__GT_html(){
var argseq__33053__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33053__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
var _STAR_substring_STAR_40505 = markdown.transformers._STAR_substring_STAR_;
var formatter40506 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_40505,formatter40506){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_40505,formatter40506))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__40508_40511 = lines;
var vec__40509_40512 = G__40508_40511;
var line_40513 = cljs.core.nth.call(null,vec__40509_40512,(0),null);
var more_40514 = cljs.core.nthnext.call(null,vec__40509_40512,(1));
var state_40515 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__40508_40516__$1 = G__40508_40511;
var state_40517__$1 = state_40515;
while(true){
var vec__40510_40518 = G__40508_40516__$1;
var line_40519__$1 = cljs.core.nth.call(null,vec__40510_40518,(0),null);
var more_40520__$1 = cljs.core.nthnext.call(null,vec__40510_40518,(1));
var state_40521__$2 = state_40517__$1;
var state_40522__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_40521__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_40521__$2),cljs.core.first.call(null,more_40520__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_40521__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_40521__$2);
if(cljs.core.truth_(cljs.core.first.call(null,more_40520__$1))){
var G__40523 = more_40520__$1;
var G__40524 = cljs.core.assoc.call(null,transformer.call(null,html,line_40519__$1,cljs.core.first.call(null,more_40520__$1),state_40522__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_40519__$1));
G__40508_40516__$1 = G__40523;
state_40517__$1 = G__40524;
continue;
} else {
transformer.call(null,html,line_40519__$1,"",cljs.core.assoc.call(null,state_40522__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter40506;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_40505;
}});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq40503){
var G__40504 = cljs.core.first.call(null,seq40503);
var seq40503__$1 = cljs.core.next.call(null,seq40503);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__40504,seq40503__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(){
var argseq__33053__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__33053__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq40525){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40525));
});

//# sourceMappingURL=core.js.map