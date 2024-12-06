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
        heading="Whitepaper"
        subheading="Explore our whitepaper about the application of AI in rare disease diagnosis."
      />
      <Box
        as="iframe"
        boxShadow="md"
        src="/Radiant-White-Paper.pdf"
        w="100%"
        h="750px"
        borderRadius="md"
      />
    </VStack>
  );
};

export default Pdf;
