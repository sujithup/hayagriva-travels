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
  title: "Hayagriva Holidays - Discover Your Spiritual Journey",
  description:
  "Embark on transformative spiritual journeys with Hayagriva Holidays. Explore sacred sites, connect with ancient wisdom, and find inner peace.",
  alternates: {
    canonical: "https://hayagrivaholidays.com/",
  },
  openGraph: {
    title: "Hayagriva Holidays - Discover Your Spiritual Journey",
    description:
    "Embark on transformative spiritual journeys with Hayagriva Holidays. Explore sacred sites, connect with ancient wisdom, and find inner peace.",
    url: "https://hayagrivaholidays.com/",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/vT4vqTNL/HH-BG.jpg",
        width: 1127,
        height: 632,
        alt: "Hayagriva BG pic",
      },
    ],
    authors: ["Hayagriva"],
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
