import React from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/UMKMPage/Hero'
import Navbar from '../../components/Navbar'
import UMKMList from '../../components/UMKMPage/UMKMList'

function UMKM() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <UMKMList/>
            <Footer/>
        </>
    )
}

export default UMKM