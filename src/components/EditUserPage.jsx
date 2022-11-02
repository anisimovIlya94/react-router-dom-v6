import React from "react";
import { NavLink, useParams } from "react-router-dom";

const EditUserPage = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>Edit User Page</h1>
      <ul>
        <li>
          <NavLink to={`/users/${userId}`}>User profile page</NavLink>
        </li>
        <li>
          <NavLink to={`/users/${+userId + 1}`}>Another User</NavLink>
        </li>
        <li>
          <NavLink to={"/users"}>Users list page</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default EditUserPage;
