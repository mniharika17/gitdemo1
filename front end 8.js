import React, { useState } from "react";
const styles = {
  input: {
    display: "block",
    width: "100%",
    padding: "12px",
    margin: "12px 0",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px 15px",
    margin: "5px",
    background: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [page, setPage] = useState("Dashboard");
  const [name, setName] = useState("Admin User");

  function handleLogin(e) {
    e.preventDefault();

    if (
      email === "admin@example.com" &&
      password === "123456"
    ) {
      setLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  }

  if (!loggedIn) {
    return (
      <div style={{
        maxWidth: "350px",
        margin: "100px auto",
        fontFamily: "Arial",
        padding: "20px",
      }}>
        <h1>My App</h1>
        <p>Login to continue</p>

        <form onSubmit={handleLogin}>
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button style={styles.button} type="submit">
            Login
          </button>
        </form>

        <p>Demo: admin@example.com / 123456</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>My Application</h2>

      <button
        style={styles.button}
        onClick={() => setPage("Dashboard")}
      >
        Dashboard
      </button>

      <button
        style={styles.button}
        onClick={() => setPage("Profile")}
      >
        Profile
      </button>

      <button
        style={{ ...styles.button, background: "#dc2626" }}
        onClick={() => {
          setLoggedIn(false);
          setEmail("");
          setPassword("");
          setPage("Dashboard");
        }}
      >
        Logout
      </button>

      {page === "Dashboard" && (
        <div>
          <h1>Dashboard</h1>
          <p>Welcome, {name}!</p>
          <h3>Users: 120</h3>
          <h3>Orders: 45</h3>
          <h3>Revenue: $12,500</h3>
        </div>
      )}

      {page === "Profile" && (
        <div>
          <h1>Profile</h1>

          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Profile updated successfully!");
          }}>
            <label>Name</label>
            <input
              style={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              style={styles.input}
              value="admin@example.com"
              disabled
            />

            <button style={styles.button} type="submit">
              Save Profile
            </button>
          </form>
        </div>
      )}
    </div>
  );
}