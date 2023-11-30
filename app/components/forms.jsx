import React from 'react'

export default function Forms() {
  return (
   
        <div className='border-2 text-center '>
            <form action="https://formsubmit.co/ayodeleomojolag@gmail.com" method="POST" >
                <h3 className=' text-2xl my-5'>NAME</h3>
                <input type="text" name="name" required  className='border-2 md:w-1/4 mb-2' />
                <h3 className=' text-2xl mt-5'>EMAIL</h3>
                <input type="email" name="email" required className='border-2 md:w-1/4 mb-2 ' />
                <h3 className=' text-2xl mt-5'>MESSAGE</h3>
                <textarea placeholder="Message....." class="form-control p-10 border rounded-lg" name="message" className='border-2 h-16 w-1/4 mb-2' />
              <br />
                <button type="submit" className='bg-black text-white py-4 px-16 mb-5'>Send</button>
            </form>
        </div>
        
   
    
  )
}
