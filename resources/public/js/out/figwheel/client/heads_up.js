// Compiled by ClojureScript 0.0-3269 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__33053__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__33053__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__41287_41295 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__41288_41296 = null;
var count__41289_41297 = (0);
var i__41290_41298 = (0);
while(true){
if((i__41290_41298 < count__41289_41297)){
var k_41299 = cljs.core._nth.call(null,chunk__41288_41296,i__41290_41298);
e.setAttribute(cljs.core.name.call(null,k_41299),cljs.core.get.call(null,attrs,k_41299));

var G__41300 = seq__41287_41295;
var G__41301 = chunk__41288_41296;
var G__41302 = count__41289_41297;
var G__41303 = (i__41290_41298 + (1));
seq__41287_41295 = G__41300;
chunk__41288_41296 = G__41301;
count__41289_41297 = G__41302;
i__41290_41298 = G__41303;
continue;
} else {
var temp__4423__auto___41304 = cljs.core.seq.call(null,seq__41287_41295);
if(temp__4423__auto___41304){
var seq__41287_41305__$1 = temp__4423__auto___41304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41287_41305__$1)){
var c__32798__auto___41306 = cljs.core.chunk_first.call(null,seq__41287_41305__$1);
var G__41307 = cljs.core.chunk_rest.call(null,seq__41287_41305__$1);
var G__41308 = c__32798__auto___41306;
var G__41309 = cljs.core.count.call(null,c__32798__auto___41306);
var G__41310 = (0);
seq__41287_41295 = G__41307;
chunk__41288_41296 = G__41308;
count__41289_41297 = G__41309;
i__41290_41298 = G__41310;
continue;
} else {
var k_41311 = cljs.core.first.call(null,seq__41287_41305__$1);
e.setAttribute(cljs.core.name.call(null,k_41311),cljs.core.get.call(null,attrs,k_41311));

var G__41312 = cljs.core.next.call(null,seq__41287_41305__$1);
var G__41313 = null;
var G__41314 = (0);
var G__41315 = (0);
seq__41287_41295 = G__41312;
chunk__41288_41296 = G__41313;
count__41289_41297 = G__41314;
i__41290_41298 = G__41315;
continue;
}
} else {
}
}
break;
}

