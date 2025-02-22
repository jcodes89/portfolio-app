'use client'
import React, {useRef as UseRef} from 'react'
import Image from 'next/image'
import img from '@/public/images/profile2.webp'
import { useGSAP as UseGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Draggable from 'gsap/Draggable'
import styles from '@/app/css/about.module.css'

import { SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiReact,SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiPostman, SiMongoose} from 'react-icons/si'
import { MdSwipeRight } from "react-icons/md";

const page = () => {
  const container = UseRef()
  gsap.registerPlugin(ScrollTrigger, Draggable)

  UseGSAP(() => {
    const tl = gsap.timeline()
    tl.to('#aboutHead', {
      display: 'block',
      visibility: 'visible',
      delay:0,
      duration: 2,
      ease: 'expo',
      stagger:2,
    })
    .to('#aboutImg', {
      delay:0,
      ease: 'expo'
    })


    Draggable.create('.techItems', {
      type:'x',
      bounds: '.techContainer'
      
    })

  }, {scope: container})

  return (
    <>
    <span  ref={container}>
    <main className='relative z-30 w-full h-full px-4  flex flex-col  text-center top-16 lg:top-1/3 lg:px-4  text-gray-50 lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-4'>
      <div  className={` flex flex-col justify-center items-center  pb-4  mx-3  `}>
        <div className='aboutTitle p-4'>
          <h2 className='font-bold text-4xl lg:text-5xl'>About Me</h2>
        </div>
        <div id='aboutHead' className={`${styles.aboutHeader} aboutText text-left  p-4 rounded-md shadow-md shadow-primary `}>
          <h3 className={` text-2xl  lg:text-2xl py-3`}>I am a <span className='font-bold text-accent'>Web Developer</span> based in Albemarle, North Carolina</h3>
          <p className='text-lg md:text-lg lg:text-xl'>I created my first web site in 2021 and fell in love with the process.  I enjoy creating lasting unique experiences and continuing to gain knowledge and experience as a Web Developer.  </p>
        </div>
      </div>

      <div className=' flex justify-center lg:items-center  p-3'>
        <Image loading='lazy' src={img} alt='image of Jeremy' id='aboutImg' className={`${styles.aboutImage} h-full md:h-2/3 lg:h-auto lg:w-full 2xl:h-[200%] 2xl:w-auto  w-auto rounded-md shadow-md shadow-primary `}/>
      </div>
    </main>
    <section className='relative z-30  bg-gray-50 h-fit w-full pt-10 '>
      <div  className={` relative z-30  text-primary bg-gray-50  pt-0 p-5 w-full lg:flex lg:flex-col lg:items-center`}>
        <div className={` text-lg  text-center lg:w-1/2 `}>
          <h4 className='text-xl font-bold pb-4'>My Story</h4>
          <p className='text-left pb-2'>
            In 2021, I began my journey as a web developer.  I was getting into cryptocurrency and was fascinated with the technology.  I started to look into how to become a blockchain developer.  
            I quickly dove into learning HTML and CSS. I fell in love with the process of creating something from scratch. 
            I began to teach myself technologies on the front end since I also had a leather working business and wanted to create a simple website for my business. 
            </p>
              
          <p className='text-left pb-2'>My facination with cryptocurrency subsided, my love for web development amplified over the years.  Web development has always been something I enjoyed since I started.
            I continued to grow my skills in front-end development and started learning back-end development.  I have a passion for learning and enjoy creating beautiful websites and web applications for users.  
            I look forward to what the future holds for me as a web developer and increasing my knowledge to provide a better experience for the end user.
          </p>
          
          <p className='text-left pb-4'>
            Looking back, my Davinch Leather website was not anything exceptional, but it ignited a spark within me to create and learn more. Since then, I have been constantly growing and improving my skills as a web developer. 
          </p>
        </div>
      </div>
      <div className={`relative z-30 text-gray-50 bg-secondary  text-center lg:flex lg:flex-col py-4 `}>
        <div    className={``}>
          <h5 className='text-xl font-bold pb-4'>
            When I am not coding
          </h5>
        <div className=''>
          <ul className='text-lg'>
            <li>Spending Time With My Wife</li>
            <li>Longboarding</li>
            <li>Leather Working</li>
            <li>Knife Making</li>
            <li>Gaming on my NES and Gameboy</li>
            <li>Gameboy Restoration</li>
            <li>Working Out</li>
            <li>Paddle Boarding</li>
            <li>Backpacking Trips</li>
            <li>Fly Fishing</li>
          </ul>
        </div>

        </div>
      </div>

    </section>
    <section className='hfit w-full  text-center bg-primary py-4 overflow-x-hidden overflow-y-hidden'>
      <div className='flex flex-col justify-center items-center text-gray-50'>
        <p className='lg:hidden text-xl flex  items-center '><MdSwipeRight/><span className='text-sm'>Swipe Right</span></p>
        <h6 className='font-bold text-xl py-2'>Technologies</h6>
      </div>
      {/*mobile version will be able to swipe left or right to view the tech stack*/}
      <div className='lg:hidden techContainer flex flex-row  py-4 text-6xl text-gray-50 w-full h-fit relative z-30'>
        <div className='techItems flex flex-row justify-start  cursor-pointer'>
          <div className='px-4 justify-center items-center flex flex-col hover:text-accent'><SiHtml5/><span className='text-base'>Html</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiCss3/><span className='text-base'>Css</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiBootstrap/><span className='text-base'>Bootstrap</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiTailwindcss/><span className='text-base'>Tailwind</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiJavascript/><span className='text-base'>Javascript</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiReact/><span className='text-base'>React</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiNextdotjs/><span className='text-base'>Next.js</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiNodedotjs/><span className='text-base'>Node.js</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiExpress/><span className='text-base'>Express.js</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiMongodb/><span className='text-base'>MongoDB</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiMongoose/><span className='text-base'>Mongoose</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiGit/><span className='text-base'>Git</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiGithub/><span className='text-base'>Github</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-accent'><SiPostman/><span className='text-base'>Postman</span></div>

        </div>
        
      </div>
      <div className=' hidden techContainer lg:flex flex-row justify-center  py-4 text-6xl text-gray-50 w-full h-fit'>
        <div className=' flex flex-row  cursor-pointer'>
          <div className='lg:pl-24 px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiHtml5/><span className='text-base'>Html</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiCss3/><span className='text-base'>Css</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiBootstrap/><span className='text-base'>Bootstrap</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiTailwindcss/><span className='text-base'>Tailwind</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiJavascript/><span className='text-base'>Javascript</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiReact/><span className='text-base'>React</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiNextdotjs/><span className='text-base'>Next.js</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiNodedotjs/><span className='text-base'>Node.js</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiExpress/><span className='text-base'>Express.js</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiMongodb/><span className='text-base'>MongoDB</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiMongoose/><span className='text-base'>Mongoose</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiGit/><span className='text-base'>Git</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiGithub/><span className='text-base'>Github</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-accent'><SiPostman/><span className='text-base'>Postman</span></div>

        </div>
        
      </div>
      
      
    </section>

    </span>
      
   
    </>
  )
}

export default page