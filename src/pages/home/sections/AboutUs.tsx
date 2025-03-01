import { previewOne, previewTwo } from "../../../assets";
import ProductPreview from "../../../shared/ProductPreview";
import { VStack } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <VStack maxW="5xl" textAlign="left" gap={32} id="about-us">
      <ProductPreview
        src={previewOne}
        heading="Introducing: Radiant"
        subheading="AI for Rare Disease Care"
        body="Radiant is an initiative by Ramsey Labs at Oregon State University, uses AI to improve rare disease diagnosis and treatment. It currently supports Ehlers-Danlos syndrome and hypophosphatasia  and seeks to provide patients, caregivers, and healthcare professionals with AI-driven insights."
        imgFirst
      />
      <ProductPreview
        src={previewTwo}
        heading="Breaking Barriers with LLMs"
        body="By leveraging large language models (LLMs) and scientific literature, Radiant delivers accurate, evidence-based information, breaking down barriers to effective treatment for rare diseases."
      />
    </VStack>
  );
};

export default AboutUs;
