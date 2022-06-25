import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdShoppingCart } from "react-icons/md";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebase.config'
import { useStateValue } from '../context/StateProvider';

import logo from '../img/logo.png'
import avatar from '../img/avatar.png'
import { actionType } from '../context/Reducer';
const Header = () => {
  const firebaseAuht=getAuth(app);
  const provider=new GoogleAuthProvider();

  const [{user},dispatch]=  useStateValue();

  //user login handeler
  const loginHandeler= async ()=>{
    console.log("clickin user log in")
    const {user:{refreshToken,providerData}}= await signInWithPopup(firebaseAuht,provider)
    // console.log)

    dispatch(
      {
        type:actionType.Set_USER,
        user:providerData[0]
      }
    )



  }



  return (
    <header className="fixed z-50 w-screen  p-6 px-16">

      {/* dektop */}
      <div className='hidden md:flex w-full h-full '>
        <Link to={"/"} className='flex items-center gap-2'>
          <img src={logo} className='w-8 object-cover' alt="logo" />
          <p className='textColor text-xl font-bold'>City</p>
        </Link>
        <div className="flex items-center ml-auto gap-8">
          <ul className='flex items-center gap-8 '>
            <li className='text-base text-textColor hover:text-blue-500 duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-textColor hover:text-blue-500 duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-textColor hover:text-blue-500 duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
            <li className='text-base text-textColor hover:text-blue-500 duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
          </ul>
          <div className='flex items-center justify-center'>
            <MdShoppingCart className='text-textColor text-2xl cursor-pointer' />
            <div className=" w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className='text-xs text-white font-semibold '>2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img whileTap={{ scale: 0.5 }}
              src={avatar} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer' alt="userprofile"
              onClick={loginHandeler}
               />

          </div>
        </div>
      </div>

      {/* mobile */}
      <div className='block md:hidden w-full '></div>
    </header>
  )
}

export default Header