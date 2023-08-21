import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/messaging";
import "firebase/auth";

class FirebaseAuthBackend {
  constructor(firebaseConfig) {
    if (firebaseConfig) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  onMessageListener = () => {
    let messaging = firebase.messaging();

    return new Promise((resolve) => {
      messaging.onMessage((payload) => {
        resolve(payload);
      });
    });
  };

  /**
   * get notifications token
   */
  getToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        let messaging = firebase.messaging();
        const token = await messaging.getToken();
        await messaging.onMessage();

        resolve(token);
      } catch (error) {
        reject(this._handleError(error));
        console.error(error);
      }
    });
  };

  /**
   * Ask user for permission to receive notifications
   */
  askForPermission = () => {
    return new Promise(async (resolve, reject) => {
      try {
        let messaging = firebase.messaging();

        await Notification.requestPermission();
        const token = await messaging.getToken();

        resolve(token);
      } catch (error) {
        reject(this._handleError(error));
        console.error(error);
      }
    });
  };

  /**
   * Social Login user with given details
   */
  socialLoginUser = (type) => {
    let credential = {};
    if (type === "google") {
      credential = new firebase.auth.GoogleAuthProvider();
    } else if (type === "facebook") {
      credential = new firebase.auth.FacebookAuthProvider();
    } else if (type === "twitter") {
      credential = new firebase.auth.TwitterAuthProvider();
    }

    return new Promise((resolve, reject) => {
      if (!!credential) {
        firebase
          .auth()
          .signInWithPopup(credential)
          .then((user) => {
            resolve(user);
            /* resolve(this.addNewUserToFirestore(user)) */
            /* resolve(this.addNewUserToFirestore(user)) */
          })
          .catch((error) => {
            reject(this._handleError(error));
          });
      } else {
        reject(this._handleError({ message: "error" }));
      }
    });
  };

  /**
   * Handle the error
   * @param {*} error
   */
  _handleError(error) {
    // var errorCode = error.code;
    var errorMessage = error.message;
    return errorMessage;
  }
}

let _fireBaseBackend;

/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config) => {
  if (!_fireBaseBackend) {
    _fireBaseBackend = new FirebaseAuthBackend(config);
  }

  return _fireBaseBackend;
};

/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
  return _fireBaseBackend;
};

export { initFirebaseBackend, getFirebaseBackend };
