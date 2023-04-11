import { useState } from "react";
import './login.css'

const Login = () =>{
const [email,setEmail] = useState("");
const [passwod,setPassword] = useState("");

const loginHandler = (e)=>{
    e.prevent.default();
    const loginData = {
        email,passwod
    }
  // bg-gradient-to-l 
  // from-stone-500 to-orange-500 
}
 return (
  
  <div className="min-h-screen 

  w-full
  h-screen
  bg-gradient-to-r
  from-orange-500
  via-yellow-200
  to-red-300
  background-animate

  py-4 
  px-8 
  flex 
  justify-center 
  items-center"
  >
    <img src=""></img>
<div className="flex flex-col items-center rounded-2xl drop-shadow-lg backdrop-blur-sm bg-white/20 ... w-2/3 p-1">
    <h1 className="text-2xl font-bold text-orange-50  mt-3">Login:</h1>
    <form onSubmit={loginHandler}  className='flex flex-col w-3/3 mx-auto my-5 gap-y-2'>
        <label>Registration Number </label>
        <input
          value={email}
          onChange = {(e)=>setEmail(e.target.value)}
          type="number"
          placeholder="e.g. 11918463"
          className="p-2 rounded-2xl focus:outline-none border-2 border-orange-200"
        />
        <label>Password</label>
        <input
        
          value={passwod}
          onChange = {(e)=>setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="p-2 rounded-2xl focus:outline-none border-2 border-orange-200 w-auto"
        />
        <input 
        type="submit"
        className="rounded-2xl bg-orange-500 my-2 p-2 text-orange-50 cursor-pointer"
        />
    </form>
</div>
</div>
 )
}
export default Login;