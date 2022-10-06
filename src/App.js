import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Users from './Users.js';
import UserDetails from './UserDetails.js';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await reponse.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <h1>React Router Users Demo</h1>
      <Routes>
        <Route path="/" element={<Users users={users} />} />
        <Route path="/details/:id" element={<UserDetails users={users} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
