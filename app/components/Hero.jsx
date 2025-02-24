'use client';
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/farmfield.png')" }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center items-end text-left px-4 sm:px-8"
            >
                <div className="text-left">
                    <h1 className="text-5xl font-extrabold text-white sm:text-4xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                        {t('hero.title', 'Harvest the Best of Nature')}
                    </h1>

                    <p className="mt-4 text-lg text-white max-w-2xl">
                        {t('hero.description', 'Bringing you fresh, organic, and sustainable agricultural products from our farms to your table.')}
                    </p>
                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            className="px-8 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-500 transition-all hover:scale-110">
                            {t('hero.freeTrial', 'Get Started')}
                        </button>

                        <button
                            className="px-8 py-3 border border-white text-white rounded-full shadow-lg hover:bg-white hover:text-green-600 transition-all hover:scale-110"
                        >
                            {t('hero.seeMore', 'See Products')}
                        </button>
                    </div>
                </div>

            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            >
                <a href="#about" className="text-white text-sm">↓ Scroll Down</a>
            </motion.div>
        </section>
    );
}
