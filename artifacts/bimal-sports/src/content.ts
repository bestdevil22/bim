// ✏️ EASY TO EDIT: Change any text here without touching the layout or styling files
import heroImage from "./assets/hero.png";
import cricketImage from "./assets/cricket.png";
import footballImage from "./assets/football.png";
import badmintonImage from "./assets/badminton.png";
import gymImage from "./assets/gym.png";
import sportswearImage from "./assets/sportswear.png";
import accessoriesImage from "./assets/accessories.png";

// ✏️ Link to your Google Reviews page (replace with your actual Google Maps review link)
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/Bimal+Sports+Rewari";

export const CONTENT = {
  // ✏️ Your Google Reviews page link — update this when you have a real Google Business listing
  googleReviewsUrl: GOOGLE_REVIEWS_URL,

  // ✏️ Customer reviews — add, edit or remove reviews freely
  reviews: [
    {
      id: "r1",
      name: "Rahul Sharma",
      role: "Cricket Club Captain",
      rating: 5,
      text: "Best sports shop in Rewari. Got all my cricket gear here — the quality is outstanding. The staff really knows their products and helped me pick the right bat for my game.",
    },
    {
      id: "r2",
      name: "Priya Verma",
      role: "Fitness Enthusiast",
      rating: 5,
      text: "Excellent range of gym equipment at very reasonable prices. I bought resistance bands and a yoga mat — great quality. Will definitely come back for more.",
    },
    {
      id: "r3",
      name: "Amit Yadav",
      role: "Football Coach",
      rating: 5,
      text: "I always send my players to Bimal Sports for their boots and jerseys. Never had a complaint. Trusted shop with genuine products — highly recommended.",
    },
    {
      id: "r4",
      name: "Sunita Devi",
      role: "Parent",
      rating: 5,
      text: "Bought badminton rackets for my kids here. The shopkeeper was very patient and suggested the perfect ones for beginners. My kids love them!",
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
      name: "Deepak Nain",
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
