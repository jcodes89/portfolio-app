'use client'
import React, {useRef as UseRef} from 'react'
import Link from 'next/link'
import { useGSAP as UseGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styles from '@/app/css/contact.module.css'

const page = () => {

  const container = UseRef()
  gsap.registerPlugin(ScrollTrigger)

  UseGSAP(() => {
    gsap.to('.contact', {
      color: '',
      ease:'expo',
      duration:1,
      visibility:'visible',
      delay:0,
      
    })
    
    
  }, {scope: container})
  return (
    <>
    
    <span className='h-full w-full bg-[url("../public/images/pawel-czerwinski-fRzUPSFnp04-unsplash.jpg")] bg-cover bg-center absolute z-10'/>

      <main ref={container} className=' h-screen w-full text-gray-50 flex flex-col justify-center  '>
        <div className='contactContainer relative z-30  text-center'>
          <div className='contactHead'>
            <h2 className='text-4xl 2xl:text-6xl'>Reach Out</h2>
          </div>
          <div>
            <ul className='text-2xl 2xl:text-4xl pt-2'>
              <li  className='py-4'>
                Email: <Link id='contactEmail' href={'mailto:jeremy.sluder@gmail.com'} target='_blank' type='email' className={`contact btn-link  font-bold hover:text-gray-50 ${styles.email}`}>Jeremy.Sluder@gmail.com</Link>
              </li>
              <li id='contactLinked' className='py-4'>
                <Link href={'https://www.linkedin.com/in/jeremy-sluder-0077b099/'} target='_blank' className={`${styles.linked} contact  btn-link  font-bold hover:text-gray-50 `}>LinkedIn</Link>
              </li>
              <li id='contactGit' className='py-4'>
                <Link href={'https://github.com/jcodes89'} target='_blank' className={`${styles.git} contact btn-link font-bold hover:text-gray-50`}>Github</Link>
              </li>
            </ul>
          </div>
        </div>

      </main>
    </>
  )
}

export default page