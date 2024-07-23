import React from 'react'
import './Contact.css';
function Contact() {
   
  return (
    <div className='h-full flex flex-row p-10 flex-1 gap-2 bg-black bg-opacity-10' >
      <div className=' w-[50%]  h-fit'>
        <h1>Let's Connect</h1>
        <br />
        <p className=''>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      </div>
      <div className=' w-[50%] flex flex-col align-middle  '>
        <form action="" className='flex flex-col font-semibold'>
            <label  htmlFor="Email">Your Email</label>
            <input type="email" autocomplete="off" name="text" class="input" placeholder="Type your email"/>            <br />
            <label htmlFor="Subject">Subject</label>
            <input type="text" autocomplete="off" name="text" class="input" placeholder="Subject"/>            <br />
            <br />
            <label htmlFor="Message">Message</label>
            <input type="text" autocomplete="off" name="text" id='message' class="input" placeholder="Let's talk about ...."/>            <br />
            <br />
            <button className='p-2 w-auto ' >Send Message</button>
        </form>

      </div>
    </div>
  )
}

export default Contact
