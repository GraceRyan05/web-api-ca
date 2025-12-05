import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const submit = (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setMsg('Please enter username and password');
      return;
    }
    setMsg('Submitted');
  };

  return (
    <form className="auth-form" onSubmit={submit}>
      <label className="label">Username</label>
      <input className="input" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />

      <label className="label">Password</label>
      <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />

      <div className="action-box">
        <button className="btn" type="submit">Sign in</button>
      </div>

      {msg && <p className="msg">{msg}</p>}
    </form>
  );
};

export default LoginForm;
