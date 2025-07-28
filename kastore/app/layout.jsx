
import "./globals.css";
import NavBar from "./_components/navbar";



export const metadata = {
  title: 'SConfirmation',
  description: 'SConfirmation',
  manifest: '/manifest.json',
  themeColor: '#000000'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