var seq__41291_41316 = cljs.core.seq.call(null,children);
var chunk__41292_41317 = null;
var count__41293_41318 = (0);
var i__41294_41319 = (0);
while(true){
if((i__41294_41319 < count__41293_41318)){
var ch_41320 = cljs.core._nth.call(null,chunk__41292_41317,i__41294_41319);
e.appendChild(ch_41320);

var G__41321 = seq__41291_41316;
var G__41322 = chunk__41292_41317;
var G__41323 = count__41293_41318;
var G__41324 = (i__41294_41319 + (1));
seq__41291_41316 = G__41321;
chunk__41292_41317 = G__41322;
count__41293_41318 = G__41323;
i__41294_41319 = G__41324;
continue;
} else {
var temp__4423__auto___41325 = cljs.core.seq.call(null,seq__41291_41316);
if(temp__4423__auto___41325){
var seq__41291_41326__$1 = temp__4423__auto___41325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41291_41326__$1)){
var c__32798__auto___41327 = cljs.core.chunk_first.call(null,seq__41291_41326__$1);
var G__41328 = cljs.core.chunk_rest.call(null,seq__41291_41326__$1);
var G__41329 = c__32798__auto___41327;
var G__41330 = cljs.core.count.call(null,c__32798__auto___41327);
var G__41331 = (0);
seq__41291_41316 = G__41328;
chunk__41292_41317 = G__41329;
count__41293_41318 = G__41330;
i__41294_41319 = G__41331;
continue;
} else {
var ch_41332 = cljs.core.first.call(null,seq__41291_41326__$1);
e.appendChild(ch_41332);

var G__41333 = cljs.core.next.call(null,seq__41291_41326__$1);
var G__41334 = null;
var G__41335 = (0);
var G__41336 = (0);
seq__41291_41316 = G__41333;
chunk__41292_41317 = G__41334;
count__41293_41318 = G__41335;
i__41294_41319 = G__41336;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq41284){
var G__41285 = cljs.core.first.call(null,seq41284);
var seq41284__$1 = cljs.core.next.call(null,seq41284);
var G__41286 = cljs.core.first.call(null,seq41284__$1);
var seq41284__$2 = cljs.core.next.call(null,seq41284__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__41285,G__41286,seq41284__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__32908__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__32909__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__32910__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__32911__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__32912__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__32908__auto__,prefer_table__32909__auto__,method_cache__32910__auto__,cached_hierarchy__32911__auto__,hierarchy__32912__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__32908__auto__,prefer_table__32909__auto__,method_cache__32910__auto__,cached_hierarchy__32911__auto__,hierarchy__32912__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__32912__auto__,method_table__32908__auto__,prefer_table__32909__auto__,method_cache__32910__auto__,cached_hierarchy__32911__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_41337 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_41337.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_41337.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_41337.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_41337);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__41338,st_map){
var map__41342 = p__41338;
var map__41342__$1 = ((cljs.core.seq_QMARK_.call(null,map__41342))?cljs.core.apply.call(null,cljs.core.hash_map,map__41342):map__41342);
var container_el = cljs.core.get.call(null,map__41342__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__41342,map__41342__$1,container_el){
return (function (p__41343){
var vec__41344 = p__41343;
var k = cljs.core.nth.call(null,vec__41344,(0),null);
var v = cljs.core.nth.call(null,vec__41344,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__41342,map__41342__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__41345,dom_str){
var map__41347 = p__41345;
var map__41347__$1 = ((cljs.core.seq_QMARK_.call(null,map__41347))?cljs.core.apply.call(null,cljs.core.hash_map,map__41347):map__41347);
var c = map__41347__$1;
var content_area_el = cljs.core.get.call(null,map__41347__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__41348){
var map__41350 = p__41348;
var map__41350__$1 = ((cljs.core.seq_QMARK_.call(null,map__41350))?cljs.core.apply.call(null,cljs.core.hash_map,map__41350):map__41350);
var content_area_el = cljs.core.get.call(null,map__41350__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__35970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto__){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto__){
return (function (state_41392){
var state_val_41393 = (state_41392[(1)]);
if((state_val_41393 === (1))){
var inst_41377 = (state_41392[(7)]);
var inst_41377__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41378 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41379 = ["10px","10px","100%","68px","1.0"];
var inst_41380 = cljs.core.PersistentHashMap.fromArrays(inst_41378,inst_41379);
var inst_41381 = cljs.core.merge.call(null,inst_41380,style);
var inst_41382 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41377__$1,inst_41381);
var inst_41383 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41377__$1,msg);
var inst_41384 = cljs.core.async.timeout.call(null,(300));
var state_41392__$1 = (function (){var statearr_41394 = state_41392;
(statearr_41394[(8)] = inst_41382);

(statearr_41394[(9)] = inst_41383);

(statearr_41394[(7)] = inst_41377__$1);

return statearr_41394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41392__$1,(2),inst_41384);
} else {
if((state_val_41393 === (2))){
var inst_41377 = (state_41392[(7)]);
var inst_41386 = (state_41392[(2)]);
var inst_41387 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_41388 = ["auto"];
var inst_41389 = cljs.core.PersistentHashMap.fromArrays(inst_41387,inst_41388);
var inst_41390 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41377,inst_41389);
var state_41392__$1 = (function (){var statearr_41395 = state_41392;
(statearr_41395[(10)] = inst_41386);

return statearr_41395;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41392__$1,inst_41390);
} else {
return null;
}
}
});})(c__35970__auto__))
;
return ((function (switch__35908__auto__,c__35970__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__35909__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__35909__auto____0 = (function (){
var statearr_41399 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41399[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__35909__auto__);

(statearr_41399[(1)] = (1));

return statearr_41399;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__35909__auto____1 = (function (state_41392){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_41392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e41400){if((e41400 instanceof Object)){
var ex__35912__auto__ = e41400;
var statearr_41401_41403 = state_41392;
(statearr_41401_41403[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41404 = state_41392;
state_41392 = G__41404;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__35909__auto__ = function(state_41392){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__35909__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__35909__auto____1.call(this,state_41392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__35909__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__35909__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto__))
})();
var state__35972__auto__ = (function (){var statearr_41402 = f__35971__auto__.call(null);
(statearr_41402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto__);

return statearr_41402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto__))
);

return c__35970__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__41406 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__41406,(0),null);
var ln = cljs.core.nth.call(null,vec__41406,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__41409 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__41409,(0),null);
var file_line = cljs.core.nth.call(null,vec__41409,(1),null);
var file_column = cljs.core.nth.call(null,vec__41409,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__41409,file_name,file_line,file_column){
return (function (p1__41407_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__41407_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__41409,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__32013__auto__ = file_line;
if(cljs.core.truth_(or__32013__auto__)){
return or__32013__auto__;
} else {
var and__32001__auto__ = cause;
if(cljs.core.truth_(and__32001__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__32001__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__41411 = figwheel.client.heads_up.ensure_container.call(null);
var map__41411__$1 = ((cljs.core.seq_QMARK_.call(null,map__41411))?cljs.core.apply.call(null,cljs.core.hash_map,map__41411):map__41411);
var content_area_el = cljs.core.get.call(null,map__41411__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__35970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto__){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto__){
return (function (state_41458){
var state_val_41459 = (state_41458[(1)]);
if((state_val_41459 === (1))){
var inst_41441 = (state_41458[(7)]);
var inst_41441__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41442 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41443 = ["0.0"];
var inst_41444 = cljs.core.PersistentHashMap.fromArrays(inst_41442,inst_41443);
var inst_41445 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41441__$1,inst_41444);
var inst_41446 = cljs.core.async.timeout.call(null,(300));
var state_41458__$1 = (function (){var statearr_41460 = state_41458;
(statearr_41460[(8)] = inst_41445);

(statearr_41460[(7)] = inst_41441__$1);

return statearr_41460;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41458__$1,(2),inst_41446);
} else {
if((state_val_41459 === (2))){
var inst_41441 = (state_41458[(7)]);
var inst_41448 = (state_41458[(2)]);
var inst_41449 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_41450 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_41451 = cljs.core.PersistentHashMap.fromArrays(inst_41449,inst_41450);
var inst_41452 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41441,inst_41451);
var inst_41453 = cljs.core.async.timeout.call(null,(200));
var state_41458__$1 = (function (){var statearr_41461 = state_41458;
(statearr_41461[(9)] = inst_41448);

(statearr_41461[(10)] = inst_41452);

return statearr_41461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41458__$1,(3),inst_41453);
} else {
if((state_val_41459 === (3))){
var inst_41441 = (state_41458[(7)]);
var inst_41455 = (state_41458[(2)]);
var inst_41456 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41441,"");
var state_41458__$1 = (function (){var statearr_41462 = state_41458;
(statearr_41462[(11)] = inst_41455);

return statearr_41462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41458__$1,inst_41456);
} else {
return null;
}
}
}
});})(c__35970__auto__))
;
return ((function (switch__35908__auto__,c__35970__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__35909__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__35909__auto____0 = (function (){
var statearr_41466 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41466[(0)] = figwheel$client$heads_up$clear_$_state_machine__35909__auto__);

(statearr_41466[(1)] = (1));

return statearr_41466;
});
var figwheel$client$heads_up$clear_$_state_machine__35909__auto____1 = (function (state_41458){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_41458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e41467){if((e41467 instanceof Object)){
var ex__35912__auto__ = e41467;
var statearr_41468_41470 = state_41458;
(statearr_41468_41470[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41471 = state_41458;
state_41458 = G__41471;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__35909__auto__ = function(state_41458){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__35909__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__35909__auto____1.call(this,state_41458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__35909__auto____0;
figwheel$client$heads_up$clear_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__35909__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto__))
})();
var state__35972__auto__ = (function (){var statearr_41469 = f__35971__auto__.call(null);
(statearr_41469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto__);

return statearr_41469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto__))
);

return c__35970__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__35970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto__){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto__){
return (function (state_41503){
var state_val_41504 = (state_41503[(1)]);
if((state_val_41504 === (1))){
var inst_41493 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_41503__$1 = state_41503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41503__$1,(2),inst_41493);
} else {
if((state_val_41504 === (2))){
var inst_41495 = (state_41503[(2)]);
var inst_41496 = cljs.core.async.timeout.call(null,(400));
var state_41503__$1 = (function (){var statearr_41505 = state_41503;
(statearr_41505[(7)] = inst_41495);

return statearr_41505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41503__$1,(3),inst_41496);
} else {
if((state_val_41504 === (3))){
var inst_41498 = (state_41503[(2)]);
var inst_41499 = figwheel.client.heads_up.clear.call(null);
var state_41503__$1 = (function (){var statearr_41506 = state_41503;
(statearr_41506[(8)] = inst_41498);

return statearr_41506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41503__$1,(4),inst_41499);
} else {
if((state_val_41504 === (4))){
var inst_41501 = (state_41503[(2)]);
var state_41503__$1 = state_41503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41503__$1,inst_41501);
} else {
return null;
}
}
}
}
});})(c__35970__auto__))
;
return ((function (switch__35908__auto__,c__35970__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__35909__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__35909__auto____0 = (function (){
var statearr_41510 = [null,null,null,null,null,null,null,null,null];
(statearr_41510[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__35909__auto__);

(statearr_41510[(1)] = (1));

return statearr_41510;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__35909__auto____1 = (function (state_41503){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_41503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e41511){if((e41511 instanceof Object)){
var ex__35912__auto__ = e41511;
var statearr_41512_41514 = state_41503;
(statearr_41512_41514[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41515 = state_41503;
state_41503 = G__41515;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__35909__auto__ = function(state_41503){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__35909__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__35909__auto____1.call(this,state_41503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__35909__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__35909__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto__))
})();
var state__35972__auto__ = (function (){var statearr_41513 = f__35971__auto__.call(null);
(statearr_41513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto__);

return statearr_41513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto__))
);

return c__35970__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map