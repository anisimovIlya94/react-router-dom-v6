import React from "react";
import { NavLink } from "react-router-dom";

const UsersListPage = () => {
  const nums = [0, 1, 2, 3, 4];
  return (
    <div>
      <h1>UsersListPage</h1>
      <ul>
        {nums.map((num) => {
          return (
            <li key={num}>
              <NavLink to={`/users/${num}`}>User {num}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersListPage;
