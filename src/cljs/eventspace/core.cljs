(ns eventspace.core
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [subscribe dispatch-sync]]
            [eventspace.menu.core :as menu]
            [eventspace.space.core :as space]
            [eventspace.dashboard.core :as dashboard]
            [eventspace.modal.core :as modal]
            [eventspace.database]
            [eventspace.subscriptions.core]
            [eventspace.handlers.core]))

(defn render-main
  []
  (let [logged-in (subscribe [:user/logged-in-user])
        selected-space-id (subscribe [:space/selected-space-id])
        modal-showing (subscribe [:modal/modal-showing])]
    (fn []
      (if-not @modal-showing
        (if @selected-space-id
          [space/render-space]
          [dashboard/render-dashboard])
        [modal/render-modal @modal-showing]))))

;; -------------------------
;; Initialize app
(defn mount-components []
  (reagent/render-component [menu/render-menu] (.getElementById js/document "menu"))
  (reagent/render-component [render-main] (.getElementById js/document "app")))

(defn init! []
  (dispatch-sync [:initialise-database])
  (mount-components))
