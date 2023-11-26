"use client"

import React from 'react';
import { useState } from 'react';



export default function Header() {
  // for mobile click
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

 
   
 
  return (
    
    <header className=' mt-4 pt-4 flex flex-wrap  items-center justify-between md:mx-16'>
       

        
              <h1 className=' text-2xl font-bold  underline underline-offset-8 '>Consult OMJ</h1>

                    <nav className='  text-gray-400 md:mr-2'>
                        
                        <ul className='hidden w-full md:flex justify-between  md:mr-3'>
                            <li>
                                <a href="https://twitter.com/habeebbii">
                                About
                                </a>
                            </li>
                            <li>
                                <a className='' href="https://www.linkedin.com/in/ademola-abdul-aa093b28a/" >
                                    Services
                                </a>
                            </li>
            
                        </ul>

                
                    </nav>
                <a  className=' bg-black text-white px-6 py-2' href="https://www.linkedin.com/in/ademola-abdul-aa093b28a/" >
                        Contact Us
                    </a>
                  
              

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
                     <a href="https://twitter.com/habeebbii">
                      About
                    </a>
                  </li>
                  <li>
                     <a href="https://www.linkedin.com/in/ademola-abdul-aa093b28a/" >
                        Services
                    </a>
                  </li>
                  <li>
                     <a href="https://www.linkedin.com/in/ademola-abdul-aa093b28a/" >
                        Contact Us
                    </a>
                  </li>
                  
                
                </ul>
              )}
        
    </header>
 
  );
}