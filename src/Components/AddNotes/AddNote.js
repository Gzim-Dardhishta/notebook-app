import React from 'react'
import { useState } from 'react'
import './addnote.scss'

const AddNote = () => {

  const [note, setNote] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const notes = { note };

    fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notes)
    }).then(() => {
      console.log("added")
    })
  }


  return (
    <div className='addnotes'>
      <h2>AddNotes</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-label">
          <label>Note</label>
        </div>
        <div className='input-container'>
          <textarea cols="30" rows="10" value={note} onChange={(e) => setNote(e.target.value)}></textarea>
        </div>

        <button>Add Note</button>
      </form>

    </div>
  )
}

export default AddNote