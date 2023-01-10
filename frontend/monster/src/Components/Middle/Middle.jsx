import { Box, Button, Flex, Grid, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import { FiUpload } from "react-icons/fi"

import { useDropzone } from 'react-dropzone'


const Middle = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const onDrop = useCallback(acceptedFiles => {
        // do something with the files
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


   
    return (
        <>
            <Grid templateColumns='repeat(3, 1fr)' gap={12} backgroundColor={"#f7f2f9"}>
                <Box>
                    <Image h={300} w={400} src="https://pbs.twimg.com/media/FiZ1mofXgAUK_TW.jpg" />
                </Box>
                <Box>
                    <br />
                    <Box fontSize='4xl' fontWeight={"bold"}>
                        <Text>Find the job that is</Text>
                        <Text>perfect for <Text color={"purple"}>You</Text> </Text>
                    </Box>
                    <br />
                    <Flex gap={20}>
                        <Button color={"#6e00be"} variant={"outline"} colorScheme={"blue"} onClick={onOpen}
                        > <FiUpload /> Upload Resume</Button>
                        <Modal
                            isCentered
                            onClose={onClose}
                            isOpen={isOpen}
                            motionPreset='slideInBottom'

                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Upload Resume</ModalHeader>
                                
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {isDragActive ? 'Drop the files here' :  <>

                                        <Box border={"1px dashed gray"} p={10} >
                                            <Heading fontSize={"md"} color={"gray"} textAlign={"center"}>Drag and drop</Heading><br />
                                            <Box ml={14}>
                                            <Button color={"#6e00be"} variant={"outline"} colorScheme={"blue"} textAlign={"center"}>Select files to upload</Button>
                                            <Text fontSize={"xs"}>*doc, docx, txt, pdf -MAX 6MB</Text>
                                            </Box>
                                        </Box>
                                        
                                        </>}
                                    </Box>

                                </ModalBody>
                                <ModalFooter>

                                    <Button color={"#6e00be"} variant={"outline"} colorScheme={"blue"}>Submit</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <Button color={"#6e00be"} variant={"outline"} colorScheme={"blue"} >Register</Button>
                    </Flex>
                </Box>
                <Box>
                    <Image h={300} w={400} src="https://pbs.twimg.com/media/FiZ1mofXgAUK_TW.jpg" />
                </Box>
            </Grid>

            <Box p={10}>
                <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"} >Employers of Choice</Text>
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    slidesPerView={8}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>

                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/january/yxRn3N2x6vrAGJ3YMEaOYRjRZor1YZzlpZkPJWll.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/january/HN5y7hp89MHcEWgrSi9haJG4iDYWE3DHH0RvvEau.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2021/october/S75zzSg0xsbyLirgPUWCqPUuUT9LpsXVQp6uLb7B.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/march/THyXXtT5sPRi1gVwdxkrksZzSsv7f5UkDFwkaQJD.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/january/yxRn3N2x6vrAGJ3YMEaOYRjRZor1YZzlpZkPJWll.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/november/saSi8rqCWWMfmv66nb529x2QBqOijsxVpymhjYUK.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/july/JpYoK5TOwijxrufQCDo0F2jYc6sImQgHW6Befx8f.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/november/uoJvClO5ad5B9b22uCrM8ASvfygW2AiCVwSDUOXF.jpeg" />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </Box>
            <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/13052027735813034364" />
            <Box p={10}>
                <Box p={3} border={"0.1px solid gray"} borderRadius={5}>
                    <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"} >Popular Searches</Text>
                    <Flex color={"#6e00be"} justifyContent={"space-around"} p={5}>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>Freshers</Button>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>IT</Button>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>Digital Marketing</Button>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>JAVA</Button>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>HR Executive</Button>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>HTML</Button>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>Manual Testing</Button>

                    </Flex>
                    <Flex color={"#6e00be"} justifyContent={"space-evenly"} p={5}>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>JavaScript</Button>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>Accounting</Button>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>Buisness Analyst</Button>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>Work From Home Jobs</Button>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>Sales</Button>
                        <Button variant={"outline"} borderRadius={20} backgroundColor={"#f7f2f9"}>Banking</Button>
                    </Flex>
                </Box>
            </Box>
            <Box p={10}>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
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
        </>
    )
}

export default Middle