(ns eventspace.subscriptions.modal
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [subscribe register-sub]]))

(register-sub
  :modal/modal-showing
  (fn [db _]
    (reaction (:modal @db))))
