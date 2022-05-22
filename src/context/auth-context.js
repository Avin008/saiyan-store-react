import { createContext, useContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    loginStatus: localStorage.getItem("TOKEN") ? true : false,
    token: localStorage.getItem("TOKEN"),
    user: JSON.parse(localStorage.getItem("USER_INFO")),
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthContextProvider };
