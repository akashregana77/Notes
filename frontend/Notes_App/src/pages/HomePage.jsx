import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import api from '../lib/axios'
import NoteCard from '../components/NoteCard';
import { LoaderIcon } from 'lucide-react';
import '../styles/homepage.css';

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchNotes();
  }, [])

  const handleDeleteNote = (deletedId) => {
    setNotes(notes.filter(note => note._id !== deletedId));
  };

  return (
    <div className="homepage">
      <NavBar />

      <div className="homepage-inner">
        {loading && (
          <div className="homepage-loading">
            <LoaderIcon className="spinner" size={48} />
          </div>
        )}
        {!loading && notes.length === 0 && (
          <div className="empty-state">
            <p className="empty-state-text">No notes yet. Start capturing your thoughts!</p>
            <Link to="/create" className="empty-state-link">Create Your First Note</Link>
          </div>
        )}
        {!loading && notes.length > 0 && (
          <div className="notes-grid">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} onDelete={handleDeleteNote} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage