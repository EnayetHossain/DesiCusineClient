/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // create a user using the email and password in firebase
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log in user with the correct email and password
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user's profile with the name and photo
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // give the google login pop up
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // give the github login pop up
  const githubLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // log out the user when click on log out button
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // check if any auth is changed whether user logged out or logged in.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user logged: ", user);
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // send all the info and functions to context to access from everywhere
  const authInfo = {
    user,
    createUser,
    logInUser,
    updateUser,
    logOutUser,
    googleLogIn,
    githubLogIn,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
