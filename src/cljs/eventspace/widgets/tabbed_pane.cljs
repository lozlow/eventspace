(ns eventspace.widgets.tabbed-pane
  (:require [reagent.core :refer [atom]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn tabbed-pane
  [_]
  (fn [& {:keys [tabs selected on-change id-fn label-fn style]
          :or {id-fn :id
               label-fn :label}}]
    [:div.TabbedPane {:style style}
      (doall
        (for [tab tabs
              :let [classname "TabbedPane__tab"
                    id (id-fn tab)]]
          ^{:key (str (id-fn tab))}
            [:div {:class (str classname (when (= @selected id) "--selected"))
                   :on-click #(comp (reset! selected id)
                                    (on-change id))}
              (label-fn tab)]))]))
