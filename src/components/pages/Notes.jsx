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

  return (
    <div className="background-content">
      <NoteHeader />
      <CreateNote onAdd={addNote} />
      {notes.map((note, noteIndex) => {
        return (
          <Note
            key={noteIndex}
            id={noteIndex}
            title={note.title}
            content={note.content}
            onRemove={onDelete}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <NoteFooter />
    </div>
  );
};

export default Notes;
