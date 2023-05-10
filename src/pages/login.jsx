import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import {useLogin} from '../hooks/useLogin'
import { useRouter } from 'next/router';

export default function login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login,error,loading}=useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email,password);
    if(JSON.parse(localStorage.getItem('user'))){
      router.push('/'); // Giriş başarılıysa anasayfaya yönlendirme

    }
  };

  return (
    <Flex justifyContent={"center"} mt={40} >
      <Box w={"30rem"} px={4}py={6} borderWidth={1} borderRadius={8} color={"myColor.4"} bg={"myColor.1"}>
        <Heading as="h1" fontSize={"3xl"} py={5}>Giriş Yap</Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={6}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                bg="myColor.2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                bg="myColor.2"

                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Center>
              <Button disabled={loading} type="submit">Giriş Yap</Button>
            </Center>
            {error && <div className="error">{error}</div>}
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
