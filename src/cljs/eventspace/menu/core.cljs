(ns eventspace.menu.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [subscribe dispatch]]
            [eventspace.util :refer [gravatar-url]]
            [clojure.string :refer [capitalize]]))

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
                              :on-click #(dispatch [:space/select-space id])} title]]))))

(defn spaces-list
  []
  (let [spaces (subscribe [:spaces-list])]
    (fn []
      [:div
        [:ul.pure-menu-list
        (for [space @spaces]
          ^{:key (:id space)} [spaces-item space])]])))

(defn new-space
  []
  (letfn [(clickfn []
            (println "Create space"))]
    [:a.pure-menu-link {:on-click clickfn} "Create space"]))

(defn user-panel
  []
  (let [user (subscribe [:logged-in-user])]
    (fn []
      (when @user
        [:div.UserPanel
          [:img.UserPanel__profile-image {:src (gravatar-url (:email @user) :size 32)}]
          [:span (str "Logged in as " (capitalize (:user-id @user)))]]))))

(defn render-menu
  []
  [:div.pure-menu
    [header]
    [spaces-list]
    [new-space]
    [user-panel]])
