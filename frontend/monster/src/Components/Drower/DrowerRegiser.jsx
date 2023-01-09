import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const DrowerRegiser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const btnRef = React.useRef();
  const [data, setData] = useState({});
  const handlechange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });


  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data)
    fetch("https://founditbackend-production.up.railway.app/user/signup", {
      method: "POST",
      body: JSON.stringify(data),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        toast({
          position:"top",
          title: "Registered successfully.",
          description: "Thank you for registering in foundit.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => {
        alert("Something went wrong ");
      });
  };
  return (
    <div>
      <Button
        ref={btnRef}
        colorScheme="white"
        onClick={onOpen}
        width="100%"
        height="70px"
        bg={"#6e00be"}
        size="lg"
        _hover={{ bg: "#6e00be" }}
      >
        Register with us
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontSize="4xl" textAlign={"center"} fontFamily="revert-layer">
              Create an Account (it's free)
            </Text>
            <Text textAlign={"center"}>
              It only takes a couple of minutes to get started
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <Box display={"flex"} justifyContent="space-evenly">
              <Text
                border="2px solid #f7f2fa"
                width="30%"
                padding="5px"
                borderRadius={"10px"}
                fontSize="1xl"
                display={"flex"}
                justifyContent="space-evenly"
              >
                {" "}
                <FcGoogle size="20px" /> Login With Google{" "}
              </Text>
              <Text
                border="2px solid #f7f2fa"
                width="30%"
                padding="5px"
                borderRadius={"10px"}
                fontSize="1xl"
                display={"flex"}
                justifyContent="space-evenly"
                margin={"auto"}
              >
                {" "}
                <AiFillLinkedin size="30px" color="bloe" /> Login With Facebook{" "}
              </Text>
              <Text
                border="2px solid #f7f2fa"
                width="30%"
                padding="5px"
                borderRadius={"10px"}
                fontSize="1xl"
                display={"flex"}
                justifyContent="space-evenly"
              >
                {" "}
                <BsFacebook size="20px" /> Login With Facebook{" "}
              </Text>
            </Box>
            <br />
            <form onSubmit={handlesubmit}>
              <Box>
                <FormLabel htmlFor="username">NAME</FormLabel>
                <Input
                  id="NAME"
                  placeholder="Enter Name"
                  type="text"
                  size="lg"
                  name="name"
                  onChange={handlechange}
                  required
                />
              </Box>
              <br />
              <Box>
                <FormLabel htmlFor="Email">Email</FormLabel>
                <Input
                  placeholder="Enter Email"
                  size="lg"
                  name="email"
                  onChange={handlechange}
                  required
                />
              </Box>
              <br />
              <Box>
                <FormLabel htmlFor="Password">Password</FormLabel>
                <Input
                  id="Email"
                  placeholder="Enter Password"
                  size="lg"
                  name="password"
                  onChange={handlechange}
                  required
                />
              </Box>
              <br />
              <Box>
                <FormLabel htmlFor="Mobile No">Mobile No</FormLabel>
                <Input
                  id="Mobile No"
                  placeholder="Mobile No"
                  size="lg"
                  name="mobile"
                  onChange={handlechange}
                  required
                />
              </Box>
              <br />
              <Box>
                <FormLabel htmlFor="Mobile No">Work Status</FormLabel>
                <Input
                  placeholder=" Enter Work Experience"
                  size="lg"
                  name="work_status"
                  onChange={handlechange}
                  required
                />
              </Box>
              <br />
              <Button
                width="20%"
                height="70px"
                color="white"
                bg={"#6e00be"}
                size="lg"
                _hover={{ bg: "#6e00be" }}
                type="submit"
              >
                Register Me
              </Button>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrowerRegiser;
