(ns eventspace.subscriptions
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [subscribe dispatch register-sub]]))

(register-sub
  :spaces-list
  (fn [db _]
    (reaction (:spaces @db))))

(register-sub
  :selected-space
  (fn [db _]
    (let [id (reaction (:selected-space @db))
          spaces (:spaces @db)]
      (reaction (->> spaces
                     (filter #(= (:id %) @id))
                     first)))))


(register-sub
  :feed
  (fn [db _]
    (reaction (:feed @db))))

(register-sub
  :scroll-top
  (fn [db _]
    (reaction (:scroll-top @db))))
