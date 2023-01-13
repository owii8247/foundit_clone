import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  List,
  ListItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { HiBellAlert } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";
import { SlBadge } from "react-icons/sl";
import { FcDownload } from "react-icons/fc";
import DrowerRegiser from "./DrowerRegiser";

const Drowwerleft = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  return (
    <div>
      <Button ref={btnRef} bg="#f7f2fa" color={"#6e00be"} onClick={onOpen}>
        <FaBars size={"30px"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box
              width="90%"
              height="170px"
              borderRadius={"15px"}
              bg="#6e00be"
              padding={"10px"}
              display="flex"
              justifyContent={"space-evenly"}
            >
              <Box>
                <CgProfile size="40px" color="white" />
              </Box>
              <Box>
                <Text color="white">Hello & Welcome!</Text>
                <br />

                <Button variant="outline" h="80px" _hover={{ bg: "#6e00be" }}>
                  <DrowerRegiser />
                </Button>
              </Box>
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <Flex gap={3} ml="15px">
              <CgProfile size="30px" color="#6e00be" />
              <Text fontSize={"2xl"} as="b" mt={-1} color="#6e00be" cursor={"pointer"}>
                Login
              </Text>
            </Flex>

            <Flex gap={3} mt="10px" ml="15px">
              <AiOutlineFileSearch size="30px" color="#6e00be" />
              <Text fontSize={"2xl"} as="b" mt={-1} color="#6e00be" cursor={"pointer"}>
                Job Search
              </Text>
            </Flex>
            <Flex gap={3} mt="10px" ml="15px">
              <HiBellAlert size="30px" color="#6e00be" />
              <Text fontSize={"2xl"} as="b" mt={-1} color="#6e00be" cursor={"pointer"}>
                {" "}
                New Job Alert
              </Text>
            </Flex>

            {/* <--------acc1-------> */}
            <Accordion
              defaultIndex={[0]}
              allowMultiple
              border="1px solid white"
              mt="10px"
            >
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"semibold"}
                    >
                      {/* <AiOutlineFileSearch size="30px" color="#6e00be" /> Non IT Jobs */}
                      <Flex gap={3} mt="10px">
                        <AiOutlineFileSearch size="30px" color="#6e00be" />
                        <Text
                          fontSize={"2xl"}
                          as="b"
                          mt={-1}
                          color="#6e00be"
                        >
                          {" "}
                          Jobs Categories
                        </Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign={"start"} fontSize={"lg"}  color="#6e00be">
                  <List>
                    <ListItem>HR</ListItem>
                    <ListItem>Sales</ListItem>
                    <ListItem>Accounting</ListItem>
                    <ListItem>Call Center</ListItem>
                    <ListItem>Event Management</ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            {/* <--------acc1-------> */}
            <Accordion
              defaultIndex={[0]}
              allowMultiple
              border="1px solid white"
              mt="10px"
            >
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"semibold"}
                    >
                      {/* <AiOutlineFileSearch size="30px" color="#6e00be" /> Non IT Jobs */}
                      <Flex gap={3} mt="10px">
                        <AiOutlineContacts size="30px" color="#6e00be" />
                        <Text
                          fontSize={"2xl"}
                          as="b"
                          mt={-1}
                          color="#6e00be"
                        >
                          {" "}
                          Carrier Tips
                        </Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign={"start"}  fontSize={"lg"}  color="#6e00be">
                  <List>
                    <ListItem>HR</ListItem>
                    <ListItem>Sales</ListItem>
                    <ListItem>Accounting</ListItem>
                    <ListItem>Call Center</ListItem>
                    <ListItem>Event Management</ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            {/* <--------acc1-------> */}
            <Accordion
              defaultIndex={[0]}
              allowMultiple
              border="1px solid white"
              mt="10px"
            >
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"semibold"}
                    >
                      {/* <AiOutlineFileSearch size="30px" color="#6e00be" /> Non IT Jobs */}
                      <Flex gap={3} mt="10px">
                        <SlBadge size="30px" color="#6e00be" />
                        <Text
                          fontSize={"2xl"}
                          as="b"
                          mt={-1}
                          color="#6e00be"
                        >
                          {" "}
                          Perimium Service
                        </Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign={"start"} fontSize={"lg"}  color="#6e00be">
                  <List>
                    <ListItem>HR</ListItem>
                    <ListItem>Sales</ListItem>
                    <ListItem>Accounting</ListItem>
                    <ListItem>Call Center</ListItem>
                    <ListItem>Event Management</ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            {/* <--------acc1-------> */}
            <Accordion
              defaultIndex={[0]}
              allowMultiple
              border="1px solid white"
              mt="10px"
            >
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"semibold"}
                    >
                      {/* <AiOutlineFileSearch size="30px" color="#6e00be" /> Non IT Jobs */}
                      <Flex gap={3} mt="10px">
                        <AiOutlineFileSearch size="30px" color="#6e00be" />
                        <Text
                          fontSize={"2xl"}
                          as="b"
                          mt={-1}
                          color="#6e00be"
                        >
                          {" "}
                          Skill Test
                        </Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign={"start"} fontSize={"lg"}  color="#6e00be">
                  <List>
                    <ListItem>HR</ListItem>
                    <ListItem>Sales</ListItem>
                    <ListItem>Accounting</ListItem>
                    <ListItem>Call Center</ListItem>
                    <ListItem>Event Management</ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Flex gap={3} mt="10px" ml="13px">
              <HiDownload size="30px" color="#6e00be" />
              <Text fontSize={"2xl"} as="b" mt={-1} color="#6e00be">
                {" "}
                DownLoad App
              </Text>
            </Flex>

            <Box display={"flex"} justifyContent="space-evenly" mt="10px">
              <Image src="https://www.foundit.in/rio/public/images/android-footer.png" />
              <Image src="https://www.foundit.in/rio/public/images/ios-footer.png" />
            </Box>

            <Flex gap={3} mt="10px" ml="13px">
              <CgProfile size="30px" color="#6e00be" />
              <Text fontSize={"2xl"} as="bold" mt={-1} color="#6e00be">
                {" "}
                Employer Login
              </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Drowwerleft;
