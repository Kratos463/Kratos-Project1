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
        to: '/back-office/presentation-promo',
      },
      {
        label: 'ABOUT US',
        to: '/back-office/about-us',
      },
      {
        label: 'TOP PRODUCERS',
        to: '/back-office/top-producers',
      },
      {
        label: 'REFERRAL CLUB COMPETITION',
        to: '/back-office/referral-competition',
      },
      {
        label: 'VIDEO ARCHIVE',
        to: '/back-office/videoarchive',
      },
    ],
  },
  {
    label: 'NEWS',
    to: '/back-office/news',
  },
  {
    label: 'EVENTS',
    to: '/back-office/events',
  },
  {
    label: 'BONUS',
    children: [
      {
        label: 'SALES BONUS',
        to: '#',
      },
      {
        label: 'ACTIVITY SUMMARY',
        to: '#',
      },
      {
        label: 'FEAR OF LOSS',
        to: '#',
      },
      {
        label: 'LOYALTY POINTS',
        to: '#',
      },
      {
        label: 'META BONUS',
        to: '#',
      },
      {
        label: 'MATCHING BONUS',
        to: '#',
      },
      {
        label: 'RESIDUAL BONUS',
        to: '#',
      },
      {
        label: 'RANKS',
        to: '#',
      },
    ],
  },
  {
    label: 'TEAM',
    to: '#',
  },
  {
    label: 'META STORE',
    to: '/back-office/store',
  },
];

const PROFILE_ITEMS = [
  {
    label: "MY PACKAGE",
    to: "/back-office/mypackage"
  },
  {
    label: "SETTING",
    to: "/back-office/settings"
  },
  {
    label: "DOCUMENTS",
    to: "/back-office/documents"
  },
  {
    label: "MY INVITE QR",
    to: "#"
  },
  {
    label: "UPLOAD KYC",
    to: "#"
  },
  {
    label: "EARNING & PAYOUTS",
    to: "/back-office/userlog"
  },
  {
    label: "GIFT CODES",
    to: "/back-office/giftcodes"
  },
  {
    label: "WITHDRAW BITCOIN",
    to: "/back-office/withdrawal"
  },
  {
    label: "SUPPORT",
    to: "#"
  },
  {
    label: "COMPLIANCE CONTACT",
    to: "#"
  },
  {
    label: "INVOCIES",
    to: "/back-office/invoices"
  },
  {
    label: "LOGOUT",
    to: "#"
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
      position="sticky" top={0} zIndex={1}
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
          <Flex display={{ base: 'none', md: 'flex' }} ml={10} >
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
                as={Link}
                p={2}
                to={navItem.to ?? '#'}
                fontSize={'md'}
                fontWeight={600}
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
                // zIndex={1}
                minW="fit-content"
                maxW="fit-content">
                <Stack p={4} >
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


const DesktopSubNav = ({ label, to }) => {
  return (
    <Box
      as={Link}
      to={to}
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

const MobileNavItem = ({ label, children, to }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as={Link}
        to={to ?? '#'}
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
              <Box as={Link} key={child.label} py={2} to={child.to}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
