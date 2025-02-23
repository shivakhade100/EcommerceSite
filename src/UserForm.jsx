import React, { useState } from 'react'

function UserForm({onSubmit}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      // Handle input change
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        onSubmit(formData); 
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default UserForm