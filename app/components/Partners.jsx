'use client';
import { motion } from 'framer-motion';

const logos = [
    '/partners/hazera-low.svg',
    '/partners/hazera-low.svg',
    '/partners/hazera-low.svg',
    '/partners/hazera-low.svg',
    '/partners/hazera-low.svg',
    '/partners/hazera-low.svg',
    '/partners/hazera-low.svg',
    '/partners/hazera-low.svg',
    '/partners/hazera-low.svg',
    '/partners/hazera-low.svg',
];

export default function Partners() {
    return (
        <section className="py-24 bg-gray-100 relative">
            <div className="container mx-auto text-center mb-6">
                <h2 className="text-4xl font-medium text-[#474747]">Our Partners</h2>
                {/* <p className="text-gray-600 text-xl mt-2">Trusted by leading brands in agriculture and sustainability.</p> */}
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
