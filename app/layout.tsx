import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "./provider"; // Ensure your custom provider is correctly set up

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qaiem Portfolio",
  description: "Welcome to Qaiem's portfolio. Explore my projects, skills, and experiences as a Front-End Developer specializing in React.js, Next.js, and Tailwind CSS. Discover my journey, achievements, and the work I am passionate about.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
