import { Container, Heading, Stack, Text } from "@chakra-ui/react";

const SectionHeading = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading?: string;
}) => {
  return (
    <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
      <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
        {heading}
      </Heading>
      {subheading && (
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          {subheading}
        </Text>
      )}
    </Stack>
  );
};

export default SectionHeading;
