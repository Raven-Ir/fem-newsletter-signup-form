import React from 'react'
import { ReactComponent as DesktopDesign } from '../assets/images/illustration-sign-up-desktop.svg'
import { ReactComponent as IconList } from '../assets/images/icon-list.svg'
import { useState } from 'react'
import {CheckEmailCredibility}  from '../Functions'

const SignUp = ( {signedUp} ) => {
  const [inputValue, setInputValue] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  const subscribe = () => {
    if(CheckEmailCredibility(inputValue)){
      signedUp(CheckEmailCredibility(inputValue), inputValue);
    } else {
      setValidEmail(false);
    }
  }

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>       
      <div className="flex w-[700px] h-[500px] bg-white p-2 rounded-3xl">
        <div className='m-6 w-1/2 bg-inherit'>
          <div className='text-4xl text-center m-4 font-bold text-[#242742] bg-white'>Stay updated!</div>
  
          <p className='text-[#242742] text-justify font-bold mb-2 bg-white'>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          
          <div className='bg-inherit flex p-1'>
            <IconList className=' bg-transparent'/>
            <p className='bg-inherit text-sm ml-1'> Product discovery and building what matters </p>
          </div>    

          <div className='bg-inherit flex p-1'>
            <IconList className=' bg-transparent'/>
            <p className='bg-inherit text-sm ml-1'> Measuring to ensure updates are a success </p> 
            
          </div>  
          <div className='bg-inherit flex p-1 pb-6'>
            <IconList className=' bg-transparent'/>
            <p className='bg-inherit text-sm ml-1'> And much more! </p>
            
          </div>          
          <label for='email' className='bg-white text-xs font-bold text-[#242742] '>Email Address</label>
           {validEmail ? 
             
    
              <input 
                type='text' 
                className='border bg-white border-gray-300 h-12 w-[284px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#242742] hover:ring-1 hover:ring-[#36384e] cursor-pointer p-2'
                placeholder='Enter your email here'
                value={inputValue}
                onChange={handleInputValue}
              />
            :
            <>
            <label className='bg-transparent text-red-500 pl-24 text-xs font-bold'>Valid email required</label>
            <input 
                type='text' 
                className='border text-red-500 bg-red-200 border-red-400 h-12 w-[284px] rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 hover:ring-1 hover:ring-red-600 cursor-pointer p-2'
                placeholder='Enter your email here'
                value={inputValue}
                onChange={handleInputValue}
              /> </>

           }
          
          <button 
            className='w-[284px] h-12 rounded-lg bg-[#242742] text-white hover:bg-gradient-to-r from-[#ff577b] to-[#ff7300] mt-4'
            type='sumbit'
            onClick={subscribe}> 
            Subscribe to monthly newsletter</button>
        </div>

        <div className='hidden md:block md:w-1/2 md:bg-white md:m-2 '>
          <DesktopDesign className=' bg-transparent max-h-full pr-10'/>
        </div>
      </div>
      
    </div>
  )
}

export default SignUp