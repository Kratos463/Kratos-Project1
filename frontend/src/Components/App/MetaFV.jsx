import React from 'react'
import Header from './Header'
import UserRoutes from '../../Routes/UserRoutes'
import Footer from './Footer'
import MetaFVLayout from '../Layout/MetaFVLayout'

const MetaFV = () => {
    return (
        <MetaFVLayout>
            <Header />
            <UserRoutes />
            <Footer />
        </MetaFVLayout>
    )
}

export default MetaFV