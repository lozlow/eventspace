(ns eventspace.database
    (:require [re-frame.core :refer [register-handler]]))

(def default
    {:spaces [{:title "Cricket" :id 18347125}
              {:title "Tennis" :id 18347123}
              {:title "Board Games" :id 18341125}]
     :selected-space nil
     :feed [{:id 12315 :type :message :author "Sam" :date "20/5/2015 19:12:21" :content "Nam tempor porta turpis, quis vehicula nibh viverra vitae. Aliquam erat volutpat. Nunc ullamcorper tincidunt feugiat. Curabitur sed risus id tortor finibus malesuada. Fusce luctus magna sit amet diam ullamcorper venenatis." :children []}
            {:id 21375 :type :message :author "Chris" :date "17/7/2015 19:12:21" :content "Suspendisse potenti. Duis dictum gravida viverra. Integer luctus tempor massa, id tempor felis consectetur vel. Curabitur ut lacus eu risus mollis aliquam sit amet id nisl. Quisque egestas malesuada dignissim." :children [{:id 21375 :type :message :author "Sam" :date "20/7/2015 19:12:21" :content "Hello"}]}]})

(register-handler
  :initialise-database
  (fn [_ _]
    default))
