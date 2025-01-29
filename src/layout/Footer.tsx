import {
  Box,
  Container,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Grid,
  GridItem,
  Flex,
  VStack,
  Link,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiMailSend } from "react-icons/bi";
import Logo from "../shared/Logo";
import { NAV_ITEMS } from "../utils/mockdata";

// const SocialButton = ({
//   children,
//   label,
//   href,
// }: {
//   children: ReactNode;
//   label: string;
//   href: string;
// }) => {
//   return (
//     <chakra.button
//       bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
//       rounded={"full"}
//       w={8}
//       h={8}
//       cursor={"pointer"}
//       as={"a"}
//       href={href}
//       display={"inline-flex"}
//       alignItems={"center"}
//       justifyContent={"center"}
//       transition={"background 0.3s ease"}
//       _hover={{
//         bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
//       }}
//     >
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   );
// };

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg="gray.50"
      borderTopWidth={1}
      color="gray.700"
      w="100%"
      display="flex"
      justifyContent="center"
    >
      <Box w="5xl">
        <Container as={Stack} maxW={"6xl"} py={10}>
          <Flex
            flexDir={{ base: "column-reverse", md: "row" }}
            align="center"
            gap={{ base: 10 }}
          >
            <Stack spacing={2} align="center">
              <Box>
                <Logo size="xl" boxSize={8} text="RarePath" />
              </Box>
              <Text fontSize={"sm"}>© 2024 RarePath. All rights reserved</Text>
              {/* <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              </Stack> */}
            </Stack>
            <Flex flex={1} justify="center">
              <Grid
                gridTemplateColumns="repeat(2,1fr)"
                gap="20px"
                columnGap={28}
              >
                {NAV_ITEMS.map((item) => {
                  return (
                    <GridItem key={item.label}>
                      <Box as="a" href={item.href}>
                        {item.label}
                      </Box>
                    </GridItem>
                  );
                })}
              </Grid>
            </Flex>

            {/* <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Box as="a" href={"#faq"}>
                FAQ
              </Box>
              <Box as="a" href={"#"}>
                Terms of Service
              </Box>
              <Box as="a" href={"#"}>
                Legal
              </Box>
              <Box as="a" href={"#"}>
                Privacy Policy
              </Box>
              <Box as="a" href={"#"}>
                Satus
              </Box>
            </Stack> */}
            <Stack align={{ base: "center", md: "flex-start" }}>
              <ListHeader>Stay up to date</ListHeader>
              <VStack align="stretch">
                <Stack direction={"row"}>
                  <Input
                    placeholder={"Your email address"}
                    bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                    border={0}
                    _focus={{
                      bg: "whiteAlpha.300",
                    }}
                  />
                  <IconButton
                    bg={useColorModeValue("primary.400", "primary.800")}
                    color={useColorModeValue("white", "gray.800")}
                    _hover={{
                      bg: "primary.500",
                    }}
                    aria-label="Email"
                    icon={<BiMailSend />}
                  />
                </Stack>
                <Link as="a" href="mailto:contact-us@rarepath.ai">
                  contact-us@rarepath.ai
                </Link>
              </VStack>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
