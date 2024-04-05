import {
    Avatar,
    Box,
    Flex,
    Icon,
    Text,
    Drawer,
    DrawerContent,
    IconButton,
    useDisclosure,
    DrawerOverlay,
    useColorModeValue,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuDivider,
    MenuItem,
} from '@chakra-ui/react';
import { AiOutlineTeam } from 'react-icons/ai';
import { BsClipboard2Check } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { GoDot } from "react-icons/go";
import {
    MdOutlineDashboard, MdOutlineReportGmailerrorred,
    MdOutlineSupportAgent, MdSyncProblem
} from "react-icons/md";

import { RiMastercardLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSettingsOutline, IoWalletOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import logo from '../../Assests/meta-light-logo-01.png'

import { NavLink, useLocation } from 'react-router-dom';
import AdminRoutes from '../Routes/AdminRoutes';
import { useState } from 'react';
import ProfileDropDown from './ProfileDropDown';


export default function AdminSidebar() {
    const { isOpen, onClose, onOpen } = useDisclosure();

    const location = useLocation()

    const isAuthPage = location.pathname === '/login' || location.pathname === '/';

    const user = {
        name: "Abhishek",
        email: "abhisheksingh@gmail.com"
    }

    return (
        <Box as="section" bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh">
            {!isAuthPage && (
                <SidebarContent display={{ base: 'none', md: 'unset' }} />
            )}
            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay />
                <DrawerContent>
                    {
                        !isAuthPage && (
                            <SidebarContent w="320px" borderRight="none" />
                        )
                    }
                </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: 60 }} transition=".3s ease" position='relative'>
                <Flex
                    position='sticky'
                    top='0'
                    as="header"
                    align="center"
                    justifyContent={{ base: 'space-between', md: 'flex-end' }}
                    w="full"
                    px="4"
                    borderBottomWidth="1px"
                    borderColor={useColorModeValue('inherit', 'gray.700')}
                    bg={"#040930"}
                    boxShadow="sm"
                    h="14"
                    zIndex='999'
                >

                    <IconButton
                        aria-label="Menu"
                        display={{ base: 'inline-flex', md: 'none' }}
                        onClick={onOpen}
                        icon={<FiMenu />}
                        size="md"
                    />

                    <Flex align="center">
                        <Menu >
                            <MenuButton
                                transition='all 0.2s'
                                borderRadius='md'
                                _hover={{ bg: '#16113a' }}
                            >
                                <Flex align="center">
                                    <Avatar
                                        ml="4"
                                        size="sm"
                                        name="Ahmad"
                                        src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                                        cursor="pointer"
                                    />
                                    {/* <VStack marginLeft="5px" spacing="0px" alignItems="flex-start" color="whitesmoke">
                                        <Text fontWeight="bold" fontSize="16px" fontFamily="Open sans" mb={0} >Abhishek</Text>
                                        <Text fontSize="12px" mt={0}>Admin</Text>
                                    </VStack> */}
                                </Flex>
                            </MenuButton>
                            <MenuList size='sm' bg="#040930" borderRadius="1px" shadow="lg" mt={0}>
                                <ProfileDropDown user={user}>
                                    <MenuItem bg="transparent" color="whitesmoke">My Profile</MenuItem>
                                </ProfileDropDown>
                                <MenuDivider />
                                <MenuItem bg="transparent" color='red'>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                <Box as="main" p={18} minH="50rem" bg="#02062b" color="whitesmoke">
                    <AdminRoutes />
                </Box>
            </Box>
        </Box>
    );
}

