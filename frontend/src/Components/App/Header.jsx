import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  Avatar,
  Heading
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';

import Logo from '../../Assests/meta-light-logo-01.png'
import { Link } from 'react-router-dom'

// Define interface outside component function
const NAV_ITEMS = [
  {
    label: 'INFO',
    children: [
      {
        label: 'PRESENTATION & PROMO',
        href: '#',
      },
      {
        label: 'ABOUT US',
        href: '#',
      },
      {
        label: 'TOP PRODUCERS',
        href: '#',
      },
      {
        label: 'REFERRAL CLUB COMPETITION',
        href: '#',
      },
      {
        label: 'META MAGAZINE',
        href: '#',
      },
      {
        label: 'VIDEO ARCHIVE',
        href: '#',
      },
    ],
  },
  {
    label: 'NEWS',
    href: '#',
  },
  {
    label: 'EVENTS',
    href: '#',
  },
  {
    label: 'BONUS',
    children: [
      {
        label: 'SALES BONUS',
        href: '#',
      },
      {
        label: 'ACTIVITY SUMMARY',
        href: '#',
      },
      {
        label: 'FEAR OF LOSS',
        href: '#',
      },
      {
        label: 'LOYALTY POINTS',
        href: '#',
      },
      {
        label: 'META BONUS',
        href: '#',
      },
      {
        label: 'MATCHING BONUS',
        href: '#',
      },
      {
        label: 'RESIDUAL BONUS',
        href: '#',
      },
      {
        label: 'RANKS',
        href: '#',
      },
    ],
  },
  {
    label: 'TEAM',
    href: '#',
  },
  {
    label: 'META STORE',
    href: '#',
  },
];

const PROFILE_ITEMS = [
  {
    label: "MY PACKAGE",
    href: "#"
  },
  {
    label: "SETTING",
    href: "/back-office/settings"
  },
  {
    label: "DOCUMENTS",
    href: "#"
  },
  {
    label: "MY INVITE QR",
    href: "#"
  },
  {
    label: "UPLOAD KYC",
    href: "#"
  },
  {
    label: "EARNING & PAYOUTS",
    href: "#"
  },
  {
    label: "GIFT CODES",
    href: "#"
  },
  {
    label: "WITHDRAW BITCOIN",
    href: "#"
  },
  {
    label: "SUPPORT",
    href: "#"
  },
  {
    label: "COMPLIANCE CONTACT",
    href: "#"
  },
  {
    label: "INVOCIES",
    href: "#"
  },
  {
    label: "LOGOUT",
    href: "#"
  },
]

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const linkColor = useColorModeValue('gray', 'lightgray');
  const linkHoverColor = useColorModeValue('lightgray', 'white');
  const popoverContentBgColor = useColorModeValue('#040930', 'gray.800');

  return (
    <Box as="header"
      color={linkColor}
      // borderRadius={{ base: "0px", md: "50px" }}
      position="sticky" top={0} zIndex="sticky"
      bg={useColorModeValue('#16113a', 'gray.800')}
      boxShadow="md"
      px="80px"
    >
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}

        align={'center'}
        justify={'space-between'}
      >
        <Flex align="center">
          <Link to='/back-office'>
            <Image src={Logo} width="50px" />
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <IconButton
          display={{ base: 'flex', md: 'none' }}
          colorScheme='none'
          color="white"
          background="none"
          onClick={onToggle}
          icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
          variant={'solid'}
          aria-label={'Toggle Navigation'}
        />

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={2}
          align={"center"}
        >
          <Popover trigger={'hover'} >
            <PopoverTrigger>
              <Flex alignItems="center" cursor="pointer">
                <Avatar
                  ml="4"
                  size="sm"
                  name="Ahmad"
                  src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                />
                <Heading as="h5" fontSize={'md'} ml={2}
                  color={linkColor}
                  fontWeight={800} _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>{"ABHISHEK"}</Heading>
              </Flex>
            </PopoverTrigger>
            <PopoverContent
              border={0}
              boxShadow={'xl'}
              bg={popoverContentBgColor}
              rounded={"sm"}
              zIndex={1}
              minW="fit-content"
              maxW="fit-content"
            >
              <Stack spacing={2} p={4}>
                {PROFILE_ITEMS.map((child) => (
                  <DesktopSubNav key={child.label} {...child} />
                ))}
              </Stack>
            </PopoverContent>
          </Popover>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity zIndex={1}>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray', 'lightgray');
  const linkHoverColor = useColorModeValue('lightgray', 'white');
  const popoverContentBgColor = useColorModeValue('#040930', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={800}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                rounded={"sm"}
                zIndex={1}
                minW="fit-content"
                maxW="fit-content">
                <Stack p={4}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      p={2}
      _hover={{ bg: useColorModeValue('#16113a', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'lightgray' }}
            fontWeight={600}>
            {label}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('#040930', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        <Flex flexDirection="row">
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
