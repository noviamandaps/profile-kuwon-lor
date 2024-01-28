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
          Selayang Pendang <br />
          KKN AB.80.078.GK
        </h3>
        <p className="text-gray-600 mb-14">
          Website ini dibuat oleh KKN AB.80.078.GK dari UPN Veteran Yogyakarta
          pada Januari 2024. Kami berkomitmen untuk memberikan informasi yang
          bermanfaat bagi semua orang. Dengan semangat inovasi dan dedikasi kami
          berharap dapat memberikan panduan, wawasan, dan inspirasi kepada
          masyarakat luas. Situs ini dirancang untuk memudahkan pencarian
          informasi yang relevan dengan tujuan untuk memberikan manfaat
          seoptimal mungkin bagi pengunjung. Kami yakin bahwa informasi yang
          kami sajikan akan memperkaya pengetahuan dan membantu semua orang
          mencapai tujuan mereka. Terima kasih telah mengunjungi situs kami, dan
          kami berharap Anda dapat merasakan manfaatnya.
        </p>
        {/* <Link
          className="btn bg-emerald-600 hover:bg-emerald-700 text-white"
          to={"/sejarah"}
        >
          Selengkapnya
        </Link> */}
      </div>
    </div>
  );
}

export default History;
