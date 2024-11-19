import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone:""
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div class="h-screen bg-gradient-to-br from-blue-600 to-cyan-300 flex justify-center items-center w-full">    
        <form method='POST' action='#' onSubmit={(e) => e.preventDefault()}>
            <div class="bg-white px-4 py-8 rounded-xl w-screen shadow-xl max-w-sm gap-10">
                <div class="space-y-4">
                    <h1 class="text-center text-2xl font-semibold text-gray-600">Register</h1>
                    <hr/>
                <div>
                <input
            type="text"
            class="form-control"
            name="name"
            placeholder="name"
            required=""
            autofocus=""
            onChange={(e) => setregister({ ...register, name: e.target.value })}
          />
                </div>
                <div>
                <input
            type="text"
            class="form-control"
            name="LastName"
            placeholder="LastName"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, lastname: e.target.value })
            }
          />
                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                <input
            type="email"
            class="form-control"
            name="email"
            placeholder="email"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })}
          />
                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-md">
                <input
            type="password"
            class="form-control"
            name="password"
            placeholder="password"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })}
          />
              </div>
                </div>
                <div class="flex justify-center items-center mt-4">
                    <p class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                        <input type="checkbox" id="rememberMeCheckbox" name="rememberMe" class="mr-2" />
                        <span class="text-xs font-semibold">Remember me?</span>
                    </p>
                </div>

                <button type="submit" onClick={() => {
              dispatch(userRegister(register));
              navigate("/");
            }} value="register" id="register" class="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Register</button>
                <hr/>
                <div class="flex justify-center items-center mt-4">
                    <p class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                        <span class="ml-2">You don't have an account?<a href="#" class="text-xs ml-2 text-blue-500 font-semibold"><Link to="/Login">Log in &rarr;</Link></a>
                        </span>
                    </p>
                </div>
            </div>
            <div class="pt-6 text-base font-semibold leading-7">
                <p class="font-sans text-red-500 text-md hover:text-red-800">
                <a href="/" class="absolute">&larr; Home</a>
                </p>
            </div>
        </form>
    </div>
    </div>
  );
}

export default Register;
