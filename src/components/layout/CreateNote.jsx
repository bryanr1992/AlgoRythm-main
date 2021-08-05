import React, { useState } from 'react';
import './Notes.css';

const CreateNote = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "title") {
      setInputTitle(value);
    } else if (name === "content") {
      setInputText(value);
    }
  };

  return (
    <div>
      <form className="custom-form">
        <input
          onChange={handleChange}
          value={inputTitle}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={inputText}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(e) => {
            props.onAdd(e,inputTitle, inputText, setInputText,setInputTitle);
          }}
        >
          <strong className="note-strong">Add</strong>
        </button>
      </form>
    </div>
  );
};

export default CreateNote;