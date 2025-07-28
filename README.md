# 📝 Note Tracker – React + Tailwind Notes App

A modern and responsive Notes App built using **React**, **Tailwind CSS**, and **Context API**, designed to provide a clean UI/UX with full CRUD functionality, smooth animations, and persistent storage using localStorage.

👉 **Live Demo:** [https://note-tracker-nine.vercel.app](https://note-tracker-nine.vercel.app)

---

## ✨ Features

- 📄 **Add Notes** – Create new notes with a title, optional number, and color
- ✏️ **Edit Notes** – Edit any existing note in-place with all fields
- ❌ **Delete Notes** – Remove any note with a toast confirmation and animation
- 🔍 **Search Filter** – Filter notes by text or number in real-time
- 🎨 **Custom Colors** – Choose a background color for each note
- 🔢 **Optional Number Field** – Tag notes with an optional number
- 💾 **Persistent Storage** – Notes are saved in `localStorage`, no backend required
- 🌙 **Dark Mode Toggle** – Switch between dark and light themes (state managed)
- 📱 **Responsive Design** – Works seamlessly on both mobile and desktop
- 🔔 **Toasts for Actions** – Instant feedback using `react-hot-toast`
- 🎥 **Smooth Animations** – Tailwind transitions and animation effects on delete/edit

---

## ⚙️ Tech Stack

| Tech | Purpose |
|------|---------|
| **React** | Component-based frontend architecture |
| **Tailwind CSS** | Utility-first styling and responsive design |
| **React Context API** | Global state management (notes, search, theme) |
| **React Hot Toast** | Non-intrusive action notifications |
| **localStorage** | Save user notes persistently |
| **Vercel** | Live deployment (CI/CD enabled) |

---

## 📂 Project Structure

src/
├── components/ # UI components (NoteCard, AddNote, etc.)
├── context/ # Global NoteContext for managing state
├── App.jsx # Main layout and structure
└── main.jsx # React entry point


---

## 🧠 What This App Teaches

- Real-world usage of **React Context API** without Redux
- Creating reusable, well-structured **React components**
- Responsive, accessible **Tailwind design**
- Simple **state-driven logic** for CRUD operations
- Smooth UI feedback with **toast notifications and animations**
- Clean code separation between **logic** and **presentation**

---

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/note-tracker.git
   cd note-tracker

   npm install
   npm run dev



🙌 Author
Made with 💙 by Ahmad Mujtaba
