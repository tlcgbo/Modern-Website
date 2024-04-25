import { Link } from "react-router-dom"
import { useEffect } from "react"
import SectionWrapper from "../hoc/SectionWrapper"
import "aos/dist/aos.css"
import Aos from "aos"

function Metrics() {

    useEffect (() => {
      Aos.init({duration: 1500});
    }, []);

  return (
    <div data-aos="flip-up" className="blog p-40">
        <h1 className="text-[#ffffff] text-[60px] font-bold leading-[57px] tracking-[-1.56px] mb-[30px] w-[14.7cm]">Blog</h1>
        <p className=" text-[25px] leading-[30px] text-[#ffffff] tracking-[-0.63px] font-['Mulish'] w-[456px] ml-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Pellentesque fringilla, velit nec ultrices vulputate, dolor libero ullamcorper nibh, in egestas<br></br> dui augue ut tortor. Sed quis urna commodo, posuere justo et, euismod lorem. Etiam posuere id enim convallis blandit. <br></br> 
        <br></br>Quisque tincidunt, nibh sit amet scelerisque rutrum, quam risus laoreet lectus, quis pellentesque elit risus ut tortor. Sed accumsan suscipit lorem, a laoreet sem volutpat ac. In venenatis lacus eu leo malesuada laoreet. <br></br> <br></br>Nunc pharetra fermentum suscipit. Cras ac auctor tortor, in sollicitudin ante. Nullam id justo id sem interdum molestie. Praesent ultrices et nisl ut consectetur. <br></br> Donec porta arcu in ligula tristique tincidunt. Maecenas ac sodales orci. Sed condimentum consectetur metus nec convallis. Donec tortor nisi, tempor a nisl sed, facilisis semper nunc. <br></br> <br></br> Proin tincidunt tortor convallis, pulvinar enim sit amet, condimentum sem. Morbi accumsan nunc at pellentesque egestas.

Nullam tincidunt neque eget ex dictum, accumsan hendrerit nulla mattis. Ut placerat libero sem, at aliquet mauris scelerisque vel. <br></br> <br></br> Aliquam porttitor pharetra nunc quis ultricies. Proin nec egestas nibh. Nulla vel pulvinar nulla. Donec blandit mi quam. Proin commodo mi id sapien imperdiet efficitur. Mauris mollis elit quis tristique aliquam. Pellentesque porttitor arcu et euismod cursus. Duis venenatis ac est non congue. <br></br>
<br></br>
Nam et porta ex. Maecenas sodales orci accumsan arcu interdum ullamcorper. Vestibulum pulvinar fringilla justo id consequat. Proin luctus libero sed purus varius, ac ornare felis varius.<br></br> <br></br> Phasellus pulvinar lectus at est accumsan, suscipit volutpat arcu interdum. Integer iaculis ut eros vitae consequat. Curabitur in dignissim eros, eget tincidunt arcu. Vivamus consequat pellentesque consequat. Integer pharetra lacus tortor, sed lacinia dolor porta id.<br></br> <br></br> Vivamus tempor vitae nunc ut faucibus. Donec vitae elit purus. Phasellus quis ante rutrum, tempor lorem vel, posuere leo.</p>
    </div>
  )
}

export default SectionWrapper(Metrics, '')