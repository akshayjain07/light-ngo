import React from 'react'
// import herobg from "../assets"
import { herobg, initiative1, initiative2, initiative3, Testimonials } from '../assets'
// import WebDTeam from './WebDTeam'

const Hero = () => {
  return (
    <>

    {/* part 1  */}

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
   

   {/* part 2  */}

    <div className="relative bg-white pt-10 pb-10">
      {/* Green background box */}
      <div className="absolute bottom-0 right-0 w-4/5 h-4/5 lg:h-64 bg-green-400 z-0"></div>
      
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
    

    {/* part 3  */}
    
    <div className="relative bg-white pt-10 pb-28 ">

      <div className=' text-[20px] md:text-[30px] lg:text-[3vw] text-orange-600 justify-center text-center font-bold py-10 z-0'> <p>Our Initiatives</p> </div>
      {/* Green background box */}
      <div className="absolute bottom-0 left-0 w-4/5 h-4/5 md:h-64 lg:h-96 bg-orange-400 z-0 justify-center items-center"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-center gap-8 justify-center items-center">
          {/* Our Initiative Images */}

          <div><img src={initiative1} alt="initiative1" /></div>
          <div><img src={initiative2} alt="initiative2" /></div>
          <div><img src={initiative3} alt="initiative3" /></div>
          {/* <div className="bg-white border border-gray-200 py-10 px-6 rounded-lg shadow-md w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-purple-600">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              We exist to improve the social and economic condition in and around Kharagpur and inspire and guide the youth to replicate our learnings across the nation. This is where we go our mission.
            </p>
            <a href="#mission" className="mt-4 inline-block text-yellow-500 hover:underline">
              Read more &rarr;
            </a>
          </div>

          <div className="bg-white border border-gray-200 py-10 px-6 rounded-lg shadow-md w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-purple-600">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              We exist to improve the social and economic condition in and around Kharagpur and inspire and guide the youth to replicate our learnings across the nation. This is where we go our mission.
            </p>
            <a href="#vision" className="mt-4 inline-block text-yellow-500 hover:underline">
              Read more &rarr;
            </a>
          </div> */}
        </div>
      </div>
    </div>

    {/* part 4 */}

    <div className="flex justify-center items-center h-screen">
      <img src={Testimonials} alt="Testimonials" className="max-w-full h-auto" />
    </div>

    </>

  )
}

export default Hero