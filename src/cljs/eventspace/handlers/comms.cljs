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
    db))

(register-handler
  :comms/login-success
  (fn [db]
    (comms/start!)
    (add-watch comms/chsk-state :open? (fn [id _ old-state new-state]
                                         (when (:open? new-state)
                                           (dispatch [:comms/handshake-success])
                                           (remove-watch comms/chsk-state :open?))))
    (assoc-in db [:logged-in] true)))

(register-handler
  :comms/handshake-success
  (fn [db]
    (dispatch [:comms/request-spaces])
    db))

(register-handler
  :comms/request-spaces
  (fn [db [_]]
    (let [callback (fn [reply] (dispatch [:space/set-space-list reply]))]
      (comms/chsk-send! [:space/list] 5000 callback)
      db)))
