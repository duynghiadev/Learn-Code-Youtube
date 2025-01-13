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

  // Kiểm tra session khi khởi động app
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${baseApi}/auth/me`, {
          credentials: "include",
        });
        if (res.ok) {
          const me = await res.json();
          setUser(me);
          localStorage.setItem("user", JSON.stringify(me));
        } else {
          setUser(null);
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.error("Failed to fetch user session", error);
      }
    };

    const localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    } else {
      fetchUser();
    }
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
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        if (error.status === 401) {
          setError("Email or password is incorrect");
        } else {
          setError("Error! Contact the administrator for help.");
        }
      });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="app-container">
      {user ? (
        <div className="welcome-container">
          <h1 className="welcome-message">Welcome, {user.name}!</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={fields.email}
                onChange={setFieldValue}
                id="email"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={fields.password}
                onChange={setFieldValue}
                id="password"
                className="form-input"
              />
            </div>
            <button className="login-button">Login</button>
          </form>
          {!!error && <p className="error-message">{error}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
