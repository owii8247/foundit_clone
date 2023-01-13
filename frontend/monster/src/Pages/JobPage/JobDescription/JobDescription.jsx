import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { getJobsDescription } from '../../../Redux/app/action'
import { Box, Button, Flex, Grid, Image, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import { FaIndustry, FaMapMarkerAlt, FaRegBookmark, FaRupeeSign, FaUserTie } from "react-icons/fa"
import { BiTime } from "react-icons/bi"
import { GiSkills } from "react-icons/gi"
import { TbBooks } from "react-icons/tb"
import { RiUserSettingsFill } from "react-icons/ri"
import { TiShoppingBag } from "react-icons/ti"
import { AiOutlineEye, AiOutlineSend } from "react-icons/ai"
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

    const[show,setShow] = useState(true)
    const[follow,setFollow] = useState(true)


    const colors = useColorModeValue(
        ['#f9f7fb', '#f9f7fb', '#f9f7fb',],
        ['#f9f7fb', '#f9f7fb', '#f9f7fb'],
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
    }, [dispatch, location, job.length, searchParams])

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

    const handleApply = () => {
            toast({
                title: `Your application has been received. We will review your application and respond within the next 48 hours.`,
                position: "top",
                isClosable: true,
                status: 'success'
            })
            setShow(!show)
  
    }

    const handleFollow = () => {
        toast({
            title: `Thank You for following Company Profile.`,
            position: "top",
            isClosable: true,
            status: 'success'
        })
        setFollow(!follow)

}

  
    


    return (
        <>

            <Navbar />
            <Box w={1000} p={10}>
                <Box border={"1px solid #6e00be"} textAlign={"start"} p={10} borderRadius={10} mb={5} key={jobData.id}>

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

                        <Flex justifyContent={"space-between"}>
                            <Flex gap={1}>
                                <BiTime />
                                <Text mt={-1}>{jobData.post_date}</Text>
                            </Flex>
                            <Box onClick={handleBookmark}>
                                <FaRegBookmark />
                            </Box>

                        </Flex>
                    </Box>
                    <Flex justifyContent={"space-between"} mt={5}>
                        <Box>
                            <Button colorScheme='blue' color={"#6e00be"} variant='outline'><AiOutlineEye />{jobData.viewed}</Button>
                            <Button ml={5} colorScheme='blue' color={"#6e00be"} variant='outline'><AiOutlineSend />{jobData.applied} Applied</Button>
                            <Button ml={5} colorScheme='blue' color={"#6e00be"} variant='outline'>Send Similar Jobs</Button>
                        </Box>
                        <Box>
                            <Button colorScheme='blue' color={"white"} backgroundColor={"#6e00be"} _hover={{ backgroundColor: "#6e00be" }}
                            onClick={handleApply}
                            >{show ? "Apply Now": "Applied"}</Button>
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

                                    <Button colorScheme='blue' color={"#6e00be"} variant='outline' pl={10} pr={10} onClick={handleFollow}>
                                        {follow ? "Follow": "Following"}</Button>
                                </Flex>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </Box>

            </Box>

            <Box w={1000} p={10}>
                <Grid templateColumns='repeat(5, 1fr)' gap={12}>
                    <Box borderRadius={10} border={"1px solid gray"} p={2} backgroundColor={"#fff8eb"}>
                        <Image src="https://media.foundit.in/trex/public/theme_3/src/assets/images/landing-page/banner-section/scammers.svg" />
                        <Box w={200}>
                            <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"}>Beware of Scammers</Text>
                            <Text fontSize={"md"} fontWeight={"light"} textAlign={"start"}>We don't charge any money for job alerts</Text>
                        </Box>
                    </Box>
                    <Box borderRadius={10} border={"1px solid gray"} p={2} backgroundColor={"#fff2e9"}>
                        <Image src="https://media.foundit.in/trex/public/theme_3/src/assets/images/landing-page/banner-section/zuno.svg" />
                        <Box w={200}>
                            <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"}>A Platform for Freshers</Text>
                            <Text fontSize={"md"} fontWeight={"light"} textAlign={"start"}>1000s of Internship & Jobs for you</Text>
                        </Box>
                    </Box>
                    <Box borderRadius={10} border={"1px solid gray"} p={2} backgroundColor={"#f7f2f9"}>
                        <Image src="https://media.foundit.in/trex/public/theme_3/src/assets/images/landing-page/banner-section/mobile.svg" />
                        <Box w={200}>
                            <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"}>Search better with foundit app</Text>
                            <Flex>
                                <Link to="https://play.google.com/store/apps/details?id=com.monsterindia.seeker.views&referrer=utm_source%3DWebsite%26utm_campaign%3DJobs-App&pli=1">
                                    <Button colorScheme={"whiteAlpha"}><Image w="180px" h="35px" src="https://www.designpieces.com/wp-content/uploads/2016/02/google-play-badge.png" /></Button></Link>
                                <Link to="https://apps.apple.com/in/app/monster-jobs/id525775161"><Button colorScheme={"whiteAlpha"}><Image w="180px" h="35px" src="https://icon-library.com/images/app-store-icon-png/app-store-icon-png-14.jpg" /></Button></Link>
                            </Flex>
                        </Box>
                    </Box>
                    <Box borderRadius={10} border={"1px solid gray"} p={2}>
                        <Image src="https://media.foundit.in/trex/public/theme_3/src/assets/images/landing-page/banner-section/search.svg" />
                        <Box w={200}>
                            <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"}>Give your Job Hunt A Boost</Text>
                            <Text fontSize={"md"} fontWeight={"light"} textAlign={"start"}>Try out foundit career service</Text>
                        </Box>
                    </Box>
                    <Box borderRadius={10} border={"1px solid gray"} p={2} backgroundColor={"#f7f2f9"}>
                        <Image src="https://media.foundit.in/trex/public/theme_3/src/assets/images/landing-page/banner-section/job-alert.svg" />
                        <Box w={200}>
                            <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"}>Create Job Alerts</Text>
                            <Text fontSize={"md"} fontWeight={"light"} textAlign={"start"}>Get emails on new Jobs</Text>
                        </Box>
                    </Box>

                </Grid>

            </Box>

            <Footer />

        </>

    )
}

export default JobDescription