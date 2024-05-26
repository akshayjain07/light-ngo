import React from 'react'
// import herobg from "../assets"
import { herobg } from '../assets'

const Hero = () => {
  return (
    <>
     <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto h-full flex items-center px-4 md:px-8">
        <div className="text-white max-w-lg md:ml-10">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">Title</h1>
          <p className="text-xl md:text-2xl text-yellow-400 mt-4">This is delay text ...|</p>
          <p className="mt-6 leading-loose">
            We exist to improve the social and economic condition in and around Raipur and inspire and guide the youth to replicate our learnings across the nation.
          </p>
          <p className="mt-4 leading-loose">
            We exist to improve the social and economic condition in and around Raipur and inspire and guide the youth to replicate our learnings across the nation.
          </p>
        </div>
      </div>
    </section>
   
    <div className="relative bg-white pt-10 pb-10">
      {/* Green background box */}
      <div className="absolute inset-x-0 top-16 h-64 bg-green-400 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Our Mission */}
          <div className="bg-white border border-gray-200 py-10 px-6 rounded-lg shadow-md w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-purple-600">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              We exist to improve the social and economic condition in and around Kharagpur and inspire and guide the youth to replicate our learnings across the nation. This is where we go our mission.
            </p>
            <a href="#mission" className="mt-4 inline-block text-yellow-500 hover:underline">
              Read more &rarr;
            </a>
          </div>

          {/* Our Vision */}
          <div className="bg-white border border-gray-200 py-10 px-6 rounded-lg shadow-md w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-purple-600">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              We exist to improve the social and economic condition in and around Kharagpur and inspire and guide the youth to replicate our learnings across the nation. This is where we go our mission.
            </p>
            <a href="#vision" className="mt-4 inline-block text-yellow-500 hover:underline">
              Read more &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
    </>

    //  <section
    //   className="relative w-full h-screen bg-cover bg-center"
    //   // style={{ backgroundImage: `url(${backgroundImage})` }}
    // >
    //   <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    //   <div className="relative container mx-auto h-full flex items-center">
    //     <div className="text-white max-w-lg ml-10">
    //       <h1 className="text-5xl font-bold text-yellow-400">Title</h1>
    //       <p className="text-2xl text-yellow-400 mt-4">This is delay text ...|</p>
    //       <p className="mt-6 leading-loose">
    //         We exist to improve the social and economic condition in and around Raipur and inspire and guide the youth to replicate our learnings across the nation.
    //       </p>
    //       <p className="mt-4 leading-loose">
    //         We exist to improve the social and economic condition in and around Raipur and inspire and guide the youth to replicate our learnings across the nation.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Hero