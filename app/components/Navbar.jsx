import LanguageSwitcher from "./LanguageSwitcher";
import Link from 'next/link';

// app/components/Navbar.js
export default function Navbar() {
    return (
      <nav className="text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="text-xl font-bold">
            <img
                                    src="/nihol.svg"
                                    alt="logo"
                                    className="h-12"
                                />
          </Link>
          <ul className="flex items-center space-x-6">
            <li><Link href="#about" className="hover:text-blue-500 transition">About</Link></li>
            <li><Link href="/products" className="hover:text-blue-500 transition">Products</Link></li>
            <li><Link href="#contact" className="hover:text-blue-500 transition">Contact</Link></li>
            <li>
                <LanguageSwitcher/>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  
  