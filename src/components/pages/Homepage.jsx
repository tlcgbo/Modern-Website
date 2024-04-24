import { useEffect } from "react"
import Hero from "../Hero";
import Metrics from "../Metrics";
import Services from "../Services";
import SubIndex from "../SubIndex";
import Pricing from "../Pricing";
import Blog from "../Blog";

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
        <div className="pt-[8%] mx-3 md:mx-0 w-[90vw]">
            <Hero />
            <Metrics />
            <Services />
            <SubIndex />
            <Blog />
            <Pricing />
        </div>
    </>
  )
}

export default Homepage