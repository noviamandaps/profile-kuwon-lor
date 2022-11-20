import {React, useState} from 'react';

// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Link, Routes, useLocation} from 'react-router-dom';
import classNames from "classnames";
import LogoPurwosari from '../../assets/images/logogk.png'

export default function Navbar() {
  const location = useLocation();
  const [navbar, setNavbar] = useState(false);

  console.log(location.pathname)

  return (
    
    <nav className="w-full bg-white shadow sticky top-0 z-50">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to={"/"}>
                          <div className='flex gap-2 items-center'>
                            <img className='h-16' src={LogoPurwosari} alt="" />
                            <div className='flex flex-col'>
                              <h1 className='font-bold text-lg sm:text-xl text-gray-800'>DK. Gumbeng</h1>
                              <h2 className='text-gray-600 text-sm sm:text-base'>Kal. Giripurwo Kap. Purwosari</h2>
                            </div>
                          </div>
                            
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center pb-4 md:pb-0 space-y-8 md:flex md:space-x-6 md:space-y-0 text-gray-600">
                            <li className={classNames("hover:text-emerald-600", {"text-emerald-600": location.pathname === "/"})}>
                                <Link to={"/"}>Beranda</Link>
                            </li>
                            <li className={classNames("hover:text-emerald-600", {"text-emerald-600": location.pathname === "/pemerintahan"})}>
                                <Link to={"/pemerintahan"}>Pemerintahan</Link>
                            </li>
                            <li className={classNames("hover:text-emerald-600", {"text-emerald-600": location.pathname === "/infografis"})}>
                                <Link to={"/infografis"}>Infografis</Link>
                            </li>
                            {/* <li className={classNames("hover:text-emerald-600", {"text-emerald-600": location.pathname === "/umkm"})}>
                                <Link to={"/umkm"}>UMKM</Link>
                            </li> */}
                            <li className={classNames("hover:text-emerald-600", {"text-emerald-600": location.pathname === "/fasilitas"})}>
                                <Link to={"/fasilitas"}>Fasilitas</Link>
                            </li>
                            <li className={classNames("hover:text-emerald-600", {"text-emerald-600": location.pathname === "/galeri"})}>
                                <Link to={"/galeri"}>Galeri</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
