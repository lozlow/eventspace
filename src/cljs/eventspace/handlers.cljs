(ns eventspace.handlers
  (:require [re-frame.core :refer [dispatch register-handler]]))

(register-handler
  :select-space
  (fn [db [_ id]]
    (println "GET" (str "/space/" id "/feed"))
    (assoc-in db [:selected-space] id)))

(register-handler
  :update-scroll-top
  (fn [db [_ offset]]
    (assoc-in db [:scroll-top] offset)))
