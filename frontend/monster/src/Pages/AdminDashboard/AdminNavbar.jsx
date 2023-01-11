import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
    const navigate = useNavigate();
  const handlejobs = () => {
    navigate("/jobsdata");
  };
    const handleuser=()=>{
        navigate("/userdata");

    }
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "teal",
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <Button
          colorScheme="teal"
          size="lg"
          bgGradient="linear(to-r, red.500, yellow.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          onClick={handleuser}
        >
          User
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          bgGradient="linear(to-r, red.500, yellow.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          onClick={handlejobs}
        >
          Jobs Page
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          bgGradient="linear(to-r, red.500, yellow.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        //   onClick={handlbookmark}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminNavbar;
