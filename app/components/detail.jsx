import Image from 'next/image'
import React from 'react'


//icons
import { FaTelegramPlane } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";
import { IoMdMailUnread } from "react-icons/io";

//image
import CEO from 'public/images/graduate.jpg'

import Link from 'next/link'

export default function Detail() {
  return (
    <>
      <div className='bg-black h-96 mt-10 mx-10'>
              <h1 className='text-white text-center text-6xl pt-40'>About us</h1>
        </div>

        <div className='my-20 text-center'>
              <p className='text-gray-500 text-3xl'>MEET THE C.E.O</p>
              <Image alt='ceo' src={CEO} width={300} height={400} sharp className=' mx-auto ' />
              <p className=' text-3xl my-4'>Omojola Ayodele </p>
              <p className='text-gray-500 mx-4'>With my MBA in International Business and a rich global experience, <br /> am dedicated to offering innovative consulting services that bridge business, cultural, and creative divides. <br /> As the founder and principal consultant, <br /> I leverage my vast experience to offer innovative solutions that cater to a wide range of industries.</p>
              <div className='flex justify-between w-60 mx-auto mt-4'>
                <Link href="https://t.me/Omj_Consulting">
                  <FaTelegramPlane className=' w-6 h-6' />
                </Link>
                <Link href="ayodeleomojolag@gmail.com">
                      <IoMdMailUnread className=' w-6 h-6' />
                </Link>
                <Link href="https://open.kakao.com/o/sUyPx0nf">
                   <SiKakaotalk className=' w-6 h-6' />
                </Link>
              </div>
        </div>
          
    
        
        <h2 className=' text-center text-3xl pt-20'> At Consult Omj <br /> we’re a group of creative thinkers <br /> who have built a business to change <br /> the world.</h2>
          

        <div className=' mx-7 md:mx-44 mt-10 text-center py-10'>
            <p className='text-gray-500'>OMJ Consulting, We offer a range of core services including pitch deck development, <br />
             investor relations strategy, business strategy, sales strategy, and risk management strategies. <br />
            Our target market encompasses a broad spectrum of small businesses and startups across various industries, <br />
             all seeking expert guidance in expansion and investor engagement.</p>
        </div>
          
        <div className=' mx-7 md:mx-44  text-center py-16'>
             <p className=' my-10 text-gray-500'>OMJ Consulting is not just a business; it&#39;s a commitment to offering industry-agnostic advisory services, with a special emphasis on startups and small businesses seeking expansion and investor attraction. Our unique selling proposition is our experience and our MBA in International Business, coupled with our track record in global business development, positioning our uniquely to provide high-value, versatile consulting services.
            Leveraging my MBA in International Business and my extensive experience in global business development, I am committed to offering versatile and impactful consulting services.</p>
            <p className=' my-10 text-gray-500' >With OMJ Consulting’s broad approach and my unique background, I am positioned to become a vital resource for businesses seeking to navigate growth, investment, and expansion challenges in an ever-evolving marketplace.</p>
        </div>
    </>
  )
}
