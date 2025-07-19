import React from 'react';

const TicketItem = ({ ticket, updateStatus }) => {
  const handleStatusChange = (e) => {
    updateStatus(ticket.id, e.target.value);
  };

  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p><strong>Category:</strong> {ticket.category}</p>
      <p><strong>Status:</strong>
        <select value={ticket.status} onChange={handleStatusChange}>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
      </p>
      <p>{ticket.description}</p>
    </div>
  );
};

export default TicketItem;
