import SectionHeading from "../../../shared/SectionHeading";
import { Box, VStack } from "@chakra-ui/react";

const Pdf = () => {
  return (
    <VStack
      maxW={{ base: "xs", sm: "xl", md: "2xl", lg: "5xl" }}
      w="100%"
      gap={10}
      id="whitepaper"
    >
      <SectionHeading
        heading="White Paper"
        subheading="Explore our white paper about the application of AI in rare disease diagnosis."
      />
      <Box
        as="iframe"
        boxShadow="md"
        src="https://drive.google.com/file/d/1qucE-hCcgb7hn9PVBLRV8KSYvR4vL1Y1/preview"
        w="100%"
        h="750px"
        borderRadius="md"
      />
    </VStack>
  );
};

export default Pdf;
