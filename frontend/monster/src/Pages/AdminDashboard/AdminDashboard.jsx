import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AdminNavbar from "./AdminNavbar";
import { FaUserAlt } from "react-icons/fa";
import { TiShoppingBag } from "react-icons/ti";
import { AiOutlineForm } from "react-icons/ai";
import "./AdminDashbord.css";

const AdminDashboard = () => {
  return (
    <div>
     
      <Text
        fontSize={"30px"}
        fontWeight="bold"
        color={"#6e00be"}
        padding="10px"
        textAlign={"start"}
      >
        Foundit Dashbord
      </Text>
      <Flex wrap={"nowrap"}>
        <Box w="20%">
          <AdminNavbar />
        </Box>

        <Box w="80%" className="featured" h="210px">
          <div className="featuredItem">
            <span className="featuredTitle">
              <FaUserAlt size="70px" color="#6e00be" />
            </span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">User</span>
              <span className="featuredMoneyRate"></span>
            </div>
            <p className="featuredSub">15</p>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              <TiShoppingBag size="70px" color="#6e00be" />
            </span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">Jobs Post</span>
              <span className="featuredMoneyRate"></span>
            </div>
            <p className="featuredSub">20</p>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">
              <AiOutlineForm size="70px" color="#6e00be" />
            </span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">Jobs Applied</span>
              <span className="featuredMoneyRate"></span>
            </div>
            <p className="featuredSub">200</p>
          </div>
        </Box>
      </Flex>
    </div>
  );
};

export default AdminDashboard;
