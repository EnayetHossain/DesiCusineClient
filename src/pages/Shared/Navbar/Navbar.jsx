/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FaBars, FaMixer } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  // get the logout method from context
  const { user, logOutUser } = useContext(AuthContext);
  // check if user click on ham bar menu or not
  const [open, setOpen] = useState(false);
  // get the location where user is trying to go
  const location = useLocation();
  // get the pathname where user was trying to go
  const { pathname } = location;
  // split the path name to show the active route the user currently in
  const splitLocation = pathname.split("/");
  console.log(splitLocation);

  // log out user if user click on the logout button
  const logOut = () => {
    logOutUser()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-desktop">
      <nav className="navigation">
        <h1 className="logo">DesiCuisine</h1>

        <ul className="main-menu">
          <li className="menu-item">
            <Link className={splitLocation[1] === "" ? "active" : ""} to="/">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link
              className={splitLocation[1] === "blog" ? "active" : ""}
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>

        <div className="login-menu">
          {user && (
            <div className="profile-pic">
              <img
                title={user.displayName ? user.displayName : ""}
                src={user.photoURL ? user.photoURL : "/public/logo512.png"}
                alt={user.displayName}
              />
            </div>
          )}

          {user ? (
            <button onClick={logOut} className="btn">
              Logout
            </button>
          ) : (
            <div>
              <Link className="btn" to="/login">
                Login
              </Link>
              <Link className="btn" to="/register">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* <FaBars onClick={() => setOpen(!open)} className="ham-bar"></FaBars> */}
        <div onClick={() => setOpen(!open)} className="ham-bar">
          {open ? <FaMixer></FaMixer> : <FaBars></FaBars>}
        </div>

        <div className={`mobile-menu ${open ? "height-100" : "height-0"}`}>
          <ul className="mobile-menu-items">
            <li className="mobile-menu-item">
              <Link
                className={splitLocation[1] === "" ? "active" : ""}
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link
                className={splitLocation[1] === "blog" ? "active" : ""}
                to={"/blog"}
              >
                Blog
              </Link>
            </li>
          </ul>

          <div className="mobile-login-menu">
            {user && (
              <div className="profile-pic">
                <img
                  title={user.displayName ? user.displayName : ""}
                  src={user.photoURL ? user.photoURL : "/public/logo512.png"}
                  alt={user.displayName}
                />
              </div>
            )}

            {user ? (
              <button onClick={logOut} className="btn">
                Logout
              </button>
            ) : (
              <div className="login-register">
                <Link className="btn" to="/login">
                  Login
                </Link>
                <Link className="btn" to="/register">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
