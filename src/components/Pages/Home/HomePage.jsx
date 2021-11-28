import React, { useState } from 'react';
import getAllUsersData from '../../../Service/service';
import './HomePage.css';

const HomePage = () => {
    const [users, setUsers] = useState();
    let statusColor;
    const getAllUsersDataOnClick = () => {
        getAllUsersData()
            .then(response => response.json())
            .then((response) => setUsers(response.data))
            .catch(error => console.log(error));
    }
    return (
        <div>
            <h1 className="header-Home-Page"> Users App </h1>
            <div className="search-Button"><button onClick={getAllUsersDataOnClick}>User list</button></div>
            {users?.map((user, index) => {
                if (user.status === "active") {
                    statusColor = "green"
                }
                else {
                    statusColor = "red"
                }
                return <ul key={index}>
                    <li style={{ color: statusColor,alignItems:"flex-end" }}>user status:{user.status}</li>
                </ul>
            })}
        </div>

    )
}
export default HomePage;
