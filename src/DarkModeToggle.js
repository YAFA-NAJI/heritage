// src/DarkModeToggle.js
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function DarkModeToggle() {
  const { t } = useTranslation();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-4 px-3 py-1 rounded-full bg-amber-300 text-sky-900 font-semibold hover:bg-amber-400 transition"
      aria-label={darkMode ? t('darkMode.lightMode') : t('darkMode.darkMode')}
    >
      {darkMode ? '☀️ ' + t('darkMode.light') : '🌙 ' + t('darkMode.dark')}
    </button>
  );
}
