import PricigSection from "./pricing-section";
import Hero from "./hero";
import FeaturesSection from "./features-section";
import VideoHover from "@/components/video";
import HoverVideo from "@/components/video";


const Landingpage=()=>{
    return(
        <div>
            <Hero/>
            <FeaturesSection/>
            <HoverVideo videoSrc='/demovideo.mp4'/>
            <hr className="mt-1 mb-2 font-extrabold" />
           <PricigSection/>
        </div>
    )
};


export default Landingpage;