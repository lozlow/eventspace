(ns eventspace.core
  (:require [eventspace.handler :refer [app init destroy]]
            [org.httpkit.server :refer [run-server]]
            [ring.middleware.reload :as reload]
            [environ.core :refer [env]])
  (:gen-class))

(defonce server (atom nil))

; (defn parse-port [port]
;   (Integer/parseInt (or port (env :port) "3000")))

(defn start-server [routes port]
  (let [port (Integer. (or port 3000))]
    (init)
    (print "Starting web server on port" port ".\n")
    (reset! server (run-server routes {:port port}))))

(defn stop-server []
  (when @server
    (destroy)
    (@server)
    (reset! server nil)))

(defn -main [& [port]]
  (do
    (.addShutdownHook (Runtime/getRuntime) (Thread. stop-server))
    (start-server app port)))
