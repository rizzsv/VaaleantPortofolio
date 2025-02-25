"use client"

import React from 'react'
import {FaNodeJs, FaReact, FaJava, FaJsSquare} from "react-icons/fa"

const skillIcons = [
    {icon: <FaNodeJs size={140}/>, label: "Node.js"},
    {icon: <FaReact size={140}/>, label: "React"},
    {icon: <FaJava size={140}/>, label: "Java"},
    {icon: <FaJsSquare size={140}/>, label: "JavaScript"},
]

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
        <div className='text-white max-w-[950px] mx-auto p-8 text-center'> 
            <h2 className='text-[50px] font-bold mb-4'>What I Do</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {skillIcons.map((skill, index) => (
                    <div key={index} 
                    className='h-[220px] w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                        {skill.icon}
                        <p className='mt-2'>{skill.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills