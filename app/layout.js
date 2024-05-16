import {Titillium_Web } from "next/font/google";
import TopBtn from '@/app/components/BackToTopBtn'
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const titillium = Titillium_Web({weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Jeremy Sluder Portfolio",
  description: "Web developer portfolio showcasing the projects I have worked on.  This project was created using Next.js, with GSAP animations."
};

export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`${titillium.className} h-screen w-full bg-primary `}>
        <Navbar/>
        <TopBtn/>
        {children}
      </body>
    </html>
  );
}
