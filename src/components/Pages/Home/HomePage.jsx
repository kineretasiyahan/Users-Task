import React, { useState } from "react";
import { Link } from "react-router-dom";
import getAllUsersData from "../../../Service/service";
import "./HomePage.css";
import User from "../User/User";
import Button from "../../Featurs/Button/Button";

const HomePage = () => {
  const [users, setUsers] = useState();
  let statusStyle;
  const getAllUsersDataOnClick = () => {
    getAllUsersData()
      .then((response) => response.json())
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1 className="header-Home-Page"> Users App </h1>
      <div className="search-Button">
        <Button onClick={getAllUsersDataOnClick} text={"User list"}></Button>
      </div>
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <User className={statusStyle} users={user}></User>
          </div>
        );
      })}
    </div>
  );
};
export default HomePage;
