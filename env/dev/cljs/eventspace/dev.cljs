(ns eventspace.dev
  (:require [eventspace.core :as core]))
            ;[weasel.repl :as weasel]))

(enable-console-print!)

;(weasel/connect "ws://localhost:9001" :verbose true)

(core/init!)
