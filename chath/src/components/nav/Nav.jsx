import React, { useState } from 'react'
import './nav.css'
import { BsChatText } from "react-icons/bs";
import { LuUsersRound } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";


const Nav = () => {
  const [activeItem, setActiveItem] = useState(0); 

  const menuItems = [
    { id: 0, icon: <BsChatText />, name: "Chat" },
    { id: 1, icon: <LuUsersRound />, name: "Friends" },
    { id: 2, icon: <IoCallOutline />, name: "Calls" },
    { id: 3, icon: <IoSettingsOutline />, name: "Settings" },
  ];

  return (
    <div className="sidebar-menu">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item ${activeItem === item.id ? 'active' : ''}`}
          onClick={() => setActiveItem(item.id)} 
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

export default Nav