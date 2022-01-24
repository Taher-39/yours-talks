import React from "react";
import "./sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "../SidebarChat/SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src="https://avatars.githubusercontent.com/u/53148971?s=96&v=4" />
        <div className="sidebar-header-right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-search-container">
          <SearchOutlined />
          <input type="text"  placeholder="search or start new chat"></input>
        </div>
      </div>

      <div className='sidebar-chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
