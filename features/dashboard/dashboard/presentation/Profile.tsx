"use client";
import React from "react";
import FormUser from "../components/Profile/FormUser";
import ChangePassword from "../components/Profile/ChangePassword";
import Setting from "../components/Profile/Setting";

function Profile() {

  return (
    <div>
      <div className="mb-16">
        <FormUser />
      </div>
      <div className="mb-10">
        <ChangePassword />
      </div>
      <div>
       <Setting />
      </div>
    </div>
  );
}

export default Profile;
