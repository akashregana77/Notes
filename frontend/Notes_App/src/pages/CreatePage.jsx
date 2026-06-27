import React, { useState } from 'react'
import { ArrowLeftIcon, LoaderIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../lib/axios'
import '../styles/createpage.css';

function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);
    try {
      await api.post("/notes", { title, content });
      toast.success("Note created successfully");
      navigate("/")
    } catch (err) {
      toast.error("Failed to create a note");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="create-page">
      <div className="create-container">
        <Link to="/" className="create-back-link">
          <ArrowLeftIcon />
          <span>Back to Notes</span>
        </Link>
        <div className="create-card">
          <h2 className="create-card-header">Create a Note</h2>
          <form onSubmit={handleSubmit}>
            <div className="create-form-group">
              <label htmlFor="create-title">Title</label>
              <input id="create-title" type="text" placeholder="Note title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="create-form-group">
              <label htmlFor="create-content">Content</label>
              <textarea id="create-content" placeholder="Note content" rows={8} value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <div className="create-card-actions">
              <button type="submit" className="create-submit-btn" disabled={loading}>
                {loading ? "Creating..." : "Create Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreatePage