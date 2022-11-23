import React from 'react'
import ModalImage from "react-modal-image";

const galeriImages = [
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/1.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/2.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/3.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/4.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/5.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/6.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/7.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/8.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/9.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/10.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/11.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/12.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/13.jpg',
    process.env.REACT_APP_PUBLIC_URL + '/images/galeri/14.webp',

]

function Gallery() {
    return (
        <section className='py-32'>
            <div className='max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5'>
                    {
                        galeriImages.map((imageLink, index) => (
                            <div key={index} className="flex-grow antialiased">
                                <ModalImage
                                    small={imageLink}
                                    large={imageLink}
                                    alt="Galeri Gumbeng"
                                    className="w-full h-96 object-cover object-center rounded-lg hover:grayscale hover:contrast-100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                                />
                            </div>
                        ))
                    }
            </div>
        </section>
    )
}

export default Gallery