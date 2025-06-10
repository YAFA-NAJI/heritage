import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-sky-700 text-white py-4 shadow-md fixed w-full z-50 top-0">
      <div className="max-w-6xl mx-auto px-4">
        {/* الصف العلوي للعنوان وأيقونة القائمة */}
        <div className="flex justify-between items-center">
          {/* عنوان الموقع */}
          <a href="#home" className="text-2xl font-bold hover:text-yellow-300">
            {t('navbar.title')}
          </a>

          {/* أيقونة الهامبرغر للجوال */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* عناصر الكمبيوتر (الوضع الليلي + اللغة) */}
          <div className="hidden md:flex items-center gap-4">
            <DarkModeToggle />
            <button
              onClick={toggleLanguage}
              className="border border-yellow-300 rounded px-3 py-1 text-sm hover:bg-yellow-300 hover:text-sky-700 transition"
              aria-label="Toggle Language"
            >
              {i18n.language === 'ar' ? 'EN' : 'ع'}
            </button>
          </div>
        </div>

        {/* قائمة الجوال (تظهر عند فتح القائمة) */}
        <div
          className={`md:flex md:flex-row md:justify-between md:items-center ${
            isMenuOpen ? 'block' : 'hidden'
          } mt-4 md:mt-0 transition-all duration-300`}
        >
          {/* الروابط */}
          <div className="flex flex-col md:flex-row-reverse gap-4 text-lg mb-4 md:mb-0">
            <a href="#home" className="hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>
              {t('navbar.home')}
            </a>
            <a href="#about" className="hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>
              {t('navbar.about')}
            </a>
            <a href="#contact" className="hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>
              {t('navbar.contact')}
            </a>
          </div>

          {/* روابط التواصل الاجتماعي + الوضع الليلي + اللغة (للجوال) */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-xl">
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaInstagram />
              </a>
            </div>
            <div className="md:hidden flex flex-col gap-4">
              <DarkModeToggle />
              <button
                onClick={toggleLanguage}
                className="border border-yellow-300 rounded px-3 py-1 text-sm hover:bg-yellow-300 hover:text-sky-700 transition w-max"
                aria-label="Toggle Language"
              >
                {i18n.language === 'ar' ? 'EN' : 'ع'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
