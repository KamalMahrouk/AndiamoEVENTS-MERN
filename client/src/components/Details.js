import React, { useState } from 'react';
import Nav from './Nav';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addreservate } from '../JS/reservateSlice';
import Swal from 'sweetalert2'


function Details() {
    const user = useSelector((state) => state.user.user);
    const services=useSelector((state)=>state.service?.servicelist);
    const params=useParams();
    const service=services?.filter((el)=>el._id===params.id)[0];
    console.log(service)
    const [newreservate, setnewreservate] = useState({
        id_user:user?._id,
        name_user:user?.name+" "+user?.lastname,
        name_service:service?.name,
        img:service?.img,
        date_reservation :"",
        phone:"", 
        category:service?.category,
        price:service?.price,
      })
      const handleclick=()=>{
        Swal.fire({
            title: "Thank you for your submission!",
            text: "Please await confirmation",
            icon: "success"
          });
          dispatch(addreservate(newreservate))
      }
      const dispatch=useDispatch()
  return (
    <div className="bg-[#2d2d30]">
        <div className='bg-gray-900 pb-5 rounded-b-3xl'><Nav /></div>
<section class="bg-[#2d2d30] py-20">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 mb-8 md:mb-0">
                <h1 class="text-white font-bold text-5xl leading-tight mb-6">{service?.name}</h1>
                <p class="text-white text-xl mb-8">{service?.description}<div>{user?<div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[750px] p-20 rounded-3xl bg-gray-800 shadow-2xl">
        <form>
            <h1>Add reservation</h1>
            <div class="mb-5">
                <label for="guest" class="mb-3 block text-base font-medium text-white">
                    Phone Number
                </label>
                <input onChange={(e)=>setnewreservate({...newreservate, phone:e.target.value})} type="number" name="guest" id="guest" placeholder='number'
                    class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="date" class="mb-3 block text-base font-medium text-white">
                            Date
                        </label>
                        <input onChange={(e)=>setnewreservate({...newreservate,date_reservation:e.target.value})} type="date" name="date" id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="time" class="mb-3 block text-base font-medium text-white">
                            Time
                        </label>
                        <input type="time" name="time" id="time"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

            <div class="mb-5">
                <label class="mb-3 block text-base font-medium text-white">
                    Will you participate in the event?
                </label>
                <div class="flex items-center space-x-6">
                    <div class="flex items-center">
                        <input type="radio" name="radio1" id="radioButton1" class="h-5 w-5" />
                        <label for="radioButton1" class="pl-3 text-base font-medium text-white">
                            Yes
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" name="radio1" id="radioButton2" class="h-5 w-5" />
                        <label for="radioButton2" class="pl-3 text-base font-medium text-white">
                            No
                        </label>
                    </div>
                </div>
            </div>

            <div>
                <button onClick={()=>handleclick()}  className="hover:shadow-form rounded-md bg-white py-3 px-8 text-center text-base font-semibold text-sky-800 outline-none">
                    Submit
                </button>
            </div>
        </form>
    </div>
</div>:<div className='mt-40 text-white font-bold'>Please register to be able to <span className='text-red-500 font-extraborld'>reservate</span></div>}</div></p>
                <a href="/Categories"
                    class="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-700 transition duration-200">Go back</a>
            </div>
            <div class="md:w-1/2">
                <img src={service?.img} alt="#"
                    class="w-full max-h-[620px] bg-cover bg-center rounded-full shadow-lg"/>
            </div>
        </div>
    </div>
</section>
<Footer />
</div>
  )
}

export default Details
