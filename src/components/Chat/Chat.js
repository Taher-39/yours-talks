import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

const Chat = () => {
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
        <p className="chat__message">
          <span className="chat__name">Taher</span>
          How are you.
          <span className="chat__timestamp">{new Date().toDateString()}</span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__receiverName">Forhad</span>
          Alhamdulillah, Fine. You?
          <span className="chat__timestamp">{new Date().toDateString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Taher</span>
          Alhamdulillah. Is going school today?
          <span className="chat__timestamp">{new Date().toDateString()}</span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__receiverName">Forhad</span>
          No, School is off today.
          <span className="chat__timestamp">{new Date().toDateString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>

        <form>
          <input
            type="text"
            name="massage"
            id="massage"
            placeholder="Type a massage"
          />
          <button type="submit">Send</button>
        </form>
        
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
