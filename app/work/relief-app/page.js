import Image from 'next/image'
import React from 'react'
import reliefMain from '@/public/Images/relief.jpg'
import ProjectMain from '@/app/components/Work/Project/ProjectMain'
import Relief from '@/app/components/Work/ReliefStack'
import ReliefImages from '../../components/Work/Project/ReliefImageList'

const page = () => {
  return (
    <ProjectMain
      projectImage={reliefMain}
      projectHeading='Disaster Relief Web App'
      projectCategory='Web App'
      href='https://new-relief-app.vercel.app/'
      projectTechList={Relief.map((item) => {
        return(
          <li key={item.id}>{item.tech}</li>
        )
      })}
      projectYear='2023'
      projectDescription='Web application built using Next.js with MongoDB as the database.  This project focuses on user authentication and authorization.  The project uses CRUD operations. '
      projectImages={ReliefImages.map((img) => {
        return(
          <div key={img.id} className='my-6'>
            <Image src={img.src} alt='screenshot of Relief Web App' className='h-auto'/>
          </div>
          
        )
      })}
    />
  )
}

export default page
