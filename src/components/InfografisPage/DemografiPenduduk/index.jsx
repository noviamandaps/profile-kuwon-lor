import React from 'react'
import ManImage from '../../../assets/images/man.svg'
import FemaleImage from '../../../assets/images/woman.svg'
import KartuKeluarga from '../../../assets/images/kk.png'

const dataPenduduk = {
    man: 310,
    female: 334,
    total: 644,
    jumlahKK: 188
}

function DemografiPenduduk() {
    return (
        <>
            <section className=''>
                <div className='max-w-screen-xl mx-auto px-6 lg:px-8 pt-32 flex flex-col'>
                    <div className=''>
                        <h4 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>Demografi Penduduk</h4>
                        <p className='text-gray-600 mb-14'>Data persebaran penduduk yang ada di Dusun Gumbeng</p>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-3'>
                        <div className='flex flex-col justify-center items-center flex-grow border border-gray-200 py-8 rounded-lg gap-5'>
                            <img className='w-32' src={KartuKeluarga} alt="" />
                            <div className='text-center'>
                                <h5 className='text-xl font-medium text-gray-600 mb-1'>Jumlah KK</h5>
                                <p className='text-2xl sm:text-3xl font-bold text-emerald-600'>{dataPenduduk.jumlahKK} KK</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center flex-grow border border-gray-200 py-8 rounded-lg gap-5 '>
                            <img className='w-28' src={ManImage} alt="" />
                            <div className='text-center'>
                                <h5 className='text-xl font-medium text-gray-600 mb-1'>Laki-Laki</h5>
                                <p className='text-2xl sm:text-3xl font-bold text-emerald-600'>{dataPenduduk.man} Orang</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center flex-grow border border-gray-200 py-8 rounded-lg gap-5'>
                            <img className='w-28' src={FemaleImage} alt="" />
                            <div className='text-center'>
                                <h5 className='text-xl font-medium text-gray-600 mb-1'>Perempuan</h5>
                                <p className='text-2xl sm:text-3xl font-bold text-emerald-600'>{dataPenduduk.female} Orang</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center flex-grow border border-gray-200 py-8 rounded-lg gap-5'>
                            <div className='flex gap-2 h-28'>
                                <img className='w-24' src={ManImage} alt="" />
                                <img className='w-24' src={FemaleImage} alt="" />
                            </div>
                            <div className='text-center'>
                                <h5 className='text-xl font-medium text-gray-600 mb-1'>Total</h5>
                                <p className='text-2xl sm:text-3xl font-bold text-emerald-600'>{dataPenduduk.total} Orang</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DemografiPenduduk