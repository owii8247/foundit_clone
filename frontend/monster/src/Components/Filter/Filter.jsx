import { Box, Grid, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'


const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const initialCompany = searchParams.getAll("company_name")
    //console.log("initial",initialCompany)
    const [company_name, setCompany] = useState(initialCompany || [])

    const initialJobType = searchParams.getAll("job_type")
    const [job_type, setjob_type] = useState(initialJobType || [])

    const initialSalary = searchParams.getAll("salary")
    const [salary, setSalary] = useState(initialSalary || [])

    const initialCity = searchParams.getAll("city")
    const [city, setCity] = useState(initialCity || [])

    const handleCompany = (e) => {
        const newCompany = [...company_name]
        if (newCompany.includes(e.target.value)) {
            newCompany.splice(newCompany.indexOf(e.target.value), 1)
            //console.log("comapny",newCompany)
        }
        else {
            newCompany.push(e.target.value)
        }
        setCompany(newCompany)
    }

    const handleJobType = (e) => {
        const newJobType = [...job_type]
        if (newJobType.includes(e.target.value)) {
            newJobType.splice(newJobType.indexOf(e.target.value), 1)
        }
        else {
            newJobType.push(e.target.value)
        }
        setjob_type(newJobType)
    }

    const handleSalary = (e) => {
        const newSalary = [...salary]
        if (newSalary.includes(e.target.value)) {
            newSalary.splice(newSalary.indexOf(e.target.value), 1)
        }
        else {
            newSalary.push(e.target.value)
        }
        setSalary(newSalary)
    }

    const handleCity = (e) => {
        const newCity = [...city]
        if (newCity.includes(e.target.value)) {
            newCity.splice(newCity.indexOf(e.target.value), 1)
        }
        else {
            newCity.push(e.target.value)
        }
        setCity(newCity)
    }

    useEffect(() => {
        if (company_name || job_type || salary || city) {
            let params = {}
            company_name && (params.company_name = company_name)
            job_type && (params.job_type = job_type)
            salary && (params.salary = salary)
            city && (params.city = city)
            setSearchParams(params)
        }
    }, [company_name, job_type, salary, city, setSearchParams])

    return (
        <>
            <Box p={10}>
                <Grid templateColumns='repeat(6, 1fr)' gap={10}>

                    <Select size='xs' placeholder='Companies' onChange={handleCompany} borderRadius={10}>
                        <option value="Genpact India">Genpact</option>
                        <option value="Wipro">Wipro</option>
                        <option value="TCS">TCS</option>
                        <option value="iQuest Management Consultants Private Limited">iQuest</option>
                        <option value="Capgemini">Capgemini</option>
                    </Select>

                    <Select size='xs' placeholder='Job Type' onChange={handleJobType} borderRadius={10}>
                        <option value="Permanent Job">Permanent</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Work From Home">Work From Home</option>
                        <option value="International">International</option>
                    </Select>

                    <Select size='xs' placeholder='Salary' onChange={handleSalary} borderRadius={10}>
                        <option value="100000">₹ 0-100000 Lakh</option>
                        <option value="200000-300000">₹ 2-300000 Lakh</option>
                        <option value="300000-400000">₹ 3-400000 Lakh</option>
                        <option value="400000-500000">₹ 4-500000 Lakh</option>
                        <option value="500000-600000">₹ 5-600000 Lakh</option>
                        <option value="600000-700000">₹ 6-700000 Lakh</option>
                    </Select>

                    <Select size='xs' placeholder='Location' onChange={handleCity} borderRadius={10}>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                    </Select>
                </Grid>
            </Box>
        </>
    )
}

export default Filter