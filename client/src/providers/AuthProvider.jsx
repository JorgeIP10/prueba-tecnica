import { useEffect } from "react";
import { useState } from "react";
import { loginRequest, verifyTokenRequest, logoutRequest } from "../api/auth";
import Cookies from "js-cookie";
import { AuthContext } from "../contexts/AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const signin = async (user) => {
    try {
      const result = await loginRequest(user);
      console.log(result)
      setUser(result.data);
      setIsAuthenticated(true);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const logout = async () => {
    await logoutRequest();
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
        return;
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
        return error;
      }
    };
    checkLogin();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        logout,
        isAuthenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;