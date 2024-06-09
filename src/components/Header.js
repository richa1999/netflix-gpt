import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import icon from "../assets/icons8-sort-down-30.png";
import Profile from "./Profile";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { LOGO } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [showProfile, setShowProfile] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="object-contain w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div>
          <div className="flex items-center w-24">
            <img
              className="h-12 w-12 cursor-pointer mr-3"
              src={user.photoURL}
              alt="user-icon"
            />
            <img
              src={icon}
              alt="dropdown-icon"
              className="h-4 w-4"
              onMouseEnter={() => setShowProfile(true)}
            />
          </div>
          {showProfile && (
            <div onMouseLeave={() => setShowProfile(false)} className="py-3">
              <Profile user={user} handleSignOut={handleSignOut}/>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
