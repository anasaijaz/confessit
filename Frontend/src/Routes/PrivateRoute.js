import { Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";


const PrivateRoute = ({ children, loggedIn , ...rest }) => {
  return (

        loggedIn ? children : <Navigate to="/login" />

  );
}

export default PrivateRoute;
