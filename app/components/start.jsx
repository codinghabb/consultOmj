import Link from 'next/link'
import React from 'react'

export default function Start() {
  return (
    <div className=' bg-gray-200 text-center mx-8 flex flex-col mt-16'>
        <h2 className=' text-5xl mt-20 font-semibold'>Grow your business</h2>
        <p className=' text-gray-500 mt-8'>With OMJ Consulting’s broad approach and my unique background, <br /> I am positioned to become a vital resource for businesses seeking to navigate growth, investment, <br /> and expansion challenges in an ever-evolving marketplace.</p>
        <Link href='' className='bg-black py-2 px-7 text-lg mb-14 mx-auto text-white mt-4'>Start now</Link>
    </div>
  )
}
