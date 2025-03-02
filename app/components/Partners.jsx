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
            <div className="container mx-auto text-center mb-6">
                <h2 className="text-4xl font-bold text-gray-900">{t('partners.title')}</h2>
                <p className="text-gray-600 mt-2">{t('partners.description')}</p>
            </div>

            <div className="relative overflow-hidden">
                {/* Left Wall (only on larger screens) */}
               
                {/* Scrolling Logo Carousel */}
                <div className="relative mx-auto max-w-7xl overflow-hidden">
                    <motion.div
                        className="flex items-center space-x-10"
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{
                            repeat: Infinity,
                            ease: 'linear',
                            duration: 10,
                        }}
                    >
                        {/* Logos */}
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt={`Partner ${index + 1}`}
                                    className="h-48 w-auto max-w-[200px] object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
