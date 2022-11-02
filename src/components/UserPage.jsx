import React from "react";
import { NavLink, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>User Page</h1>
      <div>
        <NavLink to={"/users"}>Users List Page</NavLink>
      </div>
      <NavLink to={`/users/${userId}/edit`}>Edit this Page</NavLink>
      <p>userId:{userId}</p>
    </div>
  );
};

export default UserPage;
