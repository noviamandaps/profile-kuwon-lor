import { Card } from "flowbite-react";
import React from "react";

const listFasilitas = [
  {
    img: process.env.REACT_APP_PUBLIC_URL + "/images/fasilitas/balai.PNG",
    nama: "Balai Padukuhan Kuwon Lor",
    desc: `Balai padukuhan adalah tempat yang sering dipakai untuk pertemuan warga dan berbagai acara lainnya, bangunan balai ini terletak berdampingan dengan PAUD Tunas Harapan.`,
  },
  {
    img: process.env.REACT_APP_PUBLIC_URL + "/images/fasilitas/masjid.PNG",
    nama: "Masjid At Taubah",
    desc: `Merupakan satu-satunya masjid di dukuh ini, memiliki serambi yang lumayan luas yang kadang juga dipakai sebagai alternatif untuk pertemuan warga. Ada beberapa kegiatan yang sering diakan seperti TPA.`,
  },

  {
    img: process.env.REACT_APP_PUBLIC_URL + "/images/fasilitas/voli.PNG",
    nama: "Lapangan Voli Kuwon Lor",
    desc: `Lapangan ini terletak di tempat yang strategis karena bberada di samping jalan utama, sering kali saat musim kemarau menjadi tempat diadakannya pertandingan Bola Voli antar Kelurahan.`,
  },
  {
    img: process.env.REACT_APP_PUBLIC_URL + "/images/fasilitas/PAUD.PNG",
    nama: "PAUD (Pendidikan Anak Usia Dini) Kuwon Lor",
    desc: `Menjadi tempat belajar pertama untuk anak-anak Dukuh Kuwon Lor ini, terkadang juga menjadi tempat untuk mereka bermain karena tempat ini terbuka untuk umum.`,
  },
  {
    img: process.env.REACT_APP_PUBLIC_URL + "/images/fasilitas/TK.PNG",
    nama: "TK ABA",
    desc: `TK ABA adalah tempat belajar pertama bagi anak-anak Dukuh Kuwon Lor. Selain sebagai tempat belajar, TK ini juga menjadi tempat untuk mereka bermain, dan terbuka untuk umum. Kami berkomitmen untuk memberikan pendidikan yang berkualitas dan lingkungan yang aman bagi anak-anak kami.`,
  },
  {
    img: process.env.REACT_APP_PUBLIC_URL + "/images/fasilitas/Puskesmas.PNG",
    nama: "Puskemas Pembantu",
    desc: `Puskesmas Pembantu adalah fasilitas kesehatan yang melayani Dukuh Kuwon Lor bersampingan dengan TK ABA. Selain menjadi tempat untuk mendapatkan perawatan medis, Puskesmas ini juga terbuka untuk umum. Kami berkomitmen untuk memberikan pelayanan kesehatan yang terbaik bagi masyarakat.`,
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
