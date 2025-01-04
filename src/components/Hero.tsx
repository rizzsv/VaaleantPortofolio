"use client"
import React from 'react'
import Image from 'next/image'
import cursor from "../assets/icon1.png"
import lightning from "../assets/icon2.png"
import NodeLogo from "../assets/Node.js-removebg-preview.png"
import JsLogo from "../assets/js-removebg-preview.png"
import message from "../assets/icon2.png"
import {motion} from "framer-motion"
import profilepic from "../assets/profilepic.png"

const Hero = () => {
  return (
    <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>

        <div className='absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                        bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'>

        </div>

    <div className='relative'>
    <div className="text-8x1 font-bold text-center">
    <h1 className="text-[#98B4CE] text-8xl md:text-9xl">Hi, I am</h1>
    <h1 className="text-[#E48A57] text-9xl md:text-10xl">Vaaleant</h1>
    </div>




    <p className='text-center text-[20px] max-w-[500px] mx-auto mt-8 text-white/80'>
        I am a web developer focused on creating websites that provide the best experience for users.
    </p>

    <Image
    src={profilepic}
    alt='profilepic'
    className='w-64 h-64 mx-auto object-cover relative -mb-12 z-10'

    />

    
</div>

    </div>
  )
}

export default Hero