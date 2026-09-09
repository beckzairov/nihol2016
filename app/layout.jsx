import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MotionProvider from "./components/MotionProvider";
import "./globals.css";
import "../i18n";
export const metadata = {
  title: {
    default: "Nihol 2016 — Agricultural solutions in Tajikistan",
    template: "%s | Nihol 2016",
  },
  description:
    "Seeds, growing substrates, nutrition and irrigation solutions. Nihol connects growers across Tajikistan with international manufacturers since 2016.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
