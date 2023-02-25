import { Button, Flex, Grid, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../Redux/app/action";
import AdminNavbar from "./AdminNavbar";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./AdminDashbord.css";
import {
  Box,
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
import JobPost from "./JobPost";

const JobsData = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const job = useSelector((state) => state.AppReducer.job);
  console.log("jobs", job);

  const handleDelete = (id) => {
    console.log(id);

    axios
      .delete(`https://foundit-backend-qu3p.onrender.com/job/${id}`)
      .then(() => dispatch(getJobs()))
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

  useEffect(() => {
    dispatch(getJobs());
  }, []);

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
          <Box color="#6e00be">
            <JobPost />
          </Box>
          <Box w="99%" h="450px" mt="10px" className="table_box">
            <TableContainer>
              <Table border="4px solid #6e00be" colorScheme="red">
                <Thead border="1px solid red">
                  <Tr>
                    <Th color="#6e00be">Company Logo</Th>

                    <Th color="#6e00be">Job Title</Th>
                    {/* <Th color="#6e00be">Location</Th> */}
                    <Th color="#6e00be">Salary</Th>
                    <Th color="#6e00be">Job Type</Th>
                    <Th color="#6e00be">Delete</Th>
                    {/* <Th color="#6e00be">Edit</Th> */}
                  </Tr>
                </Thead>
                {job?.map((el) => (
                  <Tbody key={el._id} border="1px solid red">
                    <Tr>
                      <Td>
                        <Image src={el.image} width="80px" height="50px" />
                      </Td>

                      <Td color="#6e00be">{el.job_title}</Td>
                      {/* <Td color="#6e00be">{el.city}</Td> */}
                      <Td color="#6e00be">{el.salary}</Td>
                      <Td color="#6e00be">{el.job_type}</Td>

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

export default JobsData;
