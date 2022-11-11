import { Link } from "react-router-dom";
import "./signup.css";
import { useEffect, useState } from "react";

const Signup = () => {
  useEffect(() => {
    document.title = "Signup | Saiyan Store";
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const [signUpData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={submitHandler}>
        <h1 className="login-heading">Sign Up</h1>

        <div className="input-group">
          <label className="input-label" htmlFor="Firstname">
            First name
          </label>
          <input
            type="text"
            placeholder="john"
            name="firstname"
            onChange={inputHandler}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="lastname">
            Last name
          </label>
          <input
            type="text"
            placeholder="lastname"
            name="lastname"
            onChange={inputHandler}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            onChange={inputHandler}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*************"
            onChange={inputHandler}
          />
        </div>
        <div className="btn-container">
          <button className="primary-btn">Sign Up</button>
        </div>
        <div className="link-container">
          <Link to="/login" className="primary-link">
            Already Have a Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
