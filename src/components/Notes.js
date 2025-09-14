import React, { useContext, useEffect, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;

  const [editForm, setEditForm] = useState({ _id: "", title: "", description: "", tag: "" });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const openEdit = (note) => {
    setEditForm({ _id: note._id, title: note.title, description: note.description, tag: note.tag || "" });
  };

  const submitEdit = (e) => {
    e.preventDefault();
    editNote(editForm._id, editForm.title, editForm.description, editForm.tag);
    setEditForm({ _id: "", title: "", description: "", tag: "" });
  };
  return (
    <>
    <div className='row my-3 text-center border border-primary rounded '>
      <h2 className='text-light'>Your Notes</h2>
      {notes.map((note)=>{
        return <Noteitem key={note._id} note={note} onEdit={() => openEdit(note)} />
      })}
  </div>
  {editForm._id && (
    <div className='card my-3 '>
      <div className='card-body'>
        <h5 className='card-title'>Edit Note</h5>
        <form onSubmit={submitEdit}>
          <div className="mb-3">
            <label htmlFor="etitle" className="form-label">Title</label>
            <input id="etitle" className="form-control" value={editForm.title} onChange={(e)=>setEditForm({...editForm, title: e.target.value})} />
          </div>
          <div className="mb-3">
            <label htmlFor="edescription" className="form-label">Description</label>
            <input id="edescription" className="form-control" value={editForm.description} onChange={(e)=>setEditForm({...editForm, description: e.target.value})} />
          </div>
          <div className="mb-3">
            <label htmlFor="etag" className="form-label">Tag</label>
            <input id="etag" className="form-control" value={editForm.tag} onChange={(e)=>setEditForm({...editForm, tag: e.target.value})} />
          </div>
          <button type="submit" className='btn btn-primary'>Save</button>
          <button type="button" className='btn btn-secondary ms-2' onClick={()=>setEditForm({ _id: "", title: "", description: "", tag: "" })}>Cancel</button>
        </form>
      </div>
    </div>
  )}
  </> 
  )
}

export default Notes