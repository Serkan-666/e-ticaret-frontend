import {
  Box,
  Flex,
  Container,
} from "@chakra-ui/react";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import HeaderLogo from "./HeaderLogo";
import HeaderLogin from "./HeaderLogin";
import HeaderLogut from "./HeaderLogut";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

 

  const handleClick = () => {
    logout();
  };
  return (
    <Box bg="myColor.1" py={4} color="white">
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Box>
            <HeaderLogo />
          </Box>
          {/* Search */}
          <Box w={"50%"} display={{ base: "none", md: "block" }}>
            <HeaderSearch/>
          </Box>
          {/* giriş */}
          {user && <HeaderLogin user={user}handleClick={handleClick} />}
          {!user && <HeaderLogut />}
        </Flex>
      </Container>
    </Box>
  );
}
