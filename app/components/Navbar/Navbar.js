'use client'
import React from 'react'
import Link from 'next/link'
import styles from '../../css/nav.module.css'
import {Titillium_Web } from "next/font/google";
import { SlMenu } from "react-icons/sl";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
const titilliumBold = Titillium_Web({weight: ['900'], subsets: ["latin"] });
import Dropdown from './Dropdown';




const Navbar = () => {

  return (
    <nav className='h-14 w-full flex flex-row justify-between items-center text-xl font-semibold text-accent md:text-2xl absolute z-50'>
      <div className='header-left pl-4 '>
        <div className='text-base md:text-lg hover:text-gray-50 2xl:text-2xl'>
          <Link  href={'/'} className={styles.logo} >
            Jeremy Sluder
          </Link>
          <span className={styles.hide}>
            <span className={titilliumBold.className}>
              Home
            </span>
          </span>
        </div>
      </div>
      <div className='header-right pr-1'>
        <ul className='flex'>
          <li className=''>
            <Dropdown/>
            <div className=''>
              <ul className=" hidden md:flex md:flex-row  border-gray-50 text-xl 2xl:text-2xl">
                    <li className='px-2 hover:text-gray-50'>
                      <Link href='/work' className={styles.linked}>Projects</Link>
                    </li>
                    <li className='px-2 hover:text-gray-50'>
                      <Link href='/contact'  className={styles.linked}>Contact</Link>
                    </li>
                    <li className='px-2 hover:text-gray-50'>
                      <Link href='/about' className={styles.linked}>About</Link>
                    </li>
                    <li className='pl-2 pr-3 hover:text-gray-50'>
                      <Link href='/resume' target='_blank'  className={styles.linked}>Resume</Link>
                    </li>
                    <li className='pb-0'>
                      <Link href='https://www.linkedin.com/in/jeremy-sluder-0077b099/'  aria-label="LinkedIn Tab that takes user to linkedin profile" target='_blank' className={styles.linked}><FaLinkedin className="text-3xl  hover:text-gray-50 2xl:text-3xl"></FaLinkedin></Link>
                      <span className={styles.hideLink1}>
                        <span className={titilliumBold.className}>
                          LinkedIn
                        </span>
                      </span>
                    </li>
                    <li>
                      <Link href='https://github.com/jcodes89' aria-label='Github Tab that takes user to github profile'  target='_blank' className={styles.github}><FaGithubSquare className="text-3xl ml-2 hover:text-gray-50 2xl:text-3xl"></FaGithubSquare></Link>
                      <span className={styles.hideLink2}>
                        <span className={titilliumBold.className}>
                          Github
                        </span>
                      </span>
                    </li>
                  </ul>
            </div>
          </li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar