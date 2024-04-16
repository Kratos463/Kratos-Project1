import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import Logo from '../../Assests/meta-dark-logo-01.png'
import { Link } from 'react-router-dom'

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const linkColor = useColorModeValue('gray', 'lightgray');
  const linkHoverColor = useColorModeValue('lightgray', 'white');
  const popoverContentBgColor = useColorModeValue('#040930', 'gray.800');

  return (
    <Box
      as="header"
      color={linkColor}
      position="sticky" top={0} zIndex={1}
      bg={useColorModeValue('#16113a', 'gray.800')}
      boxShadow="md"
    >
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4, md: "80px" }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          align='center'
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex align="center" flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link to='/'>
            <Image src={Logo} width="50px" />
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
          textDecoration='none'
          as={Link} fontSize={'md'} fontWeight={400} variant={'link'} to={'/login'}>
            Sign In
          </Button>
          <Button
            as={Link}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'md'}
            fontWeight={600}
            color={'white'}
            bg={'primary'}
            to={'/register'}
            _hover={{
              bg: 'secondary',
            }}
          >
            Join Now
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray', 'lightgray');
  const linkHoverColor = useColorModeValue('lightgray', 'white');
  const popoverContentBgColor = useColorModeValue('#040930', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as={Link}
            p={2}
            to={navItem.to ?? '#'}
            fontSize={'md'}
            fontWeight={400}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}>
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};


const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, to }) => {

  return (
    <Stack spacing={4}>
      <Box
        py={2}
        as={Link}
        to={to ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
      </Box>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Products',
    to:"/products"
  },
  {
    label: 'Opportunity',
    to: "/opportunity"
  },
  {
    label: 'Community',
    to: '/community',
  },
  {
    label: 'Updates',
    to: '/updates',
  },
];
