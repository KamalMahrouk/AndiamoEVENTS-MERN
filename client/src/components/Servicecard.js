import React from 'react'

import { Link } from 'react-router-dom'

function Servicecard({service}) {
  return (
    
      <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg md:w-[30%] cursor-pointer">
      <Link to={`/details/${service?._id}`} style={{textDecoration:"none"}}>
        <a href="#"  class="w-full block h-full">
            <img alt="#" src={service?.img}  class="max-h-80 w-full object-cover" />
            <div class="bg-[#1e1e1e] w-full p-4 h-[320px] border-b-2">
                <p class="text-[#007acc] text-2xl font-medium">
                    {service?.name}
                </p>
                <p class="text-black text-sm font-medium mb-2">
                    {service?.company}
                </p>
                <p class="text-gray-200 font-light text-md">
                    {service?.description}
                </p>
                <div class="flex flex-wrap justify-starts items-center py-3 text-base text-white font-medium">
                    <span class="m-1 px-8 py-3 rounded bg-[#007acc]">
                        {service?.sub_categ}
                    </span>
                    <span class="m-1 px-8 py-3 rounded bg-[#007acc]">
                        DT{service?.price}
                    </span>
                </div>
            </div>
        </a>
        </Link>
    </div>
   
  )
}

export default Servicecard
