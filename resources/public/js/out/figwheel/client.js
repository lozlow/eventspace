// Compiled by ClojureScript 0.0-3269 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40633__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__40633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40634__i = 0, G__40634__a = new Array(arguments.length -  0);
while (G__40634__i < G__40634__a.length) {G__40634__a[G__40634__i] = arguments[G__40634__i + 0]; ++G__40634__i;}
  args = new cljs.core.IndexedSeq(G__40634__a,0);
} 
return G__40633__delegate.call(this,args);};
G__40633.cljs$lang$maxFixedArity = 0;
G__40633.cljs$lang$applyTo = (function (arglist__40635){
var args = cljs.core.seq(arglist__40635);
return G__40633__delegate(args);
});
G__40633.cljs$core$IFn$_invoke$arity$variadic = G__40633__delegate;
return G__40633;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40636){
var map__40638 = p__40636;
var map__40638__$1 = ((cljs.core.seq_QMARK_.call(null,map__40638))?cljs.core.apply.call(null,cljs.core.hash_map,map__40638):map__40638);
var message = cljs.core.get.call(null,map__40638__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40638__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__32013__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__32013__auto__)){
return or__32013__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__32001__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__32001__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__32001__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35970__auto___40767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___40767,ch){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___40767,ch){
return (function (state_40741){
var state_val_40742 = (state_40741[(1)]);
if((state_val_40742 === (7))){
var inst_40737 = (state_40741[(2)]);
var state_40741__$1 = state_40741;
var statearr_40743_40768 = state_40741__$1;
(statearr_40743_40768[(2)] = inst_40737);

(statearr_40743_40768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (1))){
var state_40741__$1 = state_40741;
var statearr_40744_40769 = state_40741__$1;
(statearr_40744_40769[(2)] = null);

(statearr_40744_40769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (4))){
var inst_40705 = (state_40741[(7)]);
var inst_40705__$1 = (state_40741[(2)]);
var state_40741__$1 = (function (){var statearr_40745 = state_40741;
(statearr_40745[(7)] = inst_40705__$1);

return statearr_40745;
})();
if(cljs.core.truth_(inst_40705__$1)){
var statearr_40746_40770 = state_40741__$1;
(statearr_40746_40770[(1)] = (5));

} else {
var statearr_40747_40771 = state_40741__$1;
(statearr_40747_40771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (13))){
var state_40741__$1 = state_40741;
var statearr_40748_40772 = state_40741__$1;
(statearr_40748_40772[(2)] = null);

(statearr_40748_40772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (6))){
var state_40741__$1 = state_40741;
var statearr_40749_40773 = state_40741__$1;
(statearr_40749_40773[(2)] = null);

(statearr_40749_40773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (3))){
var inst_40739 = (state_40741[(2)]);
var state_40741__$1 = state_40741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40741__$1,inst_40739);
} else {
if((state_val_40742 === (12))){
var inst_40712 = (state_40741[(8)]);
var inst_40725 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40712);
var inst_40726 = cljs.core.first.call(null,inst_40725);
var inst_40727 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40726);
var inst_40728 = console.warn("Figwheel: Not loading code with warnings - ",inst_40727);
var state_40741__$1 = state_40741;
var statearr_40750_40774 = state_40741__$1;
(statearr_40750_40774[(2)] = inst_40728);

(statearr_40750_40774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (2))){
var state_40741__$1 = state_40741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40741__$1,(4),ch);
} else {
if((state_val_40742 === (11))){
var inst_40721 = (state_40741[(2)]);
var state_40741__$1 = state_40741;
var statearr_40751_40775 = state_40741__$1;
(statearr_40751_40775[(2)] = inst_40721);

(statearr_40751_40775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (9))){
var inst_40711 = (state_40741[(9)]);
var inst_40723 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40711,opts);
var state_40741__$1 = state_40741;
if(cljs.core.truth_(inst_40723)){
var statearr_40752_40776 = state_40741__$1;
(statearr_40752_40776[(1)] = (12));

} else {
var statearr_40753_40777 = state_40741__$1;
(statearr_40753_40777[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (5))){
var inst_40711 = (state_40741[(9)]);
var inst_40705 = (state_40741[(7)]);
var inst_40707 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40708 = (new cljs.core.PersistentArrayMap(null,2,inst_40707,null));
var inst_40709 = (new cljs.core.PersistentHashSet(null,inst_40708,null));
var inst_40710 = figwheel.client.focus_msgs.call(null,inst_40709,inst_40705);
var inst_40711__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40710);
var inst_40712 = cljs.core.first.call(null,inst_40710);
var inst_40713 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40711__$1,opts);
var state_40741__$1 = (function (){var statearr_40754 = state_40741;
(statearr_40754[(9)] = inst_40711__$1);

(statearr_40754[(8)] = inst_40712);

return statearr_40754;
})();
if(cljs.core.truth_(inst_40713)){
var statearr_40755_40778 = state_40741__$1;
(statearr_40755_40778[(1)] = (8));

} else {
var statearr_40756_40779 = state_40741__$1;
(statearr_40756_40779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (14))){
var inst_40731 = (state_40741[(2)]);
var state_40741__$1 = state_40741;
var statearr_40757_40780 = state_40741__$1;
(statearr_40757_40780[(2)] = inst_40731);

(statearr_40757_40780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (10))){
var inst_40733 = (state_40741[(2)]);
var state_40741__$1 = (function (){var statearr_40758 = state_40741;
(statearr_40758[(10)] = inst_40733);

return statearr_40758;
})();
var statearr_40759_40781 = state_40741__$1;
(statearr_40759_40781[(2)] = null);

(statearr_40759_40781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (8))){
var inst_40712 = (state_40741[(8)]);
var inst_40715 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40716 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40712);
var inst_40717 = cljs.core.async.timeout.call(null,(1000));
var inst_40718 = [inst_40716,inst_40717];
var inst_40719 = (new cljs.core.PersistentVector(null,2,(5),inst_40715,inst_40718,null));
var state_40741__$1 = state_40741;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40741__$1,(11),inst_40719);
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
});})(c__35970__auto___40767,ch))
;
return ((function (switch__35908__auto__,c__35970__auto___40767,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35909__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35909__auto____0 = (function (){
var statearr_40763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40763[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35909__auto__);

(statearr_40763[(1)] = (1));

return statearr_40763;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35909__auto____1 = (function (state_40741){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_40741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e40764){if((e40764 instanceof Object)){
var ex__35912__auto__ = e40764;
var statearr_40765_40782 = state_40741;
(statearr_40765_40782[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40783 = state_40741;
state_40741 = G__40783;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35909__auto__ = function(state_40741){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35909__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35909__auto____1.call(this,state_40741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35909__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35909__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___40767,ch))
})();
var state__35972__auto__ = (function (){var statearr_40766 = f__35971__auto__.call(null);
(statearr_40766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___40767);

return statearr_40766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___40767,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40784_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40784_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_40791 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40791){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_40789 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_40790 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_40789,_STAR_print_newline_STAR_40790,base_path_40791){
return (function() { 
var G__40792__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__40792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40793__i = 0, G__40793__a = new Array(arguments.length -  0);
while (G__40793__i < G__40793__a.length) {G__40793__a[G__40793__i] = arguments[G__40793__i + 0]; ++G__40793__i;}
  args = new cljs.core.IndexedSeq(G__40793__a,0);
} 
return G__40792__delegate.call(this,args);};
G__40792.cljs$lang$maxFixedArity = 0;
G__40792.cljs$lang$applyTo = (function (arglist__40794){
var args = cljs.core.seq(arglist__40794);
return G__40792__delegate(args);
});
G__40792.cljs$core$IFn$_invoke$arity$variadic = G__40792__delegate;
return G__40792;
})()
;})(_STAR_print_fn_STAR_40789,_STAR_print_newline_STAR_40790,base_path_40791))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40790;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40789;
}}catch (e40788){if((e40788 instanceof Error)){
var e = e40788;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40791], null));
} else {
var e = e40788;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40791))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40795){
var map__40800 = p__40795;
var map__40800__$1 = ((cljs.core.seq_QMARK_.call(null,map__40800))?cljs.core.apply.call(null,cljs.core.hash_map,map__40800):map__40800);
var opts = map__40800__$1;
var build_id = cljs.core.get.call(null,map__40800__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40800,map__40800__$1,opts,build_id){
return (function (p__40801){
var vec__40802 = p__40801;
var map__40803 = cljs.core.nth.call(null,vec__40802,(0),null);
var map__40803__$1 = ((cljs.core.seq_QMARK_.call(null,map__40803))?cljs.core.apply.call(null,cljs.core.hash_map,map__40803):map__40803);
var msg = map__40803__$1;
var msg_name = cljs.core.get.call(null,map__40803__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40802,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__40802,map__40803,map__40803__$1,msg,msg_name,_,map__40800,map__40800__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40802,map__40803,map__40803__$1,msg,msg_name,_,map__40800,map__40800__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40800,map__40800__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40807){
var vec__40808 = p__40807;
var map__40809 = cljs.core.nth.call(null,vec__40808,(0),null);
var map__40809__$1 = ((cljs.core.seq_QMARK_.call(null,map__40809))?cljs.core.apply.call(null,cljs.core.hash_map,map__40809):map__40809);
var msg = map__40809__$1;
var msg_name = cljs.core.get.call(null,map__40809__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40808,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40810){
var map__40818 = p__40810;
var map__40818__$1 = ((cljs.core.seq_QMARK_.call(null,map__40818))?cljs.core.apply.call(null,cljs.core.hash_map,map__40818):map__40818);
var on_compile_warning = cljs.core.get.call(null,map__40818__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40818__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40818,map__40818__$1,on_compile_warning,on_compile_fail){
return (function (p__40819){
var vec__40820 = p__40819;
var map__40821 = cljs.core.nth.call(null,vec__40820,(0),null);
var map__40821__$1 = ((cljs.core.seq_QMARK_.call(null,map__40821))?cljs.core.apply.call(null,cljs.core.hash_map,map__40821):map__40821);
var msg = map__40821__$1;
var msg_name = cljs.core.get.call(null,map__40821__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40820,(1));
var pred__40822 = cljs.core._EQ_;
var expr__40823 = msg_name;
if(cljs.core.truth_(pred__40822.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40823))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40822.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40823))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40818,map__40818__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto__,msg_hist,msg_names,msg){
return (function (state_41024){
var state_val_41025 = (state_41024[(1)]);
if((state_val_41025 === (7))){
var inst_40958 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41026_41067 = state_41024__$1;
(statearr_41026_41067[(2)] = inst_40958);

(statearr_41026_41067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (20))){
var inst_40986 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41024__$1 = state_41024;
if(cljs.core.truth_(inst_40986)){
var statearr_41027_41068 = state_41024__$1;
(statearr_41027_41068[(1)] = (22));

} else {
var statearr_41028_41069 = state_41024__$1;
(statearr_41028_41069[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (27))){
var inst_40998 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40999 = figwheel.client.heads_up.display_warning.call(null,inst_40998);
var state_41024__$1 = state_41024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41024__$1,(30),inst_40999);
} else {
if((state_val_41025 === (1))){
var inst_40946 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41024__$1 = state_41024;
if(cljs.core.truth_(inst_40946)){
var statearr_41029_41070 = state_41024__$1;
(statearr_41029_41070[(1)] = (2));

} else {
var statearr_41030_41071 = state_41024__$1;
(statearr_41030_41071[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (24))){
var inst_41014 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41031_41072 = state_41024__$1;
(statearr_41031_41072[(2)] = inst_41014);

(statearr_41031_41072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (4))){
var inst_41022 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41024__$1,inst_41022);
} else {
if((state_val_41025 === (15))){
var inst_40974 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40975 = figwheel.client.format_messages.call(null,inst_40974);
var inst_40976 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40977 = figwheel.client.heads_up.display_error.call(null,inst_40975,inst_40976);
var state_41024__$1 = state_41024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41024__$1,(18),inst_40977);
} else {
if((state_val_41025 === (21))){
var inst_41016 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41032_41073 = state_41024__$1;
(statearr_41032_41073[(2)] = inst_41016);

(statearr_41032_41073[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (31))){
var inst_41005 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41024__$1 = state_41024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41024__$1,(34),inst_41005);
} else {
if((state_val_41025 === (32))){
var state_41024__$1 = state_41024;
var statearr_41033_41074 = state_41024__$1;
(statearr_41033_41074[(2)] = null);

(statearr_41033_41074[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (33))){
var inst_41010 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41034_41075 = state_41024__$1;
(statearr_41034_41075[(2)] = inst_41010);

(statearr_41034_41075[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (13))){
var inst_40964 = (state_41024[(2)]);
var inst_40965 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40966 = figwheel.client.format_messages.call(null,inst_40965);
var inst_40967 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40968 = figwheel.client.heads_up.display_error.call(null,inst_40966,inst_40967);
var state_41024__$1 = (function (){var statearr_41035 = state_41024;
(statearr_41035[(7)] = inst_40964);

return statearr_41035;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41024__$1,(14),inst_40968);
} else {
if((state_val_41025 === (22))){
var inst_40988 = figwheel.client.heads_up.clear.call(null);
var state_41024__$1 = state_41024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41024__$1,(25),inst_40988);
} else {
if((state_val_41025 === (29))){
var inst_41012 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41036_41076 = state_41024__$1;
(statearr_41036_41076[(2)] = inst_41012);

(statearr_41036_41076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (6))){
var inst_40954 = figwheel.client.heads_up.clear.call(null);
var state_41024__$1 = state_41024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41024__$1,(9),inst_40954);
} else {
if((state_val_41025 === (28))){
var inst_41003 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41024__$1 = state_41024;
if(cljs.core.truth_(inst_41003)){
var statearr_41037_41077 = state_41024__$1;
(statearr_41037_41077[(1)] = (31));

} else {
var statearr_41038_41078 = state_41024__$1;
(statearr_41038_41078[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (25))){
var inst_40990 = (state_41024[(2)]);
var inst_40991 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40992 = figwheel.client.heads_up.display_warning.call(null,inst_40991);
var state_41024__$1 = (function (){var statearr_41039 = state_41024;
(statearr_41039[(8)] = inst_40990);

return statearr_41039;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41024__$1,(26),inst_40992);
} else {
if((state_val_41025 === (34))){
var inst_41007 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41040_41079 = state_41024__$1;
(statearr_41040_41079[(2)] = inst_41007);

(statearr_41040_41079[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (17))){
var inst_41018 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41041_41080 = state_41024__$1;
(statearr_41041_41080[(2)] = inst_41018);

(statearr_41041_41080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (3))){
var inst_40960 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41024__$1 = state_41024;
if(cljs.core.truth_(inst_40960)){
var statearr_41042_41081 = state_41024__$1;
(statearr_41042_41081[(1)] = (10));

} else {
var statearr_41043_41082 = state_41024__$1;
(statearr_41043_41082[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (12))){
var inst_41020 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41044_41083 = state_41024__$1;
(statearr_41044_41083[(2)] = inst_41020);

(statearr_41044_41083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (2))){
var inst_40948 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41024__$1 = state_41024;
if(cljs.core.truth_(inst_40948)){
var statearr_41045_41084 = state_41024__$1;
(statearr_41045_41084[(1)] = (5));

} else {
var statearr_41046_41085 = state_41024__$1;
(statearr_41046_41085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (23))){
var inst_40996 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41024__$1 = state_41024;
if(cljs.core.truth_(inst_40996)){
var statearr_41047_41086 = state_41024__$1;
(statearr_41047_41086[(1)] = (27));

} else {
var statearr_41048_41087 = state_41024__$1;
(statearr_41048_41087[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (19))){
var inst_40983 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40984 = figwheel.client.heads_up.append_message.call(null,inst_40983);
var state_41024__$1 = state_41024;
var statearr_41049_41088 = state_41024__$1;
(statearr_41049_41088[(2)] = inst_40984);

(statearr_41049_41088[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (11))){
var inst_40972 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41024__$1 = state_41024;
if(cljs.core.truth_(inst_40972)){
var statearr_41050_41089 = state_41024__$1;
(statearr_41050_41089[(1)] = (15));

} else {
var statearr_41051_41090 = state_41024__$1;
(statearr_41051_41090[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (9))){
var inst_40956 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41052_41091 = state_41024__$1;
(statearr_41052_41091[(2)] = inst_40956);

(statearr_41052_41091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (5))){
var inst_40950 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41024__$1 = state_41024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41024__$1,(8),inst_40950);
} else {
if((state_val_41025 === (14))){
var inst_40970 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41053_41092 = state_41024__$1;
(statearr_41053_41092[(2)] = inst_40970);

(statearr_41053_41092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (26))){
var inst_40994 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41054_41093 = state_41024__$1;
(statearr_41054_41093[(2)] = inst_40994);

(statearr_41054_41093[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (16))){
var inst_40981 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41024__$1 = state_41024;
if(cljs.core.truth_(inst_40981)){
var statearr_41055_41094 = state_41024__$1;
(statearr_41055_41094[(1)] = (19));

} else {
var statearr_41056_41095 = state_41024__$1;
(statearr_41056_41095[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (30))){
var inst_41001 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41057_41096 = state_41024__$1;
(statearr_41057_41096[(2)] = inst_41001);

(statearr_41057_41096[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (10))){
var inst_40962 = figwheel.client.heads_up.clear.call(null);
var state_41024__$1 = state_41024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41024__$1,(13),inst_40962);
} else {
if((state_val_41025 === (18))){
var inst_40979 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41058_41097 = state_41024__$1;
(statearr_41058_41097[(2)] = inst_40979);

(statearr_41058_41097[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41025 === (8))){
var inst_40952 = (state_41024[(2)]);
var state_41024__$1 = state_41024;
var statearr_41059_41098 = state_41024__$1;
(statearr_41059_41098[(2)] = inst_40952);

(statearr_41059_41098[(1)] = (7));


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
});})(c__35970__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35908__auto__,c__35970__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35909__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35909__auto____0 = (function (){
var statearr_41063 = [null,null,null,null,null,null,null,null,null];
(statearr_41063[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35909__auto__);

(statearr_41063[(1)] = (1));

return statearr_41063;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35909__auto____1 = (function (state_41024){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_41024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e41064){if((e41064 instanceof Object)){
var ex__35912__auto__ = e41064;
var statearr_41065_41099 = state_41024;
(statearr_41065_41099[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41100 = state_41024;
state_41024 = G__41100;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35909__auto__ = function(state_41024){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35909__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35909__auto____1.call(this,state_41024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35909__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35909__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto__,msg_hist,msg_names,msg))
})();
var state__35972__auto__ = (function (){var statearr_41066 = f__35971__auto__.call(null);
(statearr_41066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto__);

return statearr_41066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto__,msg_hist,msg_names,msg))
);

return c__35970__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35970__auto___41163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___41163,ch){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___41163,ch){
return (function (state_41146){
var state_val_41147 = (state_41146[(1)]);
if((state_val_41147 === (1))){
var state_41146__$1 = state_41146;
var statearr_41148_41164 = state_41146__$1;
(statearr_41148_41164[(2)] = null);

(statearr_41148_41164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (2))){
var state_41146__$1 = state_41146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41146__$1,(4),ch);
} else {
if((state_val_41147 === (3))){
var inst_41144 = (state_41146[(2)]);
var state_41146__$1 = state_41146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41146__$1,inst_41144);
} else {
if((state_val_41147 === (4))){
var inst_41134 = (state_41146[(7)]);
var inst_41134__$1 = (state_41146[(2)]);
var state_41146__$1 = (function (){var statearr_41149 = state_41146;
(statearr_41149[(7)] = inst_41134__$1);

return statearr_41149;
})();
if(cljs.core.truth_(inst_41134__$1)){
var statearr_41150_41165 = state_41146__$1;
(statearr_41150_41165[(1)] = (5));

} else {
var statearr_41151_41166 = state_41146__$1;
(statearr_41151_41166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (5))){
var inst_41134 = (state_41146[(7)]);
var inst_41136 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41134);
var state_41146__$1 = state_41146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41146__$1,(8),inst_41136);
} else {
if((state_val_41147 === (6))){
var state_41146__$1 = state_41146;
var statearr_41152_41167 = state_41146__$1;
(statearr_41152_41167[(2)] = null);

(statearr_41152_41167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (7))){
var inst_41142 = (state_41146[(2)]);
var state_41146__$1 = state_41146;
var statearr_41153_41168 = state_41146__$1;
(statearr_41153_41168[(2)] = inst_41142);

(statearr_41153_41168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (8))){
var inst_41138 = (state_41146[(2)]);
var state_41146__$1 = (function (){var statearr_41154 = state_41146;
(statearr_41154[(8)] = inst_41138);

return statearr_41154;
})();
var statearr_41155_41169 = state_41146__$1;
(statearr_41155_41169[(2)] = null);

(statearr_41155_41169[(1)] = (2));


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
});})(c__35970__auto___41163,ch))
;
return ((function (switch__35908__auto__,c__35970__auto___41163,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35909__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35909__auto____0 = (function (){
var statearr_41159 = [null,null,null,null,null,null,null,null,null];
(statearr_41159[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35909__auto__);

(statearr_41159[(1)] = (1));

return statearr_41159;
});
var figwheel$client$heads_up_plugin_$_state_machine__35909__auto____1 = (function (state_41146){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_41146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e41160){if((e41160 instanceof Object)){
var ex__35912__auto__ = e41160;
var statearr_41161_41170 = state_41146;
(statearr_41161_41170[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41171 = state_41146;
state_41146 = G__41171;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35909__auto__ = function(state_41146){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35909__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35909__auto____1.call(this,state_41146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35909__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35909__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___41163,ch))
})();
var state__35972__auto__ = (function (){var statearr_41162 = f__35971__auto__.call(null);
(statearr_41162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___41163);

return statearr_41162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___41163,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto__){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto__){
return (function (state_41192){
var state_val_41193 = (state_41192[(1)]);
if((state_val_41193 === (1))){
var inst_41187 = cljs.core.async.timeout.call(null,(3000));
var state_41192__$1 = state_41192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41192__$1,(2),inst_41187);
} else {
if((state_val_41193 === (2))){
var inst_41189 = (state_41192[(2)]);
var inst_41190 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41192__$1 = (function (){var statearr_41194 = state_41192;
(statearr_41194[(7)] = inst_41189);

return statearr_41194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41192__$1,inst_41190);
} else {
return null;
}
}
});})(c__35970__auto__))
;
return ((function (switch__35908__auto__,c__35970__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35909__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35909__auto____0 = (function (){
var statearr_41198 = [null,null,null,null,null,null,null,null];
(statearr_41198[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35909__auto__);

(statearr_41198[(1)] = (1));

return statearr_41198;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35909__auto____1 = (function (state_41192){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_41192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e41199){if((e41199 instanceof Object)){
var ex__35912__auto__ = e41199;
var statearr_41200_41202 = state_41192;
(statearr_41200_41202[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41203 = state_41192;
state_41192 = G__41203;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35909__auto__ = function(state_41192){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35909__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35909__auto____1.call(this,state_41192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35909__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35909__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto__))
})();
var state__35972__auto__ = (function (){var statearr_41201 = f__35971__auto__.call(null);
(statearr_41201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto__);

return statearr_41201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto__))
);

return c__35970__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__32001__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__32001__auto__)){
return ("CustomEvent" in window);
} else {
return and__32001__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj41207 = {"detail":url};
return obj41207;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41208){
var map__41214 = p__41208;
var map__41214__$1 = ((cljs.core.seq_QMARK_.call(null,map__41214))?cljs.core.apply.call(null,cljs.core.hash_map,map__41214):map__41214);
var ed = map__41214__$1;
var formatted_exception = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41215_41219 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41216_41220 = null;
var count__41217_41221 = (0);
var i__41218_41222 = (0);
while(true){
if((i__41218_41222 < count__41217_41221)){
var msg_41223 = cljs.core._nth.call(null,chunk__41216_41220,i__41218_41222);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41223);

var G__41224 = seq__41215_41219;
var G__41225 = chunk__41216_41220;
var G__41226 = count__41217_41221;
var G__41227 = (i__41218_41222 + (1));
seq__41215_41219 = G__41224;
chunk__41216_41220 = G__41225;
count__41217_41221 = G__41226;
i__41218_41222 = G__41227;
continue;
} else {
var temp__4423__auto___41228 = cljs.core.seq.call(null,seq__41215_41219);
if(temp__4423__auto___41228){
var seq__41215_41229__$1 = temp__4423__auto___41228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41215_41229__$1)){
var c__32798__auto___41230 = cljs.core.chunk_first.call(null,seq__41215_41229__$1);
var G__41231 = cljs.core.chunk_rest.call(null,seq__41215_41229__$1);
var G__41232 = c__32798__auto___41230;
var G__41233 = cljs.core.count.call(null,c__32798__auto___41230);
var G__41234 = (0);
seq__41215_41219 = G__41231;
chunk__41216_41220 = G__41232;
count__41217_41221 = G__41233;
i__41218_41222 = G__41234;
continue;
} else {
var msg_41235 = cljs.core.first.call(null,seq__41215_41229__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41235);

var G__41236 = cljs.core.next.call(null,seq__41215_41229__$1);
var G__41237 = null;
var G__41238 = (0);
var G__41239 = (0);
seq__41215_41219 = G__41236;
chunk__41216_41220 = G__41237;
count__41217_41221 = G__41238;
i__41218_41222 = G__41239;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41240){
var map__41242 = p__41240;
var map__41242__$1 = ((cljs.core.seq_QMARK_.call(null,map__41242))?cljs.core.apply.call(null,cljs.core.hash_map,map__41242):map__41242);
var w = map__41242__$1;
var message = cljs.core.get.call(null,map__41242__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__32001__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__32001__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__32001__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41249 = cljs.core.seq.call(null,plugins);
var chunk__41250 = null;
var count__41251 = (0);
var i__41252 = (0);
while(true){
if((i__41252 < count__41251)){
var vec__41253 = cljs.core._nth.call(null,chunk__41250,i__41252);
var k = cljs.core.nth.call(null,vec__41253,(0),null);
var plugin = cljs.core.nth.call(null,vec__41253,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41255 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41249,chunk__41250,count__41251,i__41252,pl_41255,vec__41253,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41255.call(null,msg_hist);
});})(seq__41249,chunk__41250,count__41251,i__41252,pl_41255,vec__41253,k,plugin))
);
} else {
}

var G__41256 = seq__41249;
var G__41257 = chunk__41250;
var G__41258 = count__41251;
var G__41259 = (i__41252 + (1));
seq__41249 = G__41256;
chunk__41250 = G__41257;
count__41251 = G__41258;
i__41252 = G__41259;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__41249);
if(temp__4423__auto__){
var seq__41249__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41249__$1)){
var c__32798__auto__ = cljs.core.chunk_first.call(null,seq__41249__$1);
var G__41260 = cljs.core.chunk_rest.call(null,seq__41249__$1);
var G__41261 = c__32798__auto__;
var G__41262 = cljs.core.count.call(null,c__32798__auto__);
var G__41263 = (0);
seq__41249 = G__41260;
chunk__41250 = G__41261;
count__41251 = G__41262;
i__41252 = G__41263;
continue;
} else {
var vec__41254 = cljs.core.first.call(null,seq__41249__$1);
var k = cljs.core.nth.call(null,vec__41254,(0),null);
var plugin = cljs.core.nth.call(null,vec__41254,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41264 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41249,chunk__41250,count__41251,i__41252,pl_41264,vec__41254,k,plugin,seq__41249__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41264.call(null,msg_hist);
});})(seq__41249,chunk__41250,count__41251,i__41252,pl_41264,vec__41254,k,plugin,seq__41249__$1,temp__4423__auto__))
);
} else {
}

var G__41265 = cljs.core.next.call(null,seq__41249__$1);
var G__41266 = null;
var G__41267 = (0);
var G__41268 = (0);
seq__41249 = G__41265;
chunk__41250 = G__41266;
count__41251 = G__41267;
i__41252 = G__41268;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__41270 = arguments.length;
switch (G__41270) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__33053__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__33053__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41273){
var map__41274 = p__41273;
var map__41274__$1 = ((cljs.core.seq_QMARK_.call(null,map__41274))?cljs.core.apply.call(null,cljs.core.hash_map,map__41274):map__41274);
var opts = map__41274__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41272){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41272));
});

//# sourceMappingURL=client.js.map