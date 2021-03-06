(ns eventspace.space.core
  (:require-macros [reagent.ratom :refer [reaction]]
                   [kioo.reagent :refer [defsnippet deftemplate]])
  (:require [reagent.core :refer [atom] :as reagent]
            [kioo.reagent :refer [content substitute]]
            [re-frame.core :refer [subscribe dispatch]]
            [eventspace.space.feed-item :as fi]
            [eventspace.util :refer [with-focus]]
            [goog.dom :as dom]
            [goog.events :as events]
            [eventspace.widgets.button :refer [button]]
            [eventspace.widgets.button-strip :refer [button-strip]])
  (:use [eventspace.widgets.tabbed-pane :only [tabbed-pane]]))

(defn feed-panel
  []
  (let [feed-items (subscribe [:space/feed])]
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
          [button-strip [{:on-click #(reset! creating :message) :label "+ Message" :modifier "--larger"}
                         {:on-click #(reset! creating :event) :label "+ Event" :modifier "--larger"}
                         {:label "+ Something Else" :modifier "--larger"}]]
          (when-let [type @creating]
            [:div.NewPost__details
              [new-post type]
              [button-strip [{:on-click #(reset! creating nil) :label "Cancel"} {:label "Post"}]]])]])))

(deftemplate space-header
  "space-header.html"
  [title summary tab-pane]
  {[:.SpaceHeader__title :> :h1] (content title)
   [:.SpaceHeader__summary] (content summary)
   [:.SpaceHeader__tabs] (content tab-pane)})

(defn title
  []
  (let [space (subscribe [:space/selected-space])
        tabs [{:id "feed" :label "Feed"}
              {:id "events" :label "Events"}
              {:id "members" :label "Members"}]
        selected (atom (:id (first tabs)))]
    (fn []
      [space-header (:title @space)
                    (:summary @space)
                    [tabbed-pane :tabs tabs :selected selected :on-change (fn [new] (println "hello" new))]])))

(defn render-space
  []
  [:div
    [title]
    [:div.content
      [create-post]
      [feed-panel]]])
