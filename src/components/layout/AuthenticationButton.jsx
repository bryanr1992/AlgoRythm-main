import React from "react";

import LoginButton from "../Auth0/LoginLogoutButtons/LoginButton";
import LogoutButton from "../Auth0/LoginLogoutButtons/LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton  /> : <LoginButton />;
};

export default AuthenticationButton;