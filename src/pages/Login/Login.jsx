/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import "./Login.css";

const Login = () => {
  // state declaration to show to error
  const [error, setError] = useState("");
  // get all the login method via context api to use in login
  const { logInUser, googleLogIn, githubLogIn } = useContext(AuthContext);
  // navigate hook to navigate user to correct route after login
  const navigate = useNavigate();
  const location = useLocation();

  // get the route which user was try to go
  const from = location.state?.from?.pathname || "/";

  // use email password to login the user
  const loginUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // login user with email password from useContext
    logInUser(email, password)
      .then((userCredentials) => {
        const loggedUser = userCredentials.user;
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  // login via google pop up
  const logInGoogle = (event) => {
    event.preventDefault();
    googleLogIn()
      .then((userCredentials) => {
        console.log(userCredentials.user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  // login via github pop up
  const logInGithub = (event) => {
    event.preventDefault();
    githubLogIn()
      .then((userCredentials) => {
        console.log(userCredentials.user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-desktop">
      <Navbar></Navbar>
      <h1 className="log-title">Login</h1>

      <form onSubmit={loginUser}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <div>
          <input type="submit" value={"Login"} name="register" />
        </div>

        <div>
          <button onClick={logInGoogle} className="login-btn">
            <FaGoogle></FaGoogle> Login with google
          </button>
        </div>

        <div>
          <button onClick={logInGithub} className="login-btn">
            <FaGithub></FaGithub> Login with github
          </button>
        </div>

        <div>
          <p>
            Do not have an account?{" "}
            <Link className="redirect" to={"/register"}>
              Register
            </Link>
          </p>
        </div>

        <div>
          <p className="error">{error}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
