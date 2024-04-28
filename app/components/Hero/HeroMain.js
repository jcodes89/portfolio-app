'use client'
import React, {useRef} from 'react'
import gsap from 'gsap/gsap-core';
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import styles from '../../css/hero.module.css'





const HeroMain = () => {
  gsap.registerPlugin(TextPlugin, useGSAP);
  const container = useRef()
  const stacks = ['Javascript','React','Next.js','MongoDB','Node.js',`Let's Create`]

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat:0, repeatDelay:0, yoyo: true
    })
    //gsap animation for each of the language stack to appear
    stacks.forEach((stack) => {
      tl.to('.language', {
        duration: 1,
        stagger: 1,
        ease: 'none',
        delay:2.5,
        text: {
          value: stack,
          newClass: 'newLanguage',
          delimiter: ''
        }
      })
    //gsap animation for hero text to appear on page load
    gsap.to('#heroMain',{
      x: 0,
      delay: 0,
      duration: 3,
      ease: 'expo',
      display: 'block',
      stagger:4,
      yoyo: true,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      padding: '1rem',
      width:'100%',
      marginTop: '1rem',
    })

    gsap.to('#heroCard', {
      duration: 1,
      delay: 0,
      ease: 'expo',
      boxShadow: '0 10px 15px -3px rgba(1, 105, 153, 1)',
      borderRadius: '0.375rem',
      
    })

    })
    
  }, {scope: container})
  

  

  return (
    <>
    <section ref={container} className=' w-full h-screen flex justify-center items-center absolute z-20 overflow-y-hidden'>
      <div className=' card h-fit w-full lg:w-[75%] xl:w-[50%]'>
        <div id='heroCard' className={`${styles.HeroCard} mx-3`}>
          <div id='heroMain' className='hidden translate-x-[400px] p-3 py-5 w-full rounded-md mt-4 text-accent'>
            <h2 className='text-[4rem] font-bold lg:text-[7rem] xl:text-[8rem]'>Web Developer</h2>
              <ul className='pb-1'>
                <li className=' text-lg font-bold text-gray-50  lg:text-2xl'> <span className='language'></span> </li>
              </ul>
              <p className='text-left pt-2 text-gray-50 lg:text-2xl'>Web developer dedicated to crafting seamless, user-centric digital experiences with a focus on precision and innovation.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HeroMain