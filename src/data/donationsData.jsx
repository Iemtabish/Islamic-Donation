// Islamic Relief & Donation Campaigns Data

export const donationCampaigns = [
  {
    id: 1,
    title: "Palestine Emergency Relief",
    category: "Emergency Appeal",
    description: "Provide urgent humanitarian aid, medical supplies, food, and shelter to families affected by the crisis in Palestine.",
    image: "https://img.freepik.com/premium-photo/child-holding-flag-front-rubble_988987-10724.jpg",
    goal: 500000,
    raised: 342000,
    supporters: 1245,
    urgent: true,
    icon: "🇵🇸"
  },
  {
    id: 2,
    title: "Give Zakat",
    category: "Zakat",
    description: "We distribute Zakat donations in the most effective way possible. Our Zakat policy is verified by Scholars to ensure it is Shari'ah-compliant.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800",
    goal: 1000000,
    raised: 678000,
    supporters: 2341,
    urgent: false,
    icon: "💰"
  },
  {
    id: 3,
    title: "Sponsor an Orphan",
    category: "Orphan Support",
    description: "We are supporting over 93,200 orphans around the world. Help us provide education, healthcare, and a better future for orphaned children.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
    goal: 250000,
    raised: 189000,
    supporters: 892,
    urgent: false,
    icon: "👶"
  },
  {
    id: 4,
    title: "Give Sadaqah",
    category: "Sadaqah",
    description: "By giving Sadaqah you can help to save and transform the lives of vulnerable communities around the world.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800",
    goal: 300000,
    raised: 156000,
    supporters: 654,
    urgent: false,
    icon: "🤲"
  },
  {
    id: 5,
    title: "Provide Clean Water for Life",
    category: "Water Projects",
    description: '"The best charity is giving water to drink" (Ahmed). Save lives by providing clean water to communities in need.',
    image: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=800",
    goal: 150000,
    raised: 98000,
    supporters: 423,
    urgent: false,
    icon: "💧"
  },
  {
    id: 6,
    title: "Feed the Needy",
    category: "Food Aid",
    description: "We've assisted 5.4 million people across 13 countries through our food and nutrition projects. Give life-saving food to those who need it most.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
    goal: 200000,
    raised: 134000,
    supporters: 567,
    urgent: false,
    icon: "🍲"
  },
  {
    id: 7,
    title: "Islamic Education for Children",
    category: "Education",
    description: "Support Islamic schools and madrasahs to provide quality Islamic education to children in underprivileged communities.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
    goal: 180000,
    raised: 87000,
    supporters: 312,
    urgent: false,
    icon: "📚"
  },
  {
    id: 8,
    title: "Build a Mosque",
    category: "Mosque Construction",
    description: "Contribute to building mosques in communities that need a place of worship. Earn continuous rewards (Sadaqah Jariyah).",
    image: "https://i0.wp.com/zaimah.org/wp-content/uploads/2021/04/mosque.jpg?resize=400%2C266&ssl=1",
    goal: 400000,
    raised: 245000,
    supporters: 789,
    urgent: false,
    icon: "🕌"
  }
];

export const quickDonationOptions = [
  { amount: 500, label: "₹500" },
  { amount: 1000, label: "₹1,000" },
  { amount: 2500, label: "₹2,500" },
  { amount: 5000, label: "₹5,000" },
  { amount: 10000, label: "₹10,000" },
  { amount: 0, label: "Custom" }
];

export const donationCategories = [
  { id: "all", name: "All Causes", icon: "🌍" },
  { id: "emergency", name: "Emergency", icon: "🚨" },
  { id: "zakat", name: "Zakat", icon: "💰" },
  { id: "sadaqah", name: "Sadaqah", icon: "🤲" },
  { id: "orphans", name: "Orphans", icon: "👶" },
  { id: "education", name: "Education", icon: "📚" },
  { id: "water", name: "Water", icon: "💧" },
  { id: "food", name: "Food", icon: "🍲" }
];
