import React from 'react'
import './HomeAnim.css'
import { motion } from 'framer-motion'


const OutherAnim = () => {
  return (
    <>
      <motion.section className='loderDiv'
        initial={{ y: "0%" }}
        animate={{ y: "-150%" }}
        transition={{ delay: .5, duration: 2, ease: "easeInOut" }}
        exit={{ y: ["150%", "0%"] }}
      >
        <motion.div className='topimg'></motion.div>
        <motion.div className="loder"></motion.div>
        <motion.div className='bottomimg'></motion.div>
      </motion.section>
    </>
  )
}

export default OutherAnim
