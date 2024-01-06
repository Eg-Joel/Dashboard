import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-top">
        <div className="sidebar-name">
          <img src="./logo.png" alt="" height={45} width={100} className="logo-img" />
           <span >logo</span>
        </div>
      </div>

      <ul className="sidebar-list">
        <li className="active" >
          <a href="">
            <DashboardIcon className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <PersonIcon className="icon" /> Profile
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <ReceiptLongIcon className="icon" /> Invoice
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <PeopleIcon className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <GroupsIcon className="icon" /> Users
          </a>
        </li>
        <li>
          <div className="sidebar-list-item">
            
            <span className="action-btn"><PowerSettingsNewIcon />&nbsp;&nbsp; Logout</span>
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
