import { Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Service = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id);
  // -----fetch----
  const product = () => {
    fetch(`https://json-masai-ser-production-8266.up.railway.app/better/${id}`)
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
      <Image src={data.Avatar} width="100%" />
      <Text fontSize={"5xl"} textAlign="left" ml="40px">
        {data.name}
      </Text>
      <br />
      <Text textAlign="left" ml="40px">
        {data.desc1}
      </Text>
      <Text textAlign="left" ml="40px" mt="20px" mr="40px">
        {data.desc2}
      </Text>
      <Text textAlign="left" ml="40px" mt="20px">
        {data.desc3}
      </Text>
      <br />
    </div>
  );
};

export default Service;
