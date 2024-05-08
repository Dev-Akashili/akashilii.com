import { Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { contactIcons } from "../data/data";

const Details = () => {
  return (
    <Stack
      direction={{ base: "column-reverse", md: "row", lg: "row" }}
      p={{ base: "20px 25px", lg: "20px 200px" }}
      gap={{ base: 6 }}
      maxW="1500px"
    >
      <Stack w="100%" gap={{ base: 3, md: 6, lg: 6 }}>
        <Stack
          direction={{ base: "row", md: "column", lg: "column" }}
          justifyContent={{ base: "center" }}
        >
          <Text
            fontFamily="sans-serif"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
          >
            Hi,
          </Text>
          <Text
            fontFamily="sans-serif"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
          >
            I'm Emeka Akashili
          </Text>
        </Stack>
        <Text
          color="gray"
          fontFamily="sans-serif"
          fontWeight="thin"
          lineHeight="1.8"
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          mb="50px"
        >
          A software engineer experienced in developing and maintaining
          fullstack applications and integration solutions for a range of
          clients in various sectors. Currently, I am building a web application
          aimed at transforming the job search process for job seekers in
          Europe, America, and Africa, across various industries.
        </Text>
        <Stack
          direction="row"
          gap={5}
          justifyContent={{ base: "center", md: "left", lg: "left" }}
        >
          {contactIcons.map((icon, index) => (
            <Link
              key={index}
              _hover={{ color: "orange" }}
              href={icon.link}
              target={icon.link === "/contact" ? "_self" : "_blank"}
            >
              {icon.element}
            </Link>
          ))}
        </Stack>
      </Stack>
      <Flex alignItems="center" w="100%">
        <Image
          w={{ base: "220px", md: "220px", lg: "280px" }}
          h={{ base: "220px", md: "220px", lg: "280px" }}
          m={{ base: "0 auto", lg: "0 0 0 auto" }}
          src="././avatar.png"
          alt="Avatar"
        />
      </Flex>
    </Stack>
  );
};

export default Details;
