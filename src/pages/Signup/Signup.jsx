import { Link } from "react-router-dom";
import "./signup.css";
import { useEffect } from "react";

const Signup = () => {
  useEffect(() => {
    document.title = "Signup | Saiyan Merch";
  }, []);

  return (
    <div className="signup-form-container">
      <div className="saiyan-form">
        <h1 className="heading">Signup</h1>

        <div className="input-group">
          <label className="label" for="">
            Email adresses
          </label>
          <input
            className="input"
            type="email"
            name=""
            id=""
            placeholder="john@gmail.com"
          />
          <label className="label" for="">
            Password
          </label>
          <input
            className="input"
            type="password"
            name=""
            id=""
            placeholder="********"
          />
          <div className="checkbox">
            <span>
              <input type="checkbox" name="" id="" />
              <label for="">I accepts all Terms & Conditions</label>
            </span>
          </div>

          <div className="actions">
            <a className="btn btn--primary" href="#">
              Create New Account
            </a>
            <Link className="btn btn--secondary" to="/login">
              Already have an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
