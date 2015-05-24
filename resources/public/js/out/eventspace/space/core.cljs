(ns eventspace.space.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [subscribe dispatch]]))

(defmulti feed-item :type)

(defmethod feed-item :message
  [{:keys [author content date]}]
  [:article.FeedItem.FeedItem--message
    [:img.FeedItem__profile-image {:src "/img/profile.jpg"}]
    [:span.FeedItem__date date]
    [:span.FeedItem__author author]
    [:span.FeedItem__author content]])

(defn feed-panel
  []
  (let [feed-items (subscribe [:feed])]
    (fn []
      [:div.FeedPanel
        (println @feed-items)
        (for [item @feed-items]
          ^{:key (:id item)} [feed-item item])])))

(defn loading-panel
  []
  [:div.LoadingPanel
    [:img.LoadingPanel__spinner {:src "/img/puff.svg"}]])

(defn title
  []
  (let [space (subscribe [:selected-space])]
    (println @space)
    (fn []
      [:h1 (:title @space)])))

(defn render-space
  []
  [:div
    ; [loading-panel]
    [title]
    [feed-panel]])
