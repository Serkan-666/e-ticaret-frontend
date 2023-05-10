import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="myColor.1" color={"myColor.4"} py={6}>
        <Container maxW={"container.xl"}>
          <Grid templateColumns="repeat(7, 1fr)">
            <GridItem
              colSpan={{ base: 7, md: 3 }}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              gap={5}
            >
              <Heading size={"3xl"} as={"h1"}>
                Kolay Alışveriş
              </Heading>
              <Text fontSize={"xl"}>
                Hoş Geldiniz! E-ticaret sitemizde aradığınız ürüne daha hızlı ve
                kolay bir şekilde ulaşabilmeniz için kategorilerimizi sizin için
                hazırladık. Şimdi sadece size uygun kategoriyi seçin ve
                alışverişe başlayın!
              </Text>
            </GridItem>
            <GridItem colSpan={{ base: 7, md: 4 }}>
              <Image src="./img/bg.png"></Image>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box py={6}>
        <Container maxW={"container.xl"}>
          <Heading
            color={"myColor.1"}
            mb={10}
            size={"2xl"}
            as={"h2"}
            textAlign={"center"}
          >
            Seçimini yap
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={6}
            alignItems={"center"}
          >
            <Link
              borderRadius={"2xl"}
              bg={"myColor.1"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              h={"250px"}
              href={"/elbise"}
              as={NextLink}
            >
              <Heading as={"h3"} size={"xl"}>
                Elbise
              </Heading>
            </Link>
            <Link
              borderRadius={"2xl"}
              bg={"myColor.1"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              h={"250px"}
              href={"/gozluk"}
              as={NextLink}
            >
              <Heading as={"h3"} size={"xl"}>
                Gözlük
              </Heading>
            </Link>
            <Link
              borderRadius={"2xl"}
              bg={"myColor.1"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              h={"250px"}
              href={"/sweatshirt"}
              as={NextLink}
            >
              <Heading as={"h3"} size={"xl"}>
                Sweatshirt
              </Heading>
            </Link>
          </SimpleGrid>

          <SimpleGrid templateColumns={3}>
            <AspectRatio w={"full"} ratio={5 / 3}>
              <Image w={"full"} src="./img/katagori-1.png"></Image>
            </AspectRatio>
          </SimpleGrid>
        </Container>
      </Box>
      <Box h={"96"}></Box>
      <Box h={"96"}></Box>
    </>
  );
}
