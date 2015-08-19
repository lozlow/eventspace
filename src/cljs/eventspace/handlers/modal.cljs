(ns eventspace.handlers.modal
  (:require [re-frame.core :refer [dispatch register-handler]]))

(register-handler
  :modal/set-modal
  (fn [db [_ modal]]
    (assoc-in db [:modal] modal)))
