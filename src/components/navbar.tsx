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
                <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 sm:hidden">
                    <a href="#" className="hover:text-gray-400">Misión</a>
                    <a href="#" className="hover:text-gray-400">Historia</a>
                    <a href="#" className="hover:text-gray-400">Contacto</a>
                </div>
            )}
        </nav>

    );
};

