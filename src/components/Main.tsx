'use client'
import React from 'react'
import { Button } from "@/components/ui/button"


function Main() {
    function clicked(){
        console.log("hi")
    }
  return (
    <div className='md:m-9 ml-5 mr-5 flex flex-col  '>
      <div className='mb-5 mt-5'>
        <h1 className='text-sm md:text-sm mb-5'>EMPOWERING FARMERS WITH CUTTING-EDGE AI TECHNOLOGY</h1>
      </div>
      <div className='flex flex-col'>
        <span className='text-4xl md:text-[3.7vw] font-light'>AI-POWERED</span> <br /> 
        <span className='text-4xl md:text-[3.7vw] font-semibold'>AGRICULTURE AT</span> <br />
        <span className='text-4xl md:text-[3.7vw] font-semibold'>YOUR FINGERTIPS</span> <br />
      </div>
      <div className='md:w-3/4 mt-5'>
        <span className='text-sm md:text-sm'>Enter details of your soil and weather, and find best suitable crop for farming. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, accusamus!</span>
      </div>
      <div className='mt-10'>
        <Button onClick={clicked} className='p-3 pr-14 pl-14 text-black border-2 border-black rounded-3xl font-semibold bg-white hover:text-white'>Try Now</Button>
        <span className='pt-3 pb-3 pl-4 pr-4 bg-black text-white rounded-[100%]'>{"->"}</span>
      </div>
    </div>
  )
}

export default Main
