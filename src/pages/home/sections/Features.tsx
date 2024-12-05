import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FaSearch } from "react-icons/fa";
import {
  FaArrowRight,
  FaBrain,
  FaDatabase,
  FaDna,
  FaPerson,
} from "react-icons/fa6";
import { IoMdPlanet } from "react-icons/io";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", lg: "275px" }}
      // w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2} h="100%" w={{ base: "fit-content" }}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bgGradient="linear(to-r, primary.500, primary.400)"
        >
          {icon}
        </Flex>
        <Box mt={2} flex={1}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button
          rightIcon={<Icon as={FaArrowRight} />}
          variant={"link"}
          colorScheme={"orange"}
          size={"sm"}
          as="a"
          href="https://radiant.RarePath.ai/"
          target="_blank"
        >
          Try Now
        </Button>
      </Stack>
    </Box>
  );
};

export default function Features() {
  return (
    <Box p={4} id="features">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Cutting-edge technology powering Radiant
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Discover the advanced AI technologies that make Radiant a game-changer
          in rare disease diagnosis.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Fine-Tuned LLMs"}
            icon={<Icon as={FaBrain} w={10} h={10} boxSize={6} color="white" />}
            description={
              "AI models specifically trained for rare diseases, delivering precise and relevant medical insights."
            }
          />
          <Card
            heading={"Retrieval-Augmentation"}
            icon={
              <Icon as={FaSearch} w={10} h={10} boxSize={6} color="white" />
            }
            description={
              "Radiant pulls data from trusted sources, reducing misinformation with up-to-date research."
            }
          />
          <Card
            heading={"Vector Database Storage"}
            icon={
              <Icon as={FaDatabase} w={10} h={10} boxSize={6} color="white" />
            }
            description={
              "A specialized database that allows rapid retrieval of relevant information for accurate responses."
            }
          />
          <Card
            heading={"Contextual Query Processing"}
            icon={
              <Icon as={IoMdPlanet} w={10} h={10} boxSize={6} color="white" />
            }
            description={
              "Radiant interprets the intent behind questions to ensure comprehensive and detailed answers."
            }
          />
          <Card
            heading={"Real-Time Data"}
            icon={<Icon as={FaDna} w={10} h={10} boxSize={6} color="white" />}
            description={
              "Integrating the latest scientific research and clinical trials for continuously updated responses."
            }
          />
          <Card
            heading={"Natural Language Processing"}
            icon={
              <Icon as={FaPerson} w={10} h={10} boxSize={6} color="white" />
            }
            description={
              "Radiant uses natural language processing (NLP) to make complex information accessible."
            }
          />
        </Flex>
      </Container>
    </Box>
  );
}
