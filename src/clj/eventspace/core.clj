(ns eventspace.core
  (:require [clojure.string :as str]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.anti-forgery :refer :all]
            [ring.middleware.session.cookie :refer (cookie-store)]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.util.response :refer [response content-type]]
            [compojure.core :as comp :refer (defroutes GET POST)]
            [compojure.route :as route]
            [hiccup.core :as hiccup]
            [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
            [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
            [taoensso.sente :as sente]
            [org.httpkit.server :as http-kit]
            [reloaded.repl :refer [system]]
            [cheshire.core :refer :all]
            [ring.middleware.gzip :refer [wrap-gzip]]
            [selmer.parser :as parser]))

; (sente/set-logging-level! :trace) ; Uncomment for more logging

(parser/set-resource-path! (clojure.java.io/resource "templates"))

(defn chsk-send!
  [& args]
  (apply (:chsk-send! (:sente system)) args))

(defn render [template]
  (-> template
      (parser/render-file {:csrf-token *anti-forgery-token*})
      response
      (content-type "text/html; charset=utf-8")))

(defn login!
  "Here's where you'll add your server-side login/auth procedure (Friend, etc.).
  In our simplified example we'll just always successfully authenticate the user
  with whatever user-id they provided in the auth request."
  [ring-request]
  (let [{:keys [session params]} ring-request
        {:keys [user-id]} params]
    (debugf "Login request: %s" params)
    {:status 200 :session (assoc session :uid user-id)}))

(defroutes my-routes
  (GET "/" [] (render "index.html"))
  (GET  "/chsk" req ;((:ring-ajax-get-or-ws-handshake (:sente system)) req))
    (fn [req]
      (if (:uid (:session req))
        (do (println "Logged in as" (:uid (:session req))) ((:ring-ajax-get-or-ws-handshake (:sente system)) req))
        {:status 401})))
  (POST "/chsk" req ((:ring-ajax-post (:sente system)) req))
  (POST "/login" req (login! req))
  (route/not-found "<h1>Page not found</h1>"))

(def my-ring-handler
  (let [ring-defaults-config
        (-> site-defaults
            (assoc-in [:static :resources] "public")
            (assoc-in [:security :anti-forgery] {:read-token (fn [req] (-> req :params :csrf-token))}))]

    ;; NB: Sente requires the Ring `wrap-params` + `wrap-keyword-params`
    ;; middleware to work. These are included with
    ;; `ring.middleware.defaults/wrap-defaults` - but you'll need to ensure
    ;; that they're included yourself if you're not using `wrap-defaults`.
    ;;
    (-> my-routes
      (wrap-defaults ring-defaults-config)
      (wrap-gzip))))

; ;;;; Example: broadcast server>user
;
; ;; As an example of push notifications, we'll setup a server loop to broadcast
; ;; an event to _all_ possible user-ids every 10 seconds:
; (defn start-broadcaster!
;   []
;   (println "Starting broadcaster")
;     (go-loop [i 0]
;       (<! (async/timeout 10000))
;       (let [chsk-send! (:chsk-send! (:sente system))]
;         (println (format "Broadcasting server>user: %s" @(:connected-uids (:sente system))))
;         (doseq [uid (:any @(:connected-uids (:sente system)))]
;           (chsk-send! uid
;             [:some/broadcast
;               {:what-is-this "A broadcast pushed from server"
;                :how-often    "Every 10 seconds"
;                :to-whom uid
;                :i i}])))
;       (recur (inc i))))
;
; ; Note that this'll be fast+reliable even over Ajax!:
; (defn test-fast-server>User-pushes []
;   (doseq [uid (:any @(:connected-uids (:sente system)))]
;     (doseq [i (range 100)]
;       (chsk-send! uid [:fast-push/is-fast (str "hello " i "!!")]))))

;;;; Routing handlers

(defmulti event-msg-handler :id)

(defmethod event-msg-handler :default ; Fallback
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (debugf "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-server event}))))

(defmethod event-msg-handler :chsk/ws-ping
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (when-let [uid (:uid (:session ring-req))]
    (debugf "Handled event: %s for user-id %s" event uid)
    (chsk-send! uid [:chsk/ws-pong [:time (System/currentTimeMillis)]])))

(defmethod event-msg-handler :chsk/uidport-open
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (println "connected"))

(defmethod event-msg-handler :space/posts
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (?reply-fn ["Hello"]))

(defmethod event-msg-handler :space/list
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (?reply-fn [{:title "Cricket" :id 18347125 :summary "Some stuff about Cricket"
               :feed [{:id 12315 :type :message :author "Sam" :date "20/5/2015 19:12:21" :content "Nam tempor porta turpis, quis vehicula nibh viverra vitae. Aliquam erat volutpat. Nunc ullamcorper tincidunt feugiat. Curabitur sed risus id tortor finibus malesuada. Fusce luctus magna sit amet diam ullamcorper venenatis."
                       :children []}]}
              ;  :feed [{:id 12315 :type :message :author "Sam" :date "20/5/2015 19:12:21" :content "Nam tempor porta turpis, quis vehicula nibh viverra vitae. Aliquam erat volutpat. Nunc ullamcorper tincidunt feugiat. Curabitur sed risus id tortor finibus malesuada. Fusce luctus magna sit amet diam ullamcorper venenatis."
              ;          :children []}
              ;         {:id 21375 :type :message :author "Chris" :date "17/7/2015 19:12:21" :content "Suspendisse potenti. Duis dictum gravida viverra. Integer luctus tempor massa, id tempor felis consectetur vel. Curabitur ut lacus eu risus mollis aliquam sit amet id nisl. Quisque egestas malesuada dignissim."
              ;          :children [{:id 21375 :type :message :author "Sam" :date "20/7/2015 19:12:21" :content "Hello"}]}]}
              {:title "Tennis" :id 18347123 :summary "Some stuff about Tennis"}
              {:title "Board Games" :id 18341125 :summary "Some stuff about Board Games"}]))

(defn event-msg-handler*
  [{:as ev-msg :keys [id ?data event]}]
  (debugf "Event: %s" event)
  (event-msg-handler ev-msg))

; (start-broadcaster!)
