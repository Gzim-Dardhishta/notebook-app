import React from 'react'
import { Link } from 'react-router-dom'

const NotesCatagory = () => {

  return (
    <div>
        <div className="all-notes">
            <h2>All Notes</h2>
        </div>

        <div className="category-of-notes">
            <Link to='/favorites'>Favorite Notes</Link><br /><br />
            <Link to='/codingnotes'>Coding Notes</Link>
        </div>
    </div>
  )
}

export default NotesCatagory