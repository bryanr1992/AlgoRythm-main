import React, { useState } from 'react';
import NoteHeader from '../layout/NoteHeader';
import NoteFooter from '../layout/NoteFooter';
import CreateNote from '../layout/CreateNote';
import Note from '../layout/Note';
import '../layout/Notes.css';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (event, title, text, resetTexState, resetTitleState) => {
    event.preventDefault();
    const list = {
      title: title,
      content: text,
    };
    setNotes((prevVal) => {
      return [...prevVal, list];
    });

    resetTexState('');
    resetTitleState('');
  };

  const onDelete = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((notes, index) => {
        return index !== id;
      });
    });
  };

  return <CreateNote onAdd={addNote} />;
};

export default Notes;
