import {
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";

const ProductPreview = ({
  src,
  heading,
  subheading,
  body,
  imgFirst,
}: {
  src: string;
  heading: string;
  subheading?: string;
  body: string;
  imgFirst?: boolean;
}) => {
  return (
    <Flex
      align="center"
      justify="center"
      gap={20}
      flexDir={{ base: "column", xl: imgFirst ? "row" : "row-reverse" }}
    >
      <Image
        src={src}
        w={{ base: "300px", md: "500px" }}
        boxShadow="glow-sm"
        borderRadius="md"
      />
      <VStack gap={6} align={{ base: "center", xl: "flex-start" }}>
        <Stack maxW={"3xl"} textAlign={"left"}>
          <Heading
            fontSize={{ base: "2xl", sm: "4xl" }}
            fontWeight={"bold"}
            textAlign={{ base: "center", xl: "unset" }}
          >
            {heading}
          </Heading>
          {subheading && (
            <Text
              color={"gray.600"}
              fontSize={{ base: "sm", sm: "lg" }}
              textAlign={{ base: "center", xl: "unset" }}
            >
              {subheading}
            </Text>
          )}
        </Stack>
        <Text
          w={{ base: "65%", xl: "unset" }}
          textAlign={{ base: "center", xl: "unset" }}
        >
          {body}
        </Text>
        <Button
          color="white"
          rightIcon={<Icon as={FaArrowRight} />}
          boxShadow="glow-md"
        >
          Try Now
        </Button>
      </VStack>
    </Flex>
  );
};

export default ProductPreview;
