'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'; // Modern arrows

const our_partners = [
    { id: 1, name: 'Hazera', logo: '/partners/hazera.svg', description: 'A leader in vegetable breeding, providing high-quality seeds worldwide.' },
    { id: 2, name: 'Enza Zaden', logo: '/partners/enza.svg', description: 'Innovating seed solutions to enhance global food security.' },
    { id: 3, name: 'Fitó', logo: '/partners/fit6.svg', description: 'Specializing in crop improvement with cutting-edge agricultural solutions.' },
    { id: 4, name: 'Dutch Plantin', logo: '/partners/dutch-plantin.svg', description: 'Sustainable cocopeat solutions for modern agriculture.' },
    { id: 5, name: 'Meristem', logo: '/partners/meristem.svg', description: 'Enhancing soil and plant health through innovative products.' },
    { id: 6, name: 'Pipelife', logo: '/partners/pipelife.svg', description: 'A global provider of sustainable piping systems.' },
];

export default function OurPartners() {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);

    const nextPartner = () => {
        if (current < our_partners.length - 1) setCurrent((prev) => prev + 1);
    };

    const prevPartner = () => {
        if (current > 0) setCurrent((prev) => prev - 1);
    };

    return (
        <section className="py-20">
            <h2 className="text-4xl font-normal text-center mb-10">
                {t('our_partners.heading_prefix')} <span className="font-thin underline decoration-from-font italic">{t('our_partners.heading_italic')}</span> {t('our_partners.heading_suffix')}
            </h2>

            <div className="relative bg-cover bg-center py-16 px-4 sm:px-8" style={{ backgroundImage: "url('/background-image.jpg')" }}>
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-[500px] flex justify-center items-center">
                        <AnimatePresence>
                            {our_partners.map((partner, index) => {
                                const position = (index - current + our_partners.length) % our_partners.length;
                                let scale, marginTop, zIndex, opacity;

                                switch (position) {
                                    case 0: 
                                        scale = 1;
                                        marginTop = 'mt-0';
                                        zIndex = 30;
                                        opacity = 1;
                                        break;
                                    case 1: 
                                        scale = 0.9;
                                        marginTop = 'mt-16';
                                        zIndex = 20;
                                        opacity = 0.9;
                                        break;
                                    case 2: 
                                        scale = 0.8;
                                        marginTop = 'mt-32';
                                        zIndex = 10;
                                        opacity = 0.8;
                                        break;
                                    default: 
                                        scale = 0.6;
                                        marginTop = 'mt-48';
                                        zIndex = 0;
                                        opacity = 0;
                                }

                                return (
                                    <motion.div
                                        key={partner.id}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale, opacity }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className={`absolute w-full max-w-xl h-[400px] p-6 rounded-2xl ${marginTop}`}
                                        style={{ zIndex }}
                                    >
                                        <div className="bg-white p-8 rounded-xl h-full overflow-hidden relative shadow-lg">
                                            {/* Partner Logo */}
                                            <div className="flex justify-center items-center mb-6">
                                                <img
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    className="w-28 h-28 rounded-full border-4 border-white shadow-md bg-gray-200 p-2 object-contain"
                                                />
                                            </div>

                                            {/* Partner Info */}
                                            <p className="text-lg text-gray-700 italic text-center mb-4">
                                                {t(`our_partners.${partner.name}`)}
                                            </p>

                                            {/* Partner Name (Only for top card) */}
                                            {position === 0 && (
                                                <p className="absolute bottom-4 right-4 font-semibold text-gray-800">
                                                    {partner.name}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Navigation Arrows inside Background */}
                <div className="absolute inset-0 z-50 flex justify-between items-center sm:hidden">
                    <button
                        onClick={prevPartner}
                        disabled={current === 0}
                        className={`p-2 ${current === 0 ? 'opacity-40 cursor-not-allowed' : 'text-white'}`}
                    >
                        <HiChevronLeft className="w-10 h-10" />
                    </button>

                    <button
                        onClick={nextPartner}
                        disabled={current === our_partners.length - 1}
                        className={`p-2 ${current === our_partners.length - 1 ? 'opacity-40 cursor-not-allowed' : 'text-white'}`}
                    >
                        <HiChevronRight className="w-10 h-10" />
                    </button>
                </div>
            </div>

            {/* Desktop Navigation and Progress Bar */}
            <div className="hidden sm:flex flex-col md:flex-row justify-center items-center mt-10 space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex space-x-4">
                    <button
                        onClick={prevPartner}
                        disabled={current === 0}
                        className={`w-12 h-12 flex items-center justify-center border-2 rounded-full transition ${
                            current === 0 ? 'border-gray-400 text-gray-400 cursor-not-allowed' : 'border-gray-700 hover:bg-gray-700 hover:text-white'
                        }`}
                    >
                        <FaArrowLeft />
                    </button>

                    <button
                        onClick={nextPartner}
                        disabled={current === our_partners.length - 1}
                        className={`w-12 h-12 flex items-center justify-center border-2 rounded-full transition ${
                            current === our_partners.length - 1
                                ? 'border-gray-400 text-gray-400 cursor-not-allowed'
                                : 'border-gray-700 hover:bg-gray-700 hover:text-white'
                        }`}
                    >
                        <FaArrowRight />
                    </button>
                </div>

                <div className="relative w-full md:w-3/4 h-1 bg-gray-300 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((current + 1) / our_partners.length) * 100}%` }}
                        className="h-full bg-gray-700"
                    />
                </div>
            </div>
        </section>
    );
}
