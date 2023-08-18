import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { role } = useSelector((s) => s.Admin);

  if (role === "") {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
