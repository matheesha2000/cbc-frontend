import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res);
      axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/google", {
        token: res.access_token,
      }).then((res) => {
        if (res.data.message === "User created") {
          toast.success("Your account is created. You can now login via Google.");
        } else {
          localStorage.setItem("token", res.data.token);
          window.location.href = res.data.user.type === "admin" ? "/admin" : "/";
        }
      });
    },
  });

  function login() {
    axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
      email: email,
      password: password,
    }).then((res) => {
      if (!res.data.user) {
        toast.error(res.data.message);
        return;
      }
      toast.success("Login successful");
      localStorage.setItem("token", res.data.token);
      window.location.href = res.data.user.type === "admin" ? "/admin" : "/";
    });
  }

  return (
    <div className='flex justify-center items-center w-full h-screen bg-white'>
      <div className='w-[400px] p-8 rounded-lg shadow-lg bg-white flex flex-col items-center border border-gray-200'>
        <img src='/logo.jpg' className='rounded-full w-[80px] mb-4' alt='Logo' />
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>Login</h2>
        
        <div className='w-full mb-4'>
          <label className='block text-gray-600 text-sm'>Email</label>
          <input 
            type='email'
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>

        <div className='w-full mb-4'>
          <label className='block text-gray-600 text-sm'>Password</label>
          <input 
            type='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>

        <button 
          onClick={login} 
          className='w-full bg-accent hover:bg-accent-600 text-white py-2 rounded-md hover:bg-accent transition duration-300'>
          Login
        </button>
        
        <button 
          onClick={() => googleLogin()} 
          className='w-full mt-3 bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 transition duration-300'>
          Login with Google
        </button>

        <p className='mt-4 text-sm text-gray-500'>Don't have an account? <Link to='/register' className='text-accent hover:underline'>Sign up</Link></p>
      </div>
    </div>
  );
}