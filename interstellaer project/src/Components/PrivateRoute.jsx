import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {  
    const { authstate } = useContext(AuthContext);  

    if (!authstate.isauth) {
        return <Navigate to="/login" />;
    }
    
    return children; 
     
}

export default PrivateRoute;
