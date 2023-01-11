import { Button, Image, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../../Redux/app/action'
import AdminNavbar from './AdminNavbar'
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

const JobsData = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const job = useSelector((state)=> state.AppReducer.job);
    console.log("jobs",job)

    const handleDelete = (id) => {
         console.log(id)
    
        axios
          .delete(`https://founditbackend-production.up.railway.app/job/${id}`)
          .then(() => dispatch(getJobs()))
          .then(()=>toast({
            position: 'top',
            title: 'Data Deleted',
            description: "Data is deleted from backend",
            status: 'success',
            duration: 2000,
            isClosable: true,
          }))
      };
    
      useEffect(() => {
        dispatch(getJobs());
      }, []);

  return (
    <div>
         <AdminNavbar/>
      <Text
        fontSize={"40px"}
        fontWeight="bold"
        color={"teal"}
        marginBottom="10px"
        textAlign={"center"}
      >
        JobsData
      </Text>
      <br/>
       {/* ---data map-------------- */}
       <TableContainer>
          <Table variant='simple' border="1px solid grey" >
            <Thead>
              <Tr>
                <Th>Company Logo</Th>
                {/* <Th>Company Name</Th> */}
                <Th>Job Title</Th>
                <Th>Location</Th>
                <Th>Salary</Th>
                <Th>Job Type</Th>
                <Th>Delete</Th>
                {/* <Th>Edit</Th> */}
                
              </Tr>
            </Thead>
        {job?.map((el) => (
          <Tbody key={el.id}>
          <Tr>
            <Td><Image src={el.image} width="80px" height="50px"/></Td>
            {/* <Td>{el.company_name}</Td> */}
            <Td>{el.job_title}</Td>
            <Td>{el.city}</Td>
            <Td>{el.salary}</Td>
            <Td>{el.job_type}</Td>
            {/* <Td>
              {" "}
              <EditModal el={el} getData={getData} />
            </Td> */}
            <Td>
              <Button onClick={() => handleDelete(el.id)} _hover={{bg:"red"}} bg="red" color="white">Delete</Button>
            </Td>
          </Tr>
        </Tbody>
        ))}
         </Table>
        </TableContainer>
    </div>
  )
}

export default JobsData
