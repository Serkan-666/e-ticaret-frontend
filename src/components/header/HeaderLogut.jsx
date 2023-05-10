import {
  Box,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
export default function HeaderLogut() {
  return (
    <Box>
      <Button as={NextLink} href="/register" mr={4}>
        Üye Ol
      </Button>
      <Button as={NextLink} href="/login" variant="outline">
        Giriş Yap
      </Button>
    </Box>
  );
}
