import React from 'react'
import InnerBoxLayout from '../../../Components/Layout/InnerBoxLayout'
import { ButtonSubmit } from './Settings'
import { Text, Flex, Stack, Image } from '@chakra-ui/react'
import BoxLayout from '../../../Components/Layout/BoxLayout'
import PackageImage from '../../../Assests/package.png'
import Carousels2 from '../../../Components/Carousels/Carousels1'
import ProductCard from '../../../Components/Cards/ProductCard'
import productImage from '../../../Assests/productImage.jpg'

const MyPackages = () => {
    return (
        <InnerBoxLayout label="My Package">
            <BoxLayout labelText='You have purchased the air package'>
                <Flex justify='space-between'>
                    <Stack>
                        <Text ></Text>
                        <ButtonSubmit label="Upgrade" justify='flex-start' />
                    </Stack>
                    <Image src={PackageImage} width="100px"/>
                </Flex>
            </BoxLayout>

            <Carousels2 />
            <Flex gap={5} flexWrap='wrap'>
                <ProductCard image={productImage} isActive={true}/>
                <ProductCard image={productImage} />
                <ProductCard image={productImage} isActive={true}/>
                <ProductCard image={productImage}/>
            </Flex>
        </InnerBoxLayout>
    )
}

export default MyPackages