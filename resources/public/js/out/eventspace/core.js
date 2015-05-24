// Compiled by ClojureScript 0.0-3269 {}
goog.provide('eventspace.core');
goog.require('cljs.core');
goog.require('eventspace.menu.core');
goog.require('eventspace.handlers');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('eventspace.space.core');
goog.require('eventspace.subscriptions');
goog.require('goog.History');
goog.require('eventspace.database');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
eventspace.core.mount_components = (function eventspace$core$mount_components(){
reagent.core.render_component.call(null,eventspace.menu.core.render_menu,document.getElementById("menu"));

return reagent.core.render_component.call(null,eventspace.space.core.render_space,document.getElementById("app"));
});
eventspace.core.init_BANG_ = (function eventspace$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-database","initialise-database",1888807928)], null));

return eventspace.core.mount_components.call(null);
});
goog.exportSymbol('eventspace.core.init_BANG_', eventspace.core.init_BANG_);

//# sourceMappingURL=core.js.map