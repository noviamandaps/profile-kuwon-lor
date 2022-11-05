import React from 'react'
import ModalImage from "react-modal-image";

const galeriImages = [
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
    "https://source.unsplash.com/random/350x350",
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
                                    alt="Hello World!"
                                    className="w-full object-cover object-center rounded-lg hover:grayscale hover:contrast-100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                                />
                            </div>
                        ))
                    }
            </div>
        </section>
    )
}

export default Gallery