import Image from 'next/image'
import React from 'react'
import portfolioMain from '@/public/images/portmain.webp'
import ProjectMain from '@/app/components/Work/Project/ProjectMain'
import Portfolio from '@/app/components/Work/PortfolioStack'
import PortfolioImages from '../../components/Work/Project/PortfolioImageList'

const page = () => {
  return (
    <ProjectMain
      projectImage={portfolioMain}
      projectHeading='JeremyDev.codes Portfolio [v2]'
      href='https://jeremydev.codes'
      projectCategory='Web Site'
      projectTechList={Portfolio.map((item) => {
        return(
          <li key={item.id}>{item.tech}</li>
        )
      })}
      projectYear='2024'
      projectDescription='Web site built using Next.js.  I created this project to showcase my web developer projects.  This project uses animation to create a engaging experience with the user.'
      projectImages={PortfolioImages.map((img) => {
        return(
          <div key={img.id} className='my-6'>
            <Image src={img.src} alt='screenshot of Relief Web App' className='h-auto border-[2px] rounded-md'/>
          </div>
          
        )
      })}
    />
  )
}

export default page
