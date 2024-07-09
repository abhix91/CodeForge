import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import CodeEditor from '../components/CodeEditor';
import { Box } from '@chakra-ui/react';

const Home = () => {
  const navigate=useNavigate();
 
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      
    <CodeEditor />
    </Box>
 
  )

}

export default Home;