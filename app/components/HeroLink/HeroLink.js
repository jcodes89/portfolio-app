'use client'
import Link from 'next/link'
import React, {useRef} from 'react'
import styles from '../../css/hero-sub.module.css'


const HeroLink = (props) => {


  return (
    <div id='heroLink' className={styles.HeroLink} >
      <li className='links hidden w-full h-40 p-4 lg:h-96 rounded-md justify-center items-center shadow-lg shadow-accent text-secondary bg-[url("../public/images/pawel-czerwinski-fRzUPSFnp04-unsplash.jpg")] bg-right bg-no-repeat hover:shadow-lg hover:shadow-gray-50 hover:bg-right-top hover:text-accent hover:ease hover:duration-1000  hover:text-8xl '>
          <Link href={props.href} className=''>{props.link}</Link>
      </li>

    </div>
  )
}

export default HeroLink