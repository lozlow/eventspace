(ns eventspace.space.feed-item
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [eventspace.util :refer [with-focus]]))

(defmulti feed-item-content :type)

(defmethod feed-item-content :message
  [{:keys [author content date]}]
  [:p.FeedItem__content content])

(defn feed-item-comment-input
  []
  (let [entering (atom false)]
    (fn []
      [:div.FeedItemCommentBox
        (if-not @entering
          [:button {:on-click #(reset! entering true)} "Comment"]
          [:div
            [with-focus [:textarea.FeedItemCommentBox__content {:tab-index 1}]]
            [:button {:on-click #(reset! entering false)} "Cancel"]
            [:button {:tab-index 2} "Post"]])])))

(defn feed-item-comment
  [{:keys [author date content] :as comment}]
  [:span content])

(defn feed-item
  [{:keys [author date] :as item}]
  [:article.FeedItem
    [:header
      [:img.FeedItem__profile-image {:src "/img/profile.jpg"}]
      [:span.FeedItem__author author]
      [:span.FeedItem__date date]]
    [feed-item-content item]
    [feed-item-comment-input]
    (when-let [comments (:children item)]
      [:section
        [:ol.FeedItem__comments
          (for [comment comments]
            ^{:key (:id comment)} [:li.FeedItem__comment [feed-item-comment comment]])]])])
