import { Box, Button, Grid, Input, Select } from '@chakra-ui/react'
import React from 'react'

const Filter = () => {
  return (
    <>
    <Box p={10}>
        <Grid templateColumns='repeat(5, 1fr)'>
        <Select size='xs' placeholder='Salary' borderRadius={10}>
            <option value="10000">
                <input type="checkbox" placeholder="1000"/>1000</option>
        </Select>
        </Grid>
    </Box>
    </>
  )
}

export default Filter