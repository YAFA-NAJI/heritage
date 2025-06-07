// src/Home.js
import React, { useState } from 'react';
import { getHeritageItems } from './data';
import HeritageItem from './HeritageItem';
import './Home.css';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  const heritageItems = getHeritageItems(i18n.language || 'ar');
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (id) => {
    setSelectedItemId(prevId => (prevId === id ? null : id));
  };

  const itemsCount = heritageItems.length;
  const [showVideo, setShowVideo] = useState(false);


  return (
    <div className="pt-24 scroll-smooth bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* الرئيسية */}
      <section id="home" className="min-h-screen px-4 pb-16">
        <div className="max-w-6xl mx-auto">

          {/* العنوان الرئيسي */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sky-800 dark:text-amber-400 mb-4 relative inline-block">
              <span className="relative z-10">{t('home.title')}</span>
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-amber-300 z-0 opacity-70"></span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">{t('home.subtitle')}</p>
          </div>

          {/* نبذة عن المشروع */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12 transition-all">
            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-sky-700 dark:text-amber-400">
                  <span className="border-b-4 border-amber-400 pb-2">{t('home.aboutProjectTitle')}</span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {t('home.aboutProjectDesc')}
                </p>
                <div className="bg-amber-100 dark:bg-amber-800/30 p-4 rounded-lg border-l-4 border-amber-500">
                  <p className="font-medium text-amber-800 dark:text-amber-300">
                    {t('home.itemsCount', { count: itemsCount })}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://photography.ps/wp-content/uploads/2023/06/%D9%85%D9%81%D8%AA%D8%A7%D8%AD-%D8%A7%D9%84%D9%86%D9%83%D8%A8%D8%A9.jpg" 
                  alt={t('home.imageAlt')}
                  className="w-full h-auto rounded-xl shadow-lg object-cover transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* الرؤية والمنهج */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border-t-4 border-sky-500 dark:border-sky-300 transition-all">
              <h3 className="text-2xl font-bold text-sky-700 dark:text-amber-400 mb-4">{t('home.visionTitle')}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t('home.visionDesc')}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border-t-4 border-amber-500 dark:border-yellow-300 transition-all">
              <h3 className="text-2xl font-bold text-sky-700 dark:text-amber-400 mb-4">{t('home.methodTitle')}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t('home.methodDesc')}
              </p>
            </div>
          </div>

          {/* العناصر التراثية */}
          <section id="about" className="bg-gradient-to-b from-amber-50 to-sky-50 dark:from-gray-800 dark:to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <header className="mb-16 text-center">
              <h1 className="text-4xl font-bold text-sky-700 dark:text-amber-400">
                {t('home.heritageItemsTitle')}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto">
                {t('home.heritageItemsDesc')}
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {heritageItems.map((item) => (
                <div key={item.id}>
                  <div 
                    onClick={() => handleItemClick(item.id)} 
                    className="cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg"
                    role="button"
                    tabIndex={0}
                    aria-expanded={selectedItemId === item.id}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleItemClick(item.id); }}
                  >
                    <HeritageItem item={item} />
                  </div>
                  {selectedItemId === item.id && (
                    <p className="mt-2 text-gray-700 dark:text-gray-300 px-4 py-2 bg-white/70 dark:bg-gray-800/60 rounded-lg shadow-sm transition-all duration-300">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* لماذا التراث مهم؟ */}
          <section className="py-20 px-4 bg-white dark:bg-gray-900 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-sky-800 dark:text-amber-400 mb-6">{t('home.whyHeritageTitle')}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {t('home.whyHeritageDesc')}
            </p>
          </section>

      {/* تواصل معنا */}
<section id="contact" className="py-20 px-4 text-center max-w-3xl mx-auto">
  <h2 className="text-3xl font-semibold text-sky-700 dark:text-amber-400 mb-4">{t('home.contactTitle')}</h2>
  <p className="text-gray-700 dark:text-gray-300 text-lg">
    {t('home.contactDesc')}  
    <span className="text-sky-700 dark:text-yellow-300 font-bold"> heritage@palestine.ps</span>
  </p>
</section>

     {/* الموقع الجغرافي */} 
          <section id="location" className="py-20 px-4 text-center max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-sky-700 dark:text-amber-400 mb-6">{t('home.mapTitle') || 'الموقع على الخريطة'}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              {t('home.mapDesc') || 'نحن متواجدون في قلب فلسطين. يمكنك زيارة الموقع الجغرافي أدناه:'}
            </p>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <iframe
                title="Palestine Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d861203.8942658832!2d34.59910566448713!3d31.946570220663714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d1c4411d8c3d%3A0x5e58ffdc226145b4!2sPalestine!5e0!3m2!1sen!2s!4v1717070000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

{/* قصة شعبية */}
<section id="folktale" className="py-20 px-4 text-center max-w-6xl mx-auto">
  <h2 className="text-3xl font-semibold text-sky-700 dark:text-amber-400 mb-6">
    {t('home.folktaleTitle') || 'قصة شعبية'}
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
    {t('home.folktaleDesc') || 'استمع إلى واحدة من أجمل القصص الشعبية الفلسطينية.'}
  </p>

  <button
    onClick={() => setShowVideo(prev => !prev)}
    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
  >
    {showVideo
      ? t('home.hideVideo') || 'إخفاء الفيديو'
      : t('home.watchVideo') || 'اضغط هنا لمشاهدة القصة الشعبية'}
  </button>

  {showVideo && (
    <div className="mt-8">
 <iframe
  src="https://drive.google.com/file/d/1jl-BWkwgahpZdhl-Xvy7bdsse-Z305MC/preview"
  width="100%"
  height="480"
  allow="autoplay"
  allowFullScreen
  title="folktale-video"
  className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
/>


    </div>
  )}
</section>


          {/* مساعد التراث الفلسطيني */}
          <section id="chatbot" className="py-20 px-4 text-center max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-sky-700 dark:text-amber-400 mb-6">
              مساعد التراث الفلسطيني
            </h2>
            <div className="rounded-xl overflow-hidden shadow-xl" style={{ maxWidth: "100%", margin: "0 auto" }}>
              <iframe
                src="https://yafa1234-palestinianheritagebot.hf.space/"
                frameBorder="0"
                width="100%"
                height="600"
                title="مساعد التراث الفلسطيني"
                className="w-full"
              ></iframe>
            </div>
          </section>




          {/* الفوتر */}
          <footer className="mt-16 text-center text-gray-400 text-sm pb-6">
            © {new Date().getFullYear()} Virtual Heritage. {t('home.rightsReserved')}
          </footer>
        </div>
      </section>
    </div>
  );
}
