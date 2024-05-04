/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  userSignInStart,
  userSignInFailure,
  userSignInSuccess,
} from "../redux/user/userSlice.js";
import { useDispatch } from "react-redux";
const StyledDiv = styled.div`
  .container {
    max-width: 550px;
    background: #fb923c;
    border-radius: 40px;
    padding: 25px 35px;
    border: 5px solid rgb(255, 255, 255);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
  }

  .heading {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: white;
  }

  .form {
    margin-top: 20px;
  }

  .form .input {
    width: 100%;
    color: black;
    border: none;
    padding: 15px 20px;
    border-radius: 20px;
    margin-top: 15px;
    box-shadow: black 0px 10px 10px -5px;
    border-inline: 2px solid transparent;
  }

  .form .input:focus {
    outline: none;
    border-inline: 2px solid black;
  }

  .form .forgot-password {
    display: block;
    margin-top: 10px;
    margin-left: 10px;
  }

  .form .forgot-password a {
    font-size: 14px;
    color: white;
    text-decoration: none;
    font-style: bold;
  }

  .form .login-button {
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(to right, #3b82f6, #a855f7);
    color: white;
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
    border: none;
    transition: all 0.5s ease-in-out;
  }

  .form .login-button:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
  }

  .form .login-button:active {
    transform: scale(0.95);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
  }

  .social-account-container {
    margin-top: 25px;
  }

  .social-account-container .title {
    display: block;
    text-align: center;
    font-size: 15px;
    color: white;
  }

  .social-account-container .social-accounts {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .social-account-container .social-accounts .social-button {
    background: linear-gradient(to right, #3b82f6, #a855f7);
    border: 3px solid white;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    aspect-ratio: 1;
    display: grid;
    place-content: center;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
    transition: all 0.3s ease-in-out;
  }

  .social-account-container .social-accounts .social-button .svg {
    fill: white;
    margin: auto;
  }

  .social-account-container .social-accounts .social-button:hover {
    transform: scale(1.2);
  }

  .social-account-container .social-accounts .social-button:active {
    transform: scale(0.9);
  }

  .agreement {
    display: block;
    text-align: center;
    margin-top: 15px;
    color: white;
    font-weight: bold;
  }

  .agreement a {
    text-decoration: none;
    color: white;
    font-size: 15px;
    font-weight: bold;
  }

  .agreement span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SignInComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userSignInStart());
    setLoading(true);
    try {
      const res = await fetch("/server/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      dispatch(userSignInSuccess(data));
      navigate("/");
    } catch (err) {
      dispatch(userSignInFailure(err.message));
      setLoading(false);
      console.log(err);
      setError(err);
    }
  };
  return (
    <StyledDiv className="flex justify-center align-middle mt-64">
      <div className="container">
        <div className="heading">Sign In</div>
        <p className="text-white text-center font-bold text-xl">{error}</p>
        <form className="form" method="POST" onSubmit={handleSubmit}>
          <input
            placeholder="RRN"
            id="UID"
            name="UID"
            type="text"
            className="input"
            required
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            className="input"
            required
            onChange={handleChange}
          />
          <span className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </span>
          <button className="login-button">
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">
            <button className="social-button google">
              <svg
                viewBox="0 0 488 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
            </button>
          </div>
        </div>
        <span className="agreement">
          <a href="#">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="text-purple-500">Sign Up</span>
            </Link>{" "}
            Now!
          </a>
        </span>
      </div>
    </StyledDiv>
  );
};

export default SignInComponent;
