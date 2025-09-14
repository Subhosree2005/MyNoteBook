import noteContext from "./noteContext";
import { useState } from "react";



const NoteState = (props) => {
    const notesInitial = [
         {
            _id: "68b552dd293b3236f60075f3",
            title: "my title",
            description: "this is my first note on this note book",
            tag: "personal",
            date: "2025-09-01T08:01:33.387+00:00",
            __v: 0
        },
         
        {
            _id: "68b552dd293b3236f60075f3",
            title: "my title",
            description: "this is my first note on this note book",
            tag: "personal",
            date: "2025-09-01T08:01:33.387+00:00",
            __v: 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);
    
    // Use environment-based host configuration
    const host = process.env.NODE_ENV === 'production' 
        ? "https://backend-mynotebook-xnja.onrender.com"
        : "http://localhost:5000"; // Use local backend for development
    const getAuthHeaders = () => ({
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token") || ""
    });

    // Fetch all notes
    const getNotes = async () => {
        try {
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: "GET",
                headers: getAuthHeaders()
            });
            if (response.ok) {
                const data = await response.json();
                setNotes(data);
            } else {
                console.error('Failed to fetch notes:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    // Add a note
    const addNote = async (title, description, tag) => {
        try {
            const response = await fetch(`${host}/api/notes/addnote`, {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify({ title, description, tag })
            });
            if (response.ok) {
                const newNote = await response.json();
                setNotes([...notes, newNote]);
            } else {
                console.error('Failed to add note:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error adding note:', error);
        }
    }

    
    // Delete a note
    const deleteNote = async (id) => {
        try {
            const response = await fetch(`${host}/api/notes/deletenote/${id}` , {
                method: "DELETE",
                headers: getAuthHeaders()
            });
            if (response.ok) {
                setNotes(notes.filter((n) => n._id !== id));
            } else {
                console.error('Failed to delete note:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    }
    // Edit a note
    const editNote = async (id, title, description, tag) => {
        try {
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                method: "PUT",
                headers: getAuthHeaders(),
                body: JSON.stringify({ title, description, tag })
            });
            if (response.ok) {
                const updated = await response.json();
                setNotes(notes.map((n) => (n._id === id ? updated : n)));
            } else {
                console.error('Failed to update note:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error updating note:', error);
        }
    }


    return (
        <noteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;