import React from 'react';
import TicketItem from './TicketItem';

const TicketList = ({ tickets, updateStatus }) => {
  return (
    <div className="ticket-list">
      {tickets.map(ticket => (
        <TicketItem key={ticket.id} ticket={ticket} updateStatus={updateStatus} />
      ))}
    </div>
  );
};

export default TicketList;
