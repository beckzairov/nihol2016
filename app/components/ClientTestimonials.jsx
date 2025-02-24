'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaRegStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'; // Modern arrow-like icons

const testimonials = [
    { id: 1, name: 'John Doe', image: '/profiles/john.jpg', rating: 5, feedback: '“The best agricultural products I’ve ever used! Highly recommended for anyone looking for sustainable solutions.”' },
    { id: 2, name: 'Jane Smith', image: '/profiles/jane.jpg', rating: 4, feedback: '“Excellent customer service and timely delivery. Highly recommended!”' },
    { id: 3, name: 'Robert Brown', image: '/profiles/robert.jpg', rating: 5, feedback: '“Great value for money and very reliable products. Will buy again!”' },
    { id: 4, name: 'Emily Johnson', image: '/profiles/emily.jpg', rating: 4, feedback: '“Fantastic experience with precision agriculture solutions! Already recommended to my colleagues.”' },
    { id: 5, name: 'Michael Lee', image: '/profiles/michael.jpg', rating: 5, feedback: '“Outstanding products and services! Truly a game-changer in agriculture.”' },
    { id: 6, name: 'Sarah Williams', image: '/profiles/sarah.jpg', rating: 4, feedback: '“Very satisfied with the quality and service provided. Will definitely recommend!”' },
];

export default function ClientTestimonials() {
    const [current, setCurrent] = useState(0);
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const nextTestimonial = () => {
        if (current < testimonials.length - 1) {
            setCurrent((prev) => prev + 1);
        }
    };

    const prevTestimonial = () => {
        if (current > 0) {
            setCurrent((prev) => prev - 1);
        }
    };

    const renderStars = (rating) =>
        Array.from({ length: 5 }, (_, index) =>
            index < rating ? (
                <FaStar key={index} className="text-orange-400" />
            ) : (
                <FaRegStar key={index} className="text-black" />
            )
        );

    const truncateText = (text, id) =>
        text.length <= 500 || expanded[id] ? text : text.slice(0, 500) + '...';

    return (
        <section className="py-20">
            <h2 className="text-4xl font-normal text-center mb-10">What Our <span className="font-thin underline decoration-from-font italic">Clients</span> Say</h2>

            <div className="relative bg-cover bg-center py-16 px-4 sm:px-8" style={{ backgroundImage: "url('/background-image.jpg')" }}>
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-[500px] flex justify-center items-center">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => {
                                const position = (index - current + testimonials.length) % testimonials.length;
                                let scale, marginTop, zIndex, opacity;

                                switch (position) {
                                    case 0: // Top card (active)
                                        scale = 1;
                                        marginTop = 'mt-0';
                                        zIndex = 30;
                                        opacity = 1;
                                        break;
                                    case 1: // 2nd card
                                        scale = 0.9;
                                        marginTop = 'mt-16';
                                        zIndex = 20;
                                        opacity = 0.9;
                                        break;
                                    case 2: // 3rd card
                                        scale = 0.8;
                                        marginTop = 'mt-32';
                                        zIndex = 10;
                                        opacity = 0.8;
                                        break;
                                    default: // Other cards (hidden)
                                        scale = 0.6;
                                        marginTop = 'mt-48';
                                        zIndex = 0;
                                        opacity = 0;
                                }

                                return (
                                    <motion.div
                                        key={testimonial.id}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale, opacity }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className={`absolute w-full max-w-xl h-[400px] p-6 rounded-2xl ${marginTop}`}
                                        style={{ zIndex }}
                                    >
                                        <div className="bg-white p-8 rounded-xl h-full overflow-hidden relative">
                                            {/* Profile Image and Stars */}
                                            <div className="flex justify-between items-center mb-4">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 rounded-full border-4 border-white"
                                                />
                                                <div className="flex">{renderStars(testimonial.rating)}</div>
                                            </div>

                                            {/* Feedback Text */}
                                            <p className="text-lg text-gray-700 italic mb-4">
                                                {truncateText(testimonial.feedback, testimonial.id)}
                                            </p>

                                            {testimonial.feedback.length > 500 && (
                                                <button
                                                    onClick={() => toggleReadMore(testimonial.id)}
                                                    className="text-blue-600 hover:underline text-sm"
                                                >
                                                    {expanded[testimonial.id] ? 'Read Less' : 'Read More'}
                                                </button>
                                            )}

                                            {/* Client Name (Only for top card) */}
                                            {position === 0 && (
                                                <p className="absolute bottom-4 right-4 font-semibold text-gray-800">
                                                    {testimonial.name}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>

                        {/* Mobile Navigation Arrows inside Background */}
                    </div>
                </div>
                <div className="absolute inset-0 z-50 flex justify-between items-center  sm:hidden">
                    <button
                        onClick={prevTestimonial}
                        disabled={current === 0}
                        className={`p-2 ${current === 0 ? 'opacity-40 cursor-not-allowed' : 'text-white'}`}
                    >
                        <HiChevronLeft className="w-10 h-10" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        disabled={current === testimonials.length - 1}
                        className={`p-2 ${current === testimonials.length - 1 ? 'opacity-40 cursor-not-allowed' : 'text-white'}`}
                    >
                        <HiChevronRight className="w-10 h-10" />
                    </button>
                </div>
            </div>

            {/* Desktop Navigation and Progress Bar */}
            <div className="hidden sm:flex flex-col md:flex-row justify-center items-center mt-10 space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex space-x-4">
                    {/* Backward Button */}
                    <button
                        onClick={prevTestimonial}
                        disabled={current === 0}
                        className={`w-12 h-12 flex items-center justify-center border-2 rounded-full transition ${
                            current === 0 ? 'border-gray-400 text-gray-400 cursor-not-allowed' : 'border-gray-700 hover:bg-gray-700 hover:text-white'
                        }`}
                    >
                        <FaArrowLeft />
                    </button>

                    {/* Forward Button */}
                    <button
                        onClick={nextTestimonial}
                        disabled={current === testimonials.length - 1}
                        className={`w-12 h-12 flex items-center justify-center border-2 rounded-full transition ${
                            current === testimonials.length - 1
                                ? 'border-gray-400 text-gray-400 cursor-not-allowed'
                                : 'border-gray-700 hover:bg-gray-700 hover:text-white'
                        }`}
                    >
                        <FaArrowRight />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="relative w-full md:w-3/4 h-1 bg-gray-300 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
                        className="h-full bg-gray-700"
                    />
                </div>
            </div>
        </section>
    );
}
