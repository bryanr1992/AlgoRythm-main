
import React from 'react';
import './Notes.css';

const Note = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="note-btn" onClick={() => {
          props.onRemove(props.id)
      }}>X</button>
    </div>
  );
};

export default Note;