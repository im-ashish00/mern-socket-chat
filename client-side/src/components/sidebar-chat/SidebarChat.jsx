import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

const SidebarChat = () => {
  return <div className="sidebarChat">
    <Avatar />
    <div className="sidebarChat__info">
        <h2>Ashish Sharma</h2>
        <p>This is the last message</p>
    </div>
  </div>;
};

export default SidebarChat;
