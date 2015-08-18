(ns eventspace.widgets.button-strip
  (:require [eventspace.widgets.button :refer [button]]
            [eventspace.mapply :refer [mapply]]))

(defn button-strip
  [specs]
  (into [:div.ButtonStrip]
        (for [spec specs]
          [(mapply button spec)])))
