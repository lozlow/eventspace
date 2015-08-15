(ns eventspace.handlers.space
  (:require [eventspace.handlers.comms]
            [re-frame.core :refer [dispatch register-handler]]))

(register-handler
  :space/select-space
  (fn [db [_ id]]
    (assoc-in db [:selected-space] id)))

(register-handler
  :space/set-space-list
  (fn [db [_ data]]
    (assoc-in db [:spaces] data)))
