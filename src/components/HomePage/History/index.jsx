import React from 'react'
import { Link } from 'react-router-dom'

function History() {
  return (
    <div className='max-w-screen-xl mx-auto px-6 lg:px-8 py-32 flex flex-col md:flex-row items-center gap-10'>
        <div className='md:w-1/3 rounded-lg overflow-hidden border border-gray-200'>
            <img className='object-cover h-72' src="https://cdn.idntimes.com/content-images/community/2021/04/whatsapp-image-2021-04-14-at-173219-3b1f70c00767ecd8943965a1fc32ed2c-1c9811a730308636c64411495b7c2228_600x400.jpeg" alt="Gambar Dukuh Gumbeng" />
        </div>
        <div className='md:w-2/3'>
            <h3 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>Sejarah Singkat</h3>
            <p className='text-gray-600 mb-14'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur reiciendis placeat recusandae, totam nemo nostrum non officiis maiores in nihil iusto amet optio quibusdam minus doloribus voluptatum quis dolores ipsum, impedit reprehenderit doloremque odit sunt magnam. Distinctio culpa nisi sunt vel eum cupiditate minima officiis quos iure fugiat. Quae ea debitis officia.</p>
            <Link className='btn bg-emerald-600 hover:bg-emerald-700 text-white' to={"/sejarah"}>Selengkapnya</Link>
        </div>
    </div>
  )
}

export default History