import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export function BackgroundCircle({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 1.0],
            borderRadius: ['20%', '50%', '80%', '20%']
        }}
        transition={{
            duration:2.5
        }}
        className="relative flex justify-center items-center">
            <div className="absolute -z-1 border border-[#333333] rounded-full h-[180px] w-[180px] mt-32 animate-ping" ></div>
            <div className="absolute -z-1 border border-[#333333] rounded-full h-[400px] w-[400px] mt-32" ></div>
            <div className="absolute -z-1 border border-[#F7AB0A] opacity-20 rounded-full h-[550px] w-[550px] mt-32 animate-pulse" ></div>
            <div className="absolute -z-1 border border-[#333333] rounded-full h-[700px] w-[700px] mt-32" ></div>
    </motion.div>
  )
}