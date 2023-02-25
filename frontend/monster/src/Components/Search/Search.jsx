import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaMicrophone, FaSearch } from "react-icons/fa"
import { TiShoppingBag } from "react-icons/ti"
import { Link } from 'react-router-dom'

const Search = () => {
    const [job, setJobs] = useState([])
    const [jobData, setjobData] = useState([])
    const [showBox, setShowBox] = useState(false)
    const [value, setValue] = useState("")

    useEffect(() => {
        axios.get(`https://foundit-backend-qu3p.onrender.com/job`).then((res) => {
            setJobs(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handleFilter = (e) => {
        setValue(e.target.value)
        const filterResult = job && job.filter(item => item.job_title.toLowerCase().includes(e.target.value.toLowerCase()))
        setjobData(filterResult)

    }

    useEffect(() => {
        if (value === "") {
            setShowBox(false)
        }
        if (value !== "") {
            setShowBox(true)
        }
    }, [value])



    //console.log(job)


    return (
        <>
            <Box backgroundColor={"#f7f2f9"} p={5}>
                <Flex justifyContent={"space-between"} border={"1px solid gray"} w={1000} margin={"auto"} borderRadius={"5px"} >
                    <Box width="40px" justifyContent={"center"} padding-left="15px" size={"55px"} display={"flex"} alignItems={"center"} color={"purple"}>
                        <FaSearch />
                    </Box>
                    <Box display={"flex"} align-items={"center"} borderColor={'gray.300'}>
                        <Input variant='unstyled' width={'300px'} px={'10px'} placeholder='Search by Skills, Company & Job Title' type='text' onChange={handleFilter} />
                    </Box>
                    <Box width="40px" justifyContent={"center"} padding-left="15px" size={"55px"} display={"flex"} alignItems={"center"} color={"purple"}>
                        <FaMicrophone />
                    </Box>
                    <Box width="40px" justifyContent={"center"} borderLeft={'1px solid'} padding-left="15px" size={"55px"} display={"flex"} alignItems={"center"} color={"purple"}>
                        <FaMapMarkerAlt />
                    </Box>
                    <Box display={"flex"} align-items={"center"} borderColor={'gray.300'}>
                        <Input variant='unstyled' px={'10px'} placeholder='Location' type='text' />
                    </Box>
                    <Box width="40px" justifyContent={"center"} borderLeft={'1px solid'} padding-left="15px" size={"55px"} display={"flex"} alignItems={"center"} color={"purple"} >
                        < TiShoppingBag />
                    </Box>
                    <Box display={"flex"} align-items={"center"} borderColor={'gray.300'}>
                        <Input variant='unstyled' px={'10px'} placeholder='Experience' type='text' />
                    </Box>

                    <Box>

                        <Button fontWeight={"bold"} color={"white"} backgroundColor={"#6e00be"}
                            _hover={{ backgroundColor: "#6e00be" }} colorScheme={"blue"}
                            borderRadius={'5px'} padding={"24px 38px"}
                            onClick={handleFilter}>
                            <Text fontSize={'sm'}>Search</Text>
                        </Button>

                    </Box>
                </Flex>

                {showBox && <Box border={"1px solid purple"} borderRadius={5} w={"25%"} ml={180} p={2} backgroundColor={"white"} overflow={"hidden"} zIndex={"999"} position={"absolute"}>

                    {jobData && jobData.map((item) =>

                        <Box >
                            <Link to={`/jobs/${item.id}`}>
                                <Flex p={1} justifyContent={"space-between"}>
                                    <Box textAlign={"start"}>
                                        <Text fontWeight={"semibold"} color={"purple"}>{item.job_title}</Text>
                                        <Text fontSize={"xx-small"}>Job Id : {item._id}</Text>
                                    </Box>
                                    <Box h={10} w={20}>
                                        <Image src={item.image} />
                                    </Box>
                                </Flex>
                            </Link>
                        </Box>
                    )}
                </Box>}

            </Box>
        </>
    )
}

export default Search