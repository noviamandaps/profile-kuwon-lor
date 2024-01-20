import React from "react";
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
import { galeriImages } from ".";

export function Gallery() {
  return (
    <section className="bg-emerald-50/50">
      {/* <div className="max-w-screen-xl mx-auto px-4 lg:px-8 pt-24 pb-24 flex flex-col items-center">
        <div className="text-center">
          <h4 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Kumpulan Foto{" "}
            <span className="text-emerald-600">Dukuh Kuwon Lor</span>
          </h4>
          <p className="text-gray-600 mb-14">
            Berisi foto-foto kegiatan keseharian ataupun foto daerah sekitar
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          {galeriImages.map((imageLink, index) => (
            <div key={index} className="flex-grow antialiased">
              <ModalImage
                small={imageLink}
                large={imageLink}
                alt="Hello World!"
                className="w-full h-96 object-cover object-center rounded-lg hover:grayscale hover:contrast-100 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>
        <Link
          className="btn bg-emerald-600 hover:bg-emerald-700 text-white mt-14"
          to={"/galeri"}
        >
          Tampilkan Lainnya
        </Link>
      </div> */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                  alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                Machined Mechanical Pencil
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
