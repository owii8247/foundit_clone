import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { FaMapMarkerAlt, FaMicrophone, FaSearch } from "react-icons/fa"
import { TiShoppingBag } from "react-icons/ti"

const Search = () => {
    const handleFilter = () => {

    }
    return (
        <>
            <Box backgroundColor={"#f7f2f9"} >
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
                    <Button fontWeight={"bold"} color={"#6e00be"} variant={"outline"}  colorScheme={"blue"} borderRadius={'5px'} padding={"24px 38px"}><Text fontSize={'sm'}>Search</Text></Button>
                </Box>
            </Flex>
            </Box>
        </>
    )
}

export default Search