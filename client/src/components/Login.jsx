import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [user,setUser]=useState({
    email:"",
    password:""
  })
  const navLink=useNavigate()
  const changeValue=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const userLogin = async()=>{
    if (user.email==""||user.password=="") {
      return alert("Nhập đủ email và password")
    }
    try {
    const result= await axios.post("http://localhost:8080/api/v1/users/signin",user)
    
      if (result.status==200) {
        localStorage.setItem("token", result.data.token); 
        alert(result.data.message)
        setTimeout(() => {
        navLink("/home")
        }, 2500);
      }
    } catch (error) {
      console.log("222",error);
    }
  }
  return (
    <div style={{backgroundColor:"chocolate", height:"100vh",paddingTop:50}}>
      <div style={{width:800,height:500,backgroundColor:"white",margin:"0 auto",padding:20,borderRadius:5}}>
        <h1 style={{textAlign:"center"}}>Login</h1>
        <Form.Label style={{marginTop:20}} htmlFor="email">Email:</Form.Label>
      <Form.Control style={{marginTop:20}}
      onChange={changeValue}
      name="email"
        type="text"
        id="email"
       placeholder='Email Login'
       value={user.email}
      />
      <Form.Label style={{marginTop:20}} htmlFor="password">Password:</Form.Label>
      <Form.Control style={{marginTop:20}}
      onChange={changeValue}
      name='password'
        type="password"
        id="password"
       placeholder='Password Login'
       value={user.password}
      />
       <Button style={{marginTop:60, width:400,height:70,marginLeft:180}}
       onClick={userLogin}
       variant="danger">LOGIN</Button>{' '}
      </div>
    </div>
  )
}
