import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { getJobs } from '../../Redux/app/action'
import { Box, Flex, Text, useToast } from '@chakra-ui/react'
import { FaMapMarkerAlt, FaRegBookmark, FaRupeeSign, FaUserTie } from "react-icons/fa"
import { BiTime} from "react-icons/bi"
import { TiShoppingBag} from "react-icons/ti"
const JobPageLeft = () => {
    const job = useSelector((state)=> state.AppReducer.job)
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const toast = useToast()

    useEffect(()=>{
        if(location || job.length ===0){
            //const sortBy = searchParams.get("sortBy")
            let getJobsParams ={
                params:{
                    category: searchParams.getAll("category"),
                    salary : searchParams.getAll("salary"),
                    roles:searchParams.getAll("roles"),
                    city:searchParams.getAll("city"),
                    company_name:searchParams.getAll("company_name"),
                }
            }
            dispatch(getJobs(getJobsParams))
        }
    })

    const handleBookmark=()=>{
        toast({
            title: `Job Saved`,
            position: "top",
            isClosable: true,
            status:'warning'
          })
    }
  return (
    <>
    <Box w={500} ml={35}>
        {job.length > 0 && 
        job.map((item)=>{
            return (
                <Link to={`/jobs/${item.id}`}>
                <Box border={"1px solid #6e00be"} textAlign={"start"} p={5} borderRadius={10} mb={5} key={item.id}>
                    <Text fontWeight={"semibold"}>{item.job_title}</Text>
                    <Box color={"gray"}>
                    <Text >{item.company_name}</Text><br />
                    <Flex gap={1}>
                    <FaUserTie />
                    <Text mt={-1}>{item.job_type}</Text>
                    </Flex>
                    <Flex gap={1}>
                    <FaMapMarkerAlt />
                    <Text mt={-1}>{item.city}</Text>
                    </Flex>
                    <Flex gap={1}>
                        <FaRupeeSign />
                    <Text mt={-1}>{item.salary}</Text>
                    </Flex>
                    <Flex gap={1}>
                        <TiShoppingBag />
                    <Text mt={-1}>{item.experience} Years</Text>
                    </Flex>
                    <br />
                    <Flex  justifyContent={"space-between"}>
                        <Flex gap={1}>
                        <BiTime />
                    <Text mt={-1}>{item.post_date}</Text>
                    </Flex>
                    <Box onClick={handleBookmark}>
                    <FaRegBookmark/>
                    </Box>
                    
                    </Flex>
                    </Box>
                </Box>
                </Link>
            )
        })}
    </Box>
    </>
  )
}

export default JobPageLeft