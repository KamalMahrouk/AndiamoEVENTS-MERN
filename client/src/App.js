import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profil from "./components/Profil";
import Register from "./components/Register";
import { getuser, userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import Home from "./components/Home";
import { getservice } from "./JS/serviceSlice";
import Categories from "./components/Categories";
import Details from "./components/Details";
import { getreservate } from "./JS/reservateSlice";
import Dashboard from "./components/Dashboard";

// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setping] = useState(false)
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getservice());
    dispatch(getreservate());
    dispatch(getuser());
  },[ping] );
  return (
    <div className="">
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil ping={ping} setping={setping}/>} />
        </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
