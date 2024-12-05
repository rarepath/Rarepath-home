import {
  Button,
  Heading,
  HStack,
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
    <HStack gap={20} flexDir={imgFirst ? "row" : "row-reverse"}>
      <Image src={src} w="500px" boxShadow="glow-sm" borderRadius="md" />
      <VStack gap={6} align="flex-start">
        <Stack maxW={"3xl"} textAlign={"left"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            {heading}
          </Heading>
          {subheading && (
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
              {subheading}
            </Text>
          )}
        </Stack>
        <Text>{body}</Text>
        <Button
          color="white"
          rightIcon={<Icon as={FaArrowRight} />}
          boxShadow="glow-md"
        >
          Try Now
        </Button>
      </VStack>
    </HStack>
  );
};

export default ProductPreview;
