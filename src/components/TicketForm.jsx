import React, { useState } from 'react';

const TicketForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Wi-Fi',
    status: 'Open',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return alert("Please fill all fields.");
    
    const newTicket = {
      id: Date.now(),
      ...formData
    };

    onAdd(newTicket);
    setFormData({ title: '', category: 'Wi-Fi', status: 'Open', description: '' });
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <h2>Add New Ticket</h2>
      <input type="text" name="title" placeholder="Issue Title" value={formData.title} onChange={handleChange} />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option>Wi-Fi</option>
        <option>Printer</option>
        <option>Performance</option>
      </select>
      <textarea name="description" placeholder="Issue Description" value={formData.description} onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TicketForm;
