// import Image from "next/image";
'use client'
import HeroMain from "./components/Hero/HeroMain";

export default function Home() {
  return (
    <>
       <span className='h-screen w-full bg-hero-pattern bg-cover bg-center absolute z-10'/>
      <HeroMain/>
    </>
  );
}
