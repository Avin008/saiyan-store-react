import "./login.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Saiyan Store";
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={submitHandler}>
        <h1 className="login-heading">Login</h1>

        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            name="email"
            onChange={inputHandler}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Password
          </label>
          <input
            type="password"
            placeholder="*************"
            name="password"
            onChange={inputHandler}
          />
        </div>
        <div className="btn-container">
          <button className="primary-btn">Login</button>
          <button className="secondary-btn">Login as Guest</button>
        </div>
        <div className="link-container">
          <Link to="/signup" className="primary-link">
            Create New Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
