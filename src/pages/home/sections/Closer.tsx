import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import ContactUs from "./ContactUs";

const Closer = () => {
  return (
    <HStack
      maxW="5xl"
      bgGradient="linear(to-r, primary.500, primary.400)"
      p={10}
      borderRadius="md"
      boxShadow="xl"
      gap={10}
    >
      <VStack align="flex-start" flex={1} gap={5}>
        <Heading color="white">Join the Fight Against Rare Disease</Heading>
        <Text color="white">
          Millions of patients are facing unnecessary delays and misdiagnoses.
          Radiant is here to change that. By collaborating with healthcare
          providers, researchers, and advocates, we can reduce diagnostic times
          and increase access to treatment. Your involvement could help reshape
          the future of rare disease care.
        </Text>
      </VStack>
      <Box flex={1}>
        <ContactUs />
      </Box>
    </HStack>
  );
};

export default Closer;
