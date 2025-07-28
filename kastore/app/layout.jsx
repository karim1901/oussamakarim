
import "./globals.css";
import './_components/navbar'
import NavBar from "./_components/navbar";



export const metadata = {
  title: 'My PWA App',
  description: 'Best Next.js 14 PWA app',
  manifest: '/manifest.json',
  themeColor: '#000000'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
