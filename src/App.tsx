import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TableComponents from './Components/TableComponents/TableComponent';
import '@mantine/core/styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TableComponents/>
    </div>
  );
}

export default App;
