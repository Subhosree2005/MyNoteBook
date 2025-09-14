import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_HOST } from '../config/api';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const host = API_HOST;
      const response = await fetch(`${host}/api/auth/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const json = await response.json();
      if (response.ok && json.authtoken) {
        localStorage.setItem('token', json.authtoken);
        navigate('/');
      } else {
        alert(json.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Network error. Please check if the backend server is running.');
    }
  };

  return (
    <div className="container my-4">
      <h2 className='text-light'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" className="form-control" name="name" value={form.name} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" name="email" value={form.email} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" name="password" value={form.password} onChange={onChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;


