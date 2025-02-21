import React from "react";
import WithAuth from "./WithAuth";

const Profile = ({ user, theme }) => {
  return (
    <div>
      Profile Page : {user.name + " " + user.role} + {theme}
    </div>
  );
};

export { Profile };
export default WithAuth(Profile);
