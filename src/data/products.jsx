// All Products with Real Images from Al-Kisa Foundation
export const allProducts = [
  // Picture Books Category
  {
    id: 1,
    title: "110 Quranic Words",
    price: 550,
    image: "https://in.alkisafoundation.org/cdn/shop/products/Q110Words.jpg?v=1635872919&width=533",
    category: "Picture Books"
  },
  {
    id: 2,
    title: "Hayaa's Chador",
    price: 299,
    image: "https://in.alkisafoundation.org/cdn/shop/products/HayaasChador.png?v=1635871347&width=533",
    category: "Picture Books"
  },
  {
    id: 3,
    title: "Does He Remember Me?",
    price: 449,
    image: "https://in.alkisafoundation.org/cdn/shop/products/DoesHeRememberMe.png?v=1635871255&width=533",
    category: "Picture Books"
  },
  {
    id: 4,
    title: "Great Prophets Series",
    price: 899,
    image: "https://in.alkisafoundation.org/cdn/shop/products/9_board_book_set_mockup.png?v=1632255262&width=533",
    category: "Picture Books"
  },
  {
    id: 5,
    title: "Tales of the Last Messenger",
    price: 599,
    image: "https://in.alkisafoundation.org/cdn/shop/products/Najaf.jpg?v=1635873516&width=533",
    category: "Picture Books"
  },
  {
    id: 6,
    title: "Friends Of The Faithful",
    price: 399,
    image: "https://in.alkisafoundation.org/cdn/shop/products/FriendsOfTheFaithful.png?v=1635871441&width=533",
    category: "Picture Books"
  },

  // Islamic Curriculum Category
  {
    id: 7,
    title: "Kisa Keywords",
    price: 549,
    image: "https://in.alkisafoundation.org/cdn/shop/products/KisaKeywordsGame.jpg?v=1635873307&width=533",
    category: "Islamic Curriculum"
  },
  {
    id: 8,
    title: "Verses of Light Set",
    price: 799,
    image: "https://in.alkisafoundation.org/cdn/shop/products/VersesOfLightSet_6bb1b285-a0c5-44e0-b6cc-25e79ffd96ea.png?v=1657293221&width=533",
    category: "Islamic Curriculum"
  },
  {
    id: 9,
    title: "Let's Visit Najaf! 100 Piece Puzzle",
    price: 650,
    image: "https://in.alkisafoundation.org/cdn/shop/products/LetsVisitNajaf100PiecePuzzle.jpg?v=1635873482&width=533",
    category: "Islamic Curriculum"
  },

  // Quran Curriculum Category
  {
    id: 10,
    title: "Qur'ān Appreciation | Student Guide",
    price: 699,
    image: "https://in.alkisafoundation.org/cdn/shop/products/QuranAppreciation-StudentGuide.jpg?v=1635873946&width=533",
    category: "Quran Curriculum"
  },
  {
    id: 11,
    title: "Qur'ān Appreciation | Teacher Guide",
    price: 799,
    image: "https://in.alkisafoundation.org/cdn/shop/products/QuranAppreciation-TeacherGuide.jpg?v=1635873989&width=533",
    category: "Quran Curriculum"
  },
  {
    id: 12,
    title: "Quranic Arabic Basics Workbook",
    price: 599,
    image: "https://in.alkisafoundation.org/cdn/shop/products/QuranicArabicBasics.jpg?v=1635873920&width=533",
    category: "Quran Curriculum"
  },

  // Free Resources
  {
    id: 13,
    title: "Islamic Calendar 2025",
    price: 0,
    image: "https://in.alkisafoundation.org/cdn/shop/files/Al-KisaFoundationGenericWebCalendar.png?v=1733942266&width=1100",
    category: "Free Resources"
  },
  {
    id: 14,
    title: "Ayaam Fatimiyyah Banner",
    price: 0,
    image: "https://in.alkisafoundation.org/cdn/shop/files/AyaamFatimiyyahBanner.jpg?v=1635869887&width=533",
    category: "Free Resources"
  },
  
  // Days of Sayyidah Fatimah Products
  {
    id: 15,
    title: "The Days of Sayyidah Fatimah | Project Booklet 4",
    price: 0,
    image: "https://in.alkisafoundation.org/cdn/shop/files/The-Days-of-Sayyidah-Fatimah-Booklet4_c3556f1a-34c2-4b72-9850-c3f948bb147a.png?v=1761082360&width=533",
    category: "Days of Fatimah"
  },
  {
    id: 16,
    title: "The Days of Sayyidah Fatimah | Project Booklet 3",
    price: 0,
    image: "https://in.alkisafoundation.org/cdn/shop/files/TheDaysofSayyidahFatimah_ProjectBooklet3.png?v=1730825999&width=533",
    category: "Days of Fatimah"
  },
  {
    id: 17,
    title: "The Days of Sayyidah Fatimah | Project Booklet 2",
    price: 0,
    image: "https://in.alkisafoundation.org/cdn/shop/files/TheDaysofSayyidahFatimah_ProjectBooklet2.png?v=1701103530&width=533",
    category: "Days of Fatimah"
  },
  {
    id: 18,
    title: "The Days of Sayyidah Fatimah | Project Booklet 1",
    price: 0,
    image: "https://in.alkisafoundation.org/cdn/shop/files/DaysofSayyidahFatimahProjectBooklet1.webp?v=1730826364&width=533",
    category: "Days of Fatimah"
  },
  {
    id: 19,
    title: "Ziyārah of Sayyidah Fātimah (ʿa)",
    price: 0,
    image: "https://www.minhajbooks.com/images-books/thumbnails600/Life-of-Sayyida-Fatima-al-Zahra-R-A-Dr-Tahir-ul-Qadri_203.jpg",
    category: "Days of Fatimah"
  },
  {
    id: 20,
    title: "Days of Fatima Wiladah Bunting",
    price: 0,
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1447206837i/27796970.jpg",
    category: "Days of Fatimah"
  }
];

// Filter functions for different categories
export const getPictureBooks = () => {
  return allProducts.filter(product => product.category === "Picture Books");
};

export const getIslamicCurriculum = () => {
  return allProducts.filter(product => product.category === "Islamic Curriculum");
};

export const getQuranCurriculum = () => {
  return allProducts.filter(product => product.category === "Quran Curriculum");
};

export const getFreeResources = () => {
  return allProducts.filter(product => product.price === 0);
};

export const getDaysOfFatimah = () => {
  return allProducts.filter(product => product.category === "Days of Fatimah");
};

export const getNewReleases = () => {
  return allProducts.slice(0, 6); // First 6 products
};

// By Publisher
export const getKisaPublications = () => {
  return allProducts.filter(product => product.id <= 10);
};

export const getKisaKidsPublications = () => {
  return allProducts.filter(product => product.id > 10);
};
