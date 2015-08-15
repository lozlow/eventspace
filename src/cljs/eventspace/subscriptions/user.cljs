(ns eventspace.subscriptions.user
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [subscribe dispatch register-sub]]))

(register-sub
  :logged-in-user
  (fn [db _]
    (reaction (:logged-in @db))))
