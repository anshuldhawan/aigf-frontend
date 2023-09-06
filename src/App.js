import "./App.css";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import { initFirebaseBackend } from "./helper/firebase";
import ReactGA from "react-ga4";
import firebase from "firebase/app";
import "firebase/analytics";

function App() {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      // databaseURL: process.env.REACT_APP_FIREBASE_API_KEY,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    };
    ReactGA.initialize(process.env.REACT_APP_MEASUREMENT_ID);

    initFirebaseBackend(firebaseConfig);
  }, []);

  const handleButtonClick = () => {
    firebase.analytics().logEvent("button_click", {
      button_name: "custom_button",
    });

    // Add your button click logic here.
  };

  return (
    <>
      <button onClick={handleButtonClick}>Google Analytics</button>
      <ToastContainer autoClose={1500} />
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <AllRoutes />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
