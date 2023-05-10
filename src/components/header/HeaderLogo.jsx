import { Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function HeaderLogo() {
  return (
    <Link as={NextLink} href="/" >
      <Image src="./img/logo.png"maxH="10" alt='Logo' />
    </Link>
  );
}
