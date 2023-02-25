import {
  Box,
  Button,
  Image,
  Input,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./AdminLogin.module.css";
import aimage from "../../image/founditimage.jpg";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CoreService from "./CoreService";
import Better from "./Better";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Adminligin = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [usercred, setUerCed] = useState({});
  const handlechange = (e) => {
    const { name, value } = e.target;
    setUerCed({
      ...usercred,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    //console.log(usercred)
    if (usercred.email === "admin@gmail.com" && usercred.password === "admin") {
      toast({
        position: "top",
        title: " Sucessfully Loged In.",
        description: "",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    navigate("/admindashboard")
 //

      
    } else {
      //alert("login failed");
      toast({
        position: "top",
        title: " login failed.",
        description: "",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }

    //
  };
  return (
   <>
      <Navbar/> 
      <div className={styles.admain}>
        <div className={styles.admin1}>
          <Image src={aimage} height="100%" width={"100%"} />
        </div>
        <div className={styles.admin2}>
          <div className={styles.adlogin}>
            <Text as="b" fontSize={"2xl"} textAlign="left">
              Login
            </Text>
            <form onSubmit={handlesubmit}>
              <Input
                placeholder="Enter Email"
                mt="5px"
                borderBottom={"1px solid grey"}
                borderRadius="none"
                name="email"
                onChange={handlechange}
                required
              />
              <Input
                placeholder="Password"
                mt="10px"
                borderBottom={"1px solid grey"}
                borderRadius="none"
                name="password"
                type="password"
                onChange={handlechange}
                required
              />
              <Text mt="10px" mr="0px" textAlign={"right"} color="#5d4da8">
                Forgot Password?
              </Text>
              <Button
                bg="#5d4da8"
                color="white"
                width="100%"
                type="submit"
                mt="20px"

              >
                Login
              </Button>
            </form>
            <hr />
          </div>
        </div>
      </div>

      <div className={styles.service}>
        <Text fontSize={"6xl"}>Our Services</Text>
        <Text>For employers who need great people. Find Better, Faster.</Text>
        <br />
        <Tabs variant="unstyled">
          <TabList ml="37%">
            <Tab _selected={{ color: "white", bg: "#5d4da8" }}>
              CORE SERVICE
            </Tab>
            <Tab _selected={{ color: "white", bg: "#5d4da8" }}>
              BETTER TOGETHER
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CoreService />
            </TabPanel>
            <TabPanel>
              <Better />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <Footer/>
    </>
  );
};

export default Adminligin;
