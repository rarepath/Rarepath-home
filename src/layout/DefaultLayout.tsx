import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const DefaultLayout = () => {
  return (
    <VStack gap={36} pos="relative" zIndex={3} minH="100vh" minW="100vw">
      <NavBar />
      <Outlet />
      <Footer />
    </VStack>
  );
};

export default DefaultLayout;
