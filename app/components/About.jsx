'use client';
import { useTranslation } from "react-i18next";
import Image from 'next/image';

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <section
            id="about" 
            className="py-20 px-4 relative">
            <h1 className="text-4xl font-bold text-center mb-12">{t('about.title')}</h1>

            {/* Timeline Container */}
            <div className="relative max-w-5xl mx-auto flex flex-col items-center">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600 hidden md:block"></div>

                {/* Our Story Section */}
                <div className="relative flex flex-col md:flex-row items-center mb-16 w-full">
                    {/* Title for Mobile (Above) */}
                    <div className="md:hidden text-center mb-4">
                        <h2 className="text-lg font-semibold text-green-700">{t('about.story_title')}</h2>
                        <div className="w-16 h-1 bg-green-600 mx-auto mt-1"></div>
                    </div>

                    {/* Title Line (Desktop Only) */}
                    <div className="absolute -left-28 top-1/2 transform -translate-y-1/2 hidden md:block">
                        <div className="w-24 h-1 bg-green-600"></div>
                        <h2 className="mt-2 text-lg font-semibold text-green-700">{t('about.story_title')}</h2>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 p-8 md:pl-20 text-center md:text-left">
                        <p className="text-lg text-gray-600">{t('about.story_description')}</p>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src="/background-image.jpg"
                            alt="Our Story"
                            width={600}
                            height={400}
                            className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Our Mission & Goal Section */}
                <div className="relative flex flex-col md:flex-row-reverse items-center mb-16 w-full">
                    {/* Title for Mobile (Above) */}
                    <div className="md:hidden text-center mb-4">
                        <h2 className="text-lg font-semibold text-green-700">{t('about.mission_title')}</h2>
                        <div className="w-16 h-1 bg-green-600 mx-auto mt-1"></div>
                    </div>

                    {/* Title Line (Desktop Only) */}
                    <div className="absolute -right-28 top-1/2 transform -translate-y-1/2 hidden md:block">
                        <div className="w-24 h-1 bg-green-600"></div>
                        <h2 className="mt-2 text-lg font-semibold text-green-700">{t('about.mission_title')}</h2>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 p-8 md:pr-20 text-center md:text-left">
                        <p className="text-lg text-gray-600">{t('about.mission_description')}</p>
                        <p className="text-lg font-semibold text-green-700 mt-4">{t('about.goal_title')}</p>
                        <p className="text-lg text-gray-600">{t('about.goal_description')}</p>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src="/background-image.jpg"
                            alt="Our Mission"
                            width={600}
                            height={400}
                            className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
