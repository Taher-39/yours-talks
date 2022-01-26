import React from "react";
import { Avatar } from "@material-ui/core";
import './sidebarChat.css'

const SidebarChat = () => {
  const avatarImgs = [
    {
      imgLink: "https://pbs.twimg.com/media/DXqHKZ0WsAACzLT.jpg"
    },
    {
      imgLink: "https://preview.redd.it/v00q2i2r2wu21.jpg?width=640&crop=smart&auto=webp&s=3a47788729c08f2b152e4792b2f27489809d9a67"
    },
    {
      imgLink: "https://preview.redd.it/v00q2i2r2wu21.jpg?width=640&crop=smart&auto=webp&s=3a47788729c08f2b152e4792b2f27489809d9a67"
    },
  ]
  return (
    <div className="sidebarChat">
      <Avatar src="https://pbs.twimg.com/media/DXqHKZ0WsAACzLT.jpg" />
      <div className="sidebarChat-info">
        <h2>Room Name</h2>
        <p>This room massage is important</p>
      </div>
    </div>
  );
};

export default SidebarChat;
