(ns eventspace.space.core
  (:require-macros [reagent.ratom :refer [reaction]]
                   [kioo.reagent :refer [defsnippet deftemplate]])
  (:require [reagent.core :refer [atom] :as reagent]
            [kioo.reagent :refer [content substitute]]
            [re-frame.core :refer [subscribe dispatch]]
            [eventspace.space.feed-item :as fi]
            [eventspace.util :refer [with-focus]]
            [goog.dom :as dom]
            [goog.events :as events])
  (:use [eventspace.widgets.tabbed-pane :only [tabbed-pane]]))

(defn feed-panel
  []
  (let [space (subscribe [:selected-space])
        feed-items (subscribe [:feed])]
    (fn []
      (println @space)
      (println "feed" @feed-items)
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
    [:button {:on-click #(dispatch [:comms/login {:user "pete" :password "password"}])} "Login"]
    [:img.LoadingPanel__spinner {:src "/img/puff.svg"}]])

(deftemplate space-header
  "space-header.html"
  [title summary tab-pane]
  {[:.SpaceHeader__title :> :h1] (content title)
   [:.SpaceHeader__summary] (content summary)
   [:.SpaceHeader__tabs] (content tab-pane)})

(defn title
  []
  (let [space (subscribe [:selected-space])
        tabs [{:id "feed" :label "Feed"}
              {:id "events" :label "Events"}
              {:id "members" :label "Members"}]
        selected (atom (:id (first tabs)))]
    (fn []
      (println "Space is" @space)
      [space-header (:title @space)
                    (:summary @space)
                    [tabbed-pane :tabs tabs :selected selected :on-change (fn [new] (println "hello" new))]])))

(defn render-space
  []
  [:div
    ; [loading-panel]
    [title]
    [:div.content
      [create-post]
      [feed-panel]]])
