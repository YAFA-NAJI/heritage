// src/data.js
export const getHeritageItems = (lang = 'ar') => {
  if (lang === 'en') {
    return [
      {
        id: 1,
        name: "Palestinian Dress",
        image: "https://www.noonpost.com/wp-content/uploads/2018/02/palestina-jpg.webp",
        description: "The traditional embroidered dress with its bright colors and distinctive designs that differ from region to region."
      },
      {
        id: 2,
        name: "Dabke",
        image: "https://al-vefagh.net/wp-content/uploads/2023/05/CiaXlKkXIAAlbHy.jpg",
        description: "A popular dance expressing unity and joy, performed at weddings and national events."
      },
      {
        id: 3,
        name: "Palestinian Maftoul",
        image: "https://i.pinimg.com/736x/50/09/51/500951fe22b6b5fc4523bb9e81aeabfe.jpg",
        description: "A traditional Palestinian couscous dish prepared with broth and vegetables."
      },
      {
        id: 4,
        name: "Palestinian Embroidery",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVZfeY8Ts40CLnf1QRqUeAkMocMcByZ6hHQ&s",
        description: "An ancient handicraft decorating clothes and covers with symbols that express Palestinian identity."
      },
      {
        id: 5,
        name: "Olive Tree",
        image: "https://www.aljazeera.net/wp-content/uploads/2024/08/oliv1-1725023387.jpg?resize=1920%2C1440",
        description: "The olive tree is a symbol of resilience and Palestinian agricultural heritage for thousands of years."
      },
      {
        id: 6,
        name: "Palestinian Headgear (Keffiyeh and Agal)",
        image: "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1850,c_scale,q_auto/cnnarabic/2023/11/29/images/255823.jpg",
        description: "The traditional head covering that has become a symbol of national identity."
      },
      {
        id: 7,
        name: "Musakhan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLY2yR9-hMrL6Bk7NOONcgGEFf5-lVUzoWEQNHDRP_cWPnDeSRreoZZRcsE5D-RG5tjE&usqp=CAU",
        description: "A dish of roasted chicken with onions, olive oil, and spices served on taboon bread."
      },
      {
        id: 8,
        name: "Taboon Bread",
        image: "https://paltimeps.ps/uploads//images/d826dd7ceb30aa83dc346d18329f643f.jpg",
        description: "Bread baked in a traditional clay oven, served with olive oil and za’atar (Palestinian thyme)."
      },
      {
        id: 9,
        name: "Sickle (Harvesting Tool)",
        image: "https://ahwal.media/wp-content/uploads/2021/07/%D8%A7%D9%84%D8%AD%D8%B5%D8%A7%D8%AF-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D8%AC%D9%84-6.jpeg",
        description: "An agricultural tool used for harvesting wheat, linked to joyful harvest songs."
      },
    ];
  }

  // اللغة العربية (افتراضية)
  return [
    {
      id: 1,
      name: "الزي الفلسطيني",
      image: "https://www.noonpost.com/wp-content/uploads/2018/02/palestina-jpg.webp",
      description: "الزي التقليدي المطرز بألوانه الزاهية ورسوماته المميزة التي تختلف من منطقة لأخرى."
    },
    {
      id: 2,
      name: "الدبكة",
      image: "https://al-vefagh.net/wp-content/uploads/2023/05/CiaXlKkXIAAlbHy.jpg",
      description: "رقصة شعبية تعبر عن الوحدة والفرح، تؤدى في الأعراس والمناسبات الوطنية."
    },
    {
      id: 3,
      name: "المفتول الفلسطيني",
      image: "https://i.pinimg.com/736x/50/09/51/500951fe22b6b5fc4523bb9e81aeabfe.jpg",
      description: "طبق تقليدي من الكسكس الفلسطيني المحضر مع المرق والخضار."
    },
    {
      id: 4,
      name: "التطريز الفلسطيني",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVZfeY8Ts40CLnf1QRqUeAkMocMcByZ6hHQ&s",
      description: "فن يدوي عريق تُزين به الملابس والأغطية برموز تعبر عن الهوية الفلسطينية."
    },
    {
      id: 5,
      name: " الزيتون",
      image: "https://www.aljazeera.net/wp-content/uploads/2024/08/oliv1-1725023387.jpg?resize=1920%2C1440",
      description: "شجرة الزيتون رمز الصمود والتراث الزراعي الفلسطيني منذ آلاف السنين."
    },
    {
      id: 6,
      name: "القُبّعة الفلسطينية (الحطة والعقال)",
      image: "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1850,c_scale,q_auto/cnnarabic/2023/11/29/images/255823.jpg",
      description: "غطاء الرأس التقليدي الذي أصبح رمزًا للهوية الوطنية."
    },
    {
      id: 7,
      name: "المسخن الفلسطيني",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLY2yR9-hMrL6Bk7NOONcgGEFf5-lVUzoWEQNHDRP_cWPnDeSRreoZZRcsE5D-RG5tjE&usqp=CAU",
      description: "طبق الدجاج المشوي مع البصل وزيت الزيتون والبهارات على خبز طابون."
    },
    {
      id: 8,
      name: "خبز الطابون",
      image: "https://paltimeps.ps/uploads//images/d826dd7ceb30aa83dc346d18329f643f.jpg",
      description: "خبز يُخبز في فرن طيني تقليدي، يُقدّم مع الزيت والزعتر (الزعتر الفلسطيني)."
    },
    {
      id: 9,
      name: "المِنجل (أداة حصاد)",
      image: "https://ahwal.media/wp-content/uploads/2021/07/%D8%A7%D9%84%D8%AD%D8%B5%D8%A7%D8%AF-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D8%AC%D9%84-6.jpeg",
      description: "أداة زراعية تستخدم في حصاد القمح، مرتبطة بأغاني الفرح أثناء الحصاد."
    },
  ];
};
