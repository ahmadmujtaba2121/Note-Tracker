import { useNoteContext } from "../Context/NoteContext"

import { motion, AnimatePresence } from "framer-motion"

function NoteList() {
    const { filteredNotes, handleEdit, handleRemove, togglePin } = useNoteContext()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
                {filteredNotes.map((note) => (
                    <motion.div
                        key={note.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1, y: 0, scale: note.pinned ? 1.05 : 1
                        }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        layout
                        transition={{ duration: 0.3, ease: "easeOut" }}

                        style={{ backgroundColor: note.color }}
                        className="relative pt-12 p-6 rounded-2xl shadow-xl border border-white/20 text-black dark:text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                    >
                        <p className="text-lg font-medium break-words text-yellow-500">{note.text}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Mood #: {note.number}</p>

                        <div className="absolute top-0 right-0 flex gap-1 p-2">
                            <button
                                onClick={() => handleEdit(note.id)}
                                className="text-xs bg-yellow-400 text-black px-3 py-1 rounded-full hover:bg-yellow-500 transition-all"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleRemove(note.id)}
                                className="text-xs bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-all"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => togglePin(note.id)}
                                className={`text-xs ${note.pinned ? "bg-green-600" : "bg-gray-500"
                                    } text-white px-3 py-1 rounded-full hover:opacity-90 transition-all`}
                            >
                                {note.pinned ? "Unpin" : "Pin"}
                            </button>

                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>

        </div>

    )
}

export default NoteList
