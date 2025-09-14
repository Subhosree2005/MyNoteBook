import React from 'react'

export const About = () => {

  return (
    <div className="container my-4">
      <h1 className="mb-3 text-light">About MyNotebook</h1>
      <p className="lead">A simple, secure, and fast cloud notebook to create, edit, and manage your notes from any device.</p>

      <div className="row ">
        <div className="col-md-6 mb-3 ">
          <div className="card h-100">
            <div className="card-body bg-secondary text-dark rounded ">
              <h5 className="card-title text-light">Features</h5>
              <ul className="mb-0 text-light">
                <li>Create, edit, and delete notes in real-time</li>
                <li>Secure access with email and password</li>
                <li>Device-independent access via your account</li>
                <li>Clean and responsive UI</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body bg-secondary text-dark rounded">
              <h5 className="card-title text-light">Tech Stack</h5>
              <ul className="mb-0 text-light">
                <li>Frontend: React, React Router</li>
                <li>Backend: Express, MongoDB, JWT auth</li>
                <li>Build: Create React App</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body bg-secondary text-dark rounded">
          <h5 className="card-title text-light">Privacy</h5>
          <p className="mb-0 text-light">Your notes are associated with your account and require a valid login token to access. Keep your credentials safe.</p>
        </div>

      </div>
      <div className='display-flex container center'>
        <footer className="bg-dark text-light text-center py-1  fixed-bottom">
          <p>&copy; MyNoteBook . All rights reserved.</p>
        </footer>

      </div>

    </div>
  )
}
export default About
