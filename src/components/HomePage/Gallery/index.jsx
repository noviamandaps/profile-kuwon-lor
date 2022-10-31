import React from 'react'
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom"

function Gallery() {
    return (
        <section className='bg-emerald-50/50'>
            <div className='max-w-screen-xl mx-auto px-6 lg:px-8 pt-32 pb-24 flex flex-col items-center'>
                <div className='text-center'>
                    <h4 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>Kumpulan Foto <span className='text-emerald-600'>Dukuh Gumbeng</span></h4>
                    <p className='text-gray-600 mb-14'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur reiciendis placeat recusandae</p>
                </div>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <div className="flex-grow antialiased">
                        <ModalImage
                            small={"https://source.unsplash.com/random/350x350"}
                            large={"https://source.unsplash.com/random/350x350"}
                            alt="Hello World!"
                            className="w-full object-cover object-center rounded-lg hover:grayscale hover:contrast-100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                        />
                    </div>
                    <div className="flex-grow antialiased">
                        <ModalImage
                            small={"https://source.unsplash.com/random/350x350"}
                            large={"https://source.unsplash.com/random/350x350"}
                            alt="Hello World!"
                            className="w-full object-cover object-center rounded-lg hover:grayscale hover:contrast-100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                        />
                    </div>
                    <div className="flex-grow antialiased">
                        <ModalImage
                            small={"https://source.unsplash.com/random/350x350"}
                            large={"https://source.unsplash.com/random/350x350"}
                            alt="Hello World!"
                            className="w-full object-cover object-center rounded-lg hover:grayscale hover:contrast-100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                        />
                    </div>
                    <div className="flex-grow antialiased">
                        <ModalImage
                            small={"https://source.unsplash.com/random/350x350"}
                            large={"https://source.unsplash.com/random/350x350"}
                            alt="Hello World!"
                            className="w-full object-cover object-center rounded-lg hover:grayscale hover:contrast-100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
                        />
                    </div>
                </div>
                <Link className='btn bg-emerald-600 hover:bg-emerald-700 text-white mt-14' to={"/sejarah"}>Tampilkan Lainnya</Link>
            </div>
        </section>
    )
}

export default Gallery