import React from 'react'

const featuredThings = [
    {
        icon: 'https://img2.pngdownload.id/20180511/xje/kisspng-culture-of-indonesia-provinces-of-indonesia-wayang-5af5a465d91850.1630966415260478458892.jpg',
        title: 'Desa Budaya',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration'
    },
    {
        icon: 'https://img2.pngdownload.id/20180511/xje/kisspng-culture-of-indonesia-provinces-of-indonesia-wayang-5af5a465d91850.1630966415260478458892.jpg',
        title: 'Desa Budaya',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration'
    },
    {
        icon: 'https://img2.pngdownload.id/20180511/xje/kisspng-culture-of-indonesia-provinces-of-indonesia-wayang-5af5a465d91850.1630966415260478458892.jpg',
        title: 'Desa Budaya',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration'
    },
]

function FeaturedThings() {
    return (
        <>
            <section className='bg-emerald-50/50'>
                <div className='max-w-screen-xl mx-auto px-6 lg:px-8 pt-32 pb-24 flex flex-col items-center'>
                    {/* <div className='text-center'>
                        <h4 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'> <span className='text-emerald-600'>Dukuh Gumbeng</span></h4>
                        <p className='text-gray-600 mb-14'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur reiciendis placeat recusandae</p>
                    </div> */}
                    <div className='flex flex-col sm:flex-row gap-4'>
                        {
                            featuredThings.map((thing, index) => (
                                <div key={index} className='flex flex-col mx-auto items-center p-5'>
                                    <div className='mb-9'>
                                        <img className='mx-auto' src={thing.icon} alt="icon" />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <h5 className='text-center text-2xl font-bold'>{thing.title}</h5>
                                        <p className='text-center text-base text-slate-400'>{thing.desc}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>

    )
}

export default FeaturedThings