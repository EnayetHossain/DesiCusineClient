/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import "./Register.css";

const Register = () => {
  const [error, setError] = useState("");

  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const registerUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredentials) => {
        const createdUser = userCredentials.user;
        console.log(createdUser);

        updateUser(name, photo)
          .then(() => {
            setError("");
            navigate(from, { replace: true });
          })
          .catch((error) => {
            setError(error.message);
            console.log(error);
          });

        setError("");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="max-desktop">
      <Navbar></Navbar>
      <h1 className="log-title">Register</h1>

      <form onSubmit={registerUser}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="photo">Photo url</label>
          <input type="text" id="photo" name="photo" placeholder="Photo url" />
        </div>

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
          <input type="submit" value={"Register"} name="register" />
        </div>

        <div>
          <p>
            Already have an account?
            <Link className="redirect" to={"/login"}>
              Login
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

export default Register;
