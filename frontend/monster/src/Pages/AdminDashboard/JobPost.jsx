import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getJobs } from "../../Redux/app/action";

const JobPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const [usercred, setUerCed] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  const btnRef = React.useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUerCed({
      ...usercred,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(usercred);
    // axios.post("https://founditbackend-production.up.railway.app/job/create",usercred)
    // .then((res)=>{

    // })
    fetch("https://foundit-backend-qu3p.onrender.com/job/create", {
      method: "POST",
      body: JSON.stringify(usercred),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        toast({
            position:"top",
          title: "post successfully.",
          description: "data post on json server.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .then(() => dispatch(getJobs()))
      .catch((err) => {
        console.log(err)
        alert("Something went wrong ");
      });
  };
  return (
    <div>
      <Button
        mt={3}
        ref={btnRef}
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
        bg="#6e00be"
        color="white"
        _hover={{
          bg:"#6e00be"
        }}
      >
        Job Post
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Post Job</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handlesubmit}>
            <FormControl>
                <FormLabel>ID</FormLabel>
                <Input
                  placeholder="Enter ID"
                  type="text"
                  name="id"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Image</FormLabel>
                <Input
                  placeholder="Company Image"
                  type="url"
                  name="image"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Company Name</FormLabel>
                <Input
                  placeholder="Company Name"
                  type="text"
                  name="company_name"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Job Title</FormLabel>
                <Input
                  placeholder="Job Title"
                  type="text"
                  name="job_title"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Category </FormLabel>
                <Input
                  placeholder="Category"
                  type="text"
                  name="category"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Salary </FormLabel>
                <Input
                  placeholder="Salary"
                  type="text"
                  name="salary"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>City </FormLabel>
                <Input
                  placeholder="City"
                  type="text"
                  name="city"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>State </FormLabel>
                <Input
                  placeholder="State"
                  type="text"
                  name="state"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Country </FormLabel>
                <Input
                  placeholder="Country"
                  type="text"
                  name="country"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Viewed </FormLabel>
                <Input
                  placeholder="Viewed"
                  type="text"
                  name="viewed"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Applied </FormLabel>
                <Input
                  placeholder="Applied"
                  type="text"
                  name="applied"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Experience </FormLabel>
                <Input
                  placeholder="Experience"
                  type="text"
                  name="experience"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Job Description </FormLabel>
                <Input
                  placeholder="Job Description"
                  type="text"
                  name="job_description"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Job Type </FormLabel>
                <Input
                  placeholder="Job Type"
                  type="text"
                  name="job_type"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Industry </FormLabel>
                <Input
                  placeholder="Industry"
                  type="text"
                  name="industry"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Functions </FormLabel>
                <Input
                  placeholder="Functions"
                  type="text"
                  name="functions"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Role </FormLabel>
                <Input
                  placeholder="Role"
                  type="text"
                  name="roles"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Skills </FormLabel>
                <Input
                  placeholder="Skills"
                  type="text"
                  name="skills"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Education </FormLabel>
                <Input
                  placeholder="Education"
                  type="text"
                  name="education"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Post Date </FormLabel>
                <Input type="date" name="post_date" onChange={handleChange} />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Remote </FormLabel>
                <Input
                  type="text"
                  placeholder="Remote"
                  name="is_remote"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Company Description</FormLabel>
                <Input
                  type="text"
                  placeholder="Company Description"
                  name="company_description"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Job Description</FormLabel>
                <Input
                  type="text"
                  placeholder="Job Description"
                  name="job_description"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt="5px">
                <FormLabel>Job Epired</FormLabel>
                <Input
                  type="text"
                  placeholder="Epired/yes/no"
                  name="has_expired"
                  onChange={handleChange}
                />
              </FormControl>
              <br />
              <Button
                bg="#5d4da8"
                color="white"
                width="100%"
                type="submit"
                mt="20px"
                _hover={{ bg: "#5d4da8" }}
              >
                Post
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default JobPost;
