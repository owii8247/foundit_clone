import React from 'react'
import Filter from '../../Components/Filter/Filter'
import { Box, Grid, Image } from '@chakra-ui/react'
import JobPageLeft from '../../Components/Jobs/JobPageLeft'
import JobPageRight from '../../Components/Jobs/JobPageRight'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'

const JobPage = () => {
  return (
    <>
       <Navbar/>
      <Filter />
      <Grid templateColumns='repeat(2,1fr)' pl={10} pr={10}>
        <Box >
        <JobPageLeft />
        </Box>
        <Box >
          <JobPageRight  />
          </Box>
        
      </Grid>
      <br />
      <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/11813403535233662415"/>
      <br />
      <Footer/>
    </>
  )
}

export default JobPage