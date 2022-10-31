import React from 'react'

function Hero() {
    return (
        <section
            className="relative bg-[url(https://disk.mediaindonesia.com/thumbs/1800x1200/news/2021/12/99b98291f8f8960bd653c93b542c3336.jpg)] bg-cover bg-center bg-no-repeat h-[360px]"
        >
            <div
                className="absolute inset-0 bg-black/60 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/60 sm:to-black/20"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:items-center lg:px-8"
            >
                <div className="max-w-4xl text-center sm:text-left text-white">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Struktur Pemerintahan
                        <strong className="block font-extrabold text-emerald-600">
                        Dukuh Gumbeng
                        </strong>
                    </h1>

                    <p className="mt-6 max-w-xl sm:text-xl sm:leading-relaxed text-white/80">
                        Kamu bisa melihat informasi mengenai aparat-aparat yang menjabat di Dukuh Gumbeng.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero