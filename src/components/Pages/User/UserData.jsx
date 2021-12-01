import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import getAllUsersData from "../../../Service/service";
import Button from "../../Featurs/Button/Button";
import './User.css';

const UserData = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
//   console.log(typeof id);
  useEffect(() => {
       getAllUsersData()
      .then((response) => response.json())
      .then((result) => { 
          console.log(result.data)
        let founded =result.data.find((user) => user.id === parseInt(id));
        setUser(founded);
        console.log(founded);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="user-card-main">
      <h1>User Data</h1>
      <h2>Name:{user?.name}</h2>
      <h2>Email:{user?.email}</h2>
      <h2>Gender:{user?.gender}</h2>
      <Link to={"/Users-Task"}><Button text={"Back to home"}></Button></Link>
    </div>
  );
};
export default UserData;
