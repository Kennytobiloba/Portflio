import React from 'react';
import kenny from '../../assets/About.jpg';

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        {/* Text Section */}
        <div className='mt-4 md:mt-0 text-left flex flex-col justify-start py-6 md:py-0'>
          <h2 className='text-4xl font-bold mb-4 primary-color px-4 md:p-0'>
            About Me
          </h2>
          <p className='text-base md:text-lg text-justify md:leading-10 px-4 md:p-0'>
          "I’m a passionate frontend developer with experience in web development. I specialize in JavaScript and React.js, creating dynamic and efficient user interfaces. I have a strong interest in educational technology within the fintech space, where I've gained valuable insights into the fusion of education and technology. Driven by curiosity, I continually seek opportunities to grow by staying updated on trends, learning new technologies, and collaborating on exciting projects."
          </p>
        </div>

        {/* Image Section */}
        <div className='flex justify-center md:justify-end items-center'>
          <img
            src={kenny}
            alt="About Me"
            className='mx-auto rounded-3xl mt-6 w-[90%]
             md:w-[85%] lg:w-[70%] h-auto sm:h-[60vh] object-cover md:h-[60vh] lg:h-[75vh]'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
