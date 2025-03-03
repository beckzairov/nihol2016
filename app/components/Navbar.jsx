"use client";
import { usePathname } from 'next/navigation'; // Import usePathname for active links
import LanguageSwitcher from "./LanguageSwitcher";
import Link from 'next/link';

export default function Navbar() {
    const pathname = usePathname(); // Get the current route

    const handleScroll = (event, sectionId) => {
        event.preventDefault(); // Prevent full page reload

        if (pathname !== "/") {
            // Redirect to home and then scroll
            window.location.href = `/#${sectionId}`;
        } else {
            // Scroll smoothly to section if already on home page
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav className="text-white fixed top-0 left-0 right-0 z-50 bg-green-700 shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    <img src="/nihol.svg" alt="logo" className="h-12" />
                </Link>

                {/* Navbar Links */}
                <ul className="flex items-center space-x-6">
                    {/* Show "Home" link only if NOT on Home Page */}
                    {pathname !== "/" && (
                        <li>
                            <Link href="/" className="hover:text-blue-500 transition">
                                Home
                            </Link>
                        </li>
                    )}

                    <li>
                        <Link
                            href="/products"
                            className={`transition ${
                                pathname === "/products" ? "text-yellow-400 font-semibold" : "hover:text-blue-500"
                            }`}
                        >
                            Products
                        </Link>
                    </li>

                    <li>
                        {/* Use handleScroll for smooth navigation */}
                        <a
                            href="/#contact"
                            onClick={(e) => handleScroll(e, "contact")}
                            className="hover:text-blue-500 transition cursor-pointer"
                        >
                            Contact
                        </a>
                    </li>

                    <li>
                        <LanguageSwitcher />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
