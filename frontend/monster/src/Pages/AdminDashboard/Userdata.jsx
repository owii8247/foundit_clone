import { Box, Flex, Image, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import "./AdminDashbord.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
 
  Radio,
  RadioGroup,
  Select,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";

const Userdata = () => {
  const toast = useToast();

  const [user,setUser]=useState([])

  const getUser=()=>{
    axios.get("https://foundit-backend-qu3p.onrender.com/user")

    .then((res)=>{
      setUser(res.data)
    })
  }

  // 
  const handleDelete = (id) => {
    console.log(id);

    axios
      .delete(`https://foundit-backend-qu3p.onrender.com/user/${id}`)
      .then(() => getUser())
      .then(() =>
        toast({
          position: "top",
          title: "Data Deleted",
          description: "Data is deleted from backend",
          status: "success",
          duration: 2000,
          isClosable: true,
        })
      );
  };
  useEffect(()=>{
    getUser()
  },[])
  console.log(user)
  return (
    <>
      <Text
        fontSize={"30px"}
        fontWeight="bold"
        color={"#6e00be"}
        padding="10px"
        textAlign={"start"}
      >
        Foundit Dashbord
      </Text>
      <Flex>
        <Box w="20%" mt="0px">
          <AdminNavbar />
        </Box>

        {/* <Box><JobPost/></Box> */}
        

        {/* ---data map-------------- */}
        <Box w="80%" className="featuredItem">
        <Text
        fontSize={"30px"}
        fontWeight="bold"
        color={"#6e00be"}
        padding="10px"
        textAlign={"start"}
      >
        User Data
      </Text>
          

          
          <Box w="99%" h="450px" mt="10px" className="table_box">
            <TableContainer>
              <Table border="4px solid #6e00be" colorScheme="red">
                <Thead border="1px solid red">
                  <Tr>
                    <Th color="#6e00be">User ID</Th>
                    <Th color="#6e00be">Name</Th>
                    <Th color="#6e00be">Email</Th>
                    <Th color="#6e00be">Mobile No</Th>
                    <Th color="#6e00be">Delete</Th>
                  </Tr>
                </Thead>
                {user?.map((el) => (
                  <Tbody key={el._id} border="1px solid red">
                    <Tr>

                      <Td color="#6e00be">{el._id}</Td>
                      <Td color="#6e00be">{el.name}</Td>
                      <Td color="#6e00be">{el.email}</Td>
                      <Td color="#6e00be">{el.mobile}</Td>

                      <Td>
                        <Box onClick={() => handleDelete(el._id)}>
                          <RiDeleteBin6Line size="30px" color="red" />
                        </Box>
                      </Td>
                    </Tr>
                  </Tbody>
                ))}
              </Table>
            </TableContainer>
          </Box>

        
        </Box>
      </Flex>
    </>
  );
};

export default Userdata;
