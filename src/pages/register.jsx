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
import {useRegister} from '../hooks/useRegister'
import { useRouter } from 'next/router';

export default function login() {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {register,err,loading}=useRegister()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(email,password);
    if(JSON.parse(localStorage.getItem('user'))){
      router.push('/'); // Giriş başarılıysa anasayfaya yönlendirme

    }
  };

  return (
    <Flex justifyContent={"center"} mt={40}>
      <Box w={"30rem"} p={4} borderWidth={1} borderRadius={8} color={"myColor.4"} bg={"myColor.1"}>
        <Heading as="h1" fontSize={"3xl"} py={5}>Üye ol</Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={6}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Center>
              <Button disabled={loading} type="submit">Üye ol</Button>
            </Center>
            {err && <div className="err">{err}</div>}
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
