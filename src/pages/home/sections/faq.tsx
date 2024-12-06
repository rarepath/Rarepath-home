import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import SectionHeading from "../../../shared/SectionHeading";

export default function Faq() {
  return (
    <VStack
      w="100%"
      maxW={{ base: "xs", sm: "xl", md: "2xl", lg: "5xl" }}
      gap={10}
      id="faq"
    >
      <SectionHeading heading="FAQ" />
      <Flex align={"center"} justify={"center"} w="100%">
        <Accordion allowMultiple width="100%" maxW="7xl" rounded="md">
          {faqItems.map((item) => {
            return (
              <AccordionItem key={item.heading}>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                >
                  <Text fontSize="md">{item.heading}</Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">{item.desc}</Text>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Flex>
    </VStack>
  );
}

const faqItems: { heading: string; desc: string }[] = [
  {
    heading: "Who can use Radiant?",
    desc: `Radiant is free to use for healthcare providers, patients,
                caregivers, and researchers. It offers insights into rare
                diseases through natural language queries, making it accessible
                to a broad audience.`,
  },
  {
    heading: "Which rare diseases does Radiant cover?",
    desc: `Currently, Radiant focuses on two rare diseases:
                hypophosphatasia and Ehlers-Danlos syndrome. However, the
                long-term goal is to expand coverage to all 7,000 known rare
                diseases.`,
  },
  {
    heading: "How is Radiant different from other AI chat agents?",
    desc: "Unlike general-purpose AI chat agents, Radiant is specifically designed for rare diseases. It uses a vector database and retrieval-augmented generation (RAG) to provide responses based on the most up-to-date, peer-reviewed research.",
  },
  {
    heading: "How can I contribute to Radiant’s development?",
    desc: `You can provide feedback by taking our survey or contacting us directly. We welcome collaborations with healthcare providers, researchers, and rare disease advocates to improve Radiant’s capabilities.`,
  },
];
