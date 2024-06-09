import React from "react";

const Profile = (props) => {
  const { user, handleSignOut } = props;
  return (
    <div className="absolute flex flex-col bg-black p-3 text-white w-28 h-fit">
      <div className="flex items-cente mb-5">
        <img
          className="h-5 w-5 cursor-pointer mr-2"
          src={user.photoURL}
          alt="user-icon"
        />
        <span className="text-xs">{user.displayName}</span>
      </div>
      <div className="align-middle">
      <button className="cursor-pointer text-sm" onClick={handleSignOut}>
        Sign Out
      </button>
      </div>
    </div>
  );
};

export default Profile;
