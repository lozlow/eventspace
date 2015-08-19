(ns eventspace.subscriptions.space
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [subscribe register-sub]]))

(register-sub
  :space/spaces-list
  (fn [db _]
    (reaction (:spaces @db))))

(register-sub
  :space/selected-space-id
  (fn [db _]
    (reaction (:selected-space @db))))

(register-sub
  :space/selected-space
  (fn [_]
    (let [selected-id (subscribe [:space/selected-space-id])
          spaces (subscribe [:space/spaces-list])]
      (reaction (->> @spaces
                     (filter #(= (:id %) @selected-id))
                     first)))))

(register-sub
  :space/feed
  (fn [db _]
    (let [selected (subscribe [:space/selected-space])]
      (reaction (:feed @selected)))))
