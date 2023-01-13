import { Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      
        <Text fontSize="lg" as="b" mt="10px"  cursor="pointer" onMouseOver={""} >
          Job Search
        </Text>
        {/* <Flex justify="center" mt={6} minH="100vh">
        <Menu isOpen={isOpen} onClose={onClose} bg="black">
          <MenuButton
            onMouseOver={onOpen}
            
             as={Button}
            // rightIcon={<ChevronDownIcon />}
          >
            Actions
          </MenuButton>
          <MenuList onMouseOut={onClose}>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Flex> */}

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
        Admin Login
      </Button>
    
      </div>
    </div>
  );
};

export default Navbar;
