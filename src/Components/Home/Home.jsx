import { TypeAnimation } from 'react-type-animation'
import kenny from "../../assets/ken.jpg"





const Home = () => {
  return (
    <div   className='grid grid-cols-1 sm:grid-cols-3 gap-8 md:h-[70vh] max-w-[1200px] mx-auto py-8 bg-black'>
        <div className='my-auto mx-auto col-span-1 w-[360px] h-auto lg:w-[400px] '>
          <img src={kenny} alt="" className='w-full h-full rounded-[50%] object-cover' />
           
           
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold mt-6'>
                <span className='primary-color'>
                    I'm a
                </span> <br />
                <TypeAnimation
  sequence={[
    'Frontend Dev',
    1000,
    'Webdesigner',
    1000,
    
    
    
  ]}
  speed={50}
  wrapper="span"
  repeat={Infinity}
/>

            </h1>
            <p className='text-white sm:text-lg lg:text-xl mt-6 '>My name is  Olaatunbi Kehinde and i have two year experience in web development</p>
            <div className='my-8'>
            <a href="https://drive.google.com/file/d/1omqFbOS6E8FaOSQYh-oVwZw4fvjvOIUv/view?usp=drive_link" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500  text-white'>
              Download CV

            </a>
            <a href="https://wa.me/message/GZRWICCOEIZBO1" className='px-6 py-3 w-full rounded-xl mr-4 border text-white 
             border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 '>Contact</a>
           </div>
           </div>
          



    </div>
  )
}

export default Home