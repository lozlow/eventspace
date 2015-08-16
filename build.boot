(set-env!
  :target-path "target"
  :resource-paths #{"resources"}
  :source-paths #{"src/clj" "src/cljs" "resources/templates"}
  :dependencies '[[org.clojure/clojure "1.7.0"]
                  [org.clojure/clojurescript "1.7.48"]
                  [adzerk/boot-cljs "1.7.48-SNAPSHOT"]
                  [adzerk/boot-cljs-repl "0.1.9" :scope "test"]
                  [adzerk/boot-reload "0.3.1" :scope "test"]
                  [pandeiro/boot-http "0.6.3-SNAPSHOT" :scope "test"]
                  [mathias/boot-sassc "0.1.1" :scope "test"]
                  [reagent "0.5.0"]
                  [re-frame "0.4.1"]
                  [cljs-hash "0.0.2"]
                  [org.clojars.jaen/kioo "0.5.0"]
                  [environ "1.0.0"]
                  [danielsz/boot-environ "0.0.4"]
                  [org.danielsz/system "0.1.8"]
                  [org.clojure/tools.nrepl "0.2.10"]
                  [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                  [com.taoensso/sente "1.5.0"]
                  [http-kit "2.1.19"]
                  [ring "1.4.0-RC1"]
                  [ring/ring-defaults "0.1.5"] ; Includes `ring-anti-forgery`, etc.
                  [compojure "1.3.4"] ; Or routing lib of your choice
                  [com.cognitect/transit-clj "0.8.275"]
                  [com.cognitect/transit-cljs "0.8.220"]
                  [com.taoensso/encore "2.4.2"]
                  [tailrecursion/clojure-adapter-servlet "0.2.1"]
                  [cheshire "5.4.0"]
                  [selmer "0.8.8"]
                  [amalloy/ring-gzip-middleware "0.1.3"]])

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]]
  '[mathias.boot-sassc :refer [sass]]
  '[reloaded.repl :refer [init start stop go reset]]
  '[eventspace.systems :refer [dev-system]]
  '[danielsz.boot-environ :refer [environ]]
  '[system.boot :refer [system run]])

(deftask build-assets []
  (comp (cljs)
        (sass :output-dir "public/css")))

(deftask build []
  (comp (environ :env {:http-port 3019})
        (repl :server true)
        (cljs-repl)
        (watch)
        (system :sys #'dev-system :auto-start true :hot-reload true :files ["core.clj"])
        (reload)
        (comp (speak)
              (build-assets))))

(deftask production []
  (set-env! :source-paths #(conj % "env/prod/cljs" "env/prod/clj")
            :resource-paths #(conj % "env/prod"))
  (task-options! cljs {:optimizations :advanced}
                 sass {:output-style "compressed"})
  identity)

(deftask development []
  (set-env! :source-paths #(conj % "env/dev/cljs")
            :resource-paths #(conj % "env/dev"))
  (task-options! cljs {:optimizations :none
                      ;  :source-map true
                       :compiler-options {:asset-path "js/app.out"}}
                      ;                     :main "eventspace.dev"
                      ;                     :asset-path "js/out"}}
                 reload {:on-jsload 'eventspace.core/init!
                         :asset-path "public/"}
                 sass   {:line-numbers true
                         :source-maps  true})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (build)))

(deftask release
  []
  (comp (production)
        (build-assets)
        (uber)
        (aot :namespace '#{eventspace.prod eventspace.systems eventspace.core})
        (jar :main 'eventspace.prod)))
