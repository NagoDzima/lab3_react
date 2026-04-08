import React from 'react';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '40px', color: '#2c3e50' }}>
        Лабораторна UseState. DKO Corp.
      </h1>
      <UserForm />
    </div>
  );
}

export default App;