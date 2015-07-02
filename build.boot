(set-env!
        :target-path "target"
        :resource-paths #{"resources/public"}
        :source-paths #{"src/cljs" "resources/less"}
        :dependencies '[[adzerk/boot-cljs      "0.0-3308-0" :scope "test"]
                        [adzerk/boot-cljs-repl "0.1.9"      :scope "test"]
                        [adzerk/boot-reload    "0.3.1"      :scope "test"]
                        [pandeiro/boot-http    "0.6.3-SNAPSHOT"      :scope "test"]
                        [mathias/boot-sassc  "0.1.1" :scope "test"]
                        [reagent "0.5.0"]
                        [re-frame "0.4.1"]])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload    :refer [reload]]
  '[pandeiro.boot-http    :refer [serve]]
  '[mathias.boot-sassc  :refer [sass]])

(deftask build []
  (comp (cljs)
        (sass :output-dir "css")))

(deftask run []
  (comp (serve :dir "target")
        (watch)
        (cljs-repl)
        (reload)
        (comp (speak)
              (build))))

(deftask production []
  (set-env! :source-paths #(conj % "env/prod/cljs"))
  (task-options! cljs {:optimizations :advanced
                       ;; pseudo-names true is currently required
                       ;; https://github.com/martinklepsch/pseudo-names-error
                       ;; hopefully fixed soon
                       :pseudo-names true
                       :compiler-options {:output-to "js/app.js"
                                          :main "eventspace.prod" ;:asset-path "js/out"
                                          }}
                      sass   {:output-style "compressed"})
  identity)

(deftask development []
  (set-env! :source-paths #(conj % "env/dev/cljs"))
  (task-options! cljs {:optimizations :none
                       :unified-mode true
                       :source-map true
                       :compiler-options {:output-to "js/app.js"
                                          :output-dir "out"
                                          :main "eventspace.dev"
                                          :asset-path "js/out"}}
                 reload {:on-jsload 'eventspace.core/init!}
                 sass   {:line-numbers true
                         :source-maps  true})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))
