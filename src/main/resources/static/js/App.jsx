import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {/* Your main content goes here */}
        <div style={{ marginTop: '100px', padding: '20px' }}>
          <h2>Welcome to The Spice Villa!</h2>
          <p>Your restaurant content goes here...</p>
        </div>
      </main>
    </div>
  );
}

export default App;