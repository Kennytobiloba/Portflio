import React from 'react'
import imageone from "../../assets/food.png"
import imagetwo from "../../assets/portflio.png"
import imagethree from "../../assets/foodTwo.png"
import imageFour from "../../assets/port.png"
import imageFive from "../../assets/learn.png"
import imageSix from "../../assets/capture.png"
import imageSeven from "../../assets/capture.png"
import imageEight from "../../assets/bgFive.png"

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5 ' id="work">
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'> Check out some of my recent work</p>

        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
             shadow-lg shadow-[#040c16] group container rounded-md flex
              justify-center mx-auto content-div h-[200px] bg-cover relative'>
                <img src={imageEight} alt="" className='object-cover w-full h-full' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href="https://bookrent.vercel.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white
                             text-gray-700 font-bold text-lg'>Live</button>
                        </a>

                    </div>
                </div>

            </div>





            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
             shadow-lg shadow-[#040c16] group container rounded-md flex-cover relative justify-center mx-auto content-div h-[200px] bg'>
              
                <img src={imageSix} alt="" className='object-cover w-full h-full' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href="https://fashionwebsie.vercel.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white
                             text-gray-700 font-bold text-lg'>Live</button>
                        </a>

                    </div>
                </div>

            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
             shadow-lg shadow-[#040c16] group container rounded-md flex
              justify-center mx-auto content-div h-[200px] bg-cover relative '>
                <img src={imageone} alt="" className='object-cover w-full h-full' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href="https://fooddel-three.vercel.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white
                             text-gray-700 font-bold text-lg'>Live</button>
                        </a>

                    </div>
                </div>

            </div>
           







            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
             shadow-lg shadow-[#040c16] group container rounded-md flex
              justify-center mx-auto content-div h-[200px] bg-cover relative'>
                <img src={imagethree} alt="" className='object-cover w-full h-full' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href="https://jumia-clone-delta.vercel.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white
                             text-gray-700 font-bold text-lg'>Live</button>
                        </a>

                    </div>
                </div>

            </div>
            

            
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
             shadow-lg shadow-[#040c16] group container rounded-md flex
              justify-center mx-auto content-div h-[200px] bg-cover relative'>
                <img src={imageFive} alt="" className='object-cover w-full h-full' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href="https://learningwebsite.vercel.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white
                             text-gray-700 font-bold text-lg'>Live</button>
                        </a>

                    </div>
                </div>

            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
             shadow-lg shadow-[#040c16] group container rounded-md flex
              justify-center mx-auto content-div h-[200px] bg-cover relative'>
                <img src={imagetwo} alt="" className='object-cover w-full h-full' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href=" https://digitalwebsite-ujcf-9rn191l2j-kennytobiloba.vercel.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white
                             text-gray-700 font-bold text-lg'>Live</button>
                        </a>

                    </div>
                </div>

            </div>






        </div>

    </div>
  )
}

export default Work