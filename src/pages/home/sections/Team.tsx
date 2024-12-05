import { dom, fern, frankie, guy, ramsey, roach, sundar } from "@/assets";
import SectionHeading from "@/shared/SectionHeading";
import TeamProfile from "@/shared/TeamProfile";
import { Grid, GridItem, VStack } from "@chakra-ui/react";

const Team = () => {
  const createElements = (arr: headShotsInterface[]) => {
    return arr.map((member) => {
      return (
        <GridItem key={member.name}>
          <TeamProfile
            src={member.src}
            name={member.name}
            role={member.role}
            linkedin={member.linkedin}
          />
        </GridItem>
      );
    });
  };

  return (
    <VStack gap={20} id="team">
      <SectionHeading
        heading="Our Team"
        subheading="Our team is composed of current PhDs, Masters, and Undergraduate students, alongside academic leaders ranging from AI to Biology."
      />
      <Grid gap={20} maxW="7xl" gridTemplateColumns="repeat(2,1fr)">
        {createElements(TEAM_HEADSHOTS)}
      </Grid>
      <Grid gap={20} maxW="7xl" gridTemplateColumns="repeat(3,1fr)">
        {createElements(ADVISOR_HEADSHOTS)}
      </Grid>
    </VStack>
  );
};

export default Team;

interface headShotsInterface {
  name: string;
  role: string;
  src: string;
  linkedin: string;
}

const TEAM_HEADSHOTS: headShotsInterface[] = [
  {
    name: "Frankie Hodges",
    role: "Co-Founder",
    src: frankie,
    linkedin: "https://www.linkedin.com/in/guy-cohen-96a6141ab/",
  },
  {
    name: "Sundareswar Pullela",
    role: "Co-Founder",
    src: sundar,
    linkedin: "https://www.linkedin.com/in/hodgesfm/",
  },
  {
    name: "Guy Cohen",
    role: "Head of Product",
    src: guy,
    linkedin: "https://www.linkedin.com/in/guy-cohen-96a6141ab/",
  },
  {
    name: "Dominick Tucker",
    role: "Product Engineer",
    src: dom,
    linkedin: "https://www.linkedin.com/in/dominicktucker/",
  },
];

const ADVISOR_HEADSHOTS: headShotsInterface[] = [
  {
    name: "Dr. Ramsey",
    role: "Lead advisor",
    src: ramsey,
    linkedin: "https://www.linkedin.com/in/sramsey/",
  },
  {
    name: "Dr. Roach",
    role: "Medical advisor",
    src: roach,
    linkedin: "https://www.linkedin.com/in/jaredroach/",
  },
  {
    name: "Dr. Fern",
    role: "ML advisor",
    src: fern,
    linkedin: "https://www.linkedin.com/in/xiaoli-fern-712b455/",
  },
];
