(ns eventspace.util
  (:require [reagent.core :as reagent]))

(def with-focus
  (with-meta identity
    {:component-did-mount #(.focus (reagent/dom-node %))}))
