import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';


const BETester = () => {
  const [message, setMessage] = useState("");
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try{
    const response = await axios.get(`${serverUrl}`, {});
    console.log(response.data);
    setMessage(response.data.message);
    }
     catch (error) {
      setMessage(error.message);
    }
  };
  

  const CreateUserNote = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${serverUrl}/notes`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
          'title': "test Note", 
          'content': 'Textual content',
          'pathname': window.location.pathname
          })
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      setMessage("Check Console");
    } catch (error) {
      setMessage(error.message);
    }
  };


  const getUserNotes = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${serverUrl}/notes`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      setMessage("Check Console");
    } catch (error) {
      setMessage(error.message);
    }
  };


  const getSingleNoteById = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${serverUrl}/notes/7`, //Modify the number to change which note id to target
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      setMessage("Check Console");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const EditUserNote = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${serverUrl}/notes/7`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
          'title': "new edited Note", 
          'content': 'fresh edited Textual content',
          'pathname': window.location.pathname
          })
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      setMessage("Check Console");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const deleteSingleNoteById = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${serverUrl}/notes/7`, //Modify the number to change which note id to target
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      setMessage("Check Console");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const deleteAllNotes = async () => { //Delete notes for all user, NUKE IT
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${serverUrl}/notes`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      setMessage("Check Console");
    } catch (error) {
      setMessage(error.message);
    }
  };

  

  return (
    <div className="container">
      <h1>External API</h1>
      <p>
        Use these buttons to call our Backend. The protected API calls have an
        access token in its authorization header, if you are not logged in they will not work. 
        The API server will validate the access token using the Auth0 Audience value.
      </p>
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >
        <button type="button" className="btn btn-primary" onClick={callApi}>
          Get Open Info
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={CreateUserNote}
        >
          Create a Test Note
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={getUserNotes}
        >
          Get Test Notes for current user
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={getSingleNoteById}
        >
          Get a single Note
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={EditUserNote}
        >
          Edit a Note
        </button>
      

      <button
          type="button"
          className="btn btn-primary"
          onClick={deleteSingleNoteById}
        >
          Delete a Note
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={deleteAllNotes}
        >
          Delete ALL Notes (NUKE)
        </button>
        </div>
      {message && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">{message}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BETester;