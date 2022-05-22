import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../context/auth-context";

const Signup = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();
  const [signupInfo, setSignupInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const signUpFunc = async () => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firsName: signupInfo.firsName,
        lastName: signupInfo.lastName,
        email: signupInfo.email,
        password: signupInfo.password,
      });

      localStorage.setItem("TOKEN", response.data.encodedToken);
      localStorage.setItem(
        "USER_INFO",
        JSON.stringify({
          firstName: response.data.createdUser.firstName,
          lastName: response.data.createdUser.lastName,
          email: response.data.createdUser.email,
        })
      );

      setAuth({
        loginStatus: true,
        token: localStorage.getItem("TOKEN"),
        user: JSON.parse(localStorage.getItem("USER_INFO")),
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-form-container">
      <div className="saiyan-form">
        <h1 className="heading">Signup</h1>

        <div className="input-group">
          <label className="label" htmlFor="">
            First Name
          </label>
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="john"
            onChange={(e) =>
              setSignupInfo((prev) => ({ ...prev, firsName: e.target.value }))
            }
          />
          <label className="label" htmlhtmlFor="">
            Last Name
          </label>
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Doe"
            onChange={(e) =>
              setSignupInfo((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />

          <label className="label" htmlFor="">
            Email address
          </label>
          <input
            className="input"
            type="email"
            name=""
            id=""
            placeholder="john@gmail.com"
            onChange={(e) =>
              setSignupInfo((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <label className="label" htmlFor="">
            Password
          </label>
          <input
            className="input"
            type="password"
            name=""
            id=""
            placeholder="********"
            onChange={(e) =>
              setSignupInfo((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <div className="checkbox">
            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">I accepts all Terms & Conditions</label>
            </span>
          </div>

          <div className="actions">
            <button className="btn btn--primary" onClick={signUpFunc}>
              Create New Account
            </button>
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
