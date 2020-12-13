import React from 'react';
import Note from './Note'

const NotesList = ({notes}) => {
    
    // const notesData = Array.from(notes)

    return (
        <div className="notelist">
            {notes && notes.map(note => <Note note={note} key={note.id} />)}
        </div>
    );
};

export default NotesList;