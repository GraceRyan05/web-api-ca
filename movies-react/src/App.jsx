import React from 'react';
import './App.css';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <div className="auth-container">
      <header className="auth-header">
        <h1>Create an account</h1>
        <p className="subtitle">Sign up to get personal recommendations and save favorites</p>
      </header>

      <main className="auth-main">
        <div className="auth-card">
          <SignupForm />
        </div>
      </main>

      <footer className="auth-footer">
        <small>Already have an account? Open the login app to sign in.</small>
      </footer>
    </div>
  );
}

export default App;
