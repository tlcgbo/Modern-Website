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
        <nav className=" bg-[#192957]  nav-full sticky top-0 flex md:flex justify-between pt-5 z-10 h-5">
            <div className="  nav-container flex justify-between w-[75%] mx-auto">
                <div className="">
                    <img src={logo} alt="Logo for page" className="" />
                </div>

                <ul className=" flex justify-around w-[10cm] pt-2 text-[18px]">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>

                <motion.button
                    onHoverStart={handleHover}
                    onHoverEnd={() => controls.start({ x:0 })}
                    animate={controls}
                    className="w-[211px] h-[40px] bg-[#1f3883] text-white rounded-xl text-[17px]"
                >
                    Get Started
                </motion.button>
            </div>
        </nav>

       {/* Mobile Navbar */}
        
        <nav className=" bg-[#192957] md:hidden flex justify-center fixed z-10 w-[90vw] h-[15vh]" >
            <div className="nav-container pt-5 flex justify-between w-[90%]">
                <div className="">
                    <img src={logo} alt="Logo for page" className="" />
                </div>

                {/* Mobile menu button (hamburger) */}
                <div
                    onClick={handleMobileMenuToggle}
                >
                     {isMobileMenuOpen ? (
                        <img src={close} alt="Close"  className="w-[50px] h-[45px] p-2 cursor-pointer"/>
                     ) : (
                         <div className=" flex justify-center items-center h-[100%] pb-9">
                            <img src={menu} alt="Menu"  className="w-[60px] h-[60px] p-2 cursor-pointer "/>
                         </div>
                     )}
                </div>
            </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                 <motion.aside
                     initial={{ width: 0 }}
                     animate={{
                     width: 500
             }}
             exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 }
          }}
         >
        <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
            className="container md:hidden flex flex-col fixed bg-[#5454D4] text-white w-[55vw] ml-[35vw] mt-[10vh] h-[350px] items-end pr-[18vw] z-10 rounded-2xl pt-4">
                <ul className="text-[20px] mr-[-25px] p-5">
                    <motion.li variants={itemVariants} className="mb-6">Home</motion.li>
                    <motion.li variants={itemVariants} className="mb-6">Features</motion.li>
                    <motion.li variants={itemVariants} className="mb-6">Pricing</motion.li>
                 <motion.li variants={itemVariants} className="mb-6">Blog</motion.li>
                </ul>
                <motion.button
                 variants={itemVariants}
                 className="w-[150px] h-[48px] bg-[#FF7143] text-white rounded-xl text-[14px] mt-4 mr-[-2.8em]"
                  >
                    Get Started
                </motion.button>
        </motion.div>
        </motion.aside>
      )}
        </AnimatePresence>
        
    </>
  );
}

export default Navbar;