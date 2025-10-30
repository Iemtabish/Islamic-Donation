export const menuConfig = {
  // Main navigation items
  mainNav: [
    {
      id: 1,
      label: "Home",
      path: "/",
      type: "link"
    },
    {
      id: 2,
      label: "Shop",
      path: "#",
      type: "dropdown",
      categories: [
        {
          id: 'shop-cat-1',
          title: "Shop By Category",
          items: [
            { id: 21, label: "Picture Books", path: "/category/picture-books" },
            { id: 22, label: "Islamic Curriculum", path: "/category/islamic-curriculum" },
            { id: 23, label: "Qur'ān Curriculum", path: "/category/quran-curriculum" }
          ]
        },
        {
          id: 'shop-cat-2',
          title: "Browse All",
          items: [
            { id: 24, label: "Kisa Publications", path: "/publisher/kisa-publications" },
            { id: 25, label: "Kisa Kids", path: "/publisher/kisa-kids" }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "Learning Hub",
      path: "#",
      type: "dropdown",
      categories: [
        {
          id: 'learning-cat-1',
          title: "Curriculum",
          items: [
            { id: 31, label: "Islamic Curriculum", path: "/free/islamic-curriculum" },
            { id: 32, label: "Exploring Our Dīn! (Pre-K)", path: "/free/exploring-din" },
            { id: 33, label: "Teacher Guides (K-6)", path: "/free/teacher-guides" },
            { id: 34, label: "Student Textbooks (K-6)", path: "/free/student-textbooks" },
            { id: 35, label: "Student Workbooks (K-6)", path: "/free/student-workbooks" },
            { id: 36, label: "Grades 7-12 (Pilot)", path: "/free/grades-7-12" },
            { id: 37, label: "Supplemental Resources", path: "/free/supplemental" },
            { id: 38, label: "Qur'ān Curriculum", path: "/free/quran-curriculum" },
            { id: 39, label: "Qur'ān Memorization", path: "/free/quran-memorization" },
            { id: 310, label: "Qur'ān Appreciation", path: "/free/quran-appreciation" },
            { id: 311, label: "Qur'ān Quest Project", path: "/free/quran-quest" }
          ]
        },
        {
          id: 'learning-cat-2',
          title: "Project Booklets",
          items: [
            { id: 312, label: "Muharram", path: "/free/muharram" },
            { id: 313, label: "Arba'īn", path: "/free/arbain" },
            { id: 314, label: "Mīlādun Nabī", path: "/free/miladun-nabi" },
            { id: 315, label: "Sayyidah Fāṭimah", path: "/free/sayyidah-fatimah" },
            { id: 316, label: "Spiritual Season", path: "/free/spiritual-season" },
            { id: 317, label: "Shahr Ramaḍān", path: "/free/shahr-ramadan" },
            { id: 318, label: "Al-Karāmah", path: "/free/al-karamah" },
            { id: 319, label: "Ḥajj & Wilāyah", path: "/free/hajj-wilayah" }
          ]
        },
        {
          id: 'learning-cat-3',
          title: "Creative Studies",
          items: [
            { id: 320, label: "Elementary Theater Arts Program", path: "/free/elementary-theater" },
            { id: 321, label: "Visual Arts Curriculum", path: "/free/visual-arts" }
          ]
        },
        {
          id: 'learning-cat-4',
          title: "More Resources",
          items: [
            { id: 322, label: "Activity & Coloring Books", path: "/free/activity-coloring" },
            { id: 323, label: "Posters", path: "/free/posters" },
            { id: 324, label: "Graphic Novels & Pamphlets", path: "/free/graphic-novels" },
            { id: 325, label: "Bālighā Resources", path: "/free/baligha-resources" },
            { id: 326, label: "Islamic Calendar", path: "/free/islamic-calendar" },
            { id: 327, label: "Eid Resources", path: "/free/eid-resources" },
            { id: 328, label: "Sīrat Link", path: "/free/sirat-link" },
            { id: 329, label: "Informational Pamphlets", path: "/free/informational-pamphlets" },
            { id: 330, label: "Clear Guidance", path: "/free/clear-guidance" },
            { id: 331, label: "Plays", path: "/free/plays" },
            { id: 332, label: "Kisa Family Resources", path: "/free/kisa-family" }
          ]
        },
        {
          id: 'learning-cat-5',
          title: "Multilingual",
          items: [
            { id: 333, label: "Danish", path: "/free/danish" },
            { id: 334, label: "French", path: "/free/french" },
            { id: 335, label: "German", path: "/free/german" },
            { id: 336, label: "Norwegian", path: "/free/norwegian" },
            { id: 337, label: "Spanish", path: "/free/spanish" },
            { id: 338, label: "Swedish", path: "/free/swedish" },
            { id: 339, label: "Urdu", path: "/free/urdu" }
          ]
        }
      ]
    },
    {
      id: 4,
      label: "Outreach",
      path: "/outreach",
      type: "link"
    },
    // ✨ NEW DONATE LINK ADDED HERE ✨
    {
      id: 5,
      label: "Donate",
      path: "/donations",
      type: "link"
    },
    {
      id: 6,
      label: "Centers",
      path: "/centers",
      type: "link"
    },
    {
      id: 7,
      label: "Contact",
      path: "/contact",
      type: "link"
    }
  ]
};

export default menuConfig;
