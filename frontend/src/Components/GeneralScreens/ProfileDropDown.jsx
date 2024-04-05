import React from 'react'
import {
    IconButton, Image, useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text
} from '@chakra-ui/react'

const ProfileDropDown = ({ user, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {
                children ? (<span onClick={onOpen}>{children}</span>) : (
                    <IconButton backgroundColor="lightgrey" icon={<i className="fa-solid fa-eye"></i>} onClick={onOpen} display={{ base: 'flex' }} />
                )
            }
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize='26px' fontFamily='Work sans' display='flex' justifyContent='center' >{user?.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' justifyContent={'center'} flexDirection='column' alignItems='center' >
                        <Image borderRadius='full' boxSize='150px'  src="https://avatars2.githubusercontent.com/u/37842853?v=4" alt={user?.name}></Image>
                        <Text marginTop='20px' fontSize='18px' fontFamily='Work sans' textAlign='center' >Email: {user?.email}</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProfileDropDown