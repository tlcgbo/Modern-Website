import { useEffect } from "react"
import { services } from "../constants"
import { Link } from "react-router-dom"
import SectionWrapper from "../hoc/SectionWrapper"
import Aos from "aos"
import "aos/dist/aos.css"

function Services(){

    useEffect (() => {
        Aos.init({duration: 1500});
    }, []);

  return (
    <div className='text-white flex justify-start items-end h-[50vh] services ' >
        {services.map((service) => (
            <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="w-[60vw] h-auto" 
                key={service.name}
            >
                <img src={service.icon} alt="" />
                <h1 className=' text-center font-bold text-[28px] leading-[36px] tracking-[-0.75px] pr-[4vw]'>{service.header}</h1>
                <p className='w-[307px] text-center text-[20px] leading-[24px] text-[#848387] tracking-[-0.5px] font-[Mulish] mt-[20px]'>{service.para}</p>
            </div>
        ))}
    </div>
  )
}

export default SectionWrapper(Services, '')