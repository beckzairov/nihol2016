'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: Branding */}
        <div>
          <h1 className="text-8xl font-thin">Nihol</h1>
          <h1 className="text-8xl font-thin">2016</h1>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">{t('footer.quick_links_title')}</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-green-400">
                {t('footer.home')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400">
                {t('footer.about_us')}
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-green-400">
                {t('footer.products')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400">
                {t('footer.contact')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Social & Back to Top */}
        <div className="flex flex-col md:items-center">
          <h2 className="text-xl font-semibold mb-4">{t('footer.follow_us')}</h2>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="group">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white group-hover:bg-white transition">
                <FaFacebook className="text-white group-hover:text-black" />
              </div>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="group">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white group-hover:bg-white transition">
                <FaTwitter className="text-white group-hover:text-black" />
              </div>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="group">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white group-hover:bg-white transition">
                <FaInstagram className="text-white group-hover:text-black" />
              </div>
            </Link>
          </div>

                    {/* Back to Top Button */}
                    <div className="mt-32 flex items-center space-x-4">
                        <button
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }
                            className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition"
                            >
                            {t('footer.back_to_top')}
                        </button>

                        <div className='group'>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="w-16 h-16 flex items-center justify-center rounded-full border border-white group-hover:bg-white transition"
                            >
                                <FaArrowUp className="text-white group-hover:text-black" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

      {/* Horizontal Divider */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 mt-6">
        © {currentYear} Agriculture Hub. {t('footer.rights')} | {t('footer.company_info')}
      </div>
    </footer>
    );
}
