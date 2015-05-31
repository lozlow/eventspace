(ns eventspace.core
  (:require [eventspace.handler :refer [app init destroy]]
            [org.httpkit.server :refer [run-server]]
            [ring.middleware.reload :as reload]
            [environ.core :refer [env]])
  (:gen-class))

; (defonce server (atom nil))

; (defn parse-port [port]
;   (Integer/parseInt (or port (env :port) "3000")))

; (defn start-server [port routes]
;   (init)
;   (reset! server
;           (run-jetty
;             (if (env :dev) (reload/wrap-reload #'app) app)
;             {:port port
;              :join? false})))
;
(defn stop-server []
  ; (when @server
    (destroy))
    ; (.stop @server)
    ; (reset! server nil)))
;



; (defn -main [& [port]]
;   (let [port (parse-port port)]
;     (.addShutdownHook (Runtime/getRuntime) (Thread. stop-server))
;     (start-server port)))

(defn run [handler & [port]]
  (defonce ^:private server
    (let [port (Integer. (or port 3000))]
      (print "Starting web server on port" port ".\n")
      (run-server app {:port port})))
  server)

(defn -main [& [port]]
  (do
    (.addShutdownHook (Runtime/getRuntime) (Thread. stop-server))
    (run app port)))
