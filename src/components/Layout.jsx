import React from "react";
import Header from "./header";
import { Box } from "@chakra-ui/react";
export default function Layout({ children }) {
  return (
    <Box position="relative" overflowX="hidden">
      <Header />
      <main>{children}</main>
    </Box>
  );
}
