(ns eventspace.prod
  (:gen-class)
  (:require [reloaded.repl :refer [system init start stop go reset]]
            [eventspace.systems :refer [prod-system]]))

(defn -main
  "Start the application"
  []
  (reloaded.repl/set-init! prod-system)
  (go))
