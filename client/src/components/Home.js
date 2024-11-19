import React from 'react';
import NavScroll from './Nav'
import SectionOne from './SectionOne'
import background from './bgimg.png';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='shadow-lg w-full h-screen' style={{backgroundImage: `url(${background})`, backgroundRepeat:'no-repeat' , backgroundSize: 'cover', height:'650px'}} >    
          <div class="z-30 items-center shadow-2xl justify-center w-full h-full overflow-hidden">
    <div>
    <div className='bg-gray-900 bg-opacity-75 pb-20'>
    <NavScroll />
    </div>
    </div>
    <div class=" inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75">
      </div>
    <div class="absolute inset-0 mt-52 z-30  flex flex-col items-center justify-center">
        <div class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url(${background})`}}>

            <div class="grid shadow-2xl shadow-red-900 grid-cols-12 gap-1">
                <div class="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                    <div class="border-l-4 py-20 px-5 mx-2 absolute left-0">
                        <p class="italic text-white pt-8 text-xl md:text-4xl lg:text-6xl uppercase text-center text-wrap font-semibold ">
                            Welcome to ANDIAMO EVENTS
                        </p>
                    </div>
                    <div class="text-gray-400 font-semibold text-xl mb-4">TM</div>
                    <div class="absolute border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                </div>
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                    <div class="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-xl">
                        <div class="p-8">
                            <p class="text-white text-xs md:text-xl lg:text-4xl mb-4">
                            Experience Life Like Never Before with Andiamo Events! Elevate your moments and
                            create unforgettable memories through our captivating live performances.
                            Join us for an extraordinary journey that celebrates the best moments of your life!
                            </p>
                            <div class="bottom-0 absolute p-2 right-0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
      <div><SectionOne /></div>  
      <div><SectionTwo /></div> 
      <div><SectionThree /></div>
      <div><Footer /></div>
    </div>
  )
}

export default Home