const SidebarContent = ({ ...props }) => (
    <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        fontFamily="Playfair Display"
        overflowX="hidden"
        overflowY="auto"
        bg={"#040930"}
        borderColor={useColorModeValue('inherit', 'gray.700')}
        borderRightWidth="1px"
        w="60"
        {...props}
    >
        <Flex px="4" py="5" align="center">
            <Image src={logo} alt="logo" size="sm" width="50px" />
            <Text
                fontSize="xl"
                ml="2"
                color="whitesmoke"
                fontWeight="semibold"
            >
                META FORTUNAVERSE
            </Text>
        </Flex>
        <Flex direction="column" as="nav" fontSize="md" color={"whitesmoke"} aria-label="Main Navigation">

            <NavItem to='/admin-dashboard' icon={MdOutlineDashboard}>Dashboard</NavItem>

            <NavItemWithSubMenu icon={RiMastercardLine} title="Master">
                <NavItem to='/master/country-master'>Country Master</NavItem>
                <NavItem to='/master/operator-master'>Operator Master</NavItem>
                <NavItem to='/master/department-master'>Department Master</NavItem>
                <NavItem>Gift Code Creation</NavItem>
                <NavItem>Member Type</NavItem>
                <NavItem to='/master/rank-master'>Rank Master</NavItem>
                <NavItem to='/master/package-master'>Package Master</NavItem>
                <NavItem to='/master/product-master'>Product Master</NavItem>
                <NavItem to='/master/subscription-master'>Subscription Master</NavItem>
            </NavItemWithSubMenu>

            <NavItemWithSubMenu icon={AiOutlineTeam} title="Member Management">
                <NavItem to='/member-management/members'>All Memebers</NavItem>
                <NavItem to='/member-management/special-email'>Create Special Emails</NavItem>
                <NavItem>ID Transfer Request</NavItem>
                <NavItem to='/member-management/dummy-power'>Allot Dummy Power to Leader</NavItem>
                <NavItem to='/member-management/gift-code'>Allot Zero Valued Gift Codes</NavItem>
            </NavItemWithSubMenu>

            <NavItem icon={FaRegNewspaper} to='/newsletter'>Newsletter</NavItem>

            <NavItemWithSubMenu icon={IoSettingsOutline} title="Settings">
                <NavItem to='/setting/income'>Income Settings</NavItem>
                <NavItem>Operator Rights</NavItem>
                <NavItem>Create new password for member or operator</NavItem>
            </NavItemWithSubMenu>

            <NavItemWithSubMenu icon={IoWalletOutline} title="Wallet & Funds">
                <NavItem>Add Balance to Members Wallet</NavItem>
                <NavItem>Withdrawal Requests</NavItem>
            </NavItemWithSubMenu>

            <NavItemWithSubMenu icon={BsClipboard2Check} title="Event's Management">
                <NavItem>Create Event</NavItem>
                <NavItem>Upload Event Video</NavItem>
            </NavItemWithSubMenu>

            <NavItem icon={MdSyncProblem}>Promotions Management
            </NavItem>

            <NavItemWithSubMenu icon={MdOutlineReportGmailerrorred} title="Reports">
                <NavItem>Member Reports</NavItem>
                <NavItem>Promotion</NavItem>
                <NavItem>Event</NavItem>
            </NavItemWithSubMenu>

            <NavItem icon={MdOutlineSupportAgent}>Support</NavItem>
        </Flex>
    </Box>
);


const NavItem = ({ icon, children, to }) => {

    const location = useLocation()
    const color = useColorModeValue('gray.600', 'gray.300');

    return (
        <NavLink
            to={to}
            exact="true"
            activeclassname="active"
            style={{
                textDecoration: 'none',
                color: location.pathname === to ? '#040930' : 'inherit',
                backgroundColor: location.pathname === to ? '#FFFFFF' : 'inherit',
            }}
        >
            <Flex
                align="center"
                px="4"
                py="3"
                fontSize="14px"
                cursor="pointer"
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                color={useColorModeValue('inherit', 'gray.400')}
                _hover={{
                    bg: useColorModeValue('gray.100', 'gray.900'),
                    color: useColorModeValue('gray.900', 'gray.200')
                }}
            >
                {icon && (
                    <Icon
                        mx="2"
                        boxSize="4"
                        _groupHover={{
                            color: color
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </NavLink>
    );
};

const NavItemWithSubMenu = ({ icon, title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const color = useColorModeValue('gray.600', 'gray.300');

    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Flex
                align="center"
                justify="space-between" // Align items evenly along the main axis
                px="4"
                py="3"
                fontSize="15px"
                cursor="pointer"
                role="group"
                fontWeight="semibold"
                transition=".2s ease"
                color={useColorModeValue('inherit', 'gray.400')}
                _hover={{
                    bg: useColorModeValue('gray.100', 'gray.900'),
                    color: useColorModeValue('gray.900', 'gray.200')
                }}
                onClick={toggleSubMenu}
            >
                <Flex align="center">
                    {icon && (
                        <Icon
                            mx="2"
                            boxSize="4"
                            _groupHover={{
                                color: color
                            }}
                            as={icon}
                        />
                    )}
                    {title}
                </Flex>
                {/* Dropdown Icon */}
                <IoMdArrowDropdown />
            </Flex>
            {isOpen && (
                <Box pl="10">
                    {children?.map((child, index) => (
                        <Flex align="center" key={index}>
                            <GoDot />
                            {child}
                        </Flex>
                    ))}
                </Box>
            )}
        </>
    );
};
