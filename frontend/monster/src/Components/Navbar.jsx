import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "../Components/Navbar.module.css";
import { Userlogout } from "../Redux/auth/action";
import DrowerLogin from "./Drower/DrowerLogin";
import Drowwerleft from "./Drower/Drowwerleft";
import Userdetails from "./Userdetails";


const Navbar = () => {
  let token=localStorage.getItem("usertoken")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlogout=()=>{
    dispatch(Userlogout())
   localStorage.removeItem("username");
   navigate("/")

  }
  
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
      
        <Text fontSize="lg" as="b" mt="10px"  cursor="pointer" >
          Job Search
        </Text>
        <Text fontSize="lg" as="b" mt="10px" cursor="pointer">
          Career Tips
        </Text>
        <Text fontSize="lg" as="b" mt="10px" cursor="pointer">
          Premium Services
        </Text>
        <Text fontSize="lg" as="b" mt="10px" cursor="pointer">
          Skill Tests
        </Text>
      
      </div>
      <div className={styles.nav2}>
        {
          (!token)?<DrowerLogin/>: <Button  colorScheme='blue' leftIcon={<Userdetails/>} color={"#6e00be"}  variant='outline' onClick={handlogout}>
          Logout
        </Button>
        }
        
        <Button  colorScheme='blue'  color={"#6e00be"}  variant='outline' onClick={handleadmin}>
        Employers Login
      </Button>
    
      </div>
    </div>
  );
};

export default Navbar;
