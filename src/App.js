import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Routing/AppRouter';
import './App.css'

function App() {
  return (
    <div className="App">
    <Router>
      <AppRouter/>
    </Router>
    </div>
  );
}
export default App;
