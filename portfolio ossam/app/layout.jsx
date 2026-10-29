import { Inter, Outfit } from "next/font/google";
import { themeInitScript } from "@/components/theme/theme";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Oussama Karim — Full-Stack Web & Mobile App Developer",
  description:
    "Portfolio of Oussama Karim, a Full-Stack Web & Mobile App Developer building modern, scalable and high-performance web and mobile applications.",
  openGraph: {
    title: "Oussama Karim — Full-Stack Web & Mobile App Developer",
    description: "Modern, scalable and high-performance web and mobile applications.",
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
    { media: "(prefers-color-scheme: light)", color: "#f5f7ff" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
