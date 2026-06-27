# Notes App - Full-Stack MERN Application

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

A modern, responsive, full-stack web application designed to help users create, read, update, and delete (CRUD) their personal notes efficiently. Built with the MERN stack (MongoDB, Express.js, React, Node.js) and powered by Vite for lightning-fast frontend tooling.

## 🚀 Features

- **Create Notes**: Add new notes with a title and content.
- **View Notes**: Read through your list of saved notes in a clean UI.
- **Update Notes**: Edit the content and title of existing notes easily.
- **Delete Notes**: Remove notes you no longer need.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Toast Notifications**: Real-time feedback for user actions (powered by `react-hot-toast`).

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite
- React Router DOM (Navigation)
- Axios (HTTP Client)
- Lucide React (Icons)
- Vanilla CSS (Styling)

**Backend:**
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- Cors & Dotenv

## 📂 Project Structure

```text
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Route logic
│   ├── models/          # Mongoose schemas (Note.js)
│   ├── routes/          # Express API routes
│   └── server.js        # Backend entry point
│
└── frontend/Notes_App/
    ├── public/          # Static assets
    ├── src/
    │   ├── components/  # Reusable UI components
    │   ├── lib/         # Axios/API configurations
    │   ├── pages/       # Route pages (Home, Create, Detail)
    │   └── styles/      # Component specific CSS
    └── index.html       # Vite entry point
```

## ⚙️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster or local MongoDB instance

### 1. Clone the repository
```bash
git clone https://github.com/akashregana77/Notes.git
cd Notes
```

### 2. Setup the Backend
Open a terminal and navigate to the backend directory:
```bash
cd backend
npm install
```
Create a `.env` file in the `backend/` directory and add your MongoDB connection string and Port:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```
Start the backend server:
```bash
npm run dev
```

### 3. Setup the Frontend
Open a new terminal and navigate to the frontend directory:
```bash
cd frontend/Notes_App
npm install
```
Start the Vite development server:
```bash
npm run dev
```
The app should now be running locally at `http://localhost:5173`.

## 📡 API Endpoints

The Express backend exposes the following RESTful API endpoints at `/api/notes`:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Fetch all notes |
| `GET` | `/:id` | Fetch a single note by ID |
| `POST` | `/` | Create a new note |
| `PUT` | `/:id` | Update an existing note |
| `DELETE`| `/:id` | Delete a note |

*Built with ❤️ by [akashregana77](https://github.com/akashregana77)*
