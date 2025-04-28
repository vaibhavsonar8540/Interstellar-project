import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {  
    const [token, setToken] = useState(null);
    const [isauth,setisauth] = useState(false)
    

    const loginUser = (value) => {
        setToken(value);
        setisauth(true);
      
    };
    const logoutUser  = () => {
        setToken(null);
        setisauth(false);
        
    };

    const authstate={
        isauth,
        token,
    }


    return (
        <AuthContext.Provider value={{ loginUser, logoutUser, authstate}}> 
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
