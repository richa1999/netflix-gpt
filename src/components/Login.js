import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignUpForm = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    if (isSignUpForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src={BACKGROUND_IMAGE}
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUpForm && (
          <input
            type="name"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-70"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-70"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-70"
        />
        {errorMessage && (
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        )}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignUpForm}>
          {isSignUpForm
            ? "Already registered? Sign In Now"
            : "New to Netflix? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default Login;
