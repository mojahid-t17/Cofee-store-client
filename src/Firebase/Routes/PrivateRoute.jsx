import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location=useLocation();
    const {user,loader}=useContext(AuthContext);
   if(loader){
    return <span className="loading loading-spinner loading-xl"></span>
   }
   if(user){
    return children
   }
   return( 
    <Navigate state={location.pathname} to="/signIn"></Navigate>
   )
};

export default PrivateRoute;