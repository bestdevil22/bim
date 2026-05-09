// ✏️ EASY TO EDIT: Change any text here without touching the layout or styling files
import heroImage from "./assets/hero.png";
import cricketImage from "./assets/cricket.png";
import footballImage from "./assets/football.png";
import badmintonImage from "./assets/badminton.png";
import sportswearImage from "./assets/sportswear.png";
import accessoriesImage from "./assets/accessories.png";

// ✏️ Link to your Google Reviews page (replace with your actual Google Maps review link)
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/Bimal+Sports+Rewari";

export const CONTENT = {
  // ✏️ Your Google Reviews page link — update this when you have a real Google Business listing
  googleReviewsUrl: "https://www.google.com/search?client=safari&rls=en&q=bimal+sports+rewari&ie=UTF-8&oe=UTF-8#",

  // ✏️ Customer reviews — add, edit or remove reviews freely
  reviews: [
    {
      id: "r1",
      name: "Rahul Sharma",
      role: "Cricket Club Captain",
      rating: 5,
      text: "Best sports shop in Rewari. Got all my cricket gear here — the quality is outstanding. They really knows their products and helped me pick the right bat for my game.",
    },
    {
      id: "r2",
      name: "Mohit Yadav",
      role: "Fitness Enthusiast",
      rating: 5,
      text: "Nice shop good quality",
    },
    {
      id: "r3",
      name: "KULDEEP YADAV",
      role: "Fitness Enthusiast",
      rating: 5,
      text: "Polite Attitude and good quality products",
    },
    {
      id: "r4",
      name: "Yash Madhav Sharma",
      role: "",
      rating: 5,
      text: "Best",
    },
    {
      id: "r5",
      name: "Vikram Singh",
      role: "Gym Trainer",
      rating: 5,
      text: "Reliable, honest, and always stocked with what you need. Bimal Sports is my go-to for all sports equipment. The service is warm and professional.",
    },
    {
      id: "r6",
      name: "Deepak Mor",
      role: "Local Athlete",
      rating: 5,
      text: "From sportswear to accessories, everything you need in one place. Quality is top notch and the prices are fair. A true asset to the Rewari community.",
    },
  ],


  // Shop identity
  shopName: "Bimal Sports",
  tagline: "Your Local Hub for Quality Sports Gear",
  
  // Contact info — safe to edit
  contact: {
    phone: "9896976668",
    phoneDisplay: "+91 98969 76668",
    whatsappUrl: "https://wa.me/919896976668",
    address: "Shop No. 26, Rao Tularam Stadium, Rewari, Haryana 123401, India",
    mapEmbedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.260632752994!2d76.6387938!3d28.199392999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d510b4668ee91%3A0xa7d26ecf6c9dda43!2sBimal%20Sports%2CRewari!5e0!3m2!1sen!2sin!4v1777888377847!5m2!1sen!2sin",
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
      imageUrl: sportswearImage,
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
