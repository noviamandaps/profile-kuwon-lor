import { Card } from "flowbite-react";
import React from "react";

const listUMKM = [
  {
    img: process.env.REACT_APP_PUBLIC_URL + "/images/umkm/umkm_peyek.PNG",
    nama: "Peyek Kacang & Kedelai",
    desc: "Usaha ini menyediakan Peyek dengan kualitas yang baik dan selalu fresh. Peyek Bu Watini terdiri dari 2 produk, yaitu peyek kedelai dan peyek kacang.",
    contact: "087839098504",
    pemilik: "Ibu Watini",
    harga: "2500",
  },
  {
    img: process.env.REACT_APP_PUBLIC_URL + "/images/umkm/umkm_robak.PNG",
    nama: "Roti Bakar",
    desc: "Menyediakan roti bakar dengan berbagai rasa yang sedap dan nikmat. Usaha ini dapat menerima pesanan untuk berbagai acara.",
    contact: "089518095381",
    pemilik: "Bu Sumaryati",
    harga: "10.000 - 20.000",
  },
  {
    img: process.env.REACT_APP_PUBLIC_URL + "/images/umkm/umkm_tampah.PNG",
    nama: "Kerajinan Tambir",
    desc: "Kerajinan bambu bapak Sandung sangat terjamin kualitasnya. Dibuat dari bahan-bahan berkualitas dan selalu dibuat dengan tangan sehingga memiliki daya saing tinggi",
    contact: "Tidak tersedia",
    pemilik: "Bpk Sandung",
    harga: "5.000 - 7.000",
  },
];

function UMKMList() {
  return (
    <section className="py-24">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
        {listUMKM.map((UMKM, index) => (
          <Card
            key={index}
            className="shadow-transparent"
            horizontal={true}
            imgSrc={UMKM.img}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
              {UMKM.nama}
            </h5>
            <p className="font-normal text-gray-600 dark:text-gray-400">
              {UMKM.desc}
            </p>
            <p className="font-normal text-gray-600 dark:text-gray-400">
              HP : {UMKM.contact}
            </p>
            <p className="font-normal text-gray-600 dark:text-gray-400">
              Pemilik : {UMKM.pemilik}
            </p>
            <p className="font-normal text-gray-600 dark:text-gray-400">
              Harga : Rp{UMKM.harga}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default UMKMList;
