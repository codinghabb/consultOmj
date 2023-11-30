import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'
export default function Banner() {
  return (
    <>
        <div className='banner'>
                <h2 className=' text-gray-100 text-2xl mt-40 md:text-6xl md:tracking-wide md:mt-52'>Grow  your business</h2>
                <Link href='/about' className=' bg-white font-light text-black my-10 py-4 px-11 tracking-wider items-center mx-auto'>LEARN MORE</Link>
        </div>
       <div className='intro'>
          <p className=' text-gray-400 text-xs md:tracking-widest'> WHAT WE BELIEVE IN</p>
          <h2 className=' text-2xl tracking-wide font-semibold  mt-4 mb-14'> We  believe in helping companies achieve growth, attract investors, <br /> and navigate the complexities of expansion.</h2>

       </div>
    </>
    

  )
}
