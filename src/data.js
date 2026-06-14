export const projects = [
  {
    key: "stockify",
    title: "Stockify",
    type: "Full-stack MERN",
    year: "2026",
    image: "/projects/stockify.png",
    summary: "An inventory workspace for tracking products, stock movements, categories, and team roles.",
    challenge: "Replace complex manual spreadsheets with a unified, role-aware database and instant alerts.",
    details: [
      "Interactive dashboard with stock valuation and low-stock indicators",
      "Cloudinary file storage integration for product catalog",
      "Idempotent database seeding and mock transaction generator",
      "Built-in API documentation using OpenAPI and Swagger UI",
      "Redis caching layer for token blacklists and queries"
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Redis", "JWT", "Cloudinary"],
    href: "https://github.com/AhmadRizkiadi/Stockify",
  },
  {
    key: "smart-waste",
    title: "Smart Waste Classifier",
    type: "AI & IoT",
    year: "2025",
    image: "/projects/smart-waste.jpg",
    summary: "A smart sorting bin powered by a YOLOv8 object detection model and ESP32 microcontroller triggers.",
    challenge: "Connect AI computer vision inference with physical sorting hardware in real time.",
    details: [
      "YOLOv8 image classification (Organic, Inorganic, Hazardous B3 categories)",
      "Dual ESP32 + ESP32-CAM HTTP triggering system via Flask server",
      "Physical sorting utilizing ultrasonic sensors and servo motors",
      "Flask API for classification and MySQL database storage",
      "Next.js telemetry dashboard displaying real-time statistics and alerts"
    ],
    stack: ["YOLOv8", "Python", "Flask", "ESP32", "ESP32-CAM", "MySQL", "Next.js"],
    href: "https://github.com/AhmadRizkiadi/Smart_Waste_Classifier_ESP32",
  },
  {
    key: "edesa",
    title: "E-Desa (Sub-District Population System)",
    type: "Community System",
    year: "2025",
    image: "/projects/edesa.jpg",
    summary: "A digital village portal managing resident documents, households, births, deaths, and social aid distribution.",
    challenge: "Support deep administrative workflows and role-scoped permissions for public village staff.",
    details: [
      "Laravel REST API with Sanctum token-based authentication",
      "Vue 3 dynamic client interface with Inertia.js integration",
      "Comprehensive modules for resident records, household relations, and assistance eligibility",
      "Data exports supporting Excel and PDF generation",
      "Interactive public dashboard with community stats, news, and gallery"
    ],
    stack: ["Laravel", "Vue 3", "Inertia.js", "Sanctum", "MySQL", "Tailwind CSS"],
    href: "https://github.com/AhmadRizkiadi/sistem-penduduk-api-vue",
  },
  {
    key: "polivent",
    title: "Polivent",
    type: "Academic Platform",
    year: "2024",
    image: "/projects/polivent.jpg",
    summary: "A multi-platform event proposal system linking university students, proposers, and administrators.",
    challenge: "Coordinate permissions, QR codes, and notifications between web and mobile interfaces.",
    details: [
      "PHP backend API with custom JWT verification and refresh tokens",
      "Flutter mobile client implementing BLoC state management and Dio client",
      "QR-code based attendance tracking and event ticket scanning",
      "Role-scoped web dashboards for student activity proposers and admins",
      "Integrated file upload handlers and secure storage helpers"
    ],
    stack: ["PHP", "Flutter", "MySQL", "JWT", "BLoC", "QR Code"],
    href: "https://github.com/AhmadRizkiadi/pbl",
  }
];

export const practiceAreas = [
  {
    label: "Backend Development",
    title: "Secure architecture, clear RESTful APIs.",
    copy: "Designing robust server-side applications using Express.js and Laravel, emphasizing secure token rotation, RBAC, and clean database schemas.",
  },
  {
    label: "IoT & Applied AI",
    title: "Bridging code with physical automation.",
    copy: "Integrating YOLOv8 computer vision models with ESP32-CAM and sensors, enabling smart industrial automation and real-time telemetry.",
  },
  {
    label: "System Thinking & Academic Depth",
    title: "From algorithms to enterprise scaling.",
    copy: "Tracing technology pipelines through 6 semesters of Computer Engineering studies: networks, real-time operating systems, and Big Data.",
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "PHP", "SQL", "C++ (Arduino / ESP32)"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "Laravel", "REST API", "JWT", "Zod"] },
  { group: "Data & tools", items: ["MongoDB", "PostgreSQL", "MySQL", "Git", "GitHub", "Postman"] },
];

export const explorations = [
  {
    area: "Real-Time Telemetry",
    title: "Streaming sensor states & logs",
    copy: "Managing continuous status updates, distance-hold triggers, and live action logs over Socket.IO and REST channels.",
    tools: "Socket.IO, Python, Flask, Node.js",
  },
  {
    area: "Embedded AI & Vision",
    title: "Edge inference with custom weights",
    copy: "Deploying and wrapping YOLOv8 models for classification workflows, linking video captures to database triggers.",
    tools: "YOLOv8, ESP32-CAM, OpenCV",
  },
  {
    area: "Enterprise & Security",
    title: "Hardened token rotation & policies",
    copy: "Designing secure access/refresh token pipelines, database TTLs, and clean, role-scoped route boundaries.",
    tools: "JWT, bcryptjs, HTTP-Only Cookies, RBAC",
  },
];

export const strengths = [
  {
    number: "01",
    title: "Security & Validation in Foundation",
    copy: "I prioritize JWT rotation, role boundaries, input sanitization, and database constraints before writing any user-facing code.",
  },
  {
    number: "02",
    title: "Hardware-to-Cloud Integration",
    copy: "My Computer Engineering background allows me to connect microcontrollers (ESP32), sensor networks, API endpoints, and dashboards.",
  },
  {
    number: "03",
    title: "Structured Academic Foundation",
    copy: "My studies span 6 semesters of deep technical training, from assembly and operating systems to data mining and game programming.",
  },
];
