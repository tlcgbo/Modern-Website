import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { downArrow, earth_light } from '../assets'
import { motion, useAnimation } from 'framer-motion'
import { slideIn, textVariant, zoomIn } from '../utils/motion'
import Logos from './Logos'

function Hero() {

    const controls = useAnimation();

    const handleHover = () => {
        controls.start({ x: [0, -5, 5, -5, 0], transition: { duration: 0.7 } });
    };

  return (
    <>
        <section className=' text-white hero mt-20 flex w-[80vw] pl-[3vw] overflow-hidden'>
            <motion.div variants={textVariant('.2')} className='hero-left w-[459px] h-[461px] mt-5 ml-[-4vw]'>

                <h1 className='hero-head text-[80px] w-[12.2cm] h-[231px] leading-[77px] pl-[2.5vw] font-bold'>Learn to Code</h1>
                <p className='hero-p pl-[2.5vw] text-[#bebcbc] text-[20px] leading-[30px] tracking-[-0.63px] mt-10'>Learn programming through weekly newsletters explaining the concept thoroughly.</p>

                <motion.div variants={slideIn('left', 'tween', '.5s', '.3s')} className='start pl-[2.5vw] mt-10 flex hero-btns'>
                <motion.button 
                    onHoverStart={handleHover}
                    onHoverEnd={() => controls.start({ x: 0 })}
                    animate={controls}
                    className='w-[211px] h-[50px] bg-[#5454D4] text-white rounded-xl text-[17px]'
                 >Get Started</motion.button>

                <img src={downArrow} alt="navigate to bottom" className='ml-[35px] pb-3 cursor-pointer w-[50px] h-[60px]'/>

                </motion.div>
            </motion.div>
            <div className="light-earth  w-[70vw] overflow-hidden ml-[-4vw]">
                <motion.img
                variants={zoomIn('0.2', '1' )}
                src={earth_light} alt="" className='w-[70vw]  h-[70vh] mt-[-12vh]'/>
            </div>
        </section>
        <Logos />
    </>
  )
}

export default SectionWrapper(Hero, 'hero')