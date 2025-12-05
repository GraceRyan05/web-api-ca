import React, { useState } from 'react';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [msg, setMsg] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!username || !password) { setMsg('Please complete all fields'); return; }
    if (password !== confirm) { setMsg('Passwords do not match'); return; }
    setMsg('Account creation');
  };

  return (
    <form className="auth-form" onSubmit={submit}>
      <label className="label">Username</label>
      <input className="input" value={username} onChange={e => setUsername(e.target.value)} placeholder="Choose a username" />

      <label className="label">Password</label>
      <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="At least 8 chars" />

      <label className="label">Confirm password</label>
      <input className="input" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Repeat password" />

      <div className="action-box">
        <button className="btn" type="submit">Create account</button>
      </div>

      {msg && <p className="msg">{msg}</p>}
    </form>
  );
};

export default SignupForm;
