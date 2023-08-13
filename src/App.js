import React, { useState } from 'react';
import './App.css';
import Note from'./note';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      const newNoteObj = {
        id: Date.now(),
        text: newNote,
      };
      setNotes([...notes, newNoteObj]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Note-taking App</h1>
      <div className="input-container">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter your note..."
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div className="notes-container">
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={handleDeleteNote} />
        ))}
      </div>
    </div>
  );
}

export default App;
