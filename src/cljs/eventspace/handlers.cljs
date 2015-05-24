(ns eventspace.handlers
  (:require [re-frame.core :refer [dispatch register-handler]]))

(register-handler
  :select-space
  (fn [db [_ id]]
    (println "GET" (str "/space/" id "/feed"))
    (assoc-in db [:selected-space] id)))
