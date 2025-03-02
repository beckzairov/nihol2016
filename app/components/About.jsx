'use client';
import { useTranslation } from "react-i18next";
import Image from 'next/image';

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-4 relative">
            <h1 className="text-4xl font-bold text-center mb-12">{t('about.title')}</h1>

            {/* Timeline Container */}
            <div className="relative max-w-5xl mx-auto flex flex-col items-center">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600"></div>

                {/* Our Story Section (Right) */}
                <div className="relative flex md:flex-row flex-col items-center mb-16 w-full">
                    {/* Title Line on the Left */}
                    <div className="absolute -left-28 top-1/2 transform -translate-y-1/2 hidden md:block">
                        <div className="w-24 h-1 bg-green-600"></div>
                        <h2 className="mt-2 text-lg font-semibold text-green-700">{t('about.story_title')}</h2>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 p-8 md:pl-20">
                        <p className="text-lg text-gray-600">{t('about.story_description')}</p>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/background-image.jpg"
                            alt="Our Story"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Our Mission & Goal Section (Left) */}
                <div className="relative flex md:flex-row-reverse flex-col items-center mb-16 w-full">
                    {/* Title Line on the Right */}
                    <div className="absolute -right-28 top-1/2 transform -translate-y-1/2 hidden md:block">
                        <div className="w-24 h-1 bg-green-600"></div>
                        <h2 className="mt-2 text-lg font-semibold text-green-700">{t('about.mission_title')}</h2>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 p-8 md:pr-20">
                        <p className="text-lg text-gray-600">{t('about.mission_description')}</p>
                        <p className="text-lg font-semibold text-green-700 mt-4">{t('about.goal_title')}</p>
                        <p className="text-lg text-gray-600">{t('about.goal_description')}</p>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/background-image.jpg"
                            alt="Our Mission"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
