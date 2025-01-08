import React from "react";
import "./outgoingmessage.css";
import { CgSoftwareDownload } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";

const OutgoingMessage = ({ message }) => {
  return (
    <div className="outgoing-message">
      <div className="message-content outgoing">
        <div className="">
          <BsThreeDotsVertical className="msg-more-icon"/>
        </div>
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
      </div>
    </div>
  );
};

export default OutgoingMessage;
