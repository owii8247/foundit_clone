import React, { useEffect, useState } from 'react'
import { getJobs } from '../../Redux/app/action'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { Box, Button, Flex, Image, Text, useToast } from '@chakra-ui/react'
import { FaMapMarkerAlt, FaRegBookmark, FaRupeeSign, FaUserTie } from "react-icons/fa"
import { BiTime } from "react-icons/bi"
import { TiShoppingBag } from "react-icons/ti"
import { FiExternalLink } from "react-icons/fi"
import { AiOutlineEye, AiOutlineSend } from "react-icons/ai"


const JobPageRight = () => {
  const job = useSelector((state) => state.AppReducer.job)
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const location = useLocation()
  const toast = useToast()

 

  useEffect(() => {
    if (location || job.length === 0) {
      let getJobsParams = {
        params: {
          company_name: searchParams.getAll("company_name"),
          job_type: searchParams.getAll("job_type"),
          salary: searchParams.getAll("salary"),
          city: searchParams.getAll("city")

        }
      }
      dispatch(getJobs(getJobsParams))
    }
  }, [dispatch, location, job.length, searchParams])

  const handleBookmark = () => {
    toast({
      title: `Job Saved`,
      position: "top",
      isClosable: true,
      status: 'warning'
    })
  }

//   const handleApply=()=>{
        
//     toast({
//         title: `Your application has been received. We will review your application and respond within the next 48 hours.`,
//         position: "top",
//         isClosable: true,
//         status: 'success'
//     })
    
// }

  return (
    <>
      <Box w={700} ml={35}>
        {job.length > 0 &&
          job.map((item) => {
            return (
              <>
                <Box border={"1px solid gray"} _hover={{ border: "1px solid #6e00be", backgroundColor: "#f9f7fb" }}
                 textAlign={"start"} p={10} borderRadius={10} mb={5} key={item.id}>
                  <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"semibold"}>{item.job_title}</Text>
                    <Link to={`/jobs/${item.id}`}><Button color={"blue"} fontSize={"xs"} variant={"link"}><FiExternalLink />View Full Page</Button></Link>
                  </Flex>
                  <Box color={"gray"}>
                    <Flex justifyContent={"space-between"}>
                      <Text><Image src={item.image} />{item.company_name}</Text>
                      <Text>Job Id : {item._id}</Text>
                    </Flex>
                    <br />
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

                    <Flex justifyContent={"space-between"}>
                      <Flex gap={1}>
                        <BiTime />
                        <Text mt={-1}>{item.post_date}</Text>
                      </Flex>
                      <Box onClick={handleBookmark}>
                        <FaRegBookmark />
                      </Box>

                    </Flex>
                  </Box>
                  <Flex justifyContent={"space-between"} mt={5}>
                    <Box>
                      <Button colorScheme='blue' color={"#6e00be"} variant='outline'><AiOutlineEye />{item.viewed}</Button>
                      <Button ml={5} colorScheme='blue' color={"#6e00be"} variant='outline'><AiOutlineSend />{item.applied} Applied</Button>
                      <Button ml={5} colorScheme='blue' color={"#6e00be"} variant='outline'>Send Similar Jobs</Button>
                    </Box>
                    {/* <Box>
                    <Button colorScheme='blue' color={"white"} backgroundColor={"#6e00be"} _hover={{ backgroundColor: "#6e00be" }}
                            onClick={handleApply}>Apply Now
                            </Button>
                    </Box> */}
                  </Flex>
                  <br />
                  <Box border={"1px solid #6e00be"} textAlign={"start"} p={10} borderRadius={10} mb={5}>
                    <Text fontWeight={"semibold"} color={"black"} textDecoration={"underline"}>JOB DESCRIPTION</Text>
                    <br />
                    <Text>{item.job_description}</Text>
                  </Box>
                </Box>

              </>
            )
          })}
      </Box>
    </>
  )
}

export default JobPageRight