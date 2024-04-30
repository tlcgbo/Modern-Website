import SectionWrapper from "../hoc/SectionWrapper"
import Aos from "aos"
import { Link } from "react-router-dom"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Hero from "./Hero"
import Services from "./Services"

function Metrics() {

    useEffect (() => {
        Aos.init({duration: 1500});
    }, []);

  return (
    <>
    <div data-aos="flip-up" className="metrics p-5 bg-[#192957]">
      <h2 className=" text-[#ffffff] text-[60px] font-bold leading-[57px] tracking-[-1.56px] mb-[30px] w-[14.7cm]">In-depth metrics</h2>
      <p className=" text-[25px] leading-[30px] text-[#a3a2a6] tracking-[-0.63px] font-['Mulish'] w-[456px] ml-[28px]">Accurate, real-time reporting at your fingertips. Getting data has never been easier.</p>
      <p className="font-bold text-[17px] text-[#a6a6fb] cursor-pointer pt-[30px] ml-[28px]">Learn more</p>

        <Services />
        
    </div>
    
    </>
  )
}

export default SectionWrapper(Metrics, '')