import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const host = (process.env.NODE_ENV === 'production' || window.location.hostname !== 'localhost') 
          ? "https://backend-mynotebook-xnja.onrender.com"
          : "http://localhost:5000";
      const response = await fetch(`${host}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      const json = await response.json();
      if (response.ok && json.authtoken) {
        localStorage.setItem('token', json.authtoken);
        navigate('/');
      } else {
        alert(json.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Network error. Please check if the backend server is running.');
    }
  };

  return (
    <div className="container my-4">
      <h2 className='text-light'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
         

      </form>
      <footer className="mt-3 text-light">
        <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
      </footer>
    </div>
     
  );
};

export default Login;


