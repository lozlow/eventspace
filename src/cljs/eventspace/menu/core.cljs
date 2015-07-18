(ns eventspace.menu.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [subscribe dispatch]]))

(defn header
  []
  [:a.pure-menu-heading "eventspace"])

(defn spaces-item
  [{:keys [id title]}]
  (let [selected-space (subscribe [:selected-space])]
    (fn [{:keys [id title]}]
      (let [selected-id (:id @selected-space)]
        [:li.pure-menu-item
          [:a.pure-menu-link {:class (when (= selected-id id) "active")
                              :on-click #(dispatch [:select-space id])} title]]))))

(defn spaces-list
  []
  (let [spaces (subscribe [:spaces-list])]
    (fn []
      [:ul.pure-menu-list
        (for [space @spaces]
          ^{:key (:id space)} [spaces-item space])])))

(defn new-space
  []
  (let []
    [:a.pure-menu-link {:on-click clickfn} "Create space"]))

(defn render-menu
  []
  [:div.pure-menu
    [header]
    [spaces-list]
    [new-space]])
