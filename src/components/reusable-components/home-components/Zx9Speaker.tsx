import { NavLink } from "react-router-dom";
import { SeeProductButton } from "../SeeProductButton";
import {  useWindowSize } from "../../../hooks/useWindowSize";

export function Zx9Speaker() {
       const imageObj = {
        mobile: "./assets/home/mobile/image-speaker-zx9.png",
        tablet: "./assets/home/tablet/image-speaker-zx9.png",
        desktop: "./assets/home/desktop/image-speaker-zx9.png"
    }

   

      

    return(
        <div className="bg-[#D87D4A] text-white text-center h-[600px] 
            flex flex-col mx-6 rounded-lg items-center gap-6 px-4
            py-4 md:relative overflow-hidden xl:justify-center xl:items-end">
            <div className="relative md:absolute overflow-hidden z-30 xl:static">
                {window.innerWidth >= 1280 ? '' : <div className="rounded-full border-white border-2 w-64 h-64 opacity-10 flex justify-center items-center 
                            md:w-[900px] md:h-[900px] md:-translate-y-8"
                >
                    <div className="rounded-full border-white border-2 w-56 h-56 md:w-[500px] md:h-[500px] md:flex md:justify-center md:items-center">
                        {window.innerWidth >= 768 && <div className="rounded-full border-white border-2 w-56 h-56 md:w-[400px] md:h-[400px]"></div>}
                    </div>
                </div>}
                <img 
                    src={useWindowSize(imageObj)}
                    alt="picture of speakers" 
                    className="absolute w-30 h-40 top-16 left-16 md:bottom-[40%] md:top-auto md:left-96 
                                xl:left-32 xl:w-[22rem] xl:h-[28rem] xl:-bottom-2"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-6 xl:text-start xl:items-start xl:absolute xl:-right-64">
                <h1 className="text-4xl md:text-6xl xl:text-7xl">ZX9 <br /> SPEAKER</h1>
                <p className="md:w-1/2 xl:text-xl">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <NavLink to="speakers/zx9-speaker"><SeeProductButton style="bg-black mb-8 xl:px-10 xl:py-6 xl:mt-8"/></NavLink>       
            </div>
        </div>
    )
}