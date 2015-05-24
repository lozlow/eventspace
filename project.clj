(defproject eventspace "0.1.0-SNAPSHOT"

  :description "FIXME: write description"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0-beta3"]
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
                 [re-frame "0.3.2"]]

  :min-lein-version "2.0.0"
  :uberjar-name "eventspace.jar"
  :jvm-opts ["-server"]

  :source-paths ["src/clj"]
;;enable to start the nREPL server when the application launches
;:env {:repl-port 7001}

  :main eventspace.core

  :plugins [[lein-ring "0.9.1"]
            [lein-environ "1.0.0"]
            [lein-ancient "0.6.5"]
            [lein-cljsbuild "1.0.5"]]



  :ring {:handler eventspace.handler/app
         :init    eventspace.handler/init
         :destroy eventspace.handler/destroy
         :uberwar-name "eventspace.war"}


  :clean-targets ^{:protect false} ["resources/public/js"]

  :cljsbuild
  {:builds
   {:app
    {:source-paths ["src/cljs" "target/generated/src/cljs"]
     :compiler
     {:output-dir "resources/public/js/out"
      :externs ["react/externs/react.js"]
      :optimizations :none
      :output-to "resources/public/js/app.js"
      :pretty-print true}}}}


  :profiles
  {:uberjar {:omit-source true
             :env {:production true}
              :hooks [leiningen.cljsbuild]
              :cljsbuild
              {:jar true
               :builds
               {:app
                {:source-paths ["env/prod/cljs"]
                 :compiler {:optimizations :advanced :pretty-print false}}}}

             :aot :all}
   :dev {:dependencies [[ring-mock "0.1.5"]
                        [ring/ring-devel "1.3.2"]
                        [pjstadig/humane-test-output "0.7.0"]
                        [weasel "0.6.0"]
                        [org.clojure/tools.nrepl "0.2.10"]
                        [com.cemerick/piggieback "0.2.1"]]
         :source-paths ["env/dev/clj" "target/generated/src/clj"]
         :plugins [[lein-figwheel "0.3.1"]
                   [com.keminglabs/cljx "0.6.0"]]
         :cljsbuild
          {:builds
           {:app
            {:source-paths ["env/dev/cljs"] :compiler {:source-map true}}}}

         :figwheel
         {:http-server-root "public"
          :server-port 3449
          :css-dirs ["resources/public/css"]
          :ring-handler eventspace.handler/app}

          :cljx {:builds [{:source-paths ["src/cljx"]
                           :output-path "target/generated/src/clj"
                           :rules :clj}

                          {:source-paths ["src/cljx"]
                           :output-path "target/generated/src/cljs"
                           :rules :cljs}]}

         :repl-options {:init-ns eventspace.core}
         :injections [(require 'pjstadig.humane-test-output)
                      (pjstadig.humane-test-output/activate!)]
         :env {:dev true}}})
