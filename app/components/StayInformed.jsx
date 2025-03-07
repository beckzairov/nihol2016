'use client';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

export default function StayInformed() {
    const { t } = useTranslation(); // Get translations
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const botToken = "7593019411:AAHWT5fn8ruruO9WyIzvWEWCFfOMdL23i-0";  // Replace with your bot's token
    const chatId = "6005734526";      // Replace with your Telegram chat ID

    const handleSubscribe = async () => {
        if (!email || !email.includes('@')) {
            setStatus(t('stay_informed.invalid_email'));
            return;
        }

        try {
            // Send message to Telegram bot
            const message = `📩 *New Subscriber!* \n\n👤 Email: ${email}`;

            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: "Markdown", // Makes text bold
                }),
            });

            if (response.ok) {
                setStatus(t('stay_informed.success'));
                setEmail('');
            } else {
                setStatus(t('stay_informed.failure'));
            }
        } catch (error) {
            setStatus(t('stay_informed.error'));
            console.error("Error sending message:", error);
        }
    };

    return (
        <section
            id="contact"
            className="relative py-80 bg-cover bg-center"
            style={{ backgroundImage: "url('/background-image.jpg')" }}
        >
            {/* Overlay for dimming effect */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
                {/* Heading and Paragraph Above the Card */}
                <div className="mb-24 max-w-3xl">
                    <h1 className="text-6xl font-regular text-white">{t('stay_informed.title')}</h1>
                    <p className="text-2xl text-white mt-8">
                        {t('stay_informed.description')}
                    </p>
                </div>

                {/* Outer Transparent Card */}
                <div className="bg-white/40 rounded-3xl p-12 max-w-2xl w-full">
                    {/* Inner Main Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-lg">
                        <h2 className="text-3xl font-bold text-[#154926] mb-4 text-left">{t('stay_informed.subtitle')}</h2>

                        {/* Email Input and Subscribe Button */}
                        <div className="flex items-center">
                            <div className="relative w-full max-w-xl">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('stay_informed.placeholder')}
                                    className="w-full rounded-full py-3 px-4 text-gray-800 border border-gray-300 focus:outline-none"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    className="absolute top-0 right-0 h-full bg-green-600 text-white px-6 rounded-full hover:bg-green-500 transition"
                                >
                                    {t('stay_informed.subscribe')}
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
