import React from 'react'
import Link from 'next/link'
import styles from '../../css/nav.module.css'
import {Titillium_Web } from "next/font/google";

const titilliumBold = Titillium_Web({weight: ['900'], subsets: ["latin"] });


const Navbar = () => {
  return (
    <nav className='h-14 w-full flex flex-row justify-between items-center text-xl font-semibold text-accent md:text-2xl absolute z-50'>
      <div className='header-left pl-4 '>
        <div className='text-base md:text-lg hover:text-gray-50 2xl:text-2xl'>
          <Link href={'/'} className={styles.logo} >
            Jeremy Sluder
          </Link>
          <span className={styles.hide}>
            <span className={titilliumBold.className}>
              Home
            </span>
          </span>
        </div>
      </div>
      <div className='header-right pr-4'>
        <ul className='flex'>

          <li className=''>
            <div className="dropdown dropdown-bottom dropdown-left md:hidden text-xl flex flex-col justify-center items-middle w-full">
              <div className='' tabIndex="0"><i className=" focus:rotate-90 after::rotate-90  fa-solid fa-bars cursor-pointer btn"></i></div>
                <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow-md shadow-primary border-gray-50 bg-primary rounded-box w-18 flex items-center">
                  <li>
                    <Link href='/work' className='my-1 hover:bg-accent hover:text-primary text-lg text-center'>Projects</Link>
                  </li>
                  <li>
                    <Link href='/contact' className='my-1 hover:bg-accent hover:text-primary text-lg text-center'>Contact</Link>
                  </li>
                  <li>
                    <Link href='/about' className='my-1 hover:bg-accent hover:text-primary text-lg text-center'>About</Link>
                  </li>
                  <li>
                    <Link href='/resume' className='my-1 hover:bg-accent hover:text-primary text-lg text-center'>Resume</Link>
                  </li>
                  <li>
                    <Link href='https://www.linkedin.com/in/jeremy-sluder-0077b099/' target='_blank' className='my-1 hover:bg-accent hover:text-primary'><i className="fa-brands fa-linkedin text-3xl"></i></Link>
                  </li>
                  <li>
                    <Link href='https://github.com/jcodes89' target='_blank' className='hover:bg-accent hover:text-primary'><i className="fa-brands fa-github text-3xl"></i></Link>
                  </li>                 
                </ul>
            </div>
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
                      <Link href='/resume' className={styles.linked}>Resume</Link>
                    </li>
                    <li>
                      <Link href='https://www.linkedin.com/in/jeremy-sluder-0077b099/' target='_blank' className={styles.linked}><i className="fa-brands fa-linkedin text-2xl px-3 pl-0 hover:text-gray-50 2xl:text-3xl"></i></Link>
                      <span className={styles.hideLink1}>
                        <span className={titilliumBold.className}>
                          LinkedIn
                        </span>
                      </span>
                    </li>
                    <li>
                      <Link href='https://github.com/jcodes89' target='_blank' className={styles.github}><i className="fa-brands fa-github text-2xl hover:text-gray-50 2xl:text-3xl"></i></Link>
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