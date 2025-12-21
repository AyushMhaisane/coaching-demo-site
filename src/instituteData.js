// src/instituteData.js

export const instituteData = {
  name: "Brighter Coaching Institute",
  tagline: "The Trusted Name in Nigdi Pradhikaran", // Stronger tagline
  phone: "+91 98765 43210",
  whatsappLink: "https://wa.me/919876543210",
  
  // --- IMAGES (Using Unsplash source URLs for demo) ---
  // Hero Image: Students studying happily
  heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  // About Image: A teacher helping a student or a focused classroom
  aboutImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",

  // --- HERO SECTION ---
  heroHeadline: "Building Confidence, Ensuring Success in SSC & CBSE",
  heroSubtext: "Join Nigdi's most trusted institute where concept clarity and personal attention are our core priorities.",
  
  // --- STATS ---
  stats: [
    { number: "500+", label: "Happy Students" },
    { number: "4.9/5", label: "Google Rating" }, // Highlighting the rating
    { number: "100%", label: "Results Focused" }
  ],

  // --- COURSES ---
  courses: [
    {
      title: "SSC State Board",
      grade: "Class 8th - 10th",
      desc: "Marathi & Semi-English medium focus with dedicated writing practice.",
      icon: "Book"
    },
    {
      title: "CBSE Board",
      grade: "Class 8th - 10th",
      desc: "NCERT-centric approach emphasizing Maths & Science concepts.",
      icon: "Globe"
    },
    {
      title: "Foundation Batch",
      grade: "Class 5th - 7th",
      desc: "Strong foundation building for future competitive exams.",
      icon: "Trophy"
    }
  ],

  // --- NEW: TESTIMONIALS ---
  testimonials: [
    {
      id: 1,
      quote: "The personal attention my son received here is unmatched. His confidence in Maths has improved drastically.",
      name: "Rajeshwari Patil",
      type: "Parent of Class 10 Student"
    },
    {
      id: 2,
      quote: "Best institute in Nigdi. The teachers ensure concepts are clear instead of just making them memorize.",
      name: "Amit Deshmukh",
      type: "Parent of Class 9 Student"
    },
    {
      id: 3,
      quote: "Small batch sizes really make a difference. The regular tests helped track progress effectively.",
      name: "Sneha K.",
      type: "Parent of Class 10 Student"
    }
  ]
};