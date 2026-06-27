import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast"
function App() {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/Note/:id" element={<NoteDetailsPage/>}/>
      </Routes>
    </div>
  )
}

export default App