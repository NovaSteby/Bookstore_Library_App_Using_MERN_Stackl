import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' flex'>
        <div className='w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center'>
            <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left'>
               Discover The World of Books
            </h1>
            <p className='mt-4 text-xl text-zinc-300'>
                Uncover captivating stories,enriching knowledge, and endless inspiration in our curated collection of books
            </p>
            <div className='mt-8'>
                <Link
                    to="/all-books" className='text-yellow-100 text-2xl font-semibold border border-yellow-100 px-10 py-2 hover:bg-zinc-800 rounded-full'>
                    Discover Now
                </ Link>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
