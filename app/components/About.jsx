'use client';
import Image from 'next/image';
import {motion} from 'framer-motion';
export default function About() {
    return (
        <section className="py-20 px-4">
            <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

            {/* First Section: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-center mb-16">
                {/* Image (Left) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2"
                >
                    <Image
                        src="/farm.jpg"
                        alt="Our Story"
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Text (Right) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 p-8"
                >
                    <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                    <p className="text-lg text-gray-600">
                        Founded with a vision to revolutionize agriculture, our mission is to bring sustainable
                        solutions to farmers worldwide. Our innovative approach ensures higher yields while
                        preserving natural resources.
                        Founded with a vision to revolutionize agriculture, our mission is to bring sustainable
                        solutions to farmers worldwide. Our innovative approach ensures higher yields while
                        preserving natural resources.
                        Founded with a vision to revolutionize agriculture, our mission is to bring sustainable
                        solutions to farmers worldwide. Our innovative approach ensures higher yields while
                        preserving natural resources.
                        Founded with a vision to revolutionize agriculture, our mission is to bring sustainable
                        solutions to farmers worldwide. Our innovative approach ensures higher yields while
                        preserving natural resources.
                        Founded with a vision to revolutionize agriculture, our mission is to bring sustainable
                        solutions to farmers worldwide. Our innovative approach ensures higher yields while
                        preserving natural resources.
                        Founded with a vision to revolutionize agriculture, our mission is to bring sustainable
                        solutions to farmers worldwide. Our innovative approach ensures higher yields while
                        preserving natural resources.
                        Founded with a vision to revolutionize agriculture, our mission is to bring sustainable
                        solutions to farmers worldwide. Our innovative approach ensures higher yields while
                        preserving natural resources.
                    </p>
                </motion.div>
            </div>

            {/* Second Section: Text Left, Image Right */}
            <div className="flex flex-col-reverse md:flex-row items-center">
                {/* Text (Left) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 p-8"
                >
                        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-600">
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                            We strive to empower farmers with the latest technology and sustainable practices.
                            Our products are designed to enhance productivity while ensuring environmental safety.
                        </p>
                </motion.div>

                {/* Image (Right) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2"
                >
                    <Image
                        src="/farmers-working.jpg"
                        alt="Our Mission"
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
}
