import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Grid, Image, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMail } from "react-icons/hi"
import { IoCall } from "react-icons/io5"
import { MdDownload } from "react-icons/md"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"
const Footer = () => {
  return (
    <>
      <Grid templateColumns='repeat(2,1fr)' backgroundColor={"#1d1934"}>
        <Box fontWeight={"bold"} color={"white"} p={30} pl={40} w={550}>
          <Accordion defaultIndex={[0]} allowMultiple >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' fontWeight={"semibold"}>
                    Non IT Jobs
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign={"start"} fontSize="xs">
                <List>
                  <ListItem>HR</ListItem>
                  <ListItem>Sales</ListItem>
                  <ListItem>Accounting</ListItem>
                  <ListItem>Call Center</ListItem>
                  <ListItem>Event Management</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' fontWeight={"semibold"}>
                    IT Jobs
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign={"start"} fontSize="xs">
                <List>
                  <ListItem>Software Engineer</ListItem>
                  <ListItem>Full Stack Developer</ListItem>
                  <ListItem>SQL</ListItem>
                  <ListItem>Oracle</ListItem>
                  <ListItem>Digital Marketing</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' fontWeight={"semibold"}>
                    Job Seekers
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign={"start"} fontSize="xs">
                <List>
                  <ListItem>Job Seekers Login</ListItem>
                  <ListItem>Resume Upload</ListItem>
                  <ListItem>Search Tip</ListItem>
                  <ListItem>Job Alerts</ListItem>
                  <ListItem>Help</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' fontWeight={"semibold"}>
                    Employers
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign={"start"} fontSize="xs">
                <List>
                  <ListItem>Employers Login</ListItem>
                  <ListItem>Job Posting</ListItem>
                  <ListItem>Access Dashboard</ListItem>
                  <ListItem>Buy Online</ListItem>
                  <ListItem>Join mRecuters</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' fontWeight={"semibold"}>
                    foundit
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign={"start"} fontSize="xs">
                <List>
                  <ListItem>About Us </ListItem>
                  <ListItem>Contact Us</ListItem>
                  <ListItem>Send Feedback</ListItem>
                  <ListItem>Call Us</ListItem>
                  <Link to="https://play.google.com/store/apps/details?id=com.monsterindia.seeker.views&referrer=utm_source%3DWebsite%26utm_campaign%3DJobs-App&pli=1">
                    <ListItem>Jobs App</ListItem>
                  </Link>
                </List>
              </AccordionPanel>
            </AccordionItem>


          </Accordion>
        </Box>
        <Box as="span" flex='1' textAlign='left'  p={35} color={"white"}>
          <Flex gap={3}>
            <HiOutlineMail />
            <Text mt={-1}>info@foundit.in</Text>
          </Flex>
          <br />
          <hr /><br />
          <Flex gap={3}>
            <IoCall />
            <Text mt={-1}>Toll No: +91-40-66116611 | Toll Free No: 1-800-4196666</Text>
          </Flex>
          <br />
          <hr /><br />
          <Flex gap={3}>
            <MdDownload />
            <Text mt={-1}>Download The App</Text>
            <Link to="https://play.google.com/store/apps/details?id=com.monsterindia.seeker.views&referrer=utm_source%3DWebsite%26utm_campaign%3DJobs-App&pli=1">
              <Image w="80px" h="20px" src="https://www.designpieces.com/wp-content/uploads/2016/02/google-play-badge.png" /></Link>
            <Link to="https://apps.apple.com/in/app/monster-jobs/id525775161"><Image w="80px" h="20px" src="https://icon-library.com/images/app-store-icon-png/app-store-icon-png-14.jpg" /></Link>

          </Flex>
          <br />
          <hr /><br />
          <Flex gap={3}>
            <Text mt={-1}>Stay Connected</Text>
            <Link to="https://www.facebook.com/founditIN/"><BsFacebook /></Link>
            <Link to="https://twitter.com/foundit_India"><BsTwitter /></Link>
            <Link to="https://www.linkedin.com/company/foundit-jobs/"><BsLinkedin /></Link>
            <Link to="https://www.youtube.com/@foundit_IN/featured"><BsYoutube /></Link>
            <Link to="https://www.instagram.com/foundit_india/"><BsInstagram /></Link>
          </Flex>
          <br />
          <hr /><br />
          <Flex gap={3}>
            <Text mt={-1}>| Security & Fraud | Privacy Policy | Terms of UseBeware of Fraudsters | Be Safe | Complaints |</Text>
            </Flex>
            <br />
          <Text>© 2022 foundit | All rights Reserved</Text>
        </Box>
      </Grid>
    </>
  )
}

export default Footer