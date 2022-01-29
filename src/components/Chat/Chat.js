import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../../axios";

const Chat = ({ messages }) => {
  const [input, setInput] = useState("");

  const messageHandler = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input,
      name: "demo user",
      timestamp: `${new Date().toDateString()}`,
      received: false,
    });

    setInput("");
  };
  //
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhHmXIoi6iDDBTm35yGRc9oNLrlBDj36KUQ&usqp=CAU" />

        <div className="chat__headerInfo">
          <h4>Room Name</h4>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((msg, index) => (
          <p
            key={index + 1}
            className={`chat__message ${msg.received && "chat__receiver"}`}
          >
            <span className="chat__name">{msg.name}</span>
            {msg.message}
            <span className="chat__timestamp">{msg.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>

        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a massage"
          />
          <button onClick={messageHandler} type="submit">
            Send
          </button>
        </form>

        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
