import './App.css';
import React from 'react';
// import UserTable from './UserTable';
// import UserTable from './UserTable';
import FetchData from './FetchData';

const App = () => {
  return (
    <div className="app">
      <h1>Users</h1>
      <FetchData />
    </div>
  );
};

export default App;
