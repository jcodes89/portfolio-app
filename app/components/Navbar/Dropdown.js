import React from 'react'
import { SlMenu } from 'react-icons/sl'
import Link from 'next/link'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Dropdown = () => {
  return (
    <>
    <details className="dropdown dropdown-hover dropdown-bottom dropdown-end md:hidden">
        <summary className="m-1 btn hover:bg-white active:bg-white focus:outline-none  scale-75 "><SlMenu className=" scale-150 focus:rotate-90 after::rotate-90  fa-solid fa-bars cursor-pointer  "></SlMenu></summary>
        <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow-md shadow-primary border-gray-50 bg-primary rounded-box w-18 flex items-center">
          <li>
            <Link href='/work'  aria-label='Project Tab' className='my-1 hover:bg-accent hover:text-primary text-lg text-center'>Projects</Link>
          </li>
          <li>
            <Link  aria-label='Contact Tab' href='/contact' className='my-1 hover:bg-accent hover:text-primary text-lg text-center'>Contact</Link>
          </li>
          <li>
            <Link  aria-label='About Tab' href='/about' className='my-1 hover:bg-accent hover:text-primary text-lg text-center'>About</Link>
          </li>
          <li>
            <Link  aria-label='Resume Tab' href='/resume' className='my-1 hover:bg-accent hover:text-primary text-lg text-center'>Resume</Link>
          </li>
          <li>
            <Link  href='https://www.linkedin.com/in/jeremy-sluder/'  aria-label="LinkedIn Tab that takes user to linkedin profile" target='_blank' className='my-1 hover:bg-accent hover:text-primary'><FaLinkedin className="text-3xl"></FaLinkedin></Link>
          </li>
          <li>
            <Link  href='https://github.com/jcodes89'  aria-label='Github Tab that takes user to github profile' target='_blank' className='hover:bg-accent hover:text-primary'><FaGithubSquare className=" text-3xl"></FaGithubSquare></Link>
          </li>                 
        </ul>
    </details>
    </>
  )
}

export default Dropdown