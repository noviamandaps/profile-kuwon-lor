import React from "react";

function Hero() {
  return (
    <section className="relative bg-[url(https://disk.mediaindonesia.com/thumbs/1800x1200/news/2021/12/99b98291f8f8960bd653c93b542c3336.jpg)] bg-cover bg-center bg-no-repeat h-[360px]">
      <div className="absolute inset-0 bg-black/60 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/60 sm:to-black/20"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-4xl text-center sm:text-left text-white">
          <h1 className="text-4xl font-extrabold sm:text-4xl lg:text-5xl">
            Informasi Fasilitas Umum di
            <strong className="block font-extrabold text-emerald-600">
              Dukuh Kuwon Lor
            </strong>
          </h1>

          <p className="mt-6 max-w-xl sm:text-xl sm:leading-relaxed text-white/80">
            Kamu bisa melihat informasi mengenai berbagai fasilitas umum yang
            ada di Dukuh Kuwon Lor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
