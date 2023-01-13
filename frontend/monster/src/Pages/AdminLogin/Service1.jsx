import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const Service1 = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id);
  // -----fetch----
  const product = () => {
    fetch(
      `https://json-masai-ser-production-8266.up.railway.app/coreservice/${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  };

  // ---useEffect-------
  useEffect(() => {
    product();
  }, []);
  return (
    <div>
      <Navbar/>
      <Box w="80%"  m="auto">
      <Image src={data.Avatar} width="100%" style={{ objectFit:"contain"}}/>
      <Box padding={"20px"}  >
      <Text fontSize={"5xl"} textAlign="left" >
        {data.name}
      </Text>
     
      <Text textAlign="left" mt="20px" >
        {data.desc1}
      </Text>
      <Text textAlign="left"  mt="20px" >
        {data.desc2}
      </Text>
      <Text textAlign="left"  mt="20px">
        {data.desc3}
      </Text>
      </Box>
      </Box>
      <br />
      <Footer/>
    </div>
  );
};

export default Service1;
