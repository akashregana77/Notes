import React from 'react'
import { Link } from 'react-router-dom'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import '../styles/notecard.css'

const NoteCard = ({ note, onDelete }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      if (onDelete) {
        onDelete(id);
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete");
    }
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Link to={`/Note/${note._id}`} className="note-card-link">
      <div className="note-card">
        <h3 className="note-card-title">{note.title}</h3>
        <p className="note-card-content">{note.content}</p>
        <div className="note-card-footer">
          <span className="note-card-date">{formatDate(note.createdAt)}</span>
          <div className="note-card-actions">
            <PenSquareIcon size={16} className="note-card-edit-icon" />
            <button className="note-card-delete-btn" onClick={(e) => handleDelete(e, note._id)}>
              <Trash2Icon size={16} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NoteCard