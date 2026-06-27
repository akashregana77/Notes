import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from 'lucide-react';
import api from '../lib/axios';
import '../styles/notedetailpage.css';

function NoteDetailPage() {
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (err) {
        toast.error("Failed to fetch note");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (err) {
      toast.error("Failed to delete note");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }
    setSaving(true);
    try {
      const res = await api.put(`/notes/${id}`, { title, content });
      setNote(res.data);
      toast.success("Note updated successfully");
    } catch (err) {
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
    navigate('/');
  };

  if (loading) {
    return (
      <div className="detail-page">
        <div className="detail-loading">
          <LoaderIcon className="spinner" size={48} />
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <div className="detail-header">
          <Link to="/" className="back-link">
            <ArrowLeftIcon size={20} />
            <span>Back to Notes</span>
          </Link>
          <button className="delete-btn" onClick={handleDelete}>
            <Trash2Icon size={18} />
            <span>Delete Note</span>
          </button>
        </div>
        <form className="detail-card" onSubmit={handleUpdate}>
          <div className="detail-card-body">
            <div className="form-group">
              <label htmlFor="note-title">Title</label>
              <input
                id="note-title"
                type="text"
                placeholder="Note title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="note-content">Content</label>
              <textarea
                id="note-content"
                placeholder="Note content"
                rows={10}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <div className="detail-card-actions">
            <button type="submit" className="update-btn" disabled={saving}>
              {saving ? "Saving..." : "Update Note"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NoteDetailPage