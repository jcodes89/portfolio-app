// 'use client'
import React, {useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Observer from 'gsap/Observer'
import styles from '../../css/work-card.module.css'

const WorkHeroCard = (props) => {
  gsap.registerPlugin(ScrollTrigger, Observer)
  const container = useRef()

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.pause()
    
    tl.to('#hideCard', {
      display:'block',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: '.9',
      duration: 1, 
      ease: 'expo.inOut',
      stagger:1,
      
      
    })
    .to('#hideHead', {
      display:'block',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: '1',
    })
    .to('#hideBtn', {
      display:'flex',
      flexDirection: 'row',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: '1',
      width: '100%',
      justifyContent: 'center'
 
    })
    .to('#hideList', {
      display:'block',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: '1',
      
    })
    

  Observer.create({
    target: '#img',
    type: 'touch, wheel, pointer',
    onClick: ()=> {
      tl.play()
      
    },
    onRelease: () => {
      tl.reverse()
    },
    onHover: () => {
      tl.play()
    },
    onHoverEnd: () => {
      tl.reverse()
    },

  })

  }, {scope: container})

  return (
    <div  ref={container}  className='card  lg:w-full  p-0 shadow-md shadow-primary rounded-md my-3 hide hidden -translate-x-[1000px]'>
        <div id='img'  className='projectImage p-0  h-fit w-auto'>
              <Image fetchPriority='high' loading='eager' src={props.projectImage} className='image rounded-md w-auto cursor-pointer' alt='Image of different web developer projects'/>
           
          <div  id='hideCard' className={styles.hiddenCard}>
            <div id='hideHead' className={styles.hiddenHeading}>
              <h2 className='text-lg pt-2 md:text-xl '>{props.projectHeading}</h2>
            </div>
            <div id='hideBtn' className={styles.hiddenBtn}>
              <Link href={`/work/${props.projectLink}`}  className='btn hover:bg-primary xl:text-xl mr-1' >
                View Project
              </Link>
              <Link href={`https://github.com/jcodes89/${props.githubLink}`} target='_blank'  className='btn hover:bg-primary xl:text-xl ml-1' >
                GitHub
              </Link>
            </div>
            <div id='hideList' className={styles.hiddenList}>
              <ul className=' inline-flex pb-2 '>
                  {props.listItem}
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WorkHeroCard

