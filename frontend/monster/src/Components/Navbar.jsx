import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "../Components/Navbar.module.css";
import DrowerLogin from "./Drower/DrowerLogin";
import Drowwerleft from "./Drower/Drowwerleft";

const Navbar = () => {
  const navigate = useNavigate();
  const handleadmin=()=>{
    navigate("/adminlogin")
  }
  const handleclick=()=>{
    navigate("/")
  }
  return (
    <div className={styles.nav}>
      <div className={styles.nav1}>
        <Drowwerleft />
        <Image
          src="https://media.foundit.in/trex/public/theme_3/src/assets/images/header/companyLogo.svg"
          width="150px"
          height="45px"
          onClick={handleclick}
          
      
        />
      
        <Text fontSize="lg" as="b" mt="10px" >
          Job Search
        </Text>
        <Text fontSize="lg" as="b" mt="10px">
          Career Tips
        </Text>
        <Text fontSize="lg" as="b" mt="10px">
          Premium Services
        </Text>
        <Text fontSize="lg" as="b" mt="10px">
          Skill Tests
        </Text>
      
      </div>
      <div className={styles.nav2}>
        <DrowerLogin/>
        <Button  colorScheme='blue' color={"#6e00be"}  variant='outline' onClick={handleadmin}>
        Employers Login
      </Button>
    
      </div>
    </div>
  );
};

export default Navbar;
