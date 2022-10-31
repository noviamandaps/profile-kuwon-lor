import React from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/FasilitasPage/Hero'
import Navbar from '../../components/Navbar'
import FasilitasList from '../../components/FasilitasPage/FasilitasList'

function Fasilitas() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <FasilitasList/>
            <Footer/>
        </>
    )
}

export default Fasilitas