import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { getJobs } from '../../Redux/app/action'
import { Box, Button, Flex, Grid, Image, Text, useToast } from '@chakra-ui/react'
import { FaMapMarkerAlt, FaRegBookmark, FaRupeeSign, FaUserTie } from "react-icons/fa"
import { BiTime } from "react-icons/bi"
import { TiShoppingBag } from "react-icons/ti"
import { Pagination } from '../Pagination/Pagination'
const JobPageLeft = () => {
    const job = useSelector((state) => state.AppReducer.job)
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const toast = useToast()

    const [page, setPage] = useState(1)

    let perPage = 10
    let totalPage = Math.ceil(job.length / perPage)
    let end = page * perPage
    let start = end - perPage
    let paginationData = job.slice(start, end)
    //console.log("pagination",paginationData)


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
    return (
        <>

            <Box w={500} ml={35}>
                {paginationData.length > 0 &&
                    paginationData.map((item) => {
                        
                        return (
                            <Link to={`/jobs/${item.id}`}>
                                <Box border={"1px solid gray"} textAlign={"start"} p={5} 
                                _hover={{ border: "1px solid #6e00be", backgroundColor: "#f9f7fb" }} borderRadius={10} mb={5} key={item.id}>
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
                                </Box>
                            </Link>
                        )
                    })}



            </Box>
            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
            <br />
            <Box>
                <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/17313206661326367668" />
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://pbs.twimg.com/media/FiZ1mofXgAUK_TW.jpg" />
            </Box>
            <br />
            <Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
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
                    <Box borderRadius={10} border={"1px solid gray"} p={2} backgroundColor={"#fff8eb"}>
                        <Image src="https://media.foundit.in/trex/public/theme_3/src/assets/images/landing-page/banner-section/scammers.svg" />
                        <Box w={200}>
                            <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"}>Beware of Scammers</Text>
                            <Text fontSize={"md"} fontWeight={"light"} textAlign={"start"}>We don't charge any money for job alerts</Text>
                        </Box>
                    </Box>
                </Grid>
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/12824035010546562271" />
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/11801251700207988974" />
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/17313206661326367668" />
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://pbs.twimg.com/media/FiZ1mofXgAUK_TW.jpg" />
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/12824035010546562271" />
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/11801251700207988974" />
            </Box>
            <br />
            <Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
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
                    <Box borderRadius={10} border={"1px solid gray"} p={2} backgroundColor={"#fff8eb"}>
                        <Image src="https://media.foundit.in/trex/public/theme_3/src/assets/images/landing-page/banner-section/scammers.svg" />
                        <Box w={200}>
                            <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"}>Beware of Scammers</Text>
                            <Text fontSize={"md"} fontWeight={"light"} textAlign={"start"}>We don't charge any money for job alerts</Text>
                        </Box>
                    </Box>
                </Grid>
                
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/17313206661326367668" />
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://pbs.twimg.com/media/FiZ1mofXgAUK_TW.jpg" />
            </Box>
            <br />
            <Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
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
                    <Box borderRadius={10} border={"1px solid gray"} p={2} backgroundColor={"#fff8eb"}>
                        <Image src="https://media.foundit.in/trex/public/theme_3/src/assets/images/landing-page/banner-section/scammers.svg" />
                        <Box w={200}>
                            <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"}>Beware of Scammers</Text>
                            <Text fontSize={"md"} fontWeight={"light"} textAlign={"start"}>We don't charge any money for job alerts</Text>
                        </Box>
                    </Box>
                </Grid>
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/12824035010546562271" />
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/11801251700207988974" />
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/17313206661326367668" />
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://pbs.twimg.com/media/FiZ1mofXgAUK_TW.jpg" />
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/12824035010546562271" />
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/11801251700207988974" />
            </Box>
            <br />
            <Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
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
                    <Box borderRadius={10} border={"1px solid gray"} p={2} backgroundColor={"#fff8eb"}>
                        <Image src="https://media.foundit.in/trex/public/theme_3/src/assets/images/landing-page/banner-section/scammers.svg" />
                        <Box w={200}>
                            <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"}>Beware of Scammers</Text>
                            <Text fontSize={"md"} fontWeight={"light"} textAlign={"start"}>We don't charge any money for job alerts</Text>
                        </Box>
                    </Box>
                </Grid>
                
            </Box>
            <br />
            <Box>
                <Image margin={"auto"} src="https://pbs.twimg.com/media/FiZ1mofXgAUK_TW.jpg" />
            </Box>
            <br />

        </>
    )
}

export default JobPageLeft