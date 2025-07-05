
# ✍️ Writer Portfolio

A fully-featured portfolio website built for a professional writer to showcase her works, connect with readers, and provide a seamless online reading and download experience.

Live site: [https://writer-portfolio-ecru.vercel.app/](https://writer-portfolio-ecru.vercel.app/)

---

## 🚀 Project Overview

This portfolio project serves as an interactive platform for the writer to:

- Display books with options to **read online** or **download**
- Showcase **testimonials** from readers and collaborators
- Present a **gallery** of images related to the author’s work and events
- Feature **author’s daily updates** or news
- Provide smooth navigation and engaging 3D visuals using React Three Fiber and Three.js

Built with modern web technologies to ensure a fast, scalable, and visually appealing experience.

---

## 🧰 Tech Stack

| Technology          | Purpose                                   |
|---------------------|-------------------------------------------|
| **Next.js**         | React framework with server-side rendering |
| **TypeScript**      | Type safety and improved developer experience |
| **React Three Fiber / Three.js** | 3D interactive visuals and animations     |
| **Tailwind CSS**    | Utility-first CSS framework for styling    |
| **MongoDB**         | Database for storing book data, testimonials, and updates |
| **shadcn UI**       | Component library for UI consistency and accessibility |

---

## 📂 Project Structure

```bash
Writer-Portfolio/
├── components/         # Reusable React components
├── lib/                # Helper functions, config
├── models/             # Mongoose schemas for books, testimonials, etc.
├── pages/              # Next.js pages and API routes
├── public/             # Static assets and images
├── styles/             # Global CSS and Tailwind config
├── utils/              # Utility functions and middleware
├── .env.local          # Environment variables
├── next.config.js
└── README.md
```

---

## 🎯 Features

- **Book Reading:** Read books directly on the website with a clean, easy-to-use interface  
- **Downloads:** Download book files for offline reading  
- **Testimonials:** Display feedback from readers and collaborators  
- **Gallery:** Image gallery showcasing author’s events and work  
- **Author’s Today:** Daily or periodic updates about the author’s activities  
- **3D Visuals:** Engaging and dynamic 3D elements powered by React Three Fiber and Three.js  
- **Responsive Design:** Works seamlessly on desktop and mobile devices

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/anishrajpandey/Writer-Portfolio.git
cd Writer-Portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add necessary variables such as:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
# Add other required env variables
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🤝 Contributing

This project is tailored for a specific client, so public contributions are limited. However, feel free to open issues or reach out if you want to discuss improvements or similar projects.

---

## ✍️ Author

**Anish Raj Pandey**  
Computer Science Student | Full-Stack Developer  
[Portfolio](https://anishrajpandey.vercel.app) | [GitHub](https://github.com/anishrajpandey) | [LinkedIn](https://linkedin.com/in/anishrajpandey)

---

## 📜 License

This project is proprietary for the client. Please contact for permission before reuse or redistribution.

---

Made with ❤️ and cutting-edge web tech to empower writers online.
