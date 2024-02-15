import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    dob: "",
    password: "",
    cnfPassword: "",
  });
  const [formDataFocus, setFormDataFocus] = useState({
    userName: false,
    email: false,
    password: false,
    cnfPassword: false,
  });

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(e);
    console.log("i am submitted");
  };

  const handleInputChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleInputBlur = (e) => {
    setFormDataFocus((data) => ({
      ...data,
      [e.target.name]: true,
    }));
  };

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="form__input">
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required={true}
            onBlur={handleInputBlur}
            focused={formDataFocus.userName.toString()}
            onInvalid={(e) => e.preventDefault()}
          />
          <span>
            Username should be 3-16 characters long and shouldn't include
            special characters
          </span>
        </div>
        <div className="form__input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required={true}
            onBlur={handleInputBlur}
            focused={formDataFocus.email.toString()}
            onInvalid={(e) => e.preventDefault()}
          />
          <span>It should be a valid email</span>
        </div>
        <div className="form__input">
          <label htmlFor="dob">Date Of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__input">
          <label htmlFor="pswd">Password</label>
          <input
            type="text"
            id="pswd"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required={true}
            onBlur={handleInputBlur}
            focused={formDataFocus.password.toString()}
            onInvalid={(e) => e.preventDefault()}
          />
          <span>Password should be 6-20 characters long</span>
        </div>
        <div className="form__input">
          <label htmlFor="cnfPassword">Confirm Password</label>
          <input
            type="text"
            id="cnfPassword"
            name="cnfPassword"
            value={formData.cnfPassword}
            onChange={handleInputChange}
            required={true}
            pattern={formData.password}
            onBlur={handleInputBlur}
            focused={formDataFocus.cnfPassword.toString()}
            onInvalid={(e) => e.preventDefault()}
          />
          <span>Password should match</span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
