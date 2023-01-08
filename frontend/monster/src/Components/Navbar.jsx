import { Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Components/Navbar.module.css";
import DrowerLogin from "./Drower/DrowerLogin";
import Drowwerleft from "./Drower/Drowwerleft";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav1}>
        <Drowwerleft />
        <Image
          src="https://media.foundit.in/trex/public/theme_3/src/assets/images/header/companyLogo.svg"
          width="150px"
          height="45px"
          
      
        />
        <Text fontSize="2xl" as="b">
          Job Search
        </Text>
        <Text fontSize="2xl" as="b">
          Career Tips
        </Text>
        <Text fontSize="2xl" as="b">
          Premium Services
        </Text>
        <Text fontSize="2xl" as="b">
          Skill Tests
        </Text>
      </div>
      <div className={styles.nav2}>
        <DrowerLogin/>
        <Button  colorScheme='blue' color={"#6e00be"}  variant='outline'>
        Employers Login
      </Button>
    
      </div>
    </div>
  );
};

export default Navbar;
