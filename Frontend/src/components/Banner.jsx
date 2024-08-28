import React from 'react'
import Navbar from './Navbar'
import banner1 from "../../public/banner1.avif";

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
     <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
     <div className="space-y-12">
     <h1 className="text-4xl font-bold">Hello, Welcome to Your Literary Haven.. <span className="text-pink-500">Learn and Grow!!</span></h1>
     <p className="text-xl">
     Discover a world of captivating stories and insightful reads. From thrilling adventures to life-changing wisdom, our collection is designed to inspire and enlighten. Find your next favorite book and let the journey begin.</p>
    

     </div>
     </div>
     <div className="order-1 w-full md:w-1/2 ">
     <img src={banner1} alt="" className="md:p-6" />
     </div>
     </div>
     </>
  )
}

export default Banner
