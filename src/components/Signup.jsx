import { useNavigate } from "react-router-dom";
import React from "react";
import backgroundImg from "../assets/background.png";
import "./SignupLogin.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/");
  };

  return (
    <>
      <div className="picture">
        <img src={backgroundImg} className="poster" alt="" />

        <div className="center">
          <form onSubmit={handleSignup}>
            <h3>Signup</h3>

            <div className="text1">
              <input type="text" placeholder="Enter Username" required></input>
            </div>

            <div className="text1">
              <input type="email" placeholder="Enter Email" required></input>
            </div>

            <div className="text1">
              <input
                type="password"
                placeholder="Enter Password"
                required
              ></input>
            </div>

            <div className="login-link">
              {" "}
              Forget Password? <a href="#">Click here</a>
            </div>

            <div className="btnn">
              <div
                className="submit"
                onClick={handleSignup}
                type="submit"
                value="Signup"
              >
                Signup
              </div>
            </div>
            <div className="Account">
              Already have Account?{" "}
              <a href="#" onClick={handleSignup}>
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
