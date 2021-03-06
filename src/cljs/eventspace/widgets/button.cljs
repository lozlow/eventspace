(ns eventspace.widgets.button
  (:require [reagent.core :refer [atom]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn button
  [& args]
  (let [{:keys [label on-click modifier attributes class]
         :or {on-click (fn [])
              class "Button"}} args
        on-click* (fn [event] (-> event .-target .blur) (on-click event))]
    (fn []
      [:button (merge {:class (str class (when modifier (str " " class modifier)))
                       :on-click on-click*} attributes) label])))
