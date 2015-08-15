(ns eventspace.subscriptions.space
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [subscribe dispatch register-sub]]))

(register-sub
  :spaces-list
  (fn [db _]
    (reaction (:spaces @db))))

(register-sub
  :selected-space-id
  (fn [db _]
    (reaction (:selected-space @db))))

(register-sub
  :selected-space
  (fn [_]
    (let [selected-id (subscribe [:selected-space-id])
          spaces (subscribe [:spaces-list])]
      (reaction (->> @spaces
                     (filter #(= (:id %) @selected-id))
                     first)))))

(register-sub
  :feed
  (fn [db _]
    (let [selected (subscribe [:selected-space])]
      (reaction (:feed @selected)))))
