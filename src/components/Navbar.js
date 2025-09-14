import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
 
  let location = useLocation()

 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MYNOTEBOOK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"?"active":""}` }aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"?"active":""}` } to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
            </li>
          </ul>
          <div className="d-flex">
            {!localStorage.getItem('token') ? (
              <>
                <Link className="btn btn-primary mx-1" to="/login">Login</Link>
                <Link className="btn btn-secondary mx-1" to="/signup">Signup</Link>
              </>
            ) : (
              <button className="btn btn-danger" onClick={()=>{ localStorage.removeItem('token'); window.location.href = '/login'; }}>Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;