(ns eventspace.space.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [eventspace.space.feed-item :as fi]
            [eventspace.util :refer [with-focus]])
  (:use [eventspace.widgets.tabbed-pane :only [tabbed-pane]]))

(defn feed-panel
  []
  (let [feed-items (subscribe [:feed])]
    (fn []
      [:div.FeedPanel
        (for [item @feed-items]
          ^{:key (:id item)} [fi/feed-item item])])))

(defmulti new-post identity)

(defmethod new-post :message
  [_]
  [with-focus [:textarea.NewPost__content]])

(defmethod new-post :event
  [_]
  [:span "Event"])

(defn create-post
  []
  (let [creating (atom nil)]
    (fn []
      [:div.NewPost
        [:div.NewPost__buttons
          [:button.NewPost__button {:on-click #(reset! creating :message)} "+ Message"]
          [:button.NewPost__button {:on-click #(reset! creating :event)} "+ Event"]
          (when-let [type @creating]
            [:div.NewPost__details
              [new-post type]
              [:button.NewPost__button.NewPost__button--cancel {:on-click #(reset! creating nil)} "Cancel"]
              [:button.NewPost__button "Post"]])]])))

(defn loading-panel
  []
  [:div.LoadingPanel
    [:img.LoadingPanel__spinner {:src "/img/puff.svg"}]])

(defn title
  []
  (let [space (subscribe [:selected-space])
        tabs [{:id "feed" :label "Feed"}
              {:id "events" :label "Events"}
              {:id "members" :label "Members"}]
        selected (atom (:id (first tabs)))]
    (fn []
      [:div.SpaceHeader
        [:div.SpaceHeader__title
          [:h1 (:title @space)]]
        [:div.SpaceHeader__tabs
          [tabbed-pane :tabs tabs :selected selected :on-change (fn [new] (println "hello" new)) :style {:max-width 800 :margin "0 auto"}]]])))

(defn render-space
  []
  [:div
    ; [loading-panel]
    [title]
    [:div.content
      [create-post]
      [feed-panel]]])
