import React from "react";

const featuredThings = [
  {
    icon: process.env.REACT_APP_PUBLIC_URL + "/images/featured/bersih rapi.png",
    title: "Bersih dan Asri",
    desc: "Masyarakat selalu menjaga kebersihan daerah, dengan selalu membuang sampah pada tempatnya dan kerja bakti membersihkan lingkungan",
  },
  {
    icon: process.env.REACT_APP_PUBLIC_URL + "/images/featured/budaya.png",
    title: "Desa Budaya",
    desc: "Menjadi bagian dari daerah Semanu yang menjadi Daerah Budaya sehingga senantiasa menjaga kelestarian budaya daerah",
  },
  {
    icon: process.env.REACT_APP_PUBLIC_URL + "/images/featured/ramah.png",
    title: "Ramah dan Sopan",
    desc: "Warga selalu menyambut pandatang dengan baik, selalu mengutamakan kesopanan dalam kehidupan bersosial",
  },
];

function FeaturedThings() {
  return (
    <>
      <section className="bg-emerald-50/50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 pt-32 pb-24 flex flex-col items-center">
          {/* <div className='text-center'>
                        <h4 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'> <span className='text-emerald-600'>Dukuh Kuwon Lor</span></h4>
                        <p className='text-gray-600 mb-14'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur reiciendis placeat recusandae</p>
                    </div> */}
          <div className="flex flex-col sm:flex-row gap-4">
            {featuredThings.map((thing, index) => (
              <div
                key={index}
                className="flex flex-col mx-auto items-center p-5 max-w-sm"
              >
                <div className="mb-9">
                  <img
                    className="mx-auto"
                    width="320"
                    src={thing.icon}
                    alt="icon"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="text-center text-2xl font-bold">
                    {thing.title}
                  </h5>
                  <p className="text-center text-base text-slate-400">
                    {thing.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedThings;
