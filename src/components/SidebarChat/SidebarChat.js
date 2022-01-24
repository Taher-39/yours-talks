import React from "react";
import { Avatar } from "@material-ui/core";
import './sidebarChat.css'

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar src="https://avatars.githubusercontent.com/u/53148971?s=96&v=4" />
      <div className="sidebarChat-info">
        <h4>Room Name</h4>
        <p>This room massage is important</p>
      </div>
    </div>
  );
};

export default SidebarChat;
