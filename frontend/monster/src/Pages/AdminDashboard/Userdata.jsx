import { Text } from "@chakra-ui/react";
import React from "react";
import AdminNavbar from "./AdminNavbar";

const Userdata = () => {
  return (
    <div>
      <AdminNavbar />

      <Text
        fontSize={"40px"}
        fontWeight="bold"
        color={"teal"}
        marginBottom="10px"
        textAlign={"center"}
      >
        Userdata
      </Text>
    </div>
  );
};

export default Userdata;
