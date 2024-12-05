import { Box } from "@chakra-ui/react";

const GridBg = () => {
  return (
    <Box
      pos="absolute"
      w="100vw"
      h="100vh"
      left="0px"
      top="0px"
      bg="red"
      bgImg="url(https://framerusercontent.com/images/wGAHOWhVswEtWkOKTJN6s2CW0.svg)"
      opacity={0.04}
      zIndex={1}
    />
  );
};

export default GridBg;
