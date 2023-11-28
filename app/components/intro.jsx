import Image from 'next/image'
import React from 'react'
import Logo from 'public/images/business.jpg'
import Service from 'public/images/services.png'

export default function Intro() {
  return (
    <>
        <div className='flex justify-between border-t-2 flex-col md:flex-row mx-4 md:mx-44'>
            <div className=' mt-36'>
                <p className=' text-xs text-gray-500 mt-4'>About</p>
                <h1 className=' text-4xl tracking-[0.2em] my-4'>Who we are</h1>
                <p className=' flex-wrap text-gray-400'> We are committed to offering versatile and impactful consulting services.</p>
            </div>
            <Image alt='logo'
             src={Logo}
             width={620}
             className=' mt-28 mb-4'
            />
        </div>
        <div className='flex justify-between border-t-2 flex-col md:flex-row mx-4 md:mx-44'>
            <div className=' mt-36'>
               
                <h1 className=' text-4xl tracking-[0.2em] my-4'>What we do</h1>
                <p className=' flex-wrap text-gray-400'> We provide insights into the changing dynamics of the startup ecosystem and  <br />investment trends across different sectors.</p>
            </div>
            <Image 
             src={Service}
             alt='service'
             width={310}
             className=' mt-28'
             />
        </div>
    </>
  )
}
