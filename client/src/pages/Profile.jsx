import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  userSignInSuccess,
  userSignOutFailure,
  userSignOutStart,
  userSignOutSuccess,
  userUpdateFailure,
  userUpdateStart,
} from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
const StyledDiv = styled.div`
  .form_main {
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    padding: 30px 30px 30px 30px;
    border-radius: 30px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
  }

  .heading {
    font-size: 2.5em;
    color: #2e2e2e;
    font-weight: 700;
    margin: 15px 0 30px 0;
  }

  .inputContainer {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inputIcon {
    position: absolute;
    left: 10px;
  }

  .inputField {
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid rgb(173, 173, 173);
    border-radius: 30px;
    margin: 10px 0;
    color: black;
    font-size: 0.8em;
    font-weight: 500;
    box-sizing: border-box;
    padding-left: 30px;
  }

  .inputField:focus {
    outline: none;
    border-bottom: 2px solid rgb(199, 114, 255);
  }

  .inputField::placeholder {
    color: rgb(80, 80, 80);
    font-size: 1em;
    font-weight: 500;
  }

  #button {
    position: relative;
    width: 100%;
    border: 2px solid #8000ff;
    background-color: #8000ff;
    height: 40px;
    color: white;
    font-size: 0.8em;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 30px;
    margin: 10px;
    cursor: pointer;
    overflow: hidden;
  }

  #button::after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.253);
    height: 100%;
    width: 150px;
    top: 0;
    left: -200px;
    border-bottom-right-radius: 100px;
    border-top-left-radius: 100px;
    filter: blur(10px);
    transition-duration: 0.5s;
  }

  #button:hover::after {
    transform: translateX(600px);
    transition-duration: 0.5s;
  }

  .signupContainer {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .signupContainer p {
    font-size: 0.9em;
    font-weight: 500;
    color: black;
  }

  .signupContainer button {
    font-size: 0.7em;
    font-weight: 500;
    background-color: #2e2e2e;
    color: white;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 20px;
  }
`;

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [formData, setformData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(userUpdateStart());

    try {
      const res = await fetch(`/server/user/update/${user._id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        dispatch(userUpdateFailure(res));
        return;
      }

      const data = await res.json();
      dispatch(userSignInSuccess(data));
      setLoading(false);
      setError(null);
      setSuccess(true);
    } catch (err) {
      setLoading(false);
      console.log(err);
      dispatch(userUpdateFailure(err));
      setError(err);
      setSuccess(false);
    }
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(userSignOutStart());

    try {
      const res = await fetch("/server/signout", {
        method: "POST",
      });

      dispatch(userSignOutSuccess());
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      dispatch(userSignOutFailure());
    }
  };
  return (
    <main>
      <StyledDiv className="flex justify-center mt-[10%]">
        <form className="form_main" method="POST" onSubmit={handleSubmit}>
          <p className="heading">Profile</p>
          <span className="text-green-600">{error ? error : ""}</span>
          <span className="text-green-600">
            {success ? "Succesfully Updated!" : ""}
          </span>
          <div className="inputContainer">
            <svg
              viewBox="0 0 16 16"
              fill="#2e2e2e"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              className="inputIcon"
            >
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
            </svg>
            <input
              placeholder="Name"
              id="name"
              className="inputField"
              type="text"
              defaultValue={user.name}
              onChange={handleChange}
            />
          </div>

          <div className="inputContainer">
            <svg
              viewBox="0 0 16 16"
              fill="#2e2e2e"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              className="inputIcon"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
            </svg>
            <input
              placeholder="Password"
              id="password"
              className="inputField"
              type="password"
              onChange={handleChange}
            />
          </div>

          <button id="button" disabled={loading}>
            {loading ? "Updating Credentials" : "Update Credentials"}
          </button>
          <div className="signupContainer">
            <p>Don't have any account?</p>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        </form>
      </StyledDiv>
    </main>
  );
};

export default Profile;
