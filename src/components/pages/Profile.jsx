import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
    return <div>Loading ...</div>;
  }

  const { name, picture, email } = user;
  return (
    isAuthenticated && (
    <div className="profile">
      <div className="row align-items-center profile-header">
        <div>
          <img
            src={picture}
            alt="Profile"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  )
  );
};

export default Profile;