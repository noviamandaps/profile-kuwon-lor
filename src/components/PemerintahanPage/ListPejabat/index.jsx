import React from 'react'

const dataPejabat = [
    {
        nama: "Pak Budi Harjo",
        foto: "https://source.unsplash.com/random/350x350",
        jabatan: "Kepala Dukuh"
    },
    {
        nama: "Pak Sarwono",
        foto: "https://source.unsplash.com/random/350x350",
        jabatan: "Ketua RW"
    },
    {
        nama: "Pak Budi Harjo",
        foto: "https://source.unsplash.com/random/350x350",
        jabatan: "Ketua RT 1"
    },
    {
        nama: "Pak Budi Harjo",
        foto: "https://source.unsplash.com/random/350x350",
        jabatan: "Ketua RT 2"
    },
    {
        nama: "Pak Budi Harjo",
        foto: "https://source.unsplash.com/random/350x350",
        jabatan: "Ketua RT 3"
    },
    {
        nama: "Pak Budi Harjo",
        foto: "https://source.unsplash.com/random/350x350",
        jabatan: "Ketua RT 4"
    },
    {
        nama: "Pak Budi Harjo",
        foto: "https://source.unsplash.com/random/350x350",
        jabatan: "Ketua RT 5"
    },
    {
        nama: "Pak Budi Harjo",
        foto: "https://source.unsplash.com/random/350x350",
        jabatan: "Ketua RT 6"
    },
    {
        nama: "Pak Budi Harjo",
        foto: "https://source.unsplash.com/random/350x350",
        jabatan: "Ketua RT 7"
    },
    {
        nama: "Pak Budi Harjo",
        foto: "https://source.unsplash.com/random/350x350",
        jabatan: "Ketua RT 8"
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