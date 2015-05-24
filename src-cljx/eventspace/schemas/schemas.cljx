(ns eventspace.schemas.schemas
  (:require [schema.core :as s #+cljs(:include-macros true)]))

(def Data
  "A schema for a nested data type"
  {:a {:b s/Str
       :c s/Int}
   :d [{:e s/Keyword
        :f [s/Num]}]})

(defn someting
  []
  )
