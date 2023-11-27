import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <>
        <div className='banner'>
        
            <h2 className=' text-gray-100 text-2xl md:text-6xl md:tracking-wide md:mt-52'>Grow  your business</h2>
            <p className=' text-gray-200 line-clamp-2 md:line-clamp-none md:my-8'>Our mission is to empower startups and small businesses across diverse industries</p>
            <Link href='' className=' bg-white font-light text-black py-4 px-11 tracking-wider items-center mx-auto'>LEARN MORE</Link>
       </div>
       <div className='intro'>
          <p className=' tracking-widest text-gray-400 text-xs'> WHAT WE BELIEVE IN</p>
          <h2 className=' text-2xl tracking-wide font-semibold line-clamp-2 mt-4 mb-14'> We  believe in helping companies achieve growth, attract investors, <br /> and navigate the complexities of expansion.</h2>

       </div>
    </>
    

  )
}
