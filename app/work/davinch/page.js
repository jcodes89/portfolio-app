import Image from 'next/image'
import React from 'react'
import davinchMain from '@/public/Images/main.jpg'
import ProjectMain from '@/app/components/Work/Project/ProjectMain'
import Davinch from '@/app/components/Work/DavinchStack'
import DavinchImages from '../../components/Work/Project/DavinchImageList'



const page = () => {

  
  return (
    <ProjectMain
      projectImage={davinchMain}
      projectHeading='Davinch Leather Co.'
      href='https://davinchleatherco.com'
      projectCategory='Website'
      projectTechList={Davinch.map((item) => {
        return(
          <li key={item.id}>{item.tech}</li>
        )
      })}
      projectYear='2024'
      projectDescription='Website designed and developed by myself showcasing the leather products that Davinch Leather Co creates.  Features a bespoke, gallery, contact, and about page with minor animations.'
      projectImages={DavinchImages.map((img) => {
        return(
          <div key={img.id} className='my-6'>
            <Image src={img.src} alt='screenshot of Davinch Leather Website' className='h-auto'/>
          </div>
          
        )
      })}
    />
  )
}

export default page
