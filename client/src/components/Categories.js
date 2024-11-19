import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Servicecard from './Servicecard';
import NavScroll from './Nav';
import Footer from './Footer';

function Event() {
    const services=useSelector((state)=>state.service?.servicelist);
    const [category, setcategory] = useState("all");
    const [type, settype] = useState("all")
    const [showModal, setShowModal] = React.useState(false);
    console.log(services)
  return (
   <div className="bg-[#2d2d30] h-full">
    <div className='bg-gray-900 pb-5 rounded-b-3xl'><NavScroll/></div>
    <div>
<div className='flex ml-[280px] pt-4 justify-around items-center'>
    <button onClick={()=>settype("event")} class="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"><span
                    class="absolute inset-0 overflow-hidden rounded-xl"><span
                        class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    </span>
                </span>
                <div
                    class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
                    <span>Events</span>
                </div>
                <span
                    class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span></button>
    <button onClick={()=>settype("Conference")} class="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"><span
                    class="absolute inset-0 overflow-hidden rounded-xl"><span
                        class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    </span>
                </span>
                <div
                    class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
                    <span>Conference</span>
                </div>
                <span
                    class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span></button>
    <button onClick={()=>settype("birthday")} class="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"><span
                    class="absolute inset-0 overflow-hidden rounded-xl"><span
                        class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    </span>
                </span>
                <div
                    class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
                    <span>Birthdays</span>
                </div>
                <span
                    class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span></button>
</div>


    <div className="h-auto flex pl-3 flex-row bg-[#2d2d30] pt-5 pb-20 ">
  <div className="flex flex-col w-[350px] px-40 drop-shadow-2xl bg-[#3e3e42] rounded-r-3xl overflow-hidden">
    <div className="flex items-center justify-center h-20 shadow-md">
      <h1 className="text-3xl uppercase text-[#007acc]">Services</h1>
    </div>
    <ul className="flex flex-col py-4">
      <li>
        <a href="#" onClick={()=>setcategory("Rental")} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-[#007acc] hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-[#007acc]"><i className="bx bx-home"></i></span>
          <span className="text-2xl font-medium">Rentals</span>
        </a>
      </li>
      <li>
        <a onClick={()=>setcategory("music")} href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-[#007acc] hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-[#007acc]"><i className="bx bx-music"></i></span>
          <span className="text-2xl font-medium">Music</span>
        </a>
      </li>
      <li>
        <a onClick={()=>setcategory("catering")} href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-[#007acc] hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-[#007acc]"><i className="bx bx-drink"></i></span>
          <span className="text-2xl font-medium">Catering</span>
        </a>
      </li>
      <li>
        <a onClick={()=>setcategory("shopping")} href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-[#007acc] hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-[#007acc]"><i className="bx bx-shopping-bag"></i></span>
          <span className="text-2xl font-medium">Shopping</span>
        </a>
      </li>
      <li>
        <a onClick={()=>setcategory("Agencies")} href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-[#007acc] hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-[#007acc]"><i className="bx bx-chat"></i></span>
          <span className="text-2xl font-medium">Agencies</span>
        </a>
      </li>
      <li>
        <a href="#" onClick={()=>setcategory("AudioDJ")}
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-[#007acc] hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-[#007acc]"><i className="bx bx-bell"></i></span>
          <span className="text-2xl font-medium">AudioDJ</span>
        </a>
      </li>
    </ul>
  </div>
  <div className="mt-20 ml-20 flex flex-row flex-wrap gap-10"> 
  {category!=="all" && type!=="all"?services?.filter((el)=>el.sub_categ==category && el.category ==type).map((el)=><Servicecard service={el}/>):services?.map((el)=><Servicecard service={el}/>)}
    </div>
</div>
<Footer />
    </div>
    </div>
  )
}

export default Event
