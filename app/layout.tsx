import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://quarix.one"),
  title: {
    default: "QuariX | Premium Custom Software & AI Development",
    template: "%s | QuariX",
  },
  description: "QuariX is a premium tech agency specializing in custom websites, iOS/Android applications, AI agents, AI chatbots, and MCP servers. We build scalable, high-performance digital solutions.",
  keywords: [
    "QuariX",
    "Quarix",
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "iOS Apps",
    "Android Apps",
    "AI Agents",
    "AI Chatbots",
    "MCP Servers",
    "Tech Agency",
    "Freelance Developers",
    "Next.js Experts",
    "React Native Developers",
    "AI Integration",
  ],
  authors: [{ name: "QuariX Team" }],
  creator: "QuariX",
  publisher: "QuariX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "QuariX | Premium Custom Software & AI Development",
    description: "QuariX is a premium tech agency specializing in custom websites, iOS/Android applications, AI agents, AI chatbots, and MCP servers.",
    url: "https://quarix.one",
    siteName: "QuariX",
    images: [
      {
        url: "/apple-icon.png", // You can replace this with a dedicated OG image later (e.g., 1200x630)
        width: 800,
        height: 800,
        alt: "QuariX Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuariX | Premium Custom Software & AI Development",
    description: "QuariX is a premium tech agency specializing in custom websites, iOS/Android applications, AI agents, AI chatbots, and MCP servers.",
    images: ["/apple-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth scroll-pt-20 sm:scroll-pt-24" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col bg-black dark:bg-black overflow-x-hidden"
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
