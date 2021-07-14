import React from 'react';
import './Notes.css';

const NoteFooter = () => {

    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <p>
            © Copyright {currentYear} AlgoRythm App!
            </p>
        </footer>
    );
};

export default NoteFooter;