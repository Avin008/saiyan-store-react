import "./login.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Saiyan Store";
  }, []);

  return (
    <div className="form-container">
      <form className="login-form">
        <h1 className="login-heading">Login</h1>

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
          <button className="primary-btn">Login</button>
          <button className="secondary-btn">Login as Guest</button>
        </div>
        <div className="link-container">
          <a className="primary-link" href="/signup">
            Create New Account
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
