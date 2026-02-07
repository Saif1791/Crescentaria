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
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/config.js";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(circle at 10% 10%, rgba(251, 146, 60, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 90% 90%, rgba(234, 88, 12, 0.4) 0%, transparent 40%);
  padding-top: 120px;
  padding-bottom: 40px;

  .container {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    animation: fadeIn 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .heading {
    text-align: center;
    font-weight: 800;
    font-size: 32px;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    letter-spacing: -0.5px;
  }

  .form {
    margin-top: 20px;
  }

  .form .input {
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
    color: #333;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 15px 20px;
    border-radius: 12px;
    margin-top: 15px;
    font-size: 16px;
    transition: all 0.3s ease;
  }

  .form .input:focus {
    outline: none;
    background: white;
    border-color: #fb923c;
    box-shadow: 0 0 0 4px rgba(251, 146, 60, 0.1);
    transform: translateY(-2px);
  }

  .form .forgot-password {
    display: block;
    margin-top: 15px;
    text-align: right;
  }

  .form .forgot-password a {
    font-size: 14px;
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }

  .form .forgot-password a:hover {
    color: #ea580c;
  }

  .form .login-button {
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(135deg, #fb923c, #ea580c);
    color: white;
    padding-block: 15px;
    margin: 30px auto 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(234, 88, 12, 0.3), 0 2px 4px -1px rgba(234, 88, 12, 0.1);
    border: none;
    font-size: 16px;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
  }

  .form .login-button:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(234, 88, 12, 0.4), 0 4px 6px -2px rgba(234, 88, 12, 0.2);
  }

  .form .login-button:active {
    transform: translateY(0);
  }

  .social-account-container {
    margin-top: 25px;
    position: relative;
  }

  .social-account-container .title {
    display: block;
    text-align: center;
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 20px;
  }

  .social-account-container .social-accounts {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .social-account-container .social-accounts .social-button {
    background: white;
    border: 1px solid #e5e7eb;
    padding: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .social-account-container .social-accounts .social-button .svg {
    width: 24px;
    height: 24px;
    fill: #ea4335;
  }

  .social-account-container .social-accounts .social-button:hover {
    transform: scale(1.1);
    border-color: #fb923c;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .agreement {
    display: block;
    text-align: center;
    margin-top: 25px;
    color: #6b7280;
    font-size: 14px;
  }

  .agreement a {
    text-decoration: none;
    color: #6b7280;
    font-weight: 500;
  }

  .agreement a span {
    color: #ea580c;
    font-weight: 700;
    margin-left: 4px;
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

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      dispatch(userSignInStart());

      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const res = await signInWithPopup(auth, provider);
      console.log(res);
      const result = await fetch("/server/googleauth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: res.user.email,
          UID: res.user.email.slice(0, res.user.email.indexOf("@")),
        }),
      });

      const data = await result.json();
      setLoading(false);

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      } else {
        dispatch(userSignInSuccess(data));
        navigate("/");
      }
    } catch (err) {
      dispatch(userSignInFailure(err.message));
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <StyledDiv>
      <div className="container w-[380px] lg:w-[550px]">
        <div className="heading">Sign In</div>
        <p className="text-red-600 text-center font-bold text-xl">{error}</p>
        <form className="form" method="POST" onSubmit={handleSubmit}>
          <input
            placeholder="Unique ID(UID)"
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
            <button className="social-button google" onClick={signInWithGoogle}>
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
              <span className="text-orange-400">Sign Up</span>
            </Link>{" "}
            Now!
          </a>
        </span>
      </div>
    </StyledDiv>
  );
};

export default SignInComponent;
