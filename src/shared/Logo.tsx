import { Heading, HStack, Icon } from "@chakra-ui/react";
import { FaHeartPulse } from "react-icons/fa6";

const Logo = ({
  size,
  boxSize,
  gap,
  text,
}: {
  size: string;
  boxSize: number;
  gap?: number;
  text?: string;
}) => {
  return (
    <HStack gap={gap ?? 2}>
      <Icon as={FaHeartPulse} color="primary.500" boxSize={boxSize} />
      <Heading fontSize={size} color="primary.500">
        {text ?? "Radiant"}
      </Heading>
    </HStack>
  );
};

export default Logo;
