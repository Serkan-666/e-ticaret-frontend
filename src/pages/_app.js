import Layout from "@/components/Layout";
import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthContextProvider } from "@/contexts/AuthContext";
const theme = extendTheme({
  colors: {
    myColor: {
      main: "#30ffff",
      1: "#1E2022",
      2: "#52616B",
      3: "#C9D6DF",
      4: "#F0F5F9",
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        h1:`'Alkatra', cursive`,
        bg: "#F0F5F9",
        color: "#1E2022",
      },
      h1: { color: "#30ffff" },
      h2: { color: "#30ffff" },
      h3: { color: "#30ffff" },
      h4: { color: "#30ffff" },
      h5: { color: "#30ffff" },
      h6: { color: "#30ffff" },
      // styles for the `a`
      a: {
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </ChakraProvider>
  );
}
