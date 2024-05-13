'use client'
import { useState, useEffect } from "react"
import { FaArrowUpFromBracket } from "react-icons/fa6";


const ScrollTopBtn = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisible = () => {
           if(window.scrollY > 300) {
            setVisible(true)
           } else {
            setVisible(false)
           }
        }
    
        window.addEventListener('scroll', toggleVisible)
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  

  return (
    <button onClick={scrollTop} className={ visible ? `z-50 fixed btn  bottom-[8rem] m-2 bg-gray-50 hover:bg-accent text-accent hover:scale-[1.15] hover:text-gray-50` : `hidden`}>
        <FaArrowUpFromBracket className="fa-solid fa-arrow-up-from-bracket scale-[1.5]"/>
    </button>
  )
}

export default ScrollTopBtn