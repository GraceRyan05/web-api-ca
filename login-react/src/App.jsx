import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="auth-container">
      <header className="auth-header">
        <h1>Welcome back</h1>
        <p className="subtitle">Sign in to continue to the Movies Dashboard</p>
      </header>

      <main className="auth-main">
        <div className="auth-card">
          <LoginForm />
        </div>
      </main>

      <footer className="auth-footer">
        <small>Don't have an account? Open the signup app to create one.</small>
      </footer>
    </div>
  );
}

export default App;
