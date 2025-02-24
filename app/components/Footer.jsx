'use client';
import { FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Section 1: Heading */}
                <div>
                    <h1 className="text-8xl font-thin">Nihol</h1>
                    <h1 className="text-8xl font-thin">2016</h1>
                    {/* <p className="mt-4 text-gray-400">
                        Cultivating the future of sustainable farming.
                    </p> */}
                </div>

                {/* Section 2: Quick Links */}
                <div>
                    {/* <h2 className="text-xl font-semibold mb-4">Quick Links</h2> */}
                    <ul className="space-y-8">
                        <li><Link href="/" className="hover:text-green-400">Home</Link></li>
                        <li><Link href="/about" className="hover:text-green-400">About Us</Link></li>
                        <li><Link href="/products" className="hover:text-green-400">Products</Link></li>
                        <li><Link href="/contact" className="hover:text-green-400">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Section 3: Social Media & Back to Top */}
                <div className="flex flex-col items-end">
                    {/* <h2 className="text-xl font-semibold mb-4">Follow Us</h2> */}
                    <div className="flex space-x-4">
                        {/* Social Media Icons */}
                        <Link href="https://facebook.com" target="_blank" className="group">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-white group-hover:bg-white transition">
                                <FaFacebook className="h-6 w-6 text-white group-hover:text-black" />
                            </div>
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="group">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-white group-hover:bg-white transition">
                                <FaTwitter className="h-6 w-6 text-white group-hover:text-black" />
                            </div>
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="group">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-white group-hover:bg-white transition">
                                <FaInstagram className="h-6 w-6 text-white group-hover:text-black" />
                            </div>
                        </Link>
                    </div>

                    {/* Back to Top Button */}
                    <div className="mt-32 flex items-center space-x-4">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition mr-4"
                        >
                            Back to Top
                        </button>

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-16 h-16 flex items-center justify-center rounded-full border border-white hover:bg-white transition"
                        >
                            <FaArrowUp className="text-white hover:text-black" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t border-gray-700 mt-10"></div>

            {/* Copyright Section */}
            <div className="container mx-auto px-6 flex justify-between text-gray-400 mt-6">
                <p>© {currentYear} Nihol. All rights reserved.</p> 
                <Link href="/privacy-policy" className="hover:text-green-400">Privacy Policy</Link>
            </div>
        </footer>
    );
}
