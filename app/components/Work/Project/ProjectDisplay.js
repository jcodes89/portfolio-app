import React from 'react'
import Image from 'next/image'

const ProjectDisplay = (props) => {
  return (
        <div className='py-3'>
          <h3 className='text-center my-3'>Main Page</h3>
          <Image src={props.src} alt={props.alt}/>
        </div>
  )
}

export default ProjectDisplay