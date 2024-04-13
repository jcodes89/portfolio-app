import { Inter, Roboto, Montserrat, Titillium_Web } from "next/font/google";
import TopBtn from '@/app/components/BackToTopBtn'
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";



const inter = Inter({weight: '400', subsets: ["latin"] });
const roboto = Roboto({weight: '400', subsets: ["latin"] });
const montserrat = Montserrat({weight: '400', subsets: ["latin"] });
const titillium = Titillium_Web({weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Jeremy Sluder Portfolio",
  description: "Web developer portfolio showcasing the projects I have worked on.  This project was created using Next.js, with GSAP animations."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://kit.fontawesome.com/5c59429581.js" crossOrigin="anonymous" defer></script>
      <script src="https://unpkg.com/@studio-freight/lenis@1.0.39/dist/lenis.min.js" async ></script> 
      </head>
      <body className={`${titillium.className} h-screen w-full`}>
      <span className='h-screen w-full bg-hero-pattern bg-cover bg-center absolute z-0'/>
        <Navbar/>
        <TopBtn/>
        {children}
      </body>
    </html>
  );
}
//<span className='h-full md:h-screen w-full bg-[url("../public/images/pawel-czerwinski-fRzUPSFnp04-unsplash.jpg")] bg-cover bg-center absolute z-10'/>
//h-[89em]  2xl:h-[100em]