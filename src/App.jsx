import AddNote from './components/addNote.jsx'
import NoteList from './components/NoteCard.jsx'
import "./index.css"
import { useNoteContext } from "./Context/NoteContext"

function App() {
  const { searchQuery, setSearchQuery } = useNoteContext()

  return (
    <>
      <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">📝 Mood Notes</h1>
          <p className="text-center text-gray-400 mb-12">Track your moods with notes and colors</p>
          <div className="max-w-2xl mx-auto mt-10">
            <div className="mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes..."
                className="w-full p-3 rounded-lg bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <AddNote />
            <NoteList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App