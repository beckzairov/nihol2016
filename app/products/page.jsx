'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Products() {
    const products = [
        { id: 1, name: 'Organic Tomatoes', image: '/products/tomato.png', price: '$3/kg' },
        { id: 2, name: 'Fresh Carrots', image: '/products/carrots.png', price: '$2/kg' },
        { id: 3, name: 'Golden Corn', image: '/products/corn.png', price: '$4/kg' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 pt-20 py-10"> {/* Added pt-20 for navbar height */}
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-between items-center mb-8"
                >
                    <h1 className="text-4xl font-bold text-green-700">Our Products</h1>
                    <Link href="/" className="text-green-600 hover:underline">← Back to Home</Link>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                                <p className="text-green-600 mt-2">{product.price}</p>
                                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-500 transition">
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
