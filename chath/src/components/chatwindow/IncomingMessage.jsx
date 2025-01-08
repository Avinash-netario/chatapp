import React from "react";
import "./incomingmessage.css";
import { CgSoftwareDownload } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";


const IncomingMessage = ({ message }) => {
  return (
    <div className="incoming-message">
      <div className="message-content incoming">
        <div className="message-info">
          {message.type === "file" ? (
            <div className="file-message contents">
              <span>{message.content}</span>
              <button className="download-btn"><CgSoftwareDownload /></button>
            </div>
          ) : (
            <span className="contents">{message.content}</span>
          )}
          <span className="timestamp">{message.time}</span>
        </div>
        <div className="">
          <BsThreeDotsVertical className="msg-more-icon"/>
        </div>
      </div>
    </div>
  );
};

export default IncomingMessage;
