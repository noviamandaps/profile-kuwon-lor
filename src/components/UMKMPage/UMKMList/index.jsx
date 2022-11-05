import { Card } from 'flowbite-react'
import React from 'react'

const listUMKM = [
    {
        img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
        nama: 'Balai Padukuhan Gumbeng',
        desc: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        contact: '08123435345'
    },
    {
        img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
        nama: 'Masjid Baitussalam',
        desc: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        contact: '08123435345'
    },
    {
        img: process.env.REACT_APP_PUBLIC_URL + '/images/fasilitas/SDN-Klampok.png',
        nama: 'Sekolah Dasar Negeri Klampok',
        desc: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        contact: '08123435345'
    },
    {
        img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
        nama: 'Lapangan Voli Gumbeng',
        desc: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        contact: '08123435345'
    },
    {
        img: 'https://flowbite.com/docs/images/blog/image-4.jpg',
        nama: 'PAUD (Pendidikan Anak Usia Dini) Gumbeng',
        desc: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        contact: '08123435345'
    },
]

function UMKMList() {
    return (
        <section className='py-32'>
            <div className='max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
                {
                    listUMKM.map((UMKM, index) => (
                        <Card key={index} className='shadow-transparent' horizontal={true} imgSrc={UMKM.img}>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                                {UMKM.nama}
                            </h5>
                            <p className="font-normal text-gray-600 dark:text-gray-400">
                                {UMKM.desc}
                            </p>
                            <p className="font-normal text-gray-600 dark:text-gray-400">
                                {UMKM.contact}
                            </p>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}

export default UMKMList