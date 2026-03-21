import type { Metadata } from "next";
import "./globals.css";
import { SplashScreen } from "@/components/splash-screen";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Quarix",
  description: "Freelance experts in custom Websites, Applications, AI Agents, AI Chatbots & MCP Servers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth scroll-pt-20 sm:scroll-pt-24" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col bg-black dark:bg-black"
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SplashScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
