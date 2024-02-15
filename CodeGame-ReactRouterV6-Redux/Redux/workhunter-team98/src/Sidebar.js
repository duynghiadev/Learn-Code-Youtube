import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css"
import bannerImg from  "./images/ashley-whitlatch-36aGnv29Ss0-unsplash.jpg"
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
const Sidebar = () => {
  const user = useSelector(selectUser)
  const recentItem = (topic) => {
   return  <div className="sidebar__recentItem">
      <span className="sidebar__has">#</span>
      <p>{topic}</p>
    </div>
  }
  return (
    <div data-sidebar  className="sidebar">
      <div className="sidebar__top">
        <img src={bannerImg} alt="" />
        <Avatar src={user.photoUrl} className="sidebar__avatar" >
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed</p>
            <p className="sidebar__statNumber">23,400</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">25,600</p>
          </div>
          <h6 className="grow text-start">Grow your network</h6>
        
      </div>
      <div className="sidebar__bottom">
      <p>Recent</p> 
      <div>
      {recentItem("react js")}
      {recentItem("vue js")}
      {recentItem("angular")}
      {recentItem("programing")}
      {recentItem("software engineering")}
      {recentItem("design")}
      {recentItem("developer")}
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
