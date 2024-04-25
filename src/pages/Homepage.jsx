import { useEffect } from "react"
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Services from "../components/Services";
import SubIndex from "../components/SubIndex";
import Pricing from "../components/Pricing";
import Blog from "../components/Blog";

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
            <Pricing />
        </div>
    </>
  )
}

export default Homepage