import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  updateIsLoggedIn: () => {},
});

export default AuthContext;
