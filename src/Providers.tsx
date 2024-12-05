import { ChakraProvider } from "@chakra-ui/react";
import theme from "@rarepath/chakra-theme";
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const updatedTheme = extendTheme({ ...theme, ...config });

const Providers = ({ children }: { children: any }) => {
  return <ChakraProvider theme={updatedTheme}>{children}</ChakraProvider>;
};

export default Providers;
