import React from 'react'

const dataPejabat = [
    {
        nama: "Bapak Suparmin",
        foto: process.env.REACT_APP_PUBLIC_URL + '/images/pemerintahan/Dukuh Suparmin.webp',
        jabatan: "Kepala Dukuh"
    },
    {
        nama: "Bapak Sarjiman",
        foto: process.env.REACT_APP_PUBLIC_URL + '/images/pemerintahan/RW Sarjiman.webp',
        jabatan: "Ketua RW"
    },
    {
        nama: "Bapak Harjo Sudarno",
        foto: process.env.REACT_APP_PUBLIC_URL + '/images/pemerintahan/RT 01 Harjo Sudarno.webp',
        jabatan: "Ketua RT.01"
    },
    {
        nama: "Bapak Sutarjo",
        foto: process.env.REACT_APP_PUBLIC_URL + '/images/pemerintahan/RT 02 Sutarjo.webp',
        jabatan: "Ketua RT.02"
    },
    {
        nama: "Bapak Kardiman",
        foto: process.env.REACT_APP_PUBLIC_URL + '/images/pemerintahan/RT 03 Kardiman.webp',
        jabatan: "Ketua RT.03"
    },
    {
        nama: "Bapak Karyono",
        foto: process.env.REACT_APP_PUBLIC_URL + '/images/pemerintahan/RT 04 Karyono.webp',
        jabatan: "Ketua RT.04"
    },
    {
        nama: "Bapak Mugiyo",
        foto: process.env.REACT_APP_PUBLIC_URL + '/images/pemerintahan/RT 05 Mugiyo.webp',
        jabatan: "Ketua RT.05"
    },
    {
        nama: "Bapak Sarpono",
        foto: process.env.REACT_APP_PUBLIC_URL + '/images/pemerintahan/RT 06 Sarpono.webp',
        jabatan: "Ketua RT.06"
    },
    {
        nama: "Bapak Suwardi",
        foto: process.env.REACT_APP_PUBLIC_URL + '/images/pemerintahan/RT 07 Suwardi.webp',
        jabatan: "Ketua RT.07"
    },
    {
        nama: "Bapak Parjiman",
        foto: process.env.REACT_APP_PUBLIC_URL + '/images/pemerintahan/RT 08 Parjiman.webp',
        jabatan: "Ketua RT.08"
    },
]

function ListPejabat() {
    return (
        <div className='py-32'>
            <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                {
                    // console.log(dataPejabat)
                    dataPejabat.map((pejabat, index) => (
                        <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
                            <img className="w-full" src={pejabat.foto} alt="Mountain" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{pejabat.nama}</div>
                                <p className="text-gray-600 text-base">
                                    {pejabat.jabatan}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default ListPejabat