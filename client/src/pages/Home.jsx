import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  useEffect(()=>
    {
      if(!localStorage.getItem("My-User"))
      {
        navigate("/signin")
      }
    })
  return (
    <div>Home</div>
  )

}

export default Home;