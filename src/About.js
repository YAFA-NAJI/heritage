import React from 'react';
import { getHeritageItems } from './data';
import './About.css';

export default function About() {
  const heritageItems = getHeritageItems('ar');
  const itemsCount = heritageItems.length;

  return (
    <div className="about-container">
      <div className="about-wrapper">

        {/* العنوان الرئيسي */}
        <div className="about-title">
          <h1>كنز التراث الفلسطيني</h1>
          <p>إحياء الذاكرة.. حماية الهوية</p>
        </div>

        {/* بطاقة المحتوى الرئيسية */}
        <div className="about-main-card">
          <div className="content">
            <h2>عن المشروع</h2>
            <p>
              مشروعنا هو جهد وطني رقمي يهدف إلى توثيق وحفظ التراث الفلسطيني الغني من الاندثار، 
              نعمل على جمع وتصنيف وعرض عناصر تراثنا المادي وغير المادي بطريقة تفاعلية جذابة.
            </p>
          </div>
          <img 
            src="https://photography.ps/wp-content/uploads/2023/06/%D9%85%D9%81%D8%AA%D8%A7%D8%AD-%D8%A7%D9%84%D9%86%D9%83%D8%A8%D8%A9.jpg" 
            alt="تراث فلسطيني"
          />
        </div>

        {/* أقسام إضافية */}
        <div className="additional-sections">
          <div className="additional-card">
            <h3>رؤيتنا</h3>
            <p>
              أن نكون المنصة الرقمية الأشمل للتراث الفلسطيني، نساهم في الحفاظ على هويتنا 
              ونكون جسرًا بين الأجيال لنقل هذا الإرث العظيم.
            </p>
          </div>
          <div className="additional-card">
            <h3>طريقة العمل</h3>
            <p>
              نعتمد على مصادر موثوقة، مقابلات مع كبار السن، ومراجع أكاديمية. 
              كل مادة تمر بمراجعة دقيقة قبل نشرها.
            </p>
          </div>
        </div>

        {/* دعوة للعمل */}
        <div className="call-to-action">
          <h3>ساهم معنا في الحفاظ على التراث</h3>
          <p>هل تملك معلومات أو مواد تراثية؟ نرحب بمساهمتك لنشرها</p>
          <button className="cta-button">اتصل بنا</button>
        </div>
      </div>
    </div>
  );
}
