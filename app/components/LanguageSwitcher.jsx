"use client"; // Ensure this runs on the client side

import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n"; // Import i18n only here

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Store languages & flag icons
  const languages = [
    { code: "ru", label: "Russian", flag: "/icons/ru.png" },
    { code: "en", label: "English", flag: "/icons/en.png" },
  ];

  // Get current language
  const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[1];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block z-40">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2  px-4 py-2"
      >
        <img src={currentLang.flag} alt={currentLang.label} className="w-6 h-6" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32  border rounded-md shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center w-full px-3 py-2 hover:bg-gray-100"
            >
              <img src={lang.flag} alt={lang.label} className="w-6 h-6 mr-2" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
