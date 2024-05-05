'use client'
import React, {useRef as UseRef} from 'react'
import WorkHeroCard from '../components/Work/WorkHeroCard'
import davinch from '@/public/images/davinchsite.webp'
import relief from '@/public/images/relief.webp'
import portfolio from '@/public/images/portfolio.webp'
import gsap from 'gsap/gsap-core'
import { useGSAP as UseGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import DavinchStack from '../components/Work/DavinchStack'
import ReliefStack from '../components/Work/ReliefStack'
import PortfolioStack from '../components/Work/PortfolioStack'


const page = () => {
  
  const container = UseRef()

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline()

  UseGSAP(() => {
    gsap.to('.hide', {
      display: 'block',
      ease: 'expo',
      x: 0,
      duration: 1,
      stagger: 1
    }
    )

  }, {scope: container})


  return (
    <>
    <span className='h-[130vh] lg:h-[180vh] xl:h-[130vh]   w-full bg-[url("../public/images/pawel-czerwinski-fRzUPSFnp04-unsplash.webp")] bg-cover bg-center absolute z-0'/>
    <main ref={container} className='w-auto h-fit relative top-16 grid grid-cols-1 place-items-center xl:grid-cols-2 xl:gap-3 px-4'>
      <span className=' z-20 h-fit pt-5'>
        <p className='parClick text-white lg:hidden'>Please click any project to learn more!</p>
        <p className='parHover hidden text-white lg:flex'>Please hover over any project to learn more!</p>
      </span>
      <WorkHeroCard
        projectLink='my-portfolio'
        githubLink='Portfolio-V2'
        projectImage={portfolio}
        projectHeading='JeremyDev Portfolio'
        listItem={PortfolioStack.map((item) => {
          return(
            <li key={item.portfolioId} className='p-[.2rem] text-sm lg:text-lg hover:text-primary cursor-default'>{item.tech}</li>
          )
        })}
      />
      <WorkHeroCard
        projectLink='davinch'
        githubLink='Davinch-Leather-App-V2'
        projectImage={davinch}  
        projectHeading='Davinch Leather Co.'
        listItem={DavinchStack.map((item) => {
          return(
            <li key={item.davinchId} className='p-[.2rem] text-sm lg:text-lg hover:text-primary  cursor-default'>{item.tech}</li>
          )
        })}
      />
      <WorkHeroCard
        projectLink='relief-app'
        githubLink='New-Relief-App'
        projectImage={relief}
        projectHeading='Disaster Relief App'
        listItem={ReliefStack.map((item) => {
          return(
            <li key={item.reliefId} className=' p-[.2rem] text-sm lg:text-lg hover:text-primary cursor-default'>{item.tech}</li>
          )
        })}
      />
    </main>
    
    </>
  )
}

export default page