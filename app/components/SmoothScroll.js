'use client'
import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

function SmoothScroll({children}){
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll