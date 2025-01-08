import React, { useState } from "react";
import "./chatbox.css";
import { MdAttachFile } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { FaRegFilePdf } from "react-icons/fa";
import { FaRegFileZipper } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi2";


const ChatBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [openAttachment, setOpenAttachment] = useState(false);

  const handleAttachment = () => {
    setOpenAttachment(!openAttachment);
  }

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="chat-box">
      <div className="attachment">
        <button className="attachment-btn" onClick={handleAttachment}><MdAttachFile /></button>
        {openAttachment && (
           <div className="attach-more">
              <button className="pdf">
                <FaRegFilePdf />
              </button>
              <button className="zip">
                <FaRegFileZipper />
              </button>
              <button className="image">
                <IoImageOutline />
              </button>
              <button className="video">
                <HiOutlineVideoCamera />
              </button>
          </div>
        )}
      </div>
      <input
        type="text"
        placeholder="Send messages"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="send-btn" onClick={handleSend}>
        <IoMdSend />
      </button>
    </div>
  );
};

export default ChatBox;
