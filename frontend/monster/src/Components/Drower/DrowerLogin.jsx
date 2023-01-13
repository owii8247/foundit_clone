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
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import DrowerRegiser from "./DrowerRegiser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Userlogin } from "../../Redux/auth/action";

const DrowerLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const token = useSelector((store) => store.authentication.data.token);
  console.log("token",token)
  const firstField = React.useRef();
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
    console.log(usercred)
    dispatch(Userlogin(usercred));
    toast({
      position:"top",
      title: " Sucessfully Loged In.",
      description: "",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    //
  };
  useEffect(() => {
    if (token
      ) {
      navigate("/");
    }
  }, [token, navigate]);
  return (
    <div>
      <Button
        leftIcon={<CgProfile size={"30px"} />}
        colorScheme="blue"
        color={"#6e00be"}
        variant="outline"
        onClick={onOpen}
      >
        Login
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text as="bold" fontSize="4xl">
              Welcome!
            </Text>
            <Text fontSize="1xl">Log in using your foundit credentials</Text>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <form onSubmit={handlesubmit}>
                <Box>
                  <FormLabel htmlFor="username">EMAIL</FormLabel>
                  <Input
                    type="email"
                    placeholder="E-Mail/Mobile"
                    size="lg"
                    name="email"
                    onChange={handlechange}
                    required
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="password">PASSWORD</FormLabel>
                  <Input
                   
                    placeholder="Password"
                    size="lg"
                    type="password"
                    name="password"
                    onChange={handlechange}
                    required
                  />
                </Box>
                <br/>

                <Button
                  colorScheme="teal"
                  bg={"#6e00be"}
                  size="lg"
                  _hover={{ bg: "#6e00be" }}
                  type="submit"
                >
                  Login
                </Button>
                <br />
              </form>

              <Box>
                <Text fontSize="2xl">
                  Or, <span style={{ color: "#6e00be" }}>Login via OTP</span>{" "}
                </Text>
              </Box>

              <Box>
                <Text fontSize="2xl" textAlign={"center"}>
                  with your social network{" "}
                </Text>
                <br />
                <Box display="flex">
                  <Text
                    border="1px solid grey"
                    width="50%"
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
                    border="1px solid grey"
                    width="50%"
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
                <Text
                  border="1px solid grey"
                  width="55%"
                  padding="5px"
                  borderRadius={"10px"}
                  fontSize="1xl"
                  display={"flex"}
                  justifyContent="space-evenly"
                  margin={"auto"}
                >
                  {" "}
                  <AiFillLinkedin size="30px" color="bloe" /> Login With
                  LinkedIn{" "}
                </Text>
              </Box>

              <Box border="1px solid grey" height="200px" padding="5px" borderRadius={5}>
                <Text fontSize="3xl" textAlign={"center"}>
                  New to foundit?{" "}
                </Text>
                <Text textAlign={"center"}>
                  Create your profile now and be visible to the top
                </Text>
                <Text textAlign={"center"}>recruiters in the world</Text>
                <br />

                <DrowerRegiser />
              </Box>

              <Box border="1px solid grey" height="150px" borderRadius={5}>
                <Text textAlign={"center"} mt="8px">
                  Your dream job is a click away! Get the app on
                </Text>
                <Text textAlign={"center"}>your mobile.</Text>
                <br />
                <Box display={"flex"} justifyContent="space-evenly">
                  <Image src="https://www.foundit.in/rio/public/images/android-footer.png" />
                  <Image src="https://www.foundit.in/rio/public/images/ios-footer.png" />
                </Box>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrowerLogin;
