"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='absolute top-0 left-0 w-full z-10 flex items-center justify-between lg:px-32 py-4 font-guru lg:text-lg text-lg border-b-2 border-white px-4 text-white'>
            <Link href={"/"}>
                <div className="flex items-center space-x-10">
                    <h1 className="sm:text-5xl text-3xl font-bold">APART</h1>
                </div>
            </Link>

            {/* Menú de navegación en escritorio */}
            <div className="hidden md:flex items-center sm:space-x-28">
                <a href="#" className="hover:text-gray-400 flex items-center space-x-4">
                    <span>Misión</span>
                </a>
                <a href="#" className="hover:text-gray-400 flex items-center space-x-4">
                    <span>Historia</span>
                </a>
                <a href="#" className="hover:text-gray-400 flex items-center space-x-1">
                    <span>Contacto</span>
                </a>
            </div>
            {/* Botón de hamburguesa */}
            <div className="md:hidden flex items-center">
                <button
                    className="text-3xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    &#9776;
                </button>
            </div>
            {/* Menú móvil */}
            {isMenuOpen && (
                <div
                className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg flex justify-start items-start px-8 pt-6 transition-opacity duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
            >
                <div
                    className="bg-transparent text-white flex flex-col space-y-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between">
                        <Link href={"/"}>
                            <h1 className="sm:text-5xl text-3xl font-bold">APART</h1>
                        </Link>
                        <button className="text-3xl" onClick={() => setIsMenuOpen(false)}>
                            ✕
                        </button>
                    </div>
                    <div className="flex flex-col space-y-2 text-[#656565]">
                        <a href="#" className="hover:text-gray-400">Misión</a>
                        <a href="#" className="hover:text-gray-400">Historia</a>
                        <a href="#" className="hover:text-gray-400">Contacto</a>
                    </div>
                </div>
            </div>
            )}
        </nav>

    );
};



