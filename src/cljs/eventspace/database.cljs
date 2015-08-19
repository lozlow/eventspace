(ns eventspace.database
    (:require [re-frame.core :refer [register-handler]]))

(def default
    {:spaces [] ;[{:title "Cricket" :id 18347125 :summary "Some stuff about Cricket"}
                ;{:title "Tennis" :id 18347123 :summary "Some stuff about Tennis"}
                ;{:title "Board Games" :id 18341125 :summary "Some stuff about Board Games"}]
     :selected-space nil
     :logged-in false
     :modal :login})

(register-handler
  :initialise-database
  (fn [_ _]
    default))
