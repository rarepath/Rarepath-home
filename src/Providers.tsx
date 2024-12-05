import { ChakraProvider } from "@chakra-ui/react";
import theme from "@rarepath/chakra-theme";

const Providers = ({ children }: { children: any }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
