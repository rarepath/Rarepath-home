import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import ContactUs from "./ContactUs";

const Closer = () => {
  return (
    <Flex
      maxW={{ base: "xs", sm: "xl", md: "2xl", lg: "5xl" }}
      flexDir={{ base: "column", lg: "row" }}
      justify="center"
      align={{ base: "stretch", lg: "center" }}
      bgGradient="linear(to-r, primary.500, primary.400)"
      p={10}
      borderRadius="md"
      boxShadow="xl"
      gap={10}
    >
      <VStack align="flex-start" flex={1} gap={5}>
        <Heading color="white">Join the Fight Against Rare Disease</Heading>
        <Text color="white">
          Millions of rare disease patients suffer misdiagnoses and delayed
          diagnoses. Through tools like Radiant, the RarePath effort aims to
          change that. By collaborating with healthcare providers, researchers,
          and advocates, we aim to reduce diagnostic times and increase access
          to treatment. Your involvement could help reshape the future of rare
          disease care.
        </Text>
      </VStack>
      <Box flex={1}>
        <ContactUs />
      </Box>
    </Flex>
  );
};

export default Closer;
