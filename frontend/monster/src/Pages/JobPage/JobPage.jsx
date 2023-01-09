import React from 'react'
import Filter from '../../Components/Filter/Filter'
import { Box, Grid, Image } from '@chakra-ui/react'
import JobPageLeft from '../../Components/Jobs/JobPageLeft'
import JobPageRight from '../../Components/Jobs/JobPageRight'

const JobPage = () => {
  return (
    <>
      <Filter />
      <Grid templateColumns='repeat(2,1fr)' pl={10} pr={10}>
        <Box border={"1px solid green"}>
        <JobPageLeft />
        </Box>
        <Box border={"1px solid red"} >
          <JobPageRight  />
          </Box>
        
      </Grid>
      <br />
      <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/11813403535233662415"/>
      <br />
    </>
  )
}

export default JobPage