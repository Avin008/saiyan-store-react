import "./login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../context/auth-context";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Saiyan Store";
  }, []);

  const { setAuth } = useAuthContext();

  const [loginData, setLoginData] = useState({
    email: null,
    password: null,
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const loginAsGuest = () => {
    setLoginData({ email: "johndoe@gmail.com", password: "johndoe@1234" });
  };

  const navigate = useNavigate();

  const loginFunc = async () => {
    try {
      const res = await axios.post("/api/auth/login", {
        email: loginData.email,
        password: loginData.password,
      });
      setAuth((prev) => ({
        ...prev,
        token: res.data.encodedToken,
        status: true,
      }));
      localStorage.setItem("token", res.data.encodedToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loginFunc();
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
            value={loginData.email}
            required
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
            value={loginData.password}
            required
          />
        </div>
        <div className="btn-container">
          <button className="primary-btn">Login</button>
          <button className="secondary-btn" onClick={loginAsGuest}>
            Login as Guest
          </button>
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
