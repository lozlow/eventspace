(ns eventspace.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [subscribe dispatch-sync]]
            [eventspace.menu.core :as menu]
            [eventspace.space.core :as space]
            [eventspace.dashboard.core :as dashboard]
            [eventspace.database]
            [eventspace.subscriptions.core]
            [eventspace.handlers.core]))

(defn render-main
  []
  (let [logged-in (subscribe [:user/logged-in-user])
        selected-space-id (subscribe [:space/selected-space-id])]
    (fn []
      (if @logged-in
        (if @selected-space-id
          [space/render-space]
          [dashboard/render-dashboard])
        [space/loading-panel]))))

;; -------------------------
;; Initialize app
(defn mount-components []
  (reagent/render-component [menu/render-menu] (.getElementById js/document "menu"))
  (reagent/render-component [render-main] (.getElementById js/document "app")))

(defn init! []
  (dispatch-sync [:initialise-database])
  (mount-components))
