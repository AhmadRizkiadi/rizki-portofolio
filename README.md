# Ahmad Rizkiadi — Interactive Developer Portfolio

<div align="center">
  <img src="public/diri.jpg" alt="Ahmad Rizkiadi Profile Picture" width="120" style="border-radius: 50%; border: 3px solid #b24d35;" />
  <h3>Ahmad Rizkiadi Budi Wirawan</h3>
  <p><strong>Backend Developer</strong></p>
  <p>Semarang, Indonesia</p>

  <p align="center">
    <a href="https://github.com/AhmadRizkiadi"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
    <a href="https://www.linkedin.com/in/ahmad-rizkiadi-budi-wirawan/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
    <a href="mailto:rizkiahmad7396@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  </p>

  <h4>
    <a href="https://github.com/AhmadRizkiadi">🔗 View Live Site</a>
    <span> · </span>
    <a href="public/Ahmad-Rizkiadi-Budi-Wirawan-Backend.pdf">📄 Download CV (PDF)</a>
  </h4>
</div>

---

## 📖 Overview

This is the repository for my **interactive, high-performance developer portfolio**. Built with an **editorial-engineering aesthetic**, it uses a premium, restrained design language (warm paper tones, deep charcoal ink, and bold crimson accents) to showcase my technical projects, embedded hardware work, and engineering philosophy.

The portfolio is tailored specifically for **Backend** roles, focusing on clean logic, security, hardware integrations, and systems-level thinking.

---

## 🛠️ Tech Stack & Architecture

This application is built as a Single Page Application (SPA) prioritizing fluid interactivity and micro-interactions:

- **Core & Framework:** React (v19) + Vite (for lightning-fast building and HMR)
- **Styling:** Vanilla CSS3 + Modern variables (OKLCH color space for vibrant and harmonious color mixing)
- **Interactions & Physics:** Framer Motion (for the 3D tilt lanyard card, spring-damping simulations, and layout transitions)
- **Component UI:** Ant Design (ConfigProvider + Segmented control + Timeline timeline tracking)
- **Icons:** Lucide React

---

## ✨ Features

- **3D Interactive Lanyard:** A realistic virtual ID badge suspended by a vector lanyard strap. It tilts dynamically in response to mouse/pointer coordinates with organic spring damping (`framer-motion`), falling back gracefully to flat layouts on mobile devices or under `prefers-reduced-motion` settings.
- **Asymmetrical Editorial Grid:** A custom project showcase that splits projects into dynamic layout spans (`7:5` diagonal pattern) to balance visual density.
- **Project Detail Drawer:** Accessible drawers containing challenge statements, deep technical details, tag integrations, and repository redirects without page reloads.
- **Clean Tech Stack scan:** A grouped technical toolbox featuring clean dividers and hover-translate micro-animations.
- **Optimized Assets:** Pre-configured paths for system CV retrieval and optimized image scaling.

---

## 📁 Projects Showcased

The portfolio showcases four selected projects mapping different engineering domains:

1. **Stockify (Full-stack MERN)** — An inventory workspace with real-time stock valuation indicators, Cloudinary file uploads, database seeding, and Swagger OpenAPI documentation.
2. **Smart Waste Classifier (AI & IoT)** — A sorting bin powered by a YOLOv8 classification model, ESP32 + ESP32-CAM HTTP triggering, a Flask server, and a telemetry dashboard.
3. **E-Desa (Community System)** — A digital village portal with Laravel Sanctum, Inertia.js, Vue 3, resident tracking, and data export features.
4. **Polivent (Academic Platform)** — A university proposal management platform with a PHP JWT custom backend API, Flutter mobile client (BLoC state), and QR-code scanner.

---

## ⚙️ Local Development Setup

To run this project on your local machine, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/AhmadRizkiadi/portofolio.git
cd portofolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the local site.

### 4. Build for Production
To bundle the assets into a highly compressed, production-ready `dist` folder:
```bash
npm run build
```

---

## 📄 License & Info

- Developed with ❤️ by [Ahmad Rizkiadi Budi Wirawan](https://www.linkedin.com/in/ahmad-rizkiadi-budi-wirawan/).
- Codebase structure is open source under the MIT License.
