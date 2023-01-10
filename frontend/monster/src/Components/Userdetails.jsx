import { Avatar, WrapItem } from "@chakra-ui/react";
import React from "react";


const Userdetails = () => {
  
    let name=localStorage.getItem("username")
    //console.log(name[0])
    
  return (
    <div>
      <WrapItem>
        <Avatar name={name } color="white" bg="#6e00be" src="https://bit.ly/tioluwani-kolawole" width="40px" height="40px" />
      </WrapItem>
    </div>
  );
};

export default Userdetails;
