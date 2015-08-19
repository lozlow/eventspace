(ns eventspace.handlers.comms
  (:require [re-frame.core :refer [dispatch register-handler]]
            [eventspace.comms.core :as comms]
            [taoensso.encore :as enc :refer (tracef debugf infof warnf errorf)]
            [taoensso.sente :as sente]))

(register-handler
  :comms/login
  (fn [db [_ {:keys [user pass]}]]
    (sente/ajax-call "/login"
      {:method :post
       :params {:user-id (str user)
                :csrf-token (aget js/context "csrfToken")}}
      (fn [response]
        (debugf "Ajax login response: %s" response)
        (let [login-successful? (:success? response)]
          (if-not login-successful?
            (dispatch [:comms/login-failed])
            (dispatch [:comms/login-success])))))
    (dispatch [:modal/set-modal :loading])
    db))

(register-handler
  :comms/login-success
  (fn [db]
    (dispatch [:modal/set-modal nil])
    (comms/start!)
    db))

(register-handler
  :comms/login-failed
  (fn [db]
    (dispatch [:modal/set-modal :login])
    db))

(register-handler
  :comms/handshake-success
  (fn [db [_ [uid email]]]
    (dispatch [:comms/request-spaces])
    (assoc-in db [:logged-in] {:user-id uid :email email})))

(register-handler
  :comms/request-spaces
  (fn [db [_]]
    (let [callback (fn [reply] (dispatch [:space/set-space-list reply]))]
      (comms/chsk-send! [:space/list] 5000 callback)
      db)))
