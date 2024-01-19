import React from "react";
import "./Profile.css";

import { Link, useParams } from "react-router-dom";

import useUsersData from "../../../../hooks/useUsersData";
import avatar from "../../../../constants/profile_image";

interface ProfileProps {};

const Profile: React.FC<ProfileProps> = () => {
  const { username } = useParams<{ username?: string }>() || {}; // Provide a default value or empty object
  const userData = useUsersData(username || '');

  return (
    <div className="profileContainer">
      <div className="card">
        <div className="image">
          {userData?.profile_image ? (
            <>
              <img src={avatar[userData?.profile_image]} className="rounded" width="155" />
            </>
          ) : (
            <>
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded" width="155" />
            </>
          )}
        </div>
        <div className="body">

          {/* <h4>{userData?.firstname} {userData?.lastname}</h4> */}
          <span className="username"><i>@{userData?.username}</i></span>

          <div className="stats">
            <div className="stat">
              <span className="currentTasks">Current Tasks</span> <br />
              <span className="number1">38</span>
            </div>

            <div className="stat">
              <span className="currentProject">Current Projects </span> <br />
              <span className="number2">3</span>
            </div>

            <div className="stat">
              <span className="tasksDone">Tasks Done</span> <br />
              <span className="number3">89</span>
            </div>
          </div>

          <div className="button">
            <button className="btn"><Link to="/projects">Projects</Link></button>
            <button className="btn"><Link to="/dashboard">Dashboard</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;