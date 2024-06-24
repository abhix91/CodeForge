import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import styled from "styled-components";
import logo from "../assets/logo.jpeg";
import {Toaster,toast} from "react-hot-toast"
import axios from "axios"
import { registerRoute } from '../utils/APIRoutes';


const SignUp = () => {
const navigate=useNavigate();
const[values,setValues]=useState({
  name:"",
  email:"",
  password:""

})
useEffect(()=>
  {
    if(localStorage.getItem("My-User"))
    {
      navigate("/")
    }
  })


const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { email, name, password } = values;
      const { data } = await axios.post(registerRoute, {
        name,
        email,
        password,
      });
      if(data.status===false)
      {
            toast.error(data.message);
      }
      if(data.status===true){
        localStorage.setItem('My User',JSON.stringify(data.user));
        navigate("/");
      }

    }
}

const handleValidation=()=>
{
const {password,name,email}=values;
if(!name)
{
 toast.error("Enter username");
 return false;
}
if(!email)
{
 toast.error("Enter email");
 return false;

}

if(!password)
{
toast.error(" Enter  password");
return false;
}


if(name)
{
if(name.length<3)
{
   toast.error("Username must be at least 3 characters");
   return false;
}
}
if(password.length<6)
{
  toast.error("Password must be at least 8 characters")
  return false;
}
return true;
}



  const handleChange=(event)=>
    {
    setValues({...values,[event.target.name]:event.target.value})
    }
  

  

  return (
   <>
    <FormContainer>
    <form onSubmit={(event)=>handleSubmit(event)}> 
         <div className="brand">
          
            <h1>CodeForge</h1>
            <img src={logo} alt=""/>
         </div>

         <input type="text" 
         placeholder="Username"
         name="username"
         onChange={(e)=>handleChange(e)}
        />
         <input type="email" 
         placeholder="Email"
         name="email"
         onChange={(e)=>handleChange(e)}
        />
         <input type="password" 
         placeholder="Password"
         name="password"
         onChange={(e)=>handleChange(e)}
        />
         
        <button type="submit">Submit</button>
        <span>Already a User? <Link to="/signin">Login</Link></span>
        </form>
        </FormContainer>
        <Toaster/>
        </>
  )
}


const FormContainer=styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background: #dbd8e3;  /* Updated background color */

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  
  img {
    height: 5rem;
  }
  
  h1 {
    color: #141010; /* Updated text color */
    text-transform: uppercase;
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #ffffff; /* Updated background color */
  border-radius: 2rem;
  padding: 3rem 5rem;
}

input {
  background-color: #f5f5f5; /* Light gray background */
  padding: 1rem;
  border: 0.1rem solid #ccc; /* Light gray border */
  border-radius: 0.4rem;
  color: #333; /* Dark gray text */
  width: 100%;
  font-size: 1rem;
  
  &:focus {
    border: 0.1rem solid #666; /* Darker gray border on focus */
    outline: none;
  }
}

button {
    background-color: #141010;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;;
  
  &:hover {
    background-color: #6d44b8; /* Darker blue on hover */
  }
}

span {
    color: white;
    text-transform: uppercase;
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
  }
}
`;

export default SignUp