import React from "react";
import { Link } from "react-router-dom";
import FotoBersama from "../../../assets/images/foto bersama.png";

function History() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-2/5 rounded-lg overflow-hidden border border-gray-200">
        <img
          className="object-cover h-72 w-full"
          src="/images/foto bersama.png"
          alt="Gambar Dukuh Kuwon Lor"
        />
      </div>
      <div className="md:w-3/5">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 animate-fade-left">
          Sejarah Singkat
        </h3>
        <p className="text-gray-600 mb-14">novi cantik</p>
        <Link
          className="btn bg-emerald-600 hover:bg-emerald-700 text-white"
          to={"/sejarah"}
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
}

export default History;
