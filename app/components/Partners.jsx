'use client';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const logos = [
    '/partners/hazera.svg',
    '/partners/enza.svg',
    '/partners/fit6.svg',
    '/partners/dutch-plantin.svg',
    '/partners/meristem.svg',
    '/partners/pipelife.svg',
    '/partners/has.svg',
];

export default function Partners() {
    const { t } = useTranslation();

    return (
        <section className="py-10 bg-gray-100">
            {/* Section Title */}
            <div className="container mx-auto text-center mb-6 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('partners.title')}</h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">{t('partners.description')}</p>
            </div>

            {/* Logo Carousel Container */}
            <div className="relative overflow-hidden">
                <div className="relative mx-auto max-w-7xl px-4 md:px-8 overflow-hidden">
                    
                    {/* Motion Animation for Logos (Hidden on Mobile for Simplicity) */}
                    <motion.div
                        className="flex items-center space-x-8 md:space-x-12"
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{
                            repeat: Infinity,
                            ease: 'linear',
                            duration: 12,
                        }}
                    >
                        {/* Logos - Doubled for Seamless Scrolling */}
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt={`Partner ${index + 1}`}
                                    className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto max-w-[180px] md:max-w-[200px] object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
