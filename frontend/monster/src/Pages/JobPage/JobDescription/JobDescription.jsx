import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { getJobsDescription } from '../../../Redux/app/action'
import { Box, Button, Flex, Image, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import { FaIndustry, FaMapMarkerAlt, FaRegBookmark, FaRupeeSign, FaUserTie } from "react-icons/fa"
import { BiTime } from "react-icons/bi"
import { GiSkills } from "react-icons/gi"
import { TbBooks } from "react-icons/tb"
import { RiUserSettingsFill } from "react-icons/ri"
import { TiShoppingBag } from "react-icons/ti"
import {AiOutlineEye, AiOutlineSend} from "react-icons/ai"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Navbar from '../../../Components/Navbar'
import Footer from '../../../Components/Footer'

const JobDescription = () => {
    const { id } = useParams()
    //console.log(id)
    const [searchParams] = useSearchParams()
    const job = useSelector((state) => state.AppReducer.job)
    const [jobData, setjobData] = useState("")
    const dispatch = useDispatch()
    const location = useLocation()
    const toast = useToast()
    

    const colors = useColorModeValue(
        ['#f9f7fb','#f9f7fb','#f9f7fb',],
      [ '#f9f7fb','#f9f7fb','#f9f7fb'],
      )
      const [tabIndex, setTabIndex] = React.useState(0)
      const bg = colors[tabIndex]

    useEffect(() => {
        if (location || job.length === 0) {
            let getJobsParams = {
                params: {
                    id: searchParams.getAll("id")
                }
            }
            dispatch(getJobsDescription(getJobsParams))
        }
    },[dispatch,location,job.length,searchParams])

    useEffect(() => {
        if (id) {
            const jobData = job.find((jd) => jd.id === id)
            
            jobData && setjobData(jobData)
            
        }
        
    }, [id, job])
    //console.log("sjd",jobData)

    const handleBookmark = () => {
        toast({
            title: `Job Saved`,
            position: "top",
            isClosable: true,
            status: 'warning'
        })
    }
    return (
        <>
         <Navbar/>
        <Box w={1000} p={10}>
            <Box  border={"1px solid #6e00be"} textAlign={"start"} p={10} borderRadius={10} mb={5} key={jobData.id}>
                    <Text fontWeight={"semibold"}>{jobData.job_title}</Text>
                    <Box color={"gray"}>
                    <Flex justifyContent={"space-between"}>
                    <Text><Image src={jobData.image} />{jobData.company_name}</Text>
                    <Text>Job Id : {jobData._id}</Text>
                    </Flex>
                    <br />
                    
                    <Flex gap={1}>
                    <FaUserTie />
                    <Text mt={-1}>{jobData.job_type}</Text>
                    </Flex>
                    <Flex gap={1}>
                    <FaMapMarkerAlt />
                    <Text mt={-1}>{jobData.city}</Text>
                    </Flex>
                    <Flex gap={1}>
                        <FaRupeeSign />
                    <Text mt={-1}>{jobData.salary}</Text>
                    </Flex>
                    <Flex gap={1}>
                        <TiShoppingBag />
                    <Text mt={-1}>{jobData.experience} Years</Text>
                    </Flex>
                    <br />
                    
                    <Flex  justifyContent={"space-between"}>
                        <Flex gap={1}>
                        <BiTime />
                    <Text mt={-1}>{jobData.post_date}</Text>
                    </Flex>
                    <Box onClick={handleBookmark}>
                    <FaRegBookmark/>
                    </Box>
                    
                    </Flex>
                    </Box>
                    <Flex justifyContent={"space-between"} mt={5}>
                        <Box>
                            <Button colorScheme='blue' color={"#6e00be"}  variant='outline'><AiOutlineEye/>{jobData.viewed}</Button>
                            <Button ml={5} colorScheme='blue' color={"#6e00be"}  variant='outline'><AiOutlineSend/>{jobData.applied} Applied</Button>
                            <Button ml={5} colorScheme='blue' color={"#6e00be"}  variant='outline'>Send Similar Jobs</Button>
                        </Box>
                        <Box>
                            <Button colorScheme='blue' color={"#6e00be"}  variant='outline'>Apply Now</Button>
                        </Box>
                    </Flex>
                </Box>
                <Box border={"1px solid #6e00be"} textAlign={"start"} p={10} borderRadius={10} mb={5}>
                <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
              <TabList>
                <Tab>Job Description</Tab>
                <Tab>More Info</Tab>
                <Tab>Recruiter Info</Tab>
              </TabList>
              <TabPanels p='2rem' color={"GrayText"}>
                <TabPanel>
                <Text fontWeight={"semibold"} color={"black"} textDecoration={"underline"}>JOB DESCRIPTION</Text>
                <br />
                <Text>{jobData.job_description}</Text>

                </TabPanel>
                <TabPanel>
                <Box color={"gray"}>
                    
                    <Flex gap={2}>
                    <FaUserTie />
                    <Text textDecoration={"underline"} mt={-1}>JOB TYPE</Text>
                    </Flex>
                    <Text >{jobData.job_type}</Text>
                    <br />
                    <Flex gap={2}>
                    <FaIndustry />
                    <Text textDecoration={"underline"} mt={-1}>INDUSTRY</Text>
                    </Flex>
                    <Text >{jobData.industry}</Text>
                    <br />
                    <Flex gap={2}>
                    <RiUserSettingsFill />
                    <Text textDecoration={"underline"} mt={-1}>FUNCTION</Text>
                    </Flex>
                    <Text >{jobData.functions}</Text> 
                    <br />
                    
                    <Flex gap={2}>
                    <GiSkills />
                    <Text textDecoration={"underline"} mt={-1}>ROLES</Text>
                    </Flex>
                    <Text >{jobData.roles}</Text>
                    <br />
                    <Flex gap={2}>
                    <TiShoppingBag />
                    <Text textDecoration={"underline"} mt={-1}>EXPERIENCE</Text>
                    </Flex>
                    <Text >{jobData.experience} Years</Text>
                    <br />  
                    <Flex gap={2}>
                    <RiUserSettingsFill />
                    <Text textDecoration={"underline"} mt={-1}>SKILLS</Text>
                    </Flex>
                    <Text >{jobData.skills}</Text> 
                    <br />
                    <Flex gap={2}>
                    <TbBooks />
                    <Text textDecoration={"underline"} mt={-1}>EDUCATION</Text>
                    </Flex>
                    <Text >{jobData.education}</Text>
                    <br /> 
                    </Box>
                </TabPanel>
                <TabPanel>
                    <Flex justifyContent={"space-between"} gap={5}>
                        <Box><Text textAlign={"justify"}>{jobData.company_description}</Text></Box>
                        
                        <Button colorScheme='blue' color={"#6e00be"}  variant='outline' pl={10} pr={10}>Follow</Button>
                    </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>

                </Box>
                </Box>
                <Footer/>

        </>
    )
}

export default JobDescription