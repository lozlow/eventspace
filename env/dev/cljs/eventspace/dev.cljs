(ns eventspace.dev
  (:require [eventspace.core :as core]))

(enable-console-print!)

(defn ^:export init
  []
  (core/init!))
