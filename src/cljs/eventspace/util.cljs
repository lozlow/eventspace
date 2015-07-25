(ns eventspace.util
  (:require [reagent.core :as reagent]
            [cljs-hash.goog :as hash])
  (:use     [clojure.string :only [trim lower-case]]))

(def with-focus
  (with-meta identity
    {:component-did-mount #(.focus (reagent/dom-node %))}))

(defn gravatar-url
  [email & {:keys [fallback size]
            :or {fallback :mm
                 size 64}
            :as input}]
  (str "//www.gravatar.com/avatar/"
       (hash/md5-hex (lower-case (trim email)))
       "?s=" size
       "&d=" (name fallback)))
