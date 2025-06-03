import { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const api = "https://sccprogrammingclub.com/api";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function login(username, password) {
    const response = await fetch(`${api}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log(data);
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
