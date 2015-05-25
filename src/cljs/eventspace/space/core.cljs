(ns eventspace.space.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [eventspace.space.feed-item :as fi]
            [eventspace.util :refer [with-focus]]))

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
  (let [space (subscribe [:selected-space])]
    (fn []
      [:h1 (:title @space)])))

(defn render-space
  []
  [:div
    ; [loading-panel]
    [title]
    [create-post]
    [feed-panel]])
