import React from "react";
import "./Sidebar.css"; // CSS file for styling
import Nav from "../nav/Nav";
import Logo from '../../assets/logo.png'
import { IoClose } from "react-icons/io5";

const Sidebar = ({onClose}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={Logo} alt="Kasper" />
        <div className="close" onClick={onClose}>
          <IoClose />
        </div>
      </div>
      <Nav/>
    </div>
  );
};

export default Sidebar;
