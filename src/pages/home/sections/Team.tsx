import {
  // dom,
  fern,
  frankie,
  // guy,
  ramsey,
  roach,
  sundar,
} from "../../../assets";
import SectionHeading from "../../../shared/SectionHeading";
import TeamProfile from "../../../shared/TeamProfile";
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
            from={member?.from}
          />
        </GridItem>
      );
    });
  };

  return (
    <VStack gap={20} id="team">
      <SectionHeading
        heading="Our Team"
        subheading="Radiant is a multidisciplinary team that includes experts in AI, machine-learning, bioinformatics, data science, software engineering, and rare disease genetics."
      />
      <Grid
        gap={20}
        maxW="7xl"
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
      >
        {createElements(TEAM_HEADSHOTS)}
      </Grid>
      <Grid
        gap={20}
        maxW="7xl"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          xl: "repeat(3,1fr)",
        }}
        sx={{
          "& > :last-child": {
            gridColumn: { base: "unset", md: "1/3", xl: "unset" },
          },
        }}
      >
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
  from?: string;
}

const TEAM_HEADSHOTS: headShotsInterface[] = [
  {
    name: "Frankie Hodges",
    role: "Co-Founder",
    src: frankie,
    linkedin: "https://www.linkedin.com/in/hodgesfm/",
  },
  {
    name: "Sundareswar Pullela",
    role: "Co-Founder",
    src: sundar,
    linkedin: "https://www.linkedin.com/in/psundareswar/",
  },
  // {
  //   name: "Guy Cohen",
  //   role: "Head of Product",
  //   src: guy,
  //   linkedin: "https://www.linkedin.com/in/guy-cohen-96a6141ab/",
  // },
  // {
  //   name: "Dominick Tucker",
  //   role: "Product Engineer",
  //   src: dom,
  //   linkedin: "https://www.linkedin.com/in/dominicktucker/",
  // },
];

const ADVISOR_HEADSHOTS: headShotsInterface[] = [
  {
    name: "Stephen Ramsey, PhD",
    role: "Lead advisor",
    src: ramsey,
    from: "Oregon State University",
    linkedin: "https://www.linkedin.com/in/sramsey/",
  },
  {
    name: "Jared Roach, MD PhD",
    role: "Medical advisor",
    src: roach,
    from: "Institute for Systems Biology",
    linkedin: "https://www.linkedin.com/in/jaredroach/",
  },
  {
    name: "Xiaoli Fern, PhD",
    role: "Machine Learning Advisor",
    from: "Oregon State University",
    src: fern,
    linkedin: "https://www.linkedin.com/in/xiaoli-fern-712b455/",
  },
];
