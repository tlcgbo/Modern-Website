import { earth_dark } from "../assets"
import SectionWrapper from "../hoc/SectionWrapper"
import { zoomIn } from "../utils/motion"
import { motion } from "framer-motion"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function SubIndex() {

    useEffect (() => {
        Aos.init({duration: 1500}); 
   }, [])

  return (
    <div className="subIndex flex justify-center items-center w-full ml-[-4vw]">
        <motion.img
            variants={zoomIn('0.2', '1')}
            src={earth_dark}
            alt="" />

        <div data-aos="flip-up"
            className="index-container"
        >
            <h2 className=" text-white text-[50px] font-bold leading-[57px] tracking-[-1.56px] mb-[30px] w-[14.7cm]">Subscription Index</h2>
            <p className=" text-[25px] leading-[30px] text-[#9c9c9e] tracking-[-0.63px] font-['Mulish'] w-[82%]">Daily news to keep you up to date on the technological market trends and what's happening in your world.</p>
            <p className="font-bold text-[17px] text-[#8f8ffa] cursor-pointer pt-[30px]">Learn more</p>
        </div>
    </div>
  )
}

export default SubIndex