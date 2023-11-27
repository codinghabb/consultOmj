import React from 'react'

//icons here
import { SiSimpleanalytics } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa";
import { SiAwsorganizations } from "react-icons/si";

export default function Service() {
  return (
    <div>
        <div className=' text-center'>
                <p className=' text-gray-500 mt-8 tracking-wider'>WHAT WE ARE BEST AT</p>
                 <h2 className=' text-5xl mt-20 font-semibold'>Our Services</h2>
        </div>
        <div className=' grid  grid-cols-3 mx-32'>
            <div className=' mx-12 py-5'>
                <div>
                    <SiSimpleanalytics className=' h-14 w-14 my-4' />
                </div>
                <p>Market Analysis</p>
                <p>Industry Overview</p>
                <p>We provide insights into the changing dynamics of the startup ecosystem and investment trends across different sectors.</p>
            </div>
            <div className=' mx-12 py-5'>
                <div>
                    <TbTargetArrow className=' h-16 w-16 my-4' />
                </div>
                <p>Target Market</p>
                <p>Our services are tailored for diverse business types and industries <br /> that can benefit from our expertise</p>
            </div>
            <div className=' mx-12 py-5'>
                <div>
                    <FaChartPie className=' h-16 w-16 my-4' />
                </div>
                <p>We continuously evaluate the positioning and offerings of other <br /> consulting firms to maintain a broad and competitive industry focus.</p>
            </div>
            <div className=' mx-12 py-5'>
                <div>
                     <SiAwsorganizations className=' h-16 w-16 my-4' />
                </div>
                <p>Organization and Management</p>
                <p>As the principal consultant at OMJ Consulting, we draw upon our extensive experience to provide tailored advice to a varied clientele. Should we plan to expand, we have a clear vision of the roles and expertise that will complement our services.</p>
            </div>
            <div className=' mx-12 py-5'>
                <div>

                </div>
            </div>
            <div className=' mx-12 py-5'>
                <div>

                </div>
            </div>
            <div className=' mx-12 py-5'>
                <div>

                </div>
            </div>
        </div>
        
    </div>
  )
}
