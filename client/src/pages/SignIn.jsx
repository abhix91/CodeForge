import React,{useState,useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import styled from "styled-components";
import logo from "../assets/logo.jpeg";
import {Toaster,toast} from "react-hot-toast"
import axios from "axios"
import { loginRoute } from '../utils/APIRoutes';

const SignIn = () => {

const navigate=useNavigate();

    const[values,setValues]=useState({
      username:"",
      password:"",
  

    })

    useEffect(()=>
  {
    if(localStorage.getItem("My-User"))
    {
      navigate("/")
    }
  })
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (handleValidation()) {
        const { username, password } = values;
        const { data } = await axios.post(loginRoute, {
          username,
          password,
        });
        if(data.status===false)
        {
          console.log(data.msg)
              toast.error(data.msg);
        }
        if(data.status===true){
          localStorage.setItem('My-User',JSON.stringify(data.isUserValid));
          navigate("/");
        }

      }
}

const handleValidation=()=>
{
 const {password,username}=values;
 if(password==="")
 {
   toast.error("Password is required");
   return false;
 }
 if(username==="")
 {
   toast.error("Username is required");
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
            <img src={logo} alt=""/>
            <h1>CodeForge</h1>
         </div>
         <input type="text" 
         placeholder="Username"
         name="username"
         onChange={(e)=>handleChange(e)}
         min="3"
        />
         
         <input type="password" 
         placeholder="Password"
         name="password"
         onChange={(e)=>handleChange(e)}
        />
         
        <button type="submit">Login</button>
        <span>Don't have an account ? <Link to="/signup">Register</Link></span>
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
background-color: #dbd8e3; /* Updated background color */

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
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
  }
}
`;



export default SignIn