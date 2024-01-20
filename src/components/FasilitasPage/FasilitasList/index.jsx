import { Card } from "flowbite-react";
import React from "react";

const listFasilitas = [
  {
    img:
      process.env.REACT_APP_PUBLIC_URL + "/images/fasilitas/Balai Dukuh.webp",
    nama: "Balai Padukuhan Kuwon Lor",
    desc: `Balai padukuhan adalah tempat yang sering dipakai untuk pertemuan warga dan berbagai acara lainnya, bangunan balai ini terletak berdampingan dengan Masjid Baitussalam.`,
  },
  {
    img:
      process.env.REACT_APP_PUBLIC_URL +
      "/images/fasilitas/Masjid Baitussalam.webp",
    nama: "Masjid Baitussalam",
    desc: `Merupakan satu-satunya masjid di dukuh ini, memiliki serambi yang lumayan luas yang kadang juga dipakai sebagai alternatif untuk pertemuan warga. Ada beberapa kegiatan yang sering diakan seperti TPA dan juga latihan bermain Rabana.`,
  },
  {
    img:
      process.env.REACT_APP_PUBLIC_URL + "/images/fasilitas/SDN Klampok.webp",
    nama: "Sekolah Dasar Negeri Klampok",
    desc: `Meskipun namanya SDN Klampok tapi sebenarnya SD ini berada di Dukuh Kuwon Lor, para siswa rata-rata berasal dari dukuh Klampok dan Kuwon Lor, karena SD ini berada di antara 2 dukuh tersebut.`,
  },
  {
    img:
      process.env.REACT_APP_PUBLIC_URL + "/images/fasilitas/Lapangan Voli.webp",
    nama: "Lapangan Voli Kuwon Lor",
    desc: `Lapangan ini terletak di tempat yang strategis karena bberada di samping jalan utama, sering kali saat musim kemarau menjadi tempat diadakannya pertandingan Bola Voli antar Kelurahan.`,
  },
  {
    img: process.env.REACT_APP_PUBLIC_URL + "/images/fasilitas/PAUD.webp",
    nama: "PAUD (Pendidikan Anak Usia Dini) Kuwon Lor",
    desc: `Menjadi tempat belajar pertama untuk anak-anak Dukuh Kuwon Lor ini, terkadang juga menjadi tempat untuk mereka bermain karena tempat ini terbuka untuk umum.`,
  },
];

function FasilitasList() {
  return (
    <section className="py-24">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
        {listFasilitas.map((fasilitas, index) => (
          <Card
            key={index}
            className="shadow-transparent"
            horizontal={true}
            imgSrc={fasilitas.img}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
              {fasilitas.nama}
            </h5>
            <p className="font-normal text-gray-600 dark:text-gray-400">
              {fasilitas.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default FasilitasList;
