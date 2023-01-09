import React, { useEffect, useState } from "react";
import { Button, Heading, SimpleGrid } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Better = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // -----fetch----
  const product = () => {
    fetch("https://json-masai-ser-production-8266.up.railway.app/better ")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res);
        setData(res);
      });
  };

  // ---useEffect-------
  useEffect(() => {
    product();
  }, []);
  //console.log(data);
  const handleSingle = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div>
      <SimpleGrid columns={[1, 2, 3]} spacing="5">
        {data.map((el) => (
          <Card maxW="sm" border="1px solid grey" key={el.id}>
            <CardBody>
              <Image
                src={el.Avatar}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                height={"200px"}
                width={"100%"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{el.name}</Heading>
                <Text textAlign={"left"}>{` ${el.desc}`}</Text>
                <Button
                  width="40%"
                  borderRadius="none"
                  color="#5d4da8"
                  colorScheme="teal"
                  variant="outline"
                  onClick={() => handleSingle(el.id)}
                >
                  KNOW MORE
                </Button>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Better;
