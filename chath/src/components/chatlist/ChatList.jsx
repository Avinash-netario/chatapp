import React, { useState } from "react";
import ChatItem from "../chatitem/ChatItem";
import "./chatlist.css";
import { RiInboxArchiveLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import Avi from '../../assets/avi.jpg'
import { IoMenu } from "react-icons/io5";
import Logo from '../../assets/logo.png'
import Sidebar from "../sidebar/Sidebar";

const ChatList = () => {
  const users = [
    {
      id: 1,
      name: "Harsh Singh",
      message: "Hey how are you!",
      time: "12min",
      avatar: Avi,
      unreadCount: 0,
      isActive: true,
    },
    {
      id: 2,
      name: "Abhay",
      message: "Hey how are you",
      time: "2d",
      avatar: Avi,
      unreadCount: 12,
      isActive: false,
    },
    {
      id: 3,
      name: "Abhishek",
      message: "Seen",
      time: "2d",
      avatar: Avi,
      unreadCount: 0,
      isActive: false,
    },
    {
      id: 4,
      name: "Ilima shekh",
      message: "Something went wrong",
      time: "2d",
      avatar: Avi,
      unreadCount: 0,
      isActive: false,
    },
    {
      id: 5,
      name: "Amar",
      message: "Something went wrong...",
      time: "2d",
      avatar: Avi,
      unreadCount: 0,
      isActive: false,
    },
    {
      id: 6,
      name: "Shashi",
      message: "What happen bro",
      time: "2d",
      avatar: Avi,
      unreadCount: 0,
      isActive: false,
    },
    {
      id: 7,
      name: "Shashi",
      message: "What happen bro",
      time: "2d",
      avatar: Avi,
      unreadCount: 0,
      isActive: false,
    },
    {
      id: 8,
      name: "Shashi",
      message: "What happen bro",
      time: "2d",
      avatar: Avi,
      unreadCount: 0,
      isActive: false,
    },
    {
      id: 9,
      name: "Shashi",
      message: "What happen bro",
      time: "2d",
      avatar: Avi,
      unreadCount: 0,
      isActive: false,
    },
    {
      id: 10,
      name: "Shashi",
      message: "What happen bro",
      time: "2d",
      avatar: Avi,
      unreadCount: 0,
      isActive: false,
    },
    {
      id: 11,
      name: "Shashi",
      message: "What happen bro",
      time: "2d",
      avatar: Avi,
      unreadCount: 0,
      isActive: false,
    },
    {
      id: 12,
      name: "Shashi",
      message: "What happen bro",
      time: "2d",
      avatar: Avi,
      unreadCount: 0,
      isActive: false,
    },
    {
      id: 13,
      name: "Shashi",
      message: "What happen bro",
      time: "2d",
      avatar: Avi,
      unreadCount: 0,
      isActive: false,
    },
    {
      id: 14,
      name: "Shashi",
      message: "What happen bro",
      time: "2d",
      avatar: Avi,
      unreadCount: 0,
      isActive: false,
    },
  ];

  const [menu, setMenu] = useState(false);
  const [hidePage, setHidePage] = useState(false);
  const handleOpenMenu = () => {
      setMenu(!menu);
  }
  const handlePageHide = () => {
     setHidePage(!hidePage);
  }
// className="chat-list"
  return (
    <div  className={`chat-list ${hidePage ? 'hide' : ''}`}>
      {menu && ( <Sidebar onClose={handleOpenMenu}/> )}
      <div className="logo">
        <img src={Logo} alt="kasper" />
      </div>
      <div className="header">
        <div className="head">
          <div className="menu" onClick={handleOpenMenu}>
            <IoMenu />
          </div>
          <h2>Messages</h2>
        </div>
        <button className="new-chat-btn">+</button>
      </div>
      <div className="tabs">
        <button className="tab active"><RiInboxArchiveLine className="arrow-down"/> Chats</button>
        <button className="tab"><RiInboxArchiveLine className="arrow-down"/> Archived <span className="badge">3</span> </button>
      </div>
      <div className="search">
        <input type="text" placeholder="Search by chats and names..." />
        <button className="search-btn"> <IoSearchOutline /></button>
      </div>
      <div className="chat-items">
        {users.map((user) => (
          <ChatItem key={user.id} user={user} onHide={handlePageHide} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
