import { Button } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminNavbar.css";
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { TiShoppingBag } from 'react-icons/ti';
import { AiOutlineMail } from 'react-icons/ai';
import { MdFeedback } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';

const AdminNavbar = () => {
  const navigate = useNavigate();
  // const handlejobs = () => {
  //   navigate("/admindashbord/jobsdata");
  // };
  //   const handleuser=()=>{
  //       navigate("/admindashbord/userdata");

  //   }
  return (
    <>
   
       <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/admindashboard" className="link">
                <li className="sidebarListItem active">
                  <AiOutlineHome className="sidebarIcon" />
                  Home
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/admindashbord/userdata" className="link">
                <li className="sidebarListItem">
                  <FaUserAlt className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to="/admindashbord/jobsdata" className="link">
                <li className="sidebarListItem">
                  <TiShoppingBag className="sidebarIcon" />
                  Jobs
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <AiOutlineMail className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <MdFeedback className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <AiOutlineMessage className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </div>
        </div>
      </div>
      </>
     

  );
};

export default AdminNavbar;
