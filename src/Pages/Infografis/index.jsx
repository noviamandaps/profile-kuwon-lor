import React from 'react'
import Footer from '../../components/Footer'
import DemografiDaerah from '../../components/InfografisPage/DemografiDaerah'
import DemografiPenduduk from '../../components/InfografisPage/DemografiPenduduk'
import Hero from '../../components/InfografisPage/Hero'
import Navbar from '../../components/Navbar'

function Infografis() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <DemografiPenduduk/>
            <DemografiDaerah/>
            <Footer/>
        </>
    )
}

export default Infografis