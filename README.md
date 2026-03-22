# QuariX

A modern, highly responsive portfolio website for a product studio specializing in Web Development, Mobile Apps (iOS/Android), AI Agents, Chatbots, and MCP Servers. 

Built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**, featuring a sleek dark-mode aesthetic with frosted glass effects, smooth animations, and interactive UI components.

## 🚀 Features

- **Modern Tech Stack**: Next.js App Router, React, and Tailwind CSS.
- **Dynamic Routing**: Dedicated project overview pages (`/works/[id]`).
- **Interactive UI**: Bento-grid service cards with animated modals, marquee testimonials, and custom splash screens.
- **Forms**: Fully designed Contact and "Join the Team" application forms with animated success states.
- **Fully Responsive**: Carefully crafted breakpoints for seamless experiences across mobile, tablet, and desktop.
- **Animations**: Powered by Framer Motion and Magic UI (meteors, shimmer buttons, shine borders).

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Magic UI](https://magicui.design/), [Aceternity UI](https://ui.aceternity.com/)
- **Icons**: [Tabler Icons](https://tabler.io/icons) & [React Icons](https://react-icons.github.io/react-icons/)

## 📂 Project Structure

```text
quarix/
├── app/                      # Next.js App Router
│   ├── contact/              # Contact form page
│   ├── join/                 # Join team application page
│   ├── team/                 # Team members page
│   ├── works/                # Dynamic portfolio pages
│   │   └── [id]/             # Individual project details
│   ├── globals.css           # Global Tailwind styles & custom CSS
│   ├── layout.tsx            # Root layout (ThemeProvider, SplashScreen)
│   └── page.tsx              # Main landing page
│
├── components/               # React Components
│   ├── ui/                   # Reusable UI elements (Buttons, Meteors, etc.)
│   ├── footer.tsx            # Global footer with watermark
│   ├── mobile-nav.tsx        # Mobile hamburger menu
│   ├── project-cards.tsx     # Portfolio grid component
│   ├── service-cards.tsx     # Services bento grid & modals
│   └── splash-screen.tsx     # Initial load animation
│
├── lib/                      # Data & Utilities
│   ├── projects.ts           # Portfolio project data
│   └── services.tsx          # Service offerings data
│
└── public/                   # Static Assets
    ├── logo.svg              # QuariX logo
    ├── footer.png            # Footer background glow
    └── mascot-hello.png      # Hero section mascot
```

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚢 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/). 

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and configure the build settings (`npm run build`).
4. Deploy!
