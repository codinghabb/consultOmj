"use client"
import Link from 'next/link'
import React from 'react';
import { useState } from 'react';



export default function Header() {
  // for mobile click
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

 
   
 
  return (
    
    <header className=' mt-4 pt-4 flex flex-wrap  items-center justify-between mx-5 md:mx-16'>
       

          <Link href="/">
                <h1 className=' text-2xl font-bold  underline underline-offset-8 '>Consult OMJ</h1>
          </Link>
              

                    <nav className='  text-gray-400 md:mr-2'>
                        
                        <ul className='hidden w-full md:flex justify-between  md:mr-3'>
                            <li>
                                <Link href="/about">
                                About
                                </Link>
                            </li>
                            <li>
                                <Link className='' href="/services" >
                                    Services
                                </Link>
                            </li>
            
                        </ul>

                
                    </nav>
                   <Link  className=' bg-black text-white px-6 py-2 hidden md:block' href="/contact" >
                        Contact Us
                    </Link>
                  
              

              <div className='pr-[2px] md:hidden'>
                <button onClick={toggleNavBar}>
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="black"
                      className="w-6 h-6"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="black"
                      className="w-6 h-6"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )}
                </button>
              </div>
              {isOpen && (
                <ul className='flex flex-col gap-4 text-2xl mt-4 items-start basis-full pl-2 md:hidden'>
                  <li>
                     <Link href="/about">
                      About
                    </Link>
                  </li>
                  <li>
                     <Link href="/services" >
                        Services
                    </Link>
                  </li>
                  <li>
                     <Link  className=' bg-black text-white px-6 py-2' href="/contact" >
                        Contact Us
                    </Link>
                  </li>
                  
                
                </ul>
              )}
        
    </header>
 
  );
}