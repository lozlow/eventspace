// Compiled by ClojureScript 0.0-3269 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__41592_SHARP_,p2__41593_SHARP_){
var and__32001__auto__ = p1__41592_SHARP_;
if(cljs.core.truth_(and__32001__auto__)){
return p2__41593_SHARP_;
} else {
return and__32001__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__32013__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__32013__auto__){
return or__32013__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__32013__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__32013__auto__){
return or__32013__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__32013__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__32013__auto__)){
return or__32013__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__32908__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__32909__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__32910__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__32911__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__32912__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__32912__auto__,method_table__32908__auto__,prefer_table__32909__auto__,method_cache__32910__auto__,cached_hierarchy__32911__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__41594){
var map__41595 = p__41594;
var map__41595__$1 = ((cljs.core.seq_QMARK_.call(null,map__41595))?cljs.core.apply.call(null,cljs.core.hash_map,map__41595):map__41595);
var file = cljs.core.get.call(null,map__41595__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__41596){
var map__41597 = p__41596;
var map__41597__$1 = ((cljs.core.seq_QMARK_.call(null,map__41597))?cljs.core.apply.call(null,cljs.core.hash_map,map__41597):map__41597);
var namespace = cljs.core.get.call(null,map__41597__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__32908__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__32909__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__32910__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__32911__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__32912__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__32912__auto__,method_table__32908__auto__,prefer_table__32909__auto__,method_cache__32910__auto__,cached_hierarchy__32911__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e41598){if((e41598 instanceof Error)){
var e = e41598;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41598;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__41600 = arguments.length;
switch (G__41600) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41602,callback){
var map__41604 = p__41602;
var map__41604__$1 = ((cljs.core.seq_QMARK_.call(null,map__41604))?cljs.core.apply.call(null,cljs.core.hash_map,map__41604):map__41604);
var file_msg = map__41604__$1;
var request_url = cljs.core.get.call(null,map__41604__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__41604,map__41604__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41604,map__41604__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41605){
var map__41607 = p__41605;
var map__41607__$1 = ((cljs.core.seq_QMARK_.call(null,map__41607))?cljs.core.apply.call(null,cljs.core.hash_map,map__41607):map__41607);
var file_msg = map__41607__$1;
var namespace = cljs.core.get.call(null,map__41607__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__41607__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__32013__auto__ = meta_data;
if(cljs.core.truth_(or__32013__auto__)){
return or__32013__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__32001__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__32001__auto__){
var or__32013__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__32013__auto__)){
return or__32013__auto__;
} else {
var or__32013__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__32013__auto____$1)){
return or__32013__auto____$1;
} else {
var and__32001__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__32001__auto____$1){
var or__32013__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__32013__auto____$2){
return or__32013__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__32001__auto____$1;
}
}
}
} else {
return and__32001__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41608,callback){
var map__41610 = p__41608;
var map__41610__$1 = ((cljs.core.seq_QMARK_.call(null,map__41610))?cljs.core.apply.call(null,cljs.core.hash_map,map__41610):map__41610);
var file_msg = map__41610__$1;
var request_url = cljs.core.get.call(null,map__41610__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41610__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__35970__auto___41697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto___41697,out){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto___41697,out){
return (function (state_41679){
var state_val_41680 = (state_41679[(1)]);
if((state_val_41680 === (1))){
var inst_41657 = cljs.core.nth.call(null,files,(0),null);
var inst_41658 = cljs.core.nthnext.call(null,files,(1));
var inst_41659 = files;
var state_41679__$1 = (function (){var statearr_41681 = state_41679;
(statearr_41681[(7)] = inst_41658);

(statearr_41681[(8)] = inst_41659);

(statearr_41681[(9)] = inst_41657);

return statearr_41681;
})();
var statearr_41682_41698 = state_41679__$1;
(statearr_41682_41698[(2)] = null);

(statearr_41682_41698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41680 === (2))){
var inst_41659 = (state_41679[(8)]);
var inst_41662 = (state_41679[(10)]);
var inst_41662__$1 = cljs.core.nth.call(null,inst_41659,(0),null);
var inst_41663 = cljs.core.nthnext.call(null,inst_41659,(1));
var inst_41664 = (inst_41662__$1 == null);
var inst_41665 = cljs.core.not.call(null,inst_41664);
var state_41679__$1 = (function (){var statearr_41683 = state_41679;
(statearr_41683[(11)] = inst_41663);

(statearr_41683[(10)] = inst_41662__$1);

return statearr_41683;
})();
if(inst_41665){
var statearr_41684_41699 = state_41679__$1;
(statearr_41684_41699[(1)] = (4));

} else {
var statearr_41685_41700 = state_41679__$1;
(statearr_41685_41700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41680 === (3))){
var inst_41677 = (state_41679[(2)]);
var state_41679__$1 = state_41679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41679__$1,inst_41677);
} else {
if((state_val_41680 === (4))){
var inst_41662 = (state_41679[(10)]);
var inst_41667 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41662);
var state_41679__$1 = state_41679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41679__$1,(7),inst_41667);
} else {
if((state_val_41680 === (5))){
var inst_41673 = cljs.core.async.close_BANG_.call(null,out);
var state_41679__$1 = state_41679;
var statearr_41686_41701 = state_41679__$1;
(statearr_41686_41701[(2)] = inst_41673);

(statearr_41686_41701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41680 === (6))){
var inst_41675 = (state_41679[(2)]);
var state_41679__$1 = state_41679;
var statearr_41687_41702 = state_41679__$1;
(statearr_41687_41702[(2)] = inst_41675);

(statearr_41687_41702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41680 === (7))){
var inst_41663 = (state_41679[(11)]);
var inst_41669 = (state_41679[(2)]);
var inst_41670 = cljs.core.async.put_BANG_.call(null,out,inst_41669);
var inst_41659 = inst_41663;
var state_41679__$1 = (function (){var statearr_41688 = state_41679;
(statearr_41688[(8)] = inst_41659);

(statearr_41688[(12)] = inst_41670);

return statearr_41688;
})();
var statearr_41689_41703 = state_41679__$1;
(statearr_41689_41703[(2)] = null);

(statearr_41689_41703[(1)] = (2));


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
});})(c__35970__auto___41697,out))
;
return ((function (switch__35908__auto__,c__35970__auto___41697,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35909__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35909__auto____0 = (function (){
var statearr_41693 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41693[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35909__auto__);

(statearr_41693[(1)] = (1));

return statearr_41693;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35909__auto____1 = (function (state_41679){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_41679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e41694){if((e41694 instanceof Object)){
var ex__35912__auto__ = e41694;
var statearr_41695_41704 = state_41679;
(statearr_41695_41704[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41705 = state_41679;
state_41679 = G__41705;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35909__auto__ = function(state_41679){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35909__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35909__auto____1.call(this,state_41679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35909__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35909__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto___41697,out))
})();
var state__35972__auto__ = (function (){var statearr_41696 = f__35971__auto__.call(null);
(statearr_41696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto___41697);

return statearr_41696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto___41697,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__41706,p__41707){
var map__41710 = p__41706;
var map__41710__$1 = ((cljs.core.seq_QMARK_.call(null,map__41710))?cljs.core.apply.call(null,cljs.core.hash_map,map__41710):map__41710);
var opts = map__41710__$1;
var url_rewriter = cljs.core.get.call(null,map__41710__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__41711 = p__41707;
var map__41711__$1 = ((cljs.core.seq_QMARK_.call(null,map__41711))?cljs.core.apply.call(null,cljs.core.hash_map,map__41711):map__41711);
var file_msg = map__41711__$1;
var file = cljs.core.get.call(null,map__41711__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41712){
var map__41715 = p__41712;
var map__41715__$1 = ((cljs.core.seq_QMARK_.call(null,map__41715))?cljs.core.apply.call(null,cljs.core.hash_map,map__41715):map__41715);
var eval_body__$1 = cljs.core.get.call(null,map__41715__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41715__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__32001__auto__ = eval_body__$1;
if(cljs.core.truth_(and__32001__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__32001__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e41716){var e = e41716;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41721,p__41722){
var map__41923 = p__41721;
var map__41923__$1 = ((cljs.core.seq_QMARK_.call(null,map__41923))?cljs.core.apply.call(null,cljs.core.hash_map,map__41923):map__41923);
var opts = map__41923__$1;
var before_jsload = cljs.core.get.call(null,map__41923__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41923__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__41923__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__41924 = p__41722;
var map__41924__$1 = ((cljs.core.seq_QMARK_.call(null,map__41924))?cljs.core.apply.call(null,cljs.core.hash_map,map__41924):map__41924);
var msg = map__41924__$1;
var files = cljs.core.get.call(null,map__41924__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__35970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files){
return (function (state_42048){
var state_val_42049 = (state_42048[(1)]);
if((state_val_42049 === (7))){
var inst_41938 = (state_42048[(7)]);
var inst_41935 = (state_42048[(8)]);
var inst_41937 = (state_42048[(9)]);
var inst_41936 = (state_42048[(10)]);
var inst_41943 = cljs.core._nth.call(null,inst_41936,inst_41938);
var inst_41944 = figwheel.client.file_reloading.eval_body.call(null,inst_41943);
var inst_41945 = (inst_41938 + (1));
var tmp42050 = inst_41935;
var tmp42051 = inst_41937;
var tmp42052 = inst_41936;
var inst_41935__$1 = tmp42050;
var inst_41936__$1 = tmp42052;
var inst_41937__$1 = tmp42051;
var inst_41938__$1 = inst_41945;
var state_42048__$1 = (function (){var statearr_42053 = state_42048;
(statearr_42053[(7)] = inst_41938__$1);

(statearr_42053[(8)] = inst_41935__$1);

(statearr_42053[(9)] = inst_41937__$1);

(statearr_42053[(11)] = inst_41944);

(statearr_42053[(10)] = inst_41936__$1);

return statearr_42053;
})();
var statearr_42054_42123 = state_42048__$1;
(statearr_42054_42123[(2)] = null);

(statearr_42054_42123[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (20))){
var inst_41980 = (state_42048[(12)]);
var inst_41981 = (state_42048[(13)]);
var inst_41985 = (state_42048[(14)]);
var inst_41987 = (state_42048[(15)]);
var inst_41984 = (state_42048[(16)]);
var inst_41990 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41992 = (function (){var all_files = inst_41980;
var files_SINGLEQUOTE_ = inst_41981;
var res_SINGLEQUOTE_ = inst_41984;
var res = inst_41985;
var files_not_loaded = inst_41987;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_41980,inst_41981,inst_41985,inst_41987,inst_41984,inst_41990,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files){
return (function (p__41991){
var map__42055 = p__41991;
var map__42055__$1 = ((cljs.core.seq_QMARK_.call(null,map__42055))?cljs.core.apply.call(null,cljs.core.hash_map,map__42055):map__42055);
var namespace = cljs.core.get.call(null,map__42055__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42055__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_41980,inst_41981,inst_41985,inst_41987,inst_41984,inst_41990,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files))
})();
var inst_41993 = cljs.core.map.call(null,inst_41992,inst_41985);
var inst_41994 = cljs.core.pr_str.call(null,inst_41993);
var inst_41995 = figwheel.client.utils.log.call(null,inst_41994);
var inst_41996 = (function (){var all_files = inst_41980;
var files_SINGLEQUOTE_ = inst_41981;
var res_SINGLEQUOTE_ = inst_41984;
var res = inst_41985;
var files_not_loaded = inst_41987;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_41980,inst_41981,inst_41985,inst_41987,inst_41984,inst_41990,inst_41992,inst_41993,inst_41994,inst_41995,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_41980,inst_41981,inst_41985,inst_41987,inst_41984,inst_41990,inst_41992,inst_41993,inst_41994,inst_41995,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files))
})();
var inst_41997 = setTimeout(inst_41996,(10));
var state_42048__$1 = (function (){var statearr_42056 = state_42048;
(statearr_42056[(17)] = inst_41995);

(statearr_42056[(18)] = inst_41990);

return statearr_42056;
})();
var statearr_42057_42124 = state_42048__$1;
(statearr_42057_42124[(2)] = inst_41997);

(statearr_42057_42124[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (27))){
var inst_42007 = (state_42048[(19)]);
var state_42048__$1 = state_42048;
var statearr_42058_42125 = state_42048__$1;
(statearr_42058_42125[(2)] = inst_42007);

(statearr_42058_42125[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (1))){
var inst_41927 = (state_42048[(20)]);
var inst_41925 = before_jsload.call(null,files);
var inst_41926 = (function (){return ((function (inst_41927,inst_41925,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files){
return (function (p1__41717_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41717_SHARP_);
});
;})(inst_41927,inst_41925,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files))
})();
var inst_41927__$1 = cljs.core.filter.call(null,inst_41926,files);
var inst_41928 = cljs.core.not_empty.call(null,inst_41927__$1);
var state_42048__$1 = (function (){var statearr_42059 = state_42048;
(statearr_42059[(20)] = inst_41927__$1);

(statearr_42059[(21)] = inst_41925);

return statearr_42059;
})();
if(cljs.core.truth_(inst_41928)){
var statearr_42060_42126 = state_42048__$1;
(statearr_42060_42126[(1)] = (2));

} else {
var statearr_42061_42127 = state_42048__$1;
(statearr_42061_42127[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (24))){
var state_42048__$1 = state_42048;
var statearr_42062_42128 = state_42048__$1;
(statearr_42062_42128[(2)] = null);

(statearr_42062_42128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (4))){
var inst_41972 = (state_42048[(2)]);
var inst_41973 = (function (){return ((function (inst_41972,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files){
return (function (p1__41718_SHARP_){
var and__32001__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41718_SHARP_);
if(cljs.core.truth_(and__32001__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41718_SHARP_));
} else {
return and__32001__auto__;
}
});
;})(inst_41972,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files))
})();
var inst_41974 = cljs.core.filter.call(null,inst_41973,files);
var state_42048__$1 = (function (){var statearr_42063 = state_42048;
(statearr_42063[(22)] = inst_41974);

(statearr_42063[(23)] = inst_41972);

return statearr_42063;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_42064_42129 = state_42048__$1;
(statearr_42064_42129[(1)] = (16));

} else {
var statearr_42065_42130 = state_42048__$1;
(statearr_42065_42130[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (15))){
var inst_41962 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42066_42131 = state_42048__$1;
(statearr_42066_42131[(2)] = inst_41962);

(statearr_42066_42131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (21))){
var state_42048__$1 = state_42048;
var statearr_42067_42132 = state_42048__$1;
(statearr_42067_42132[(2)] = null);

(statearr_42067_42132[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (31))){
var inst_42015 = (state_42048[(24)]);
var inst_42025 = (state_42048[(2)]);
var inst_42026 = cljs.core.not_empty.call(null,inst_42015);
var state_42048__$1 = (function (){var statearr_42068 = state_42048;
(statearr_42068[(25)] = inst_42025);

return statearr_42068;
})();
if(cljs.core.truth_(inst_42026)){
var statearr_42069_42133 = state_42048__$1;
(statearr_42069_42133[(1)] = (32));

} else {
var statearr_42070_42134 = state_42048__$1;
(statearr_42070_42134[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (32))){
var inst_42015 = (state_42048[(24)]);
var inst_42028 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42015);
var inst_42029 = cljs.core.pr_str.call(null,inst_42028);
var inst_42030 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_42029)].join('');
var inst_42031 = figwheel.client.utils.log.call(null,inst_42030);
var state_42048__$1 = state_42048;
var statearr_42071_42135 = state_42048__$1;
(statearr_42071_42135[(2)] = inst_42031);

(statearr_42071_42135[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (33))){
var state_42048__$1 = state_42048;
var statearr_42072_42136 = state_42048__$1;
(statearr_42072_42136[(2)] = null);

(statearr_42072_42136[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (13))){
var inst_41948 = (state_42048[(26)]);
var inst_41952 = cljs.core.chunk_first.call(null,inst_41948);
var inst_41953 = cljs.core.chunk_rest.call(null,inst_41948);
var inst_41954 = cljs.core.count.call(null,inst_41952);
var inst_41935 = inst_41953;
var inst_41936 = inst_41952;
var inst_41937 = inst_41954;
var inst_41938 = (0);
var state_42048__$1 = (function (){var statearr_42073 = state_42048;
(statearr_42073[(7)] = inst_41938);

(statearr_42073[(8)] = inst_41935);

(statearr_42073[(9)] = inst_41937);

(statearr_42073[(10)] = inst_41936);

return statearr_42073;
})();
var statearr_42074_42137 = state_42048__$1;
(statearr_42074_42137[(2)] = null);

(statearr_42074_42137[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (22))){
var inst_41987 = (state_42048[(15)]);
var inst_42000 = (state_42048[(2)]);
var inst_42001 = cljs.core.not_empty.call(null,inst_41987);
var state_42048__$1 = (function (){var statearr_42075 = state_42048;
(statearr_42075[(27)] = inst_42000);

return statearr_42075;
})();
if(cljs.core.truth_(inst_42001)){
var statearr_42076_42138 = state_42048__$1;
(statearr_42076_42138[(1)] = (23));

} else {
var statearr_42077_42139 = state_42048__$1;
(statearr_42077_42139[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (36))){
var state_42048__$1 = state_42048;
var statearr_42078_42140 = state_42048__$1;
(statearr_42078_42140[(2)] = null);

(statearr_42078_42140[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (29))){
var inst_42014 = (state_42048[(28)]);
var inst_42019 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42014);
var inst_42020 = cljs.core.pr_str.call(null,inst_42019);
var inst_42021 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_42020)].join('');
var inst_42022 = figwheel.client.utils.log.call(null,inst_42021);
var state_42048__$1 = state_42048;
var statearr_42079_42141 = state_42048__$1;
(statearr_42079_42141[(2)] = inst_42022);

(statearr_42079_42141[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (6))){
var inst_41969 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42080_42142 = state_42048__$1;
(statearr_42080_42142[(2)] = inst_41969);

(statearr_42080_42142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (28))){
var inst_42014 = (state_42048[(28)]);
var inst_42013 = (state_42048[(2)]);
var inst_42014__$1 = cljs.core.get.call(null,inst_42013,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42015 = cljs.core.get.call(null,inst_42013,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_42016 = cljs.core.get.call(null,inst_42013,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42017 = cljs.core.not_empty.call(null,inst_42014__$1);
var state_42048__$1 = (function (){var statearr_42081 = state_42048;
(statearr_42081[(29)] = inst_42016);

(statearr_42081[(28)] = inst_42014__$1);

(statearr_42081[(24)] = inst_42015);

return statearr_42081;
})();
if(cljs.core.truth_(inst_42017)){
var statearr_42082_42143 = state_42048__$1;
(statearr_42082_42143[(1)] = (29));

} else {
var statearr_42083_42144 = state_42048__$1;
(statearr_42083_42144[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (25))){
var inst_42046 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42048__$1,inst_42046);
} else {
if((state_val_42049 === (34))){
var inst_42016 = (state_42048[(29)]);
var inst_42034 = (state_42048[(2)]);
var inst_42035 = cljs.core.not_empty.call(null,inst_42016);
var state_42048__$1 = (function (){var statearr_42084 = state_42048;
(statearr_42084[(30)] = inst_42034);

return statearr_42084;
})();
if(cljs.core.truth_(inst_42035)){
var statearr_42085_42145 = state_42048__$1;
(statearr_42085_42145[(1)] = (35));

} else {
var statearr_42086_42146 = state_42048__$1;
(statearr_42086_42146[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (17))){
var inst_41974 = (state_42048[(22)]);
var state_42048__$1 = state_42048;
var statearr_42087_42147 = state_42048__$1;
(statearr_42087_42147[(2)] = inst_41974);

(statearr_42087_42147[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (3))){
var state_42048__$1 = state_42048;
var statearr_42088_42148 = state_42048__$1;
(statearr_42088_42148[(2)] = null);

(statearr_42088_42148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (12))){
var inst_41965 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42089_42149 = state_42048__$1;
(statearr_42089_42149[(2)] = inst_41965);

(statearr_42089_42149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (2))){
var inst_41927 = (state_42048[(20)]);
var inst_41934 = cljs.core.seq.call(null,inst_41927);
var inst_41935 = inst_41934;
var inst_41936 = null;
var inst_41937 = (0);
var inst_41938 = (0);
var state_42048__$1 = (function (){var statearr_42090 = state_42048;
(statearr_42090[(7)] = inst_41938);

(statearr_42090[(8)] = inst_41935);

(statearr_42090[(9)] = inst_41937);

(statearr_42090[(10)] = inst_41936);

return statearr_42090;
})();
var statearr_42091_42150 = state_42048__$1;
(statearr_42091_42150[(2)] = null);

(statearr_42091_42150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (23))){
var inst_42007 = (state_42048[(19)]);
var inst_41980 = (state_42048[(12)]);
var inst_41981 = (state_42048[(13)]);
var inst_41985 = (state_42048[(14)]);
var inst_41987 = (state_42048[(15)]);
var inst_41984 = (state_42048[(16)]);
var inst_42003 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42006 = (function (){var all_files = inst_41980;
var files_SINGLEQUOTE_ = inst_41981;
var res_SINGLEQUOTE_ = inst_41984;
var res = inst_41985;
var files_not_loaded = inst_41987;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42007,inst_41980,inst_41981,inst_41985,inst_41987,inst_41984,inst_42003,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files){
return (function (p__42005){
var map__42092 = p__42005;
var map__42092__$1 = ((cljs.core.seq_QMARK_.call(null,map__42092))?cljs.core.apply.call(null,cljs.core.hash_map,map__42092):map__42092);
var meta_data = cljs.core.get.call(null,map__42092__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42007,inst_41980,inst_41981,inst_41985,inst_41987,inst_41984,inst_42003,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files))
})();
var inst_42007__$1 = cljs.core.group_by.call(null,inst_42006,inst_41987);
var inst_42008 = cljs.core.seq_QMARK_.call(null,inst_42007__$1);
var state_42048__$1 = (function (){var statearr_42093 = state_42048;
(statearr_42093[(19)] = inst_42007__$1);

(statearr_42093[(31)] = inst_42003);

return statearr_42093;
})();
if(inst_42008){
var statearr_42094_42151 = state_42048__$1;
(statearr_42094_42151[(1)] = (26));

} else {
var statearr_42095_42152 = state_42048__$1;
(statearr_42095_42152[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (35))){
var inst_42016 = (state_42048[(29)]);
var inst_42037 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42016);
var inst_42038 = cljs.core.pr_str.call(null,inst_42037);
var inst_42039 = [cljs.core.str("not required: "),cljs.core.str(inst_42038)].join('');
var inst_42040 = figwheel.client.utils.log.call(null,inst_42039);
var state_42048__$1 = state_42048;
var statearr_42096_42153 = state_42048__$1;
(statearr_42096_42153[(2)] = inst_42040);

(statearr_42096_42153[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (19))){
var inst_41980 = (state_42048[(12)]);
var inst_41981 = (state_42048[(13)]);
var inst_41985 = (state_42048[(14)]);
var inst_41984 = (state_42048[(16)]);
var inst_41984__$1 = (state_42048[(2)]);
var inst_41985__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41984__$1);
var inst_41986 = (function (){var all_files = inst_41980;
var files_SINGLEQUOTE_ = inst_41981;
var res_SINGLEQUOTE_ = inst_41984__$1;
var res = inst_41985__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_41980,inst_41981,inst_41985,inst_41984,inst_41984__$1,inst_41985__$1,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files){
return (function (p1__41720_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41720_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_41980,inst_41981,inst_41985,inst_41984,inst_41984__$1,inst_41985__$1,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files))
})();
var inst_41987 = cljs.core.filter.call(null,inst_41986,inst_41984__$1);
var inst_41988 = cljs.core.not_empty.call(null,inst_41985__$1);
var state_42048__$1 = (function (){var statearr_42097 = state_42048;
(statearr_42097[(14)] = inst_41985__$1);

(statearr_42097[(15)] = inst_41987);

(statearr_42097[(16)] = inst_41984__$1);

return statearr_42097;
})();
if(cljs.core.truth_(inst_41988)){
var statearr_42098_42154 = state_42048__$1;
(statearr_42098_42154[(1)] = (20));

} else {
var statearr_42099_42155 = state_42048__$1;
(statearr_42099_42155[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (11))){
var state_42048__$1 = state_42048;
var statearr_42100_42156 = state_42048__$1;
(statearr_42100_42156[(2)] = null);

(statearr_42100_42156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (9))){
var inst_41967 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42101_42157 = state_42048__$1;
(statearr_42101_42157[(2)] = inst_41967);

(statearr_42101_42157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (5))){
var inst_41938 = (state_42048[(7)]);
var inst_41937 = (state_42048[(9)]);
var inst_41940 = (inst_41938 < inst_41937);
var inst_41941 = inst_41940;
var state_42048__$1 = state_42048;
if(cljs.core.truth_(inst_41941)){
var statearr_42102_42158 = state_42048__$1;
(statearr_42102_42158[(1)] = (7));

} else {
var statearr_42103_42159 = state_42048__$1;
(statearr_42103_42159[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (14))){
var inst_41948 = (state_42048[(26)]);
var inst_41957 = cljs.core.first.call(null,inst_41948);
var inst_41958 = figwheel.client.file_reloading.eval_body.call(null,inst_41957);
var inst_41959 = cljs.core.next.call(null,inst_41948);
var inst_41935 = inst_41959;
var inst_41936 = null;
var inst_41937 = (0);
var inst_41938 = (0);
var state_42048__$1 = (function (){var statearr_42104 = state_42048;
(statearr_42104[(7)] = inst_41938);

(statearr_42104[(32)] = inst_41958);

(statearr_42104[(8)] = inst_41935);

(statearr_42104[(9)] = inst_41937);

(statearr_42104[(10)] = inst_41936);

return statearr_42104;
})();
var statearr_42105_42160 = state_42048__$1;
(statearr_42105_42160[(2)] = null);

(statearr_42105_42160[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (26))){
var inst_42007 = (state_42048[(19)]);
var inst_42010 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42007);
var state_42048__$1 = state_42048;
var statearr_42106_42161 = state_42048__$1;
(statearr_42106_42161[(2)] = inst_42010);

(statearr_42106_42161[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (16))){
var inst_41974 = (state_42048[(22)]);
var inst_41976 = (function (){var all_files = inst_41974;
return ((function (all_files,inst_41974,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files){
return (function (p1__41719_SHARP_){
return cljs.core.update_in.call(null,p1__41719_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_41974,state_val_42049,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files))
})();
var inst_41977 = cljs.core.map.call(null,inst_41976,inst_41974);
var state_42048__$1 = state_42048;
var statearr_42107_42162 = state_42048__$1;
(statearr_42107_42162[(2)] = inst_41977);

(statearr_42107_42162[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (30))){
var state_42048__$1 = state_42048;
var statearr_42108_42163 = state_42048__$1;
(statearr_42108_42163[(2)] = null);

(statearr_42108_42163[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (10))){
var inst_41948 = (state_42048[(26)]);
var inst_41950 = cljs.core.chunked_seq_QMARK_.call(null,inst_41948);
var state_42048__$1 = state_42048;
if(inst_41950){
var statearr_42109_42164 = state_42048__$1;
(statearr_42109_42164[(1)] = (13));

} else {
var statearr_42110_42165 = state_42048__$1;
(statearr_42110_42165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (18))){
var inst_41980 = (state_42048[(12)]);
var inst_41981 = (state_42048[(13)]);
var inst_41980__$1 = (state_42048[(2)]);
var inst_41981__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_41980__$1);
var inst_41982 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41981__$1);
var state_42048__$1 = (function (){var statearr_42111 = state_42048;
(statearr_42111[(12)] = inst_41980__$1);

(statearr_42111[(13)] = inst_41981__$1);

return statearr_42111;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42048__$1,(19),inst_41982);
} else {
if((state_val_42049 === (37))){
var inst_42043 = (state_42048[(2)]);
var state_42048__$1 = state_42048;
var statearr_42112_42166 = state_42048__$1;
(statearr_42112_42166[(2)] = inst_42043);

(statearr_42112_42166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (8))){
var inst_41935 = (state_42048[(8)]);
var inst_41948 = (state_42048[(26)]);
var inst_41948__$1 = cljs.core.seq.call(null,inst_41935);
var state_42048__$1 = (function (){var statearr_42113 = state_42048;
(statearr_42113[(26)] = inst_41948__$1);

return statearr_42113;
})();
if(inst_41948__$1){
var statearr_42114_42167 = state_42048__$1;
(statearr_42114_42167[(1)] = (10));

} else {
var statearr_42115_42168 = state_42048__$1;
(statearr_42115_42168[(1)] = (11));

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
});})(c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files))
;
return ((function (switch__35908__auto__,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35909__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35909__auto____0 = (function (){
var statearr_42119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42119[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35909__auto__);

(statearr_42119[(1)] = (1));

return statearr_42119;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35909__auto____1 = (function (state_42048){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_42048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e42120){if((e42120 instanceof Object)){
var ex__35912__auto__ = e42120;
var statearr_42121_42169 = state_42048;
(statearr_42121_42169[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42170 = state_42048;
state_42048 = G__42170;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35909__auto__ = function(state_42048){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35909__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35909__auto____1.call(this,state_42048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35909__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35909__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files))
})();
var state__35972__auto__ = (function (){var statearr_42122 = f__35971__auto__.call(null);
(statearr_42122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto__);

return statearr_42122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto__,map__41923,map__41923__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__41924,map__41924__$1,msg,files))
);

return c__35970__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42173,link){
var map__42175 = p__42173;
var map__42175__$1 = ((cljs.core.seq_QMARK_.call(null,map__42175))?cljs.core.apply.call(null,cljs.core.hash_map,map__42175):map__42175);
var file = cljs.core.get.call(null,map__42175__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__42175,map__42175__$1,file){
return (function (p1__42171_SHARP_,p2__42172_SHARP_){
if(cljs.core._EQ_.call(null,p1__42171_SHARP_,p2__42172_SHARP_)){
return p1__42171_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__42175,map__42175__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42179){
var map__42180 = p__42179;
var map__42180__$1 = ((cljs.core.seq_QMARK_.call(null,map__42180))?cljs.core.apply.call(null,cljs.core.hash_map,map__42180):map__42180);
var match_length = cljs.core.get.call(null,map__42180__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42180__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42176_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42176_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__42182 = arguments.length;
switch (G__42182) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__42184){
var map__42186 = p__42184;
var map__42186__$1 = ((cljs.core.seq_QMARK_.call(null,map__42186))?cljs.core.apply.call(null,cljs.core.hash_map,map__42186):map__42186);
var f_data = map__42186__$1;
var file = cljs.core.get.call(null,map__42186__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__42186__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__32013__auto__ = request_url;
if(cljs.core.truth_(or__32013__auto__)){
return or__32013__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42187,files_msg){
var map__42209 = p__42187;
var map__42209__$1 = ((cljs.core.seq_QMARK_.call(null,map__42209))?cljs.core.apply.call(null,cljs.core.hash_map,map__42209):map__42209);
var opts = map__42209__$1;
var on_cssload = cljs.core.get.call(null,map__42209__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__42210_42230 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__42211_42231 = null;
var count__42212_42232 = (0);
var i__42213_42233 = (0);
while(true){
if((i__42213_42233 < count__42212_42232)){
var f_42234 = cljs.core._nth.call(null,chunk__42211_42231,i__42213_42233);
figwheel.client.file_reloading.reload_css_file.call(null,f_42234);

var G__42235 = seq__42210_42230;
var G__42236 = chunk__42211_42231;
var G__42237 = count__42212_42232;
var G__42238 = (i__42213_42233 + (1));
seq__42210_42230 = G__42235;
chunk__42211_42231 = G__42236;
count__42212_42232 = G__42237;
i__42213_42233 = G__42238;
continue;
} else {
var temp__4423__auto___42239 = cljs.core.seq.call(null,seq__42210_42230);
if(temp__4423__auto___42239){
var seq__42210_42240__$1 = temp__4423__auto___42239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42210_42240__$1)){
var c__32798__auto___42241 = cljs.core.chunk_first.call(null,seq__42210_42240__$1);
var G__42242 = cljs.core.chunk_rest.call(null,seq__42210_42240__$1);
var G__42243 = c__32798__auto___42241;
var G__42244 = cljs.core.count.call(null,c__32798__auto___42241);
var G__42245 = (0);
seq__42210_42230 = G__42242;
chunk__42211_42231 = G__42243;
count__42212_42232 = G__42244;
i__42213_42233 = G__42245;
continue;
} else {
var f_42246 = cljs.core.first.call(null,seq__42210_42240__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_42246);

var G__42247 = cljs.core.next.call(null,seq__42210_42240__$1);
var G__42248 = null;
var G__42249 = (0);
var G__42250 = (0);
seq__42210_42230 = G__42247;
chunk__42211_42231 = G__42248;
count__42212_42232 = G__42249;
i__42213_42233 = G__42250;
continue;
}
} else {
}
}
break;
}

var c__35970__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35970__auto__,map__42209,map__42209__$1,opts,on_cssload){
return (function (){
var f__35971__auto__ = (function (){var switch__35908__auto__ = ((function (c__35970__auto__,map__42209,map__42209__$1,opts,on_cssload){
return (function (state_42220){
var state_val_42221 = (state_42220[(1)]);
if((state_val_42221 === (1))){
var inst_42214 = cljs.core.async.timeout.call(null,(100));
var state_42220__$1 = state_42220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42220__$1,(2),inst_42214);
} else {
if((state_val_42221 === (2))){
var inst_42216 = (state_42220[(2)]);
var inst_42217 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_42218 = on_cssload.call(null,inst_42217);
var state_42220__$1 = (function (){var statearr_42222 = state_42220;
(statearr_42222[(7)] = inst_42216);

return statearr_42222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42220__$1,inst_42218);
} else {
return null;
}
}
});})(c__35970__auto__,map__42209,map__42209__$1,opts,on_cssload))
;
return ((function (switch__35908__auto__,c__35970__auto__,map__42209,map__42209__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__35909__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__35909__auto____0 = (function (){
var statearr_42226 = [null,null,null,null,null,null,null,null];
(statearr_42226[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__35909__auto__);

(statearr_42226[(1)] = (1));

return statearr_42226;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__35909__auto____1 = (function (state_42220){
while(true){
var ret_value__35910__auto__ = (function (){try{while(true){
var result__35911__auto__ = switch__35908__auto__.call(null,state_42220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35911__auto__;
}
break;
}
}catch (e42227){if((e42227 instanceof Object)){
var ex__35912__auto__ = e42227;
var statearr_42228_42251 = state_42220;
(statearr_42228_42251[(5)] = ex__35912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42252 = state_42220;
state_42220 = G__42252;
continue;
} else {
return ret_value__35910__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__35909__auto__ = function(state_42220){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__35909__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__35909__auto____1.call(this,state_42220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__35909__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__35909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__35909__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__35909__auto__;
})()
;})(switch__35908__auto__,c__35970__auto__,map__42209,map__42209__$1,opts,on_cssload))
})();
var state__35972__auto__ = (function (){var statearr_42229 = f__35971__auto__.call(null);
(statearr_42229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35970__auto__);

return statearr_42229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35972__auto__);
});})(c__35970__auto__,map__42209,map__42209__$1,opts,on_cssload))
);

return c__35970__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map