import React from 'react'
import kenny from "../../assets/About.jpg"

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
            <p className='text-base lg:text-lg text-justify md:leading-10 px-4 md:p-0'>
            I am a passionate and dedicated junior frontend developer who embarked on my journey in the tech
             industry 2 years ago. Since then, I've delved deep into the realm of technology, eagerly seeking opportunities to learn and grow. I have intermediate experience with JavaScript, where I've honed my skills in crafting dynamic and interactive web applications. Additionally, I possess intermediate experience with React.js, allowing me to build efficient user interfaces that enhance the user experience. During my time as an intern the tech industry, I've been fortunate to engage with Educational Technology in the fintech realm, offering me invaluable insights into the fusion of education and technology, alongside the distinct challenges and opportunities within the fintech landscape Motivated by curiosity and a desire to contribute to innovative solutions, I am constantly immersing myself in various aspects of technology. Whether it's exploring new programming languages, staying updated on industry trends, or collaborating with peers on 
            exciting projects, I am committed to continuous learning and growth in this dynamic field

            </p>
            </div>
                
          <img src={kenny} className='mx-auto rounded-3xl py-8 mt-6 md:py-0 md:w-[50%] w-full h-full md:h-[60vh] object-cover' alt="" />
            
          

        </div>


    </div>
  )
}

export default About