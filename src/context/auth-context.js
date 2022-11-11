import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, setAuth] = useState({
    status: localStorage.getItem("token") === null ? false : true,
    token: localStorage.getItem("token"),
  });

  console.log(authState);

  return (
    <AuthContext.Provider value={{ authState, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthContextProvider };
