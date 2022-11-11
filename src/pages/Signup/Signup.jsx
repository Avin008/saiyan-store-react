import { Link } from "react-router-dom";
import "./signup.css";
import { useEffect } from "react";

const Signup = () => {
  useEffect(() => {
    document.title = "Signup | Saiyan Store";
  }, []);

  return (
    <div className="form-container">
      <form className="login-form">
        <h1 className="login-heading">Sign Up</h1>

        <div className="input-group">
          <label className="input-label" htmlFor="Firstname">
            First name
          </label>
          <input type="text" placeholder="john" />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="lastname">
            Last name
          </label>
          <input type="password" placeholder="*************" />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input type="email" placeholder="johndoe@gmail.com" />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Password
          </label>
          <input type="password" placeholder="*************" />
        </div>
        <div className="btn-container">
          <button className="primary-btn">Sign Up</button>
        </div>
        <div className="link-container">
          <a className="primary-link" href="/login">
            Already Have a Account
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
