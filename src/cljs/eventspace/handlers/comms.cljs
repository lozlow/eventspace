(ns eventspace.handlers.comms
  (:require [re-frame.core :refer [dispatch register-handler]]
            [eventspace.comms.core :as comms]
            [taoensso.encore :as enc :refer (tracef debugf infof warnf errorf)]
            [taoensso.sente :as sente]))

(register-handler
  :comms/login
  (fn [db [_ {:keys [user pass]}]]
    (let [csrf-token comms/chsk-state]
      (sente/ajax-call "/login"
        {:method :post
         :params {:user-id (str user)
                  :csrf-token (:csrf-token @csrf-token)}}
        (fn [response]
          (debugf "Ajax login response: %s" response)
          (let [login-successful? (:success? response)]
            (if-not login-successful?
              (dispatch [:comms/login-failed])
              (dispatch [:comms/login-success]))))))
    db))

(register-handler
  :comms/login-success
  (fn [db]
    (sente/chsk-reconnect! comms/chsk)
    (assoc-in db [:selected-space] (:id (first (:spaces db))))))
