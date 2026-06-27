import React from 'react'
import { Link } from 'react-router-dom';
import { PlusIcon } from 'lucide-react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h1 className="navbar-brand">ShortNote</h1>
        <div>
          <Link to="/create" className="navbar-create-link">
            <PlusIcon />
            <span>Create Note</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar