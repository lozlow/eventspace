(set-env!
        :target-path "target"
        :resource-paths #{"resources/public"}
        :source-paths #{"src/cljx" "src/clj" "src/cljs"}
        :dependencies '[[adzerk/boot-cljs "0.0-3269-2"]
                        [adzerk/boot-cljs-repl "0.1.8"]
                        [adzerk/boot-reload "0.2.4"]
                        ;[deraen/boot-cljx "0.3.0"]
                        [org.clojure/clojure "1.6.0"]
                        [http-kit "2.1.18"]
                        [selmer "0.8.2"]
                        [com.taoensso/timbre "3.4.0"]
                        [com.taoensso/tower "3.0.2"]
                        [markdown-clj "0.9.66"]
                        [environ "1.0.0"]
                        [compojure "1.3.4"]
                        [ring/ring-defaults "0.1.5"]
                        [ring/ring-session-timeout "0.1.0"]
                        [metosin/ring-middleware-format "0.6.0"]
                        [metosin/ring-http-response "0.6.1"]
                        [bouncer "0.3.2"]
                        [prone "0.8.1"]
                        [org.clojure/tools.nrepl "0.2.10"]
                        [ring-server "0.4.0"]
                        [org.clojure/clojurescript "0.0-3269" :scope "provided"]
                        [org.clojure/tools.reader "0.9.2"]
                        [reagent "0.5.0"]
                        [cljsjs/react "0.13.3-0"]
                        [reagent-forms "0.5.1"]
                        [reagent-utils "0.1.4"]
                        [secretary "1.2.3"]
                        [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                        [cljs-ajax "0.3.11"]
                        [metosin/compojure-api "0.20.1"]
                        [metosin/ring-swagger-ui "2.1.1-M2"]
                        [re-frame "0.3.2"]])

(require
  '[adzerk.boot-cljs       :refer :all]
  '[adzerk.boot-reload     :refer :all]
  '[adzerk.boot-cljs-repl  :refer :all]
  ;'[deraen.boot-cljx       :refer :all]
  '[eventspace.core        :as server]
  '[eventspace.handler     :as handler]
  '[ring.middleware.reload    :as reload]
  '[ring.middleware.file      :as file]
  '[ring.middleware.file-info :as file-info])

; (defn dev-handler []
;   (-> server/app (reload/wrap-reload)
;                  (file/wrap-file "target/public")
;                  (file-info/wrap-file-info)))

(defn dev-handler []
  (handler/app))

(deftask dev-cljs
  "Build cljs for development."
  []
  (set-env! :source-paths #(conj % "target/generated/cljs" "env/dev/cljs"))
  (comp ;(watch)
        (reload :on-jsload (symbol "eventspace.core/init!"))
        (cljs :source-map true
              :optimizations :none
              :compiler-options {:externs ["react/externs/react.js"]
                                 :output-dir "js/out"
                                 :output-to "js/app.js"
                                 :main "eventspace.dev"
                                 :pretty-print true})))

; (deftask
;   transform-cljx
;   []
;   (comp
;     ;(watch)
;     (cljx)))

(deftask dev-serve
  "Start server for development."
  []
  (with-post-wrap fileset (server/run (dev-handler))))

(deftask dev
  "Build cljs and start server for development."
  []
  (comp
        ;(transform-cljx)
        (dev-cljs)
        (dev-serve)))

(deftask prod
  "Build application uberjar with http-kit main."
  []
  (set-env! :source-paths #(conj % "target/generated/cljs" "env/prod/cljs"))
  (comp
        ;(transform-cljx)
        (cljs :unified true
              :optimizations :advanced
              :compiler-options {:externs ["react/externs/react.js"]
                                 :output-to "js/app.js"
                                 :main "eventspace.prod"
                                 :pretty-print false})
        (aot :all true)
        (uber)
        (jar :file "eventspace.jar" :main 'eventspace.core)))
