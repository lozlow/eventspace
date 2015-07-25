(ns eventspace.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [subscribe dispatch-sync]]
            [eventspace.menu.core :as menu]
            [eventspace.space.core :as space]
            [eventspace.database]
            [eventspace.subscriptions]
            [eventspace.handlers]))

(enable-console-print!)

(defn render-main
  []
  (let [space (subscribe [:selected-space])]
    (fn []
      (if @space
        [space/render-space]
        [space/loading-panel]))))

;; -------------------------
;; Initialize app
(defn mount-components []
  (reagent/render-component [menu/render-menu] (.getElementById js/document "menu"))
  (reagent/render-component [render-main] (.getElementById js/document "app")))

(defn ^:export init! []
  (dispatch-sync [:initialise-database])
  (mount-components))
