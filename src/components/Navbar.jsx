import { useState } from "react";
import { logo, menu, close } from "../assets";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { sideVariants, itemVariants } from "../utils/motion";


function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const controls = useAnimation();

    const handleHover = () => {
        controls.start({ x: [0, -5, 5, -5, 0], transition: { duration: 0.7 } });
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };

    // animate sidebar render on mobiles

  return (
    <>
        {/*Desktop Navbar */}
        <nav className="nav-full sticky top-0 flex md:flex justify-between pt-5 z-10 h-5">
            <div className="nav-container flex justify-between w-[75%] mx-auto">
                <div className="">
                    <img src={logo} alt="Logo for page" className="" />
                </div>

                <ul className="flex justify-around w-[9cm] pt-2 text-[15px]">

                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar