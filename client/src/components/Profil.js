import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavScroll from "./Nav";
import ReservateCard from "./ReservateCard";
import { edituser } from "../JS/userSlice/userSlice";
import Footer from "./Footer";
import { deletereservate } from "../JS/reservateSlice";
import Swal from "sweetalert2";

function Profil({ping, setping}) {
  const reservate=useSelector((state)=>state.reservation?.reservatelist);
  const user = useSelector((state) => state.user.user);
  console.log(reservate)
  console.log(user);
  const [edited, setedited] = useState({
    name:user?.name,
    lastname:user?.lastname,
    email: user?.email,
    password:user?.password,
    phone:user?.phone
  });
  const dispatch=useDispatch()
  return (
    <div className="bg-[#2d2d30] h-full">
      <div className='bg-gray-900 pb-5 rounded-b-3xl'>
        <NavScroll />
      </div>
      <div className="mb-20">
      <table className="min-w-[50%] ml-80 divide-y mt-10 w-[70%] divide-gray-200 bg-white"><tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name service</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date reservation</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
        <th></th>
      </tr>
      {reservate?.filter((el)=>el.id_user===user?._id).map((el)=>
      <tr className="bg-white divide-y divide-gray-200">
        <td className="px-6 py-4 whitespace-nowrap"><img src={el?.img} style={{width:"30px"}}/></td>
        <td className="px-6 py-4 whitespace-nowrap">{el?.name_service}</td>
        <td className="px-6 py-4 whitespace-nowrap">{el?.date_reservation}</td>
        <td className="px-6 py-4 whitespace-nowrap">{el?.phone}</td>
        <td className="px-6 py-4 whitespace-nowrap">{el?.category}</td>
        <td className="px-6 py-4 whitespace-nowrap">{el?.price}</td>
        <td className="px-6 py-4 whitespace-nowrap">{el?.status}</td>
        <td class="px-6 py-4 whitespace-nowrap">
                <button onClick={()=>{dispatch(deletereservate(el?._id));setping();Swal.fire({
            title: "Successful!",
            text: "Request has been deleted!",
            icon: "info"
          });}} class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
        </td>
      </tr>
    )}
  </table>
      </div>

      <div className='flex ml-5 mt-10 justify-center'>
      <div class="bg-white w-[60%] overflow-hidden shadow-2xl rounded-lg border">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            User Profile
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
        </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    first name
                </dt>
                <input
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text" placeholder={user?.name} onChange={(e)=>setedited({...edited, name:e.target.value})}/>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    last name
                </dt>
                <input
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text" placeholder={user?.lastname} onChange={(e)=>setedited({...edited, lastname:e.target.value})}/>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <input
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text"placeholder={user?.email} onChange={(e)=>setedited({...edited, email:e.target.value})}/>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Phone number
                </dt>
                <input
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text" placeholder={user?.phone} onChange={(e)=>setedited({...edited, phone:e.target.value})}/>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    password
                </dt>
                <input type="password"
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        name="bio" onChange={(e)=>setedited({...edited, password:e.target.value})}></input>
            </div>
            <div class="flex justify-end">
                    <button
                        class="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
                        onClick={()=>{dispatch(edituser({id:user?._id,edited}));setping(!ping)}}>Save changes</button>
                </div>
        </dl>
    </div>
</div>
      </div>
      <Footer />
    </div>
  );
}

export default Profil;

//  <button  onClick={() => {
//             setTimeout(() => {localStorage.removeItem("token");

//               navigate("/logi");
//             }, 1000);}} >logout</button>
