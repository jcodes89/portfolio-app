'use client'
import React, {useRef as UseRef} from 'react'
import Image from 'next/image'
import img from '@/public/images/profile2.jpg'
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
      duration: 2,
      ease: 'expo',
      stagger:2
    })
    .to('#aboutImg', {
      delay:2,
      ease: 'expo'
    })


    Draggable.create('.techItems', {
      type:'x',
      bounds: '.techContainer'

    })
   
   
    
  }, {scope: container})

  return (
    <>
    <span className='h-screen w-full bg-[url("../public/images/pawel-czerwinski-fRzUPSFnp04-unsplash.jpg")] bg-cover bg-center absolute z-10'/>
    <span  ref={container}>
    <main className='relative z-30 w-full h-full px-4  flex flex-col  text-center top-16 lg:top-1/3 lg:px-4  text-gray-50 lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-4'>
      <div  className={` flex flex-col justify-center items-center  pb-4  mx-3  `}>
        <div className='aboutTitle p-4'>
          <h2 className='font-bold text-4xl lg:text-5xl'>About Me</h2>
        </div>
        <div id='aboutHead' className={`${styles.aboutHeader} aboutText text-left  p-4 rounded-md shadow-md shadow-primary `}>
          <h3 className={` text-xl md:text-2xl lg:text-2xl py-3`}>I am a Web Developer based in Florida</h3>
          <p className='text-base md:text-lg lg:text-xl'>I created my first web site in 2021 and fell in love with the process.  I enjoy creating lasting unique experiences and continuing to gain knowledge and experience as a Web Developer.  </p>
        </div>
      </div>

      <div className=' flex justify-center lg:items-center  p-3'>
        <Image src={img} alt='image of Jeremy' id='aboutImg' className={`${styles.aboutImage} h-full md:h-2/3 lg:h-auto lg:w-full 2xl:h-[200%] 2xl:w-auto  w-auto rounded-md shadow-md shadow-primary `}/>
      </div>
    </main>
    <section className='relative z-30  bg-gray-50 h-fit w-full pt-10 '>
      <div  className={` relative z-30  text-primary bg-gray-50  pt-0 p-5 w-full lg:flex lg:flex-col lg:items-center`}>
        <div className={`  text-center lg:w-1/2 `}>
          <h4 className='text-xl font-bold pb-4'>My Story</h4>
          <p className='text-left'>
            My journey as a Web Developer started back in 2021 when I first wanted to make my own website for my leather buisness.
            I was currently using squarespace but it lacked the simplistic nature which I wanted for a website. The main goal for my Davinch Leather website was to showcase
            my work and describe the process of how I create custom leather products.  This prompted me to start learning from Udemy and other sites which led me down the rabbit hole.  
          </p>
          <br/>
          <p className='text-left pb-4'>
            Looking back now, my Davinch website was nothing spectacular but building and creating 
            that website ignited a spark.  I have been constantly learning and growing since I started in 2021 and the passion to create has only grown.
            I am currently working as a Paramedic/Firefighter in Tampa, Fl but look forward to starting a career as a developer.
          </p>
        </div>
      </div>
      <div className={`relative z-30 text-gray-50 bg-accent  text-center lg:flex lg:flex-col py-4 `}>
        <div    className={``}>
          <h5 className='text-xl font-bold pb-4'>
            When I am not coding
          </h5>
        <div className=''>
          <ul>
            <li>Hanging with the Wife</li>
            <li>Longboarding</li>
            <li>Leather Working</li>
            <li>Knife Making</li>
            <li>Gaming on my NES and Gameboy</li>
            <li>Gameboy Restoration</li>
            <li>Working Out</li>
            <li>Paddle Boarding</li>
            <li>Fishing</li>
          </ul>
        </div>

        </div>
      </div>

    </section>
    <section className='hfit w-full  text-center bg-primary py-4'>
      <div className='flex flex-col justify-center items-center text-accent'>
        <p className='lg:hidden text-xl flex  items-center '><MdSwipeRight/><span className='text-sm'>Swipe Right</span></p>
        <h6 className='font-bold text-xl py-2'>Technologies</h6>
      </div>
      <div className='lg:hidden techContainer flex flex-row   py-4 text-6xl text-accent w-full h-fit'>
        <div className='techItems flex flex-row justify-start  cursor-pointer'>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiHtml5/><span className='text-base'>Html</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiCss3/><span className='text-base'>Css</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiBootstrap/><span className='text-base'>Bootstrap</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiTailwindcss/><span className='text-base'>Tailwind</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiJavascript/><span className='text-base'>Javascript</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiReact/><span className='text-base'>React</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiNextdotjs/><span className='text-base'>Next.js</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiNodedotjs/><span className='text-base'>Node.js</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiExpress/><span className='text-base'>Express.js</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiMongodb/><span className='text-base'>MongoDB</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiMongoose/><span className='text-base'>Mongoose</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiGit/><span className='text-base'>Git</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiGithub/><span className='text-base'>Github</span></div>
          <div className='px-2 justify-center items-center flex flex-col hover:text-gray-50'><SiPostman/><span className='text-base'>Postman</span></div>

        </div>
        
      </div>
      <div className=' hidden techContainer lg:flex flex-row justify-center  py-4 text-6xl text-accent w-full h-fit'>
        <div className=' flex flex-row  cursor-pointer'>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiHtml5/><span className='text-base'>Html</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiCss3/><span className='text-base'>Css</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiBootstrap/><span className='text-base'>Bootstrap</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiTailwindcss/><span className='text-base'>Tailwind</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiJavascript/><span className='text-base'>Javascript</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiReact/><span className='text-base'>React</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiNextdotjs/><span className='text-base'>Next.js</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiNodedotjs/><span className='text-base'>Node.js</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiExpress/><span className='text-base'>Express.js</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiMongodb/><span className='text-base'>MongoDB</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiMongoose/><span className='text-base'>Mongoose</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiGit/><span className='text-base'>Git</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiGithub/><span className='text-base'>Github</span></div>
          <div className='px-2 justify-center items-center flex flex-col techItem hover:text-gray-50'><SiPostman/><span className='text-base'>Postman</span></div>

        </div>
        
      </div>
      
      
    </section>

    </span>
      
   
    </>
  )
}

export default page