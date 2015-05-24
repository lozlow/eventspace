// Compiled by ClojureScript 0.0-3269 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.handlers');
goog.require('re_frame.utils');
goog.require('cljs.core.async');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
var c__35928__auto___39879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35928__auto___39879){
return (function (){
var f__35929__auto__ = (function (){var switch__35866__auto__ = ((function (c__35928__auto___39879){
return (function (state_39861){
var state_val_39862 = (state_39861[(1)]);
if((state_val_39862 === (1))){
var state_39861__$1 = state_39861;
var statearr_39863_39880 = state_39861__$1;
(statearr_39863_39880[(2)] = null);

(statearr_39863_39880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39862 === (2))){
var state_39861__$1 = state_39861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39861__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_39862 === (3))){
var inst_39859 = (state_39861[(2)]);
var state_39861__$1 = state_39861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39861__$1,inst_39859);
} else {
if((state_val_39862 === (4))){
var inst_39842 = (state_39861[(7)]);
var inst_39842__$1 = (state_39861[(2)]);
var inst_39843 = cljs.core.meta.call(null,inst_39842__$1);
var inst_39844 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_39843);
var state_39861__$1 = (function (){var statearr_39864 = state_39861;
(statearr_39864[(7)] = inst_39842__$1);

return statearr_39864;
})();
if(cljs.core.truth_(inst_39844)){
var statearr_39865_39881 = state_39861__$1;
(statearr_39865_39881[(1)] = (5));

} else {
var statearr_39866_39882 = state_39861__$1;
(statearr_39866_39882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39862 === (5))){
var inst_39846 = reagent.core.flush.call(null);
var inst_39847 = cljs.core.async.timeout.call(null,(20));
var state_39861__$1 = (function (){var statearr_39867 = state_39861;
(statearr_39867[(8)] = inst_39846);

return statearr_39867;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39861__$1,(8),inst_39847);
} else {
if((state_val_39862 === (6))){
var inst_39851 = cljs.core.async.timeout.call(null,(0));
var state_39861__$1 = state_39861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39861__$1,(9),inst_39851);
} else {
if((state_val_39862 === (7))){
var inst_39842 = (state_39861[(7)]);
var inst_39855 = (state_39861[(2)]);
var inst_39856 = re_frame.handlers.handle.call(null,inst_39842);
var state_39861__$1 = (function (){var statearr_39868 = state_39861;
(statearr_39868[(9)] = inst_39855);

(statearr_39868[(10)] = inst_39856);

return statearr_39868;
})();
var statearr_39869_39883 = state_39861__$1;
(statearr_39869_39883[(2)] = null);

(statearr_39869_39883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39862 === (8))){
var inst_39849 = (state_39861[(2)]);
var state_39861__$1 = state_39861;
var statearr_39870_39884 = state_39861__$1;
(statearr_39870_39884[(2)] = inst_39849);

(statearr_39870_39884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39862 === (9))){
var inst_39853 = (state_39861[(2)]);
var state_39861__$1 = state_39861;
var statearr_39871_39885 = state_39861__$1;
(statearr_39871_39885[(2)] = inst_39853);

(statearr_39871_39885[(1)] = (7));


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
});})(c__35928__auto___39879))
;
return ((function (switch__35866__auto__,c__35928__auto___39879){
return (function() {
var re_frame$router$state_machine__35867__auto__ = null;
var re_frame$router$state_machine__35867__auto____0 = (function (){
var statearr_39875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39875[(0)] = re_frame$router$state_machine__35867__auto__);

(statearr_39875[(1)] = (1));

return statearr_39875;
});
var re_frame$router$state_machine__35867__auto____1 = (function (state_39861){
while(true){
var ret_value__35868__auto__ = (function (){try{while(true){
var result__35869__auto__ = switch__35866__auto__.call(null,state_39861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35869__auto__;
}
break;
}
}catch (e39876){if((e39876 instanceof Object)){
var ex__35870__auto__ = e39876;
var statearr_39877_39886 = state_39861;
(statearr_39877_39886[(5)] = ex__35870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39887 = state_39861;
state_39861 = G__39887;
continue;
} else {
return ret_value__35868__auto__;
}
break;
}
});
re_frame$router$state_machine__35867__auto__ = function(state_39861){
switch(arguments.length){
case 0:
return re_frame$router$state_machine__35867__auto____0.call(this);
case 1:
return re_frame$router$state_machine__35867__auto____1.call(this,state_39861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$state_machine__35867__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$state_machine__35867__auto____0;
re_frame$router$state_machine__35867__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$state_machine__35867__auto____1;
return re_frame$router$state_machine__35867__auto__;
})()
;})(switch__35866__auto__,c__35928__auto___39879))
})();
var state__35930__auto__ = (function (){var statearr_39878 = f__35929__auto__.call(null);
(statearr_39878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35928__auto___39879);

return statearr_39878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35930__auto__);
});})(c__35928__auto___39879))
);

/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.warn.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map