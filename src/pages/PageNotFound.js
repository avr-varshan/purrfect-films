import React, { useEffect } from 'react'
import DefaultDark from '../assets/pageNotFound.jpeg'
import DefaultLight from '../assets/pageNotFoundLight.jpeg'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {

  useEffect(()=>{
    document.title = "Page Not Found"
  })

  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-5xl text-gray-700 font-bold my-10 dark:text-white'>
            404, Oops!
          </p>
          <div className='max-w-lg dark:block hidden'>
            <img src={DefaultDark} alt="404 Page Not Found" />
          </div>
          <div className='max-w-lg dark:hidden'>
            <img src={DefaultLight} alt="404 Page Not Found" />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Back to Home
            </button>
            
          </Link>
        </div>
      </section>
    </main>
  )
}
