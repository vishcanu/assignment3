import React, { useState } from 'react';
import './App.css';
import './Login.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const usernameRegex = /^[A-Za-z]+$/;
    
    if (!usernameRegex.test(username)){
      alert('Enter Valid Name');
    }
    if (!username || !password) {
      alert('Please fill in both username and password.');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        'Password must be at least 8 characters long and contain at least one letter and one number.'
      );
      return;
    }

    alert('Login successful!');
  };
  const handleForgotPassword = () => {
    alert('Forgot Password link clicked. check your Email');
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </p>
      </form>
    </div>
  );
}

export default App;

