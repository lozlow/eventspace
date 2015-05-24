// Compiled by ClojureScript 0.0-3269 {}
goog.provide('eventspace.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"select-space","select-space",-912501586),(function (db,p__39832){
var vec__39833 = p__39832;
var _ = cljs.core.nth.call(null,vec__39833,(0),null);
var id = cljs.core.nth.call(null,vec__39833,(1),null);
cljs.core.println.call(null,"GET",[cljs.core.str("/space/"),cljs.core.str(id),cljs.core.str("/feed")].join(''));

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null),id);
}));

//# sourceMappingURL=handlers.js.map