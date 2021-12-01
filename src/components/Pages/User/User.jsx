import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Featurs/Button/Button";
const User = ({ users, statusStyle }) => {
  if (users.status === "active") {
    statusStyle = "active";
  } else {
    statusStyle = "inactive";
  }
  return (
    <div>
      <ul>
        Name: {users.name}
        <li className={statusStyle}>User status:{users.status}</li>
        <Link to={`/UserData/${users.id}`}>
          <Button text={"Get More Information"}></Button>
        </Link>
      </ul>
    </div>
  );
};
export default User;
