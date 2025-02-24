// import { notFound } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import './globals.css';
import "../i18n";
import Footer from './components/Footer';


export default async function LocaleLayout({ children }) {

  return (
    <html>
      <body>
          <Navbar />
          {children}
          <Footer/>
      </body>
    </html>
  );
}
