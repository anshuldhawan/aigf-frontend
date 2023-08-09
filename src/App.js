<<<<<<< HEAD
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
=======
import './App.css';
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AllRoutes } from './Routes/AllRoutes';
function App() {
  return (
   <>
   <AllRoutes/>
   </>
>>>>>>> d860a4c564b29050a7d347a0f6bbad6a96b2b9d2
  );
}

export default App;
