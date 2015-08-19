(ns eventspace.modal.core
  (:require [re-frame.core :refer [dispatch]]
            [eventspace.widgets.button :refer [button]]
            [eventspace.widgets.button-strip :refer [button-strip]]))

(defmulti render-modal identity)

(defmethod render-modal :login
  []
  [:div.LoadingPanel
    [button :on-click #(dispatch [:comms/login {:user "pete" :password "password"}]) :label "Login"]])

(defmethod render-modal :loading
  []
  [:div.LoadingPanel
    [:img.LoadingPanel__spinner {:src "/img/puff.svg"}]])

(defmethod render-modal :create-space
  []
  [:div.LoadingPanel
    [button-strip [{:label "Cancel" :on-click #(dispatch [:modal/set-modal nil])} {:label "Create"}]]])

(defmethod render-modal nil
  []
  [:div.LoadingPanel])
