import "./login.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Saiyan Merch";
  }, []);

  return (
    <div className="login-form-container">
      <div className="saiyan-form">
        <h1 className="form__heading">Login</h1>

        <div className="input-group">
          <label className="login-form__label" for="email">
            Email adresses
          </label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="john@gmail.com"
          />
          <label className="label" for="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="********"
          />
          <div className="checkbox">
            <span>
              <input type="checkbox" name="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </span>

            <span>
              <a href="#">Forgot Password?</a>
            </span>
          </div>

          <div className="actions">
            <a className="btn btn--primary" href="#">
              Login
            </a>
            <Link className="btn btn--secondary" to="/signup">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
