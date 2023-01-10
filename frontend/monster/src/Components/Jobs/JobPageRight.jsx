import React, { useEffect } from 'react'
import { getJobs } from '../../Redux/app/action'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { Box, Button, Flex, Image, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import { FaIndustry, FaMapMarkerAlt, FaRegBookmark, FaRupeeSign, FaUserTie } from "react-icons/fa"
import { BiTime } from "react-icons/bi"
import { GiSkills } from "react-icons/gi"
import { TbBooks } from "react-icons/tb"
import { RiUserSettingsFill } from "react-icons/ri"
import { TiShoppingBag } from "react-icons/ti"
import {FiExternalLink} from "react-icons/fi"
import {AiOutlineEye, AiOutlineSend} from "react-icons/ai"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const JobPageRight = () => {
  const job = useSelector((state)=> state.AppReducer.job)
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const toast = useToast()


    // const colors = useColorModeValue(
    //   ['blue.50','blue.50','blue.50',],
    //   [ 'blue.900','blue.900','blue.900'],
    // )
    // const [tabIndex, setTabIndex] = React.useState(0)
    // const bg = colors[tabIndex]

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
                    job_type:searchParams.getAll("job_type")
                }
            }
            dispatch(getJobs(getJobsParams))
        }
    },[dispatch,location,job.length,searchParams])

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
    <Box w={700} ml={35}>
        {job.length > 0 && 
        job.map((item)=>{
            return (
                <>
                <Box  border={"1px solid gray"} _hover={{border:"1px solid #6e00be", backgroundColor:"#f9f7fb"}} textAlign={"start"} p={10} borderRadius={10} mb={5} key={item.id}>
                    <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"semibold"}>{item.job_title}</Text>
                    <Link to={`/jobs/${item.id}`}><Button color={"blue"} fontSize={"xs"} variant={"link"}><FiExternalLink/>View Full Page</Button></Link>
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
                    <Flex justifyContent={"space-between"} mt={5}>
                        <Box>
                            <Button colorScheme='blue' color={"#6e00be"}  variant='outline'><AiOutlineEye/>{item.viewed}</Button>
                            <Button ml={5} colorScheme='blue' color={"#6e00be"}  variant='outline'><AiOutlineSend/>{item.applied} Applied</Button>
                            <Button ml={5} colorScheme='blue' color={"#6e00be"}  variant='outline'>Send Similar Jobs</Button>
                        </Box>
                        <Box>
                            <Button colorScheme='blue' color={"#6e00be"}  variant='outline'>Apply Now</Button>
                        </Box>
                    </Flex>
                    <br />
                    <Box border={"1px solid #6e00be"} textAlign={"start"} p={10} borderRadius={10} mb={5}>
                    <Text fontWeight={"semibold"} color={"black"} textDecoration={"underline"}>JOB DESCRIPTION</Text>
                <br />
                <Text>{item.job_description}</Text>
                    </Box>
                </Box>
                {/* <Box border={"1px solid #6e00be"} textAlign={"start"} p={10} borderRadius={10} mb={5}>
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
                <Text>{item.job_description}</Text>

                </TabPanel>
                <TabPanel>
                <Box color={"gray"}>
                    
                    <Flex gap={2}>
                    <FaUserTie />
                    <Text textDecoration={"underline"} mt={-1}>JOB TYPE</Text>
                    </Flex>
                    <Text >{item.job_type}</Text>
                    <br />
                    <Flex gap={2}>
                    <FaIndustry />
                    <Text textDecoration={"underline"} mt={-1}>INDUSTRY</Text>
                    </Flex>
                    <Text >{item.industry}</Text>
                    <br />
                    <Flex gap={2}>
                    <RiUserSettingsFill />
                    <Text textDecoration={"underline"} mt={-1}>FUNCTION</Text>
                    </Flex>
                    <Text >{item.functions}</Text> 
                    <br />
                    <Flex gap={2}>
                    <GiSkills />
                    <Text textDecoration={"underline"} mt={-1}>ROLES</Text>
                    </Flex>
                    <Text >{item.roles}</Text>
                    <br />
                    <Flex gap={2}>
                    <TiShoppingBag />
                    <Text textDecoration={"underline"} mt={-1}>EXPERIENCE</Text>
                    </Flex>
                    <Text >{item.experience} Years</Text>
                    <br />  
                    <Flex gap={2}>
                    <TbBooks />
                    <Text textDecoration={"underline"} mt={-1}>EDUCATION</Text>
                    </Flex>
                    <Text >{item.education}</Text>
                    <br /> 
                    </Box>
                </TabPanel>
                <TabPanel>
                    <Flex justifyContent={"space-between"} gap={5}>
                        <Box><Text textAlign={"justify"}>{item.company_description}</Text></Box>
                        
                        <Button colorScheme='blue' color={"#6e00be"}  variant='outline' pl={10} pr={10}>Follow</Button>
                    </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>

                </Box> */}
                </>
                )
              })}
                </Box>

    
      
    </>
  )
}

export default JobPageRight