import {
  Heading,
  Avatar,
  Text,
  Stack,
  Button,
  VStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa6";

export default function TeamProfile({
  src,
  name,
  role,
  linkedin,
  from,
}: {
  src: string;
  name: string;
  role: string;
  linkedin: string;
  from?: string;
}) {
  return (
    <VStack minW="300px">
      <Avatar
        src={src}
        size={"2xl"}
        boxShadow="md"
        borderWidth={1}
        borderColor="gray.100"
      />

      <Flex flexDir="column" align="center">
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {name}
          </Heading>
          {from && <Text color={"gray.500"}>{from}</Text>}
          <Text color={"gray.500"}>{role}</Text>
        </Stack>
        <Button
          w="150px"
          as="a"
          boxShadow="glow-md"
          target="_blank"
          cursor="pointer"
          rightIcon={<Icon as={FaLinkedin} />}
          href={linkedin}
          color={"white"}
        >
          Connect
        </Button>
      </Flex>
    </VStack>
  );
}
