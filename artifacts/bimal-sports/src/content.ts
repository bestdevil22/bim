// ✏️ EASY TO EDIT: Change any text here without touching the layout or styling files
import heroImage from "./assets/hero.png";
import cricketImage from "./assets/cricket.png";
import footballImage from "./assets/football.png";
import badmintonImage from "./assets/badminton.png";
import gymImage from "./assets/gym.png";
import sportswearImage from "./assets/sportswear.png";
import accessoriesImage from "./assets/accessories.png";

export const CONTENT = {
  // Shop identity
  shopName: "Bimal Sports",
  tagline: "Your Local Hub for Quality Sports Gear",
  
  // Contact info — safe to edit
  contact: {
    phone: "9896976668",
    phoneDisplay: "+91 98969 76668",
    whatsappUrl: "https://wa.me/919896976668",
    address: "Shop No. 26, Rao Tularam Stadium, Rewari, Haryana 123401, India",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.7!2d76.617!3d28.196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDEx!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin",
  },
  
  // Hero section
  hero: {
    headline: "Bimal Sports",
    subheadline: "Your Local Hub for Quality Sports Gear",
    intro: "We provide professional-grade sports equipment and apparel to the athletes and enthusiasts of Rewari. Quality you can trust, right in your neighborhood.",
    backgroundImage: heroImage,
  },
  
  // About us
  about: {
    title: "About Bimal Sports",
    description: "Located in the heart of Rewari at Rao Tularam Stadium, Bimal Sports is your trusted neighborhood destination for premium sports equipment. We believe that every athlete, from beginner to professional, deserves access to high-quality gear. Our commitment to authentic products, excellent customer service, and deep knowledge of sports makes us the go-to choice for the local community. Whether you need a new cricket bat, football boots, or gym equipment, we have you covered.",
  },
  
  // Product categories — add/remove/edit freely
  categories: [
    {
      id: "cricket",
      name: "Cricket Gear",
      imageUrl: cricketImage,
      items: ["Cricket Bat", "Cricket Ball", "Batting Pads", "Helmet", "Batting Gloves"],
    },
    {
      id: "football",
      name: "Football Gear",
      imageUrl: footballImage,
      items: ["Football", "Boots", "Shin Guards", "Jersey"],
    },
    {
      id: "badminton",
      name: "Badminton & Tennis",
      imageUrl: badmintonImage,
      items: ["Rackets", "Shuttlecocks", "Tennis Balls", "Grip Tape"],
    },
    {
      id: "gym",
      name: "Gym & Fitness Equipment",
      imageUrl: gymImage,
      items: ["Dumbbells", "Resistance Bands", "Yoga Mat", "Jump Rope"],
    },
    {
      id: "sportswear",
      name: "Sportswear",
      imageUrl: sportswearImage,
      items: ["Track Suits", "Sports T-Shirts", "Shorts", "Compression Wear"],
    },
    {
      id: "accessories",
      name: "Accessories",
      imageUrl: accessoriesImage,
      items: ["Water Bottles", "Sports Bags", "Stopwatch", "Whistle"],
    },
  ],
};
