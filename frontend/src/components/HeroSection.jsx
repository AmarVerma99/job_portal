import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5  my-10'>
        <span className='mx-auto px-4py-2 rounded-full bg-gray-100 text-red-500'>No.1 job portal</span>
       <h1 className='text-5xl font-bold '>search,apply & <br /> get your <span className='text-purple-600'>Dream Job</span></h1>
       <p>Explore thousands of openings in tech roles such as Web Development, AI/ML, Data Science, and Software Engineering.</p>
       <div className='flex w-[40%] shading-lg border border-gray-200 pl-1 rounded-full items-center gap-4 mx-auto'>
        <input type="text"  placeholder='find your dream jobs' className='outline-none border-none w-full' />
        <Button className="rounded-r-full bg-purple-500">
         <Search className='h-5 w-5'></Search>   
        </Button>
       </div>
       </div>
   </div>
  )
}

export default HeroSection