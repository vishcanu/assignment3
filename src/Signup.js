import React, { useState } from "react";
import "./App.css";
import "./Signup.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignup = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill all details");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Invalid email address.");

      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Signup successful!");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginRight:'114px'
          }}
        >
          <div>
            <input
            style={{marginTop:'8px', marginRight:'2px'}}
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
          </div>

          <p style={{ width: "210px" , color:'#0056b3'}}>Remember Me</p>
        </div>

        <p style={{color:'white'}}>
          By signing up, you agree to our{"   "}
          <a href="/terms" target="blank" rel="noopener noreferrer">
            Terms and Conditions
          </a>
        </p>
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default App;
