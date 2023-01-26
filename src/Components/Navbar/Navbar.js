import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div>
        <div className="nav">
            <h1>Notebook</h1>

            <div className="nav-links">
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/addnote' className="nav-link">Add Note</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar