import React, { useState, useEffect } from 'react';
import TicketList from './components/TicketList';
import TicketForm from './components/TicketForm';
import Filter from './components/Filter';
import data from './data/tickets.json';
import './App.css';


const App = () => {
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
  const storedTickets = localStorage.getItem('tickets');
  if (storedTickets) {
    setTickets(JSON.parse(storedTickets));
  } else {
    setTickets(data);
  }
}, []);

useEffect(() => {
  localStorage.setItem('tickets', JSON.stringify(tickets));
}, [tickets]);


  const filteredTickets =
    filter === "All" ? tickets : tickets.filter(ticket => ticket.category === filter);

  return (
    <div className="app">
      <h1>System Troubleshooting Log</h1>
      <p className="subtitle">By Vishal Yadav — Frontend Developer</p>
      <Filter setFilter={setFilter} />
      <TicketList tickets={filteredTickets} updateStatus={updateStatus} />
      <TicketForm onAdd={(ticket) => setTickets([ticket, ...tickets])} />
    </div>
  );
};

export default App;
