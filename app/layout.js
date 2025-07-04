import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hyagriva Travels - Discover Your Spiritual Journey",
  description:
  "Embark on transformative spiritual journeys with Hyagriva. Explore sacred sites, connect with ancient wisdom, and find inner peace.",
  alternates: {
    canonical: "https://www.alpsliving.in/",
  },
  openGraph: {
    title: "AlpsLiving - Best Ladies PG near Christ College, Yeshwanthpur campus",
    description:
    "Embark on transformative spiritual journeys with Hyagriva. Explore sacred sites, connect with ancient wisdom, and find inner peace.",
    url: "https://www.alpsliving.in/",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/K8Xr1fyb/Opengraph-1.jpg",
        width: 1200,
        height: 630,
        alt: "Alpsliving BG pic",
      },
    ],
    authors: ["Alpliving"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navbar/>
        {children}
      </body>
    </html>
  );
}
