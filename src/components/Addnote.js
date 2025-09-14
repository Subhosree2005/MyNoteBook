import React , {useContext, useState}  from 'react'
import noteContext from '../context/notes/noteContext';
const Addnote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className=' container my-3 border border-primary rounded  '>
            <div className='container my-4'>
                <h1 className="text-center text-light"> Welcome to MyNoteBook</h1>
                <form className='my-3'>
                    <div className="form-group mb-3 fw-bold">
                        <label htmlFor="title ">Title</label>
                        <input type="text" className="form-control my-2" id="title" placeholder="Enter title" name ="title" value={note.title} onChange={onChange} />
                    </div>
                    <div className="form-group mb-3 fw-bold">
                        <label htmlFor="desc">Description</label>
                        <input type="text" className="form-control my-2" id="description" placeholder="Enter description" name="description" value={note.description} onChange={onChange} />

                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary " onClick={handleClick}>add Note</button>
                </form>
            </div>
            
        </div>
    )
}

export default Addnote;