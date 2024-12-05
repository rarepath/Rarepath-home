import { accelerator, isb, sv, waynegladys } from "@/assets";
import { Box, Flex, Heading, Image, Tooltip, VStack } from "@chakra-ui/react";

const Companies = () => {
  return (
    <VStack gap={5}>
      <Heading>Supported By</Heading>
      <Flex
        maxW="4xl"
        justifyContent="center"
        gap={20}
        align="center"
        flexDir={{ base: "column", lg: "row" }}
      >
        {COMPANIES.map((company) => {
          return (
            <Tooltip label={company.label} key={company.src}>
              <Box
                as="a"
                href={company.href}
                target="_blank"
                objectFit="cover"
                w={{ base: "100px", md: "150px", lg: "200px" }}
              >
                <Image src={company.src} objectFit="fill" />
              </Box>
            </Tooltip>
          );
        })}
      </Flex>
    </VStack>
  );
};

export default Companies;

const COMPANIES: { src: string; label: string; href: string }[] = [
  {
    src: accelerator,
    label: "Oregon State University Accelerator",
    href: "https://advantage.oregonstate.edu/advantage-accelerator",
  },
  {
    src: isb,
    label: "Institute for Systems Biology",
    href: "https://isbscience.org/",
  },
  {
    src: sv,
    label: "Research to the People",
    href: "https://www.researchtothepeople.org/",
  },
  {
    src: waynegladys,
    label: "The Wayne and Gladys Valley Foundation",
    href: "https://gchopkins.wixsite.com/valley-foundation",
  },
];
