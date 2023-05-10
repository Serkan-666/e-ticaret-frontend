import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Avatar from "react-avatar";
import { SlBasket, SlHeart } from "react-icons/sl";
import { HiOutlineBell } from "react-icons/hi";
import HeaderSearch from "./HeaderSearch";

export default function HeaderLogin({ user, handleClick }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex alignItems={"center"} gap={4}>
      <Link as={NextLink} href="/">
        <SlHeart size="20px" />
      </Link>
      <Link as={NextLink} href="/">
        <SlBasket size="20px" />
      </Link>
      <Link as={NextLink} href="/">
        <HiOutlineBell size="21px" />
      </Link>
      <Box cursor={"pointer"} onClick={onOpen}>
        <Avatar
          round="50%"
          size="44"
          color={Avatar.getRandomColor("sitebase", ["red", "green", "blue"])}
          name={user.email[0] + " " + user.email[1]}
        />
      </Box>
      <Drawer
        colorScheme="white"
        size={"sm"}
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent bg={"myColor.1"} color={"white"}>
          <DrawerHeader p={6}>
            <Flex alignItems={"center"} gap={3}>
              <Avatar
                round="50%"
                size="60"
                color={Avatar.getRandomColor("sitebase", [
                  "red",
                  "green",
                  "blue",
                ])}
                name={user.email[0] + " " + user.email[1]}
              />
              <Box>
                <Heading fontSize={"xl"} color={"white"} lineHeight={"6"}>
                  {user.email}
                </Heading>
                <Text fontSize={"lg"} lineHeight={"6"} opacity={".6"}>
                  {" "}
                  Tekrar hoş geldiniz
                </Text>
              </Box>
            </Flex>
            <DrawerCloseButton
              size={"lg"}
              right={"5"}
              top={"50"}
              style={{ transform: "translateY(-50%)" }}
            />
          </DrawerHeader>
          <DrawerBody p={0}>
            <Flex alignItems={"center"} gap={1} mb={5}>
              <hr className="hr-mini" />
              <Text>AraBul</Text>
              <hr />
            </Flex>
            <Box px={5} py={3}>
              <HeaderSearch />
            </Box>
            <Flex alignItems={"center"} gap={1} my={5}>
              <hr className="hr-mini" />
              <Text>Linkler</Text>
              <hr />
            </Flex>

            <Link
              _hover={{ color: "myColor.main" }}
              display={"block"}
              px={5}
              py={3}
              fontSize={"2xl"}
              as={NextLink}
              href="/"
            >
              Bildirimler
            </Link>
            <Link
              _hover={{ color: "myColor.main" }}
              display={"block"}
              px={5}
              py={3}
              fontSize={"2xl"}
              as={NextLink}
              href="/"
            >
              Favorilerim
            </Link>
            <Link
              _hover={{ color: "myColor.main" }}
              display={"block"}
              px={5}
              py={3}
              fontSize={"2xl"}
              as={NextLink}
              href="/"
            >
              Sepetim
            </Link>

            <hr />

            <Link
              color={"red.500"}
              _hover={{ color: "red" }}
              display={"block"}
              px={5}
              py={3}
              fontSize={"xl"}
              as={NextLink}
              href="/login"
              onClick={handleClick}
            >
              Çıkış yap
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
