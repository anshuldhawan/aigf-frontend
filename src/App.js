import "./App.css";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={1500} />
      <AllRoutes />
    </>
  );
}

export default App;
