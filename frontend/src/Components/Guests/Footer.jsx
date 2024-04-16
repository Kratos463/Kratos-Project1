import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  Flex
} from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

import Logo from '../../Assests/meta-dark-logo-01.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function SocialButton({ children, label, to }) {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={Link}
      to={to}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

function ListHeader({ children }) {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <Box
      pt="100px"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10} px={{ base: "20px", md: "60px" }}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Flex align='center' gap={2}>
              <Image src={Logo} width="50px" />
              <Text fontWeight='500' fontSize='lg' color='primary'>META FORTUNAVERSE</Text>
            </Flex>
            <Text fontSize={'sm'}>© 2024 META FORTUNAVERSE Network. <br />
              Jaipur, Rajasthan, India</Text>
            <Text>support@metafortunaverse.com</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Facebook'} href={'#'}>
                <FaFacebook />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as={Link} to={'#'}>
              About us
            </Box>
            <Box as={Link} to={'#'}>
              Blog
            </Box>
            <Box as={Link} to={'#'}>
              Contact us
            </Box>
            <Box as={Link} to={'#'}>
              Pricing
            </Box>
            <Box as={Link} to={'#'}>
              Testimonials
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as={Link} to={'#'}>
              Help Center
            </Box>
            <Box as={Link} to={'#'}>
              Terms of Service
            </Box>
            <Box as={Link} to={'#'}>
              Legal
            </Box>
            <Box as={Link} to={'#'}>
              Privacy Policy
            </Box>
            <Box as={Link} to={'#'}>
              Satus
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}