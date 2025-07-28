import { useNoteContext } from "../Context/NoteContext.jsx"

function AddNote() {
    const { noteText, setNoteText, handleAdd, editId, color, setColor, noteNumber, setNoteNumber } = useNoteContext()

    return (
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8 p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
            <input
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Write a new note..."
                className="flex-1 p-3 bg-white/5 text-white placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-12 h-12 border-none rounded-lg overflow-hidden cursor-pointer"
            />
            <input
                type="number"
                value={noteNumber}
                onChange={(e) => setNoteNumber(e.target.value)}
                placeholder="#"
                className="w-20 p-3 bg-white/5 text-white placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleAdd}
                className="bg-gradient-to-tr from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-6 py-2 rounded-lg transition-all"
            >
                {editId ? "Update" : "Add"}
            </button>
        </div>

    )
}
export default AddNote