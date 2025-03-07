'use client';

import Navbar from '@/app/components/Navbar';
import { useTranslation } from "react-i18next";
import Hero from '@/app/components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import StayInformed from './components/StayInformed';
import ImageGallery from './components/ImageGallery';
import OurPartners from './components/OurPartners';

export default function HomePage() {
  const { t } = useTranslation();
  
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <Hero/>
      <About/>
      <Partners/>
      {/* Features Section */}
      {/* <ImageGallery/> */}
      <OurPartners/>
      <StayInformed/>
    </div>
  );
}
