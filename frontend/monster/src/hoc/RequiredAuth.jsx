import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const RequiredAuth = ({ children }) => {
  const token = useSelector((store) => store.authentication.data.token);
  const toast = useToast();

  if (token) {
    return children;
  }
  return (
    <>
  <Navigate to="/" />
  {toast({
      position:"top",
      title: "Please Login first",
      description: "",
      status: "warning",
      duration: 9000,
      isClosable: true,
    })
    }

  </>
  )
  ;
};

export default RequiredAuth;
