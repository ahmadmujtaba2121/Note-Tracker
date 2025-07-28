import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast"

const NoteContext = createContext();

const useNoteContext = () => useContext(NoteContext);

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [editId, setEditId] = useState(null);
  const [noteText, setNoteText] = useState("");
  const [noteNumber, setNoteNumber] = useState(0);
  const [color, setColor] = useState();
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

const togglePin = (id) => {
  const updatedNotes = notes.map(note =>
    note.id === id ? { ...note, pinned: !note.pinned } : note
  );
  setNotes(updatedNotes);
};

  const handleAdd = () => {
    if (editId !== null) {
      const updated = notes.map((note) => {
        if (note.id === editId) {
          return {
            ...note,
            text: noteText,
            color: color || "#ffffff",
            number: noteNumber,
          };
        }
        return note;
      });
      setNotes(updated);
      setNoteText("");
      setNoteNumber(0);
      setEditId(null);
      setColor(null);
      toast.success("Note updated!");
    } else {
      const newNote = {
        id: Date.now(),
        text: noteText,
        number: noteNumber,
        color: color || "#ffffff",
        pinned: false 
      };
      setNotes([...notes, newNote]);
      setNoteText("");
      setNoteNumber(0);
      setColor(null);
      toast.success("Note added!");
    }
  };

  const handleRemove = (id) => {
    toast.error("Note Removed");
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleEdit = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setEditId(id);
    setNoteText(noteToEdit.text);
    setNoteNumber(noteToEdit.number);
    setColor(noteToEdit.color || "#ffffff");
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.number.toString().includes(searchQuery)
  ) .sort((a, b) => b.pinned - a.pinned);


  return (
    <NoteContext.Provider
      value={{
        
        notes,
        setNotes,
        editId,
        setEditId,
        noteText,
        setNoteText,
        noteNumber,
        setNoteNumber,
        color,
        setColor,
        darkMode,
        setDarkMode,
        searchQuery,
        setSearchQuery,
        filteredNotes,
        handleAdd,
        handleRemove,
        handleEdit,
        togglePin,

      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export { NoteProvider, NoteContext, useNoteContext };
