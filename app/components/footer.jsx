import React from 'react'

export default function Footer() {
  return (
    <>
    
        <div className=' flex justify-center mt-10 md:hidden'>
           <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202404.9141679698!2d126.80933023055425!3d37.565033714635675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d5c39cf%3A0x7e11eca1405bf29b!2sSeoul%2C%20South%20Korea!5e0!3m2!1sen!2sng!4v1701339617367!5m2!1sen!2sng"
                width="300"
                height="400"
                style={{ border: '0' }} 
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >

              </iframe>
          </div>
        <div className='mt-16 hidden md:flex justify-center'>
             <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202404.9141679698!2d126.80933023055425!3d37.565033714635675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d5c39cf%3A0x7e11eca1405bf29b!2sSeoul%2C%20South%20Korea!5e0!3m2!1sen!2sng!4v1701339844634!5m2!1sen!2sng"
          width="800"
          height="300"
          style={{ border: '0' }} 
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> </div>
        <div className='text-center mt-16 text-gray-400 mb-10'>
            <h2>OUR OFFICE</h2>
            <p>Company Address Seoul, South Korea</p>
            <h2> WORKING HOURS</h2>
            <p>Monday-Sunday 24/7</p>
            <h2> CONTACT</h2>
            <p>+821054310493</p>
        </div>
    </>
    
  )
}
