import React from "react";
import PetaKuwon from "../../../assets/images/peta kuwon.png";

function DemografiDaerah() {
  return (
    <>
      <section className="">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 pt-24 pb-24 flex flex-col">
          <div className="">
            <h4 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Demografi Daerah
            </h4>
            <p className="text-gray-600 mb-14">
              Informasi daerah dan perbatasan Dukuh Kuwon Lor
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <img src="" alt="" />
            {/* <iframe
              title="Peta Dukuh Kuwon Lor"
              className="rounded-lg sm:w-1/3 h-80 sm:h-auto"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36089.084877200345!2d110.40811841858437!3d-8.05461941428922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ba943a03fecad%3A0x2e2021e92c436631!2sGumbeng%2C%20Pacarejo%2C%20Semanu%2C%20Gunung%20Kidul%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e1!3m2!1sen!2sid!4v1667212029989!5m2!1sen!2sid"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <img
              className="rounded-lg sm:w-1/3 h-80 sm:h-auto"
              src={PetaKuwon}
              alt=""
              style={{ border: 0 }}
            />

            <div className="sm:w-2/3 flex flex-col gap-4">
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <div className="w-24 bg-emerald-600 flex justify-center items-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="py-4 px-6">
                  <h6 className="text-lg sm:text-xl font-medium text-gray-600 mb-1">
                    Luas Wilayah
                  </h6>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-600">
                    25.7428 Ha
                  </p>
                </div>
              </div>
              {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5"> */}
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <div className="w-24 bg-emerald-600 flex justify-center items-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                    />
                  </svg>
                </div>
                <div className="py-4 px-6">
                  <h6 className="text-lg sm:text-xl font-medium text-gray-600 mb-1">
                    Batas Utara
                  </h6>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-600">
                    Dukuh Wilayu
                  </p>
                </div>
              </div>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <div className="w-24 bg-emerald-600 flex justify-center items-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="py-4 px-6">
                  <h6 className="text-lg sm:text-xl font-medium text-gray-600 mb-1">
                    Batas Timur
                  </h6>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-600">
                    Kwangen Lor
                  </p>
                </div>
              </div>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <div className="w-24 bg-emerald-600 flex justify-center items-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                    />
                  </svg>
                </div>
                <div className="py-4 px-6">
                  <h6 className="text-lg sm:text-xl font-medium text-gray-600 mb-1">
                    Batas Selatan
                  </h6>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-600">
                    Cempluk dan Kuwon Tengah
                  </p>
                </div>
              </div>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <div className="w-24 bg-emerald-600 flex justify-center items-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                    />
                  </svg>
                </div>
                <div className="py-4 px-6">
                  <h6 className="text-lg sm:text-xl font-medium text-gray-600 mb-1">
                    Batas Barat
                  </h6>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-600">
                    Dukuh Kuwon Tengah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default DemografiDaerah;
