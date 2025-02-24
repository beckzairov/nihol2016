'use client';
import { useState } from 'react';

export default function StayInformed() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubscribe = async () => {
        if (!email || !email.includes('@')) {
            setStatus('Please enter a valid email address.');
            return;
        }

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus('Thank you for subscribing! You will receive updates soon.');
                setEmail('');
            } else {
                setStatus('Failed to subscribe. Please try again later.');
            }
        } catch (error) {
            setStatus('Error occurred. Please try again.');
            console.error(error);
        }
    };

    return (
        <section
            className="relative py-80 bg-cover bg-center"
            style={{ backgroundImage: "url('/background-image.jpg')" }}
        >
            {/* Overlay for dimming effect */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
                {/* Heading and Paragraph Above the Card */}
                <div className="mb-24 max-w-3xl">
                    <h1 className="text-6xl font-regular text-white">Follow Precision Agriculture</h1>
                    <p className="text-2xl text-white mt-8">
                        Stay ahead with the latest product launches! Explore innovative ideas, fresh designs, and creative trends to fuel your inspiration.
                    </p>
                </div>

                {/* Outer Transparent Card */}
                <div className="bg-white/40 rounded-3xl p-12 max-w-2xl w-full">
                    {/* Inner Main Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-lg">
                        <h2 className="text-3xl font-bold text-[#154926] mb-4 text-left">Stay Informed!</h2>

                        {/* Email Input and Subscribe Button */}
                        <div className="flex items-center">
                            <div className="relative w-full max-w-xl">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full rounded-full py-3 px-4 text-gray-800 border border-gray-300 focus:outline-none"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    className="absolute top-0 right-0 h-full bg-green-600 text-white px-6 rounded-full hover:bg-green-500 transition"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Status Message */}
                        {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}
