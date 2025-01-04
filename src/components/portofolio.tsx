// src/components/portofolio.tsx
"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import KopegtelProject from "../assets/KopegtelProject.png"
import GooddaysGarageProject from "../assets/GoodaysGarageProject.png"
import LansiaLivingProject from "../assets/LansiaLivingProject.png"
import GoMountcakProject from "../assets/GoMountcakProject.png"

const projects = [
  {
    title: "Koperasi Telekomunikasi Indonesia",
    desc: "Koperasi Telekomunikasi Indonesia adalah sebuah koperasi yang bergerak di bidang telekomunikasi",
    devStuck: "MongoDB, Express, Next, Node.js",
    link: "#",
    git: "#",
    src: KopegtelProject,
  },
  {
    title: "GoodaysGarage Cloting Website",
    desc: "GoodaysGarage adalah sebuah website yang menjual pakaian vintage dan retro",
    devStuck: "MongoDB, Express, Next, Node.js",
    link: "#",
    git: "#",
    src: GooddaysGarageProject,
  },
  {
    title: "Lansia Living Website For Elderly",
    desc: "Lansia Living adalah sebuah website yang menyediakan informasi dan membantu check up kesehatan bagi lansia",
    devStuck: "MongoDB, Express, Next, Node.js",
    link: "#",
    git: "#",
    src: LansiaLivingProject,
  },
  {
    title: "Go Mountcak Website",
    desc: "Go Mountcak adalah sebuah website yang menyediakan informasi dan paket wisata ke Gunung Cakrabuana",
    devStuck: "MongoDB, Express, Next, Node.js",
    link: "#",
    git: "#",
    src: GoMountcakProject,
  }
]

const portofolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40' id='portofolio'>

       <h1 className='text-white text-[50px] max-w-[320px] mx-auto font-semibold my-12'>
        Selected <span className='text-orange-400'>Projects</span>
       </h1>

      <div className='max-w-[1000px] mx-auto mt-40 space-y-24'>
        {projects.map((project, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, y:75 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay:0.25 }}
          className={`mt-12 flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} gap-12`}
          
          >
             <div className='space-y-2 max-w-[550px]'>
              <h2 className='text-[50px] my-4'>{`0${index + 1}`}</h2>
              <h2 className='text-4xl'>{project.title}</h2>
              <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
              <p className='text-xl text-orange-500 font-semibold'>{project.devStuck}</p>
              <div className='w-full h-[1px] bg-gray-400 my-4 flex justify-between'>
                <a href={project.link} className='mr-6'>Link</a>
                <a href={project.git}>Git</a>
              </div>

             </div>

             <div className='flex justify-center items-center'>
              <Image src={project.src} alt={project.title} className='h-[350px] w-auto object-cover border
              rounded border-gray-700
              '/>
             </div>

          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default portofolio