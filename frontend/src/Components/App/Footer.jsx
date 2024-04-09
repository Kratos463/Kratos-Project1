import React from 'react'
import { Box, Flex, Stack, Text, useColorModeValue, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  const linkColor = useColorModeValue('gray', 'lightgray');

  return (
    <Box bgColor="#16113a" px={{ base: "0px", md: "80px" }} py={{ base: "0px", md: "80px" }} width="100%" color='lightgray'>
      <Flex justify='space-between'>
        <Stack>
          <Text fontSize={'md'} fontWeight={800} color="gray">Information</Text>
          {Infomration_links.map((link) => (
            <Link key={link.label} to={link.href}>{link.label}</Link>
          ))}
        </Stack>

        <Stack>
          <Text fontSize={'md'} fontWeight={800} color="gray">Quick Links</Text>
          {Quick_links.map((link) => (
            <Link key={link.label} to={link.href}>{link.label}</Link>
          ))}
        </Stack>

        <Stack>
          <Text fontSize={'md'} fontWeight={800} color="gray">© 2024 META FORTUNAVERSE</Text>
          <Text>
            Reg. No: 38021 <br />
            Premises No. 482, Fourth Floor <br />
            Building 08 <br />
            Honda Media City, <br />
            Mumbai, India
          </Text>
        </Stack>
      </Flex>

      <Flex justify='center' mt={10} gap={10} fontSize="2xl">
      <FaFacebookF />
      <FaInstagram />
      <BsTwitterX />
      <FaYoutube />
      </Flex>
    </Box>
  );
}


const Infomration_links = [
  {
    label: "Support",
    href: "#"
  },
  {
    label: "Compliance Contact",
    href: "#"
  },
  {
    label: "Responsible Network",
    href: "#"
  },
  {
    label: "Terms & Condition",
    href: "#"
  },
  {
    label: "Privacy Policy",
    href: "#"
  },
  {
    label: "Anti Fraud Policy",
    href: "#"
  },
  {
    label: "About Us",
    href: "#"
  },
]

const Quick_links = [
  {
    label: "News",
    href: "#"
  },
  {
    label: "Info",
    href: "#"
  },
  {
    label: "Sales Bonus",
    href: "#"
  },
  {
    label: "Activity Summary",
    href: "#"
  },
  {
    label: "Meta-Store",
    href: "#"
  },
  {
    label: "Events",
    href: "#"
  },
  {
    label: "Top Producers",
    href: "#"
  },
]

export default Footer