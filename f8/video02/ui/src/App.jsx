import { useEffect, useState } from "react";
import "./App.css";

const baseApi = "http://localhost:3001/api";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    email: "john@example.com",
    password: "123456",
  });

  const setFieldValue = ({ target: { name, value } }) => {
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch(`${baseApi}/auth/me`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((me) => {
        setUser(me);
      });
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    fetch(`${baseApi}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(fields),
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw res;
      })
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        if (error.status === 401) {
          setError("Email or password is incorrect");
        }
        setError("Error no invalid! Contact the administrator to help");
      });
  };

  return (
    <div>
      {user ? (
        <h1>Welcome, {user.name}!</h1>
      ) : (
        <>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email "
              name="email"
              value={fields.email}
              onChange={setFieldValue}
              id="email"
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password "
              name="password"
              value={fields.password}
              onChange={setFieldValue}
              id="password"
            />
            <br />
            <button>Login</button>
          </form>
          {!!error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}
    </div>
  );
}

export default App;
