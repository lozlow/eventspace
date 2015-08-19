(ns eventspace.modal.core
  (:require [re-frame.core :refer [dispatch]]
            [eventspace.widgets.button :refer [button]]))

(defmulti render-modal identity)

(defmethod render-modal :login
  []
  [:div.LoadingPanel
    [button :on-click #(dispatch [:comms/login {:user "pete" :password "password"}]) :label "Login"]])

(defmethod render-modal :loading
  []
  [:div.LoadingPanel
    [:img.LoadingPanel__spinner {:src "/img/puff.svg"}]])

(defmethod render-modal nil
  []
  [:div.LoadingPanel])
