// src/Navbar.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  // دالة لتبديل اللغة بين العربية والإنجليزية
  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-sky-700 text-white py-4 shadow-md fixed w-full z-50 top-0">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

        {/* الروابط اليمنى */}
        <div className="flex flex-row-reverse gap-6 text-lg">
          <a href="#about" className="hover:text-yellow-300">{t('navbar.about')}</a>
          <a href="#home" className="hover:text-yellow-300">{t('navbar.home')}</a>
          <a href="#contact" className="hover:text-yellow-300">{t('navbar.contact')}</a>
        </div>

        {/* عنوان الموقع */}
        <a href="#home" className="text-2xl font-bold hover:text-yellow-300">
          {t('navbar.title')}
        </a>

        {/* روابط التواصل الاجتماعي + زر الوضع الليلي + زر تبديل اللغة */}
        <div className="hidden md:flex items-center gap-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaInstagram />
          </a>

          <DarkModeToggle />

          {/* زر تبديل اللغة */}
          <button
            onClick={toggleLanguage}
            className="border border-yellow-300 rounded px-3 py-1 text-sm hover:bg-yellow-300 hover:text-sky-700 transition"
            aria-label="Toggle Language"
          >
            {i18n.language === 'ar' ? 'EN' : 'ع'}
          </button>
        </div>
      </div>
    </nav>
  );
}
