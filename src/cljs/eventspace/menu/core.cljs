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
  (let [selected-space-id (subscribe [:space/selected-space-id])]
    (fn [{:keys [id title]}]
      [:li.pure-menu-item
        [:a.pure-menu-link {:class (when (= @selected-space-id id) "active")
                            :on-click #(dispatch [:space/select-space id])} title]])))

(defn spaces-list
  []
  (let [spaces (subscribe [:space/spaces-list])]
    (fn []
      [:div
        [:ul.pure-menu-list
        (for [space @spaces]
          ^{:key (:id space)} [spaces-item space])]])))

(defn dashboard-link
  []
  (let [selected-space-id (subscribe [:space/selected-space-id])
        click-fn (fn []
                   (dispatch [:space/select-space nil]))]
    (fn []
      [:a.pure-menu-link {:class (when (= @selected-space-id nil) "active") :on-click click-fn} "Home"])))

(defn new-space
  []
  (letfn [(click-fn []
            (println "Create space"))]
    [:a.pure-menu-link {:on-click click-fn} "Create space"]))

(defn user-panel
  []
  (let [user (subscribe [:user/logged-in-user])]
    (fn []
      (when @user
        [:div.UserPanel
          [:img.UserPanel__profile-image {:src (gravatar-url (:email @user) :size 32)}]
          [:span (str "Logged in as " (capitalize (:user-id @user)))]]))))

(defn render-menu
  []
  [:div.pure-menu
    [header]
    [dashboard-link]
    [spaces-list]
    [new-space]
    [user-panel]])
