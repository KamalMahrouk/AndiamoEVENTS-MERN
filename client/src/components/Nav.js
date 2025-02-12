import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../JS/userSlice/userSlice';

const NavScroll = () => {
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  return (
    <>
    <div>
    <nav class="flex px-4 pt-4 items-center relative">
        <div class="text-lg font-[Dantina] text-white md:ml-52 md:mt-3 md:py-0 py-4">
            Andiamo Events
        </div>
        <ul class="md:px-2 NavHover ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 text-white">
        {user? <li>
                <a href="#" style={{textdecoration:"non"}} class="transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl flex md:inline-flex no-underline p-4 items-center hover:text-gray-300">
                    <span><Link to="/Profil" >Profile</Link></span>
                </a>
            </li>:<h1></h1>}
            <li>
                <a href="#" style={{textdecoration:"non"}} class="transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl flex md:inline-flex no-underline p-4 items-center hover:text-gray-300">
                    <span><Link to="/" >Home</Link></span>
                </a>
            </li>
            <li>
                <a href="/#SectionTwo" style={{textdecoration:"non"}} class="transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl flex md:inline-flex no-underline p-4 items-center hover:text-gray-300">
                    <span>About</span>
                </a>
            </li>
            <li>
                <a href="/#SectionThree" style={{textdecoration:"non"}} class="transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl flex md:inline-flex p-4 no-underline lg:mr-5 items-center hover:text-gray-300">
                    <span>Contact</span>
                </a>
            </li>
            <li class="relative parent">
                <Link to="/categories" style={{textdecoration:"non"}} class="transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl flex justify-between md:inline-flex no-underline p-4 items-center hover:text-gray-300 space-x-2">Categories <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></Link>
                <ul class="child transition duration-300 top-full right-0 md:w-48 no-underline hover:absolute absolute bg-white text-black md:shadow-lg md:rounded-b ">
                    <li>
                    <Link to="/event" class="flex px-4 py-3 hover:text-gray-300">Events</Link> 
                    </li>
                    <li>
                    <Link to="/event" class="flex px-4 py-3 hover:text-gray-300">Conference</Link> 
                    </li>
                    <li>
                    <Link to="/event" class="flex px-4 py-3 hover:text-gray-300">Birthdays</Link> 
                    </li>
                </ul>
            </li>
            <li>
            <div>
      <ul className="md:px-8 mr-auto md:flex md:space-x-2 gap-10 left-0 text-white">
        <li className="h-0">
  <div
    class="bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
    <div class="flex items-center gap-4">
      {/* <img src=""
      class="w-20 group-hover:w-24 group-hover:h-24 h-20 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
    /> */}
      <div class="w-fit transition-all transform duration-500">
        <h1 class="text-gray-600 dark:text-gray-200 font-bold">
        {user? user.name:<h1>Not Connected</h1>}
        </h1>
        <a
          class="text-base w-fit text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
          {user?.email}
        </a>
      </div>
    </div>
    <div class="absolute group-hover:bottom-17 hover:absolute delay-300 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
      <div class="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
        <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
        </svg>
        <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </svg>
        <svg viewBox="0 0 960 1000" fill="currentColor" height="1em" width="1em">
          <path
            d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
        </svg>
      </div>
    </div>
  </div>
      </li>
      {user?<li>
      <button         onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
                class="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"><span
                    class="absolute inset-0 overflow-hidden rounded-xl"><span
                        class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    </span>
                </span>
                <div
                    class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
                    <span>Log out</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        data-slot="icon" class="w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <span
                    class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
      </li>:<li>  <button         onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
                class="relative mt-2 inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"><span
                    class="absolute inset-0 overflow-hidden rounded-xl"><span
                        class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    </span>
                </span>
                <div
                    class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
                    <span>Log in</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        data-slot="icon" class="w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <span
                    class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button></li>}
      </ul>
    </div>
            </li>
        </ul>
    </nav>
</div>
    </>
  )
}

export default NavScroll