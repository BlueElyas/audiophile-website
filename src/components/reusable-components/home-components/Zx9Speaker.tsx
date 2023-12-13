import { NavLink } from "react-router-dom";
import { SeeProductButton } from "../SeeProductButton";
import { useWindowSize } from "../../../hooks/useWindowSize";

export function Zx9Speaker() {
    const window = useWindowSize()
    const width = window.width

    if (!width) {
        return 
    }

    const image = width >= 768 ? "/assets/home/tablet/image-speaker-zx9.png" : "/assets/home/mobile/image-speaker-zx9.png"
    

    return(
        <div className="bg-[#D87D4A] text-white text-center h-[600px] 
            flex flex-col mx-6 rounded-lg items-center justify-end gap-6 px-4
            py-4 md:relative">
            <div className="relative md:absolute overflow-hidden z-30">
                <div className="rounded-full border-white border-2 w-64 h-64 opacity-10 flex justify-center items-center 
                md:w-[900px] md:h-[900px] md:-translate-y-8"
                >
                    <div className="rounded-full border-white border-2 w-56 h-56 md:w-[500px] md:h-[500px] md:flex md:justify-center md:items-center">
                        {width >= 768 && <div className="rounded-full border-white border-2 w-56 h-56 md:w-[400px] md:h-[400px]"></div>}
                    </div>
                </div>
                <img 
                    src={image}
                    alt="picture of speakers" 
                    className="absolute w-30 h-40 top-16 left-16 md:bottom-[40%] md:top-auto md:left-96"
                />
            </div>
            <h1 className="text-4xl md:text-6xl">ZX9 <br /> SPEAKER</h1>
            <p className="md:w-1/2">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <NavLink to="speakers/zx9-speaker"><SeeProductButton style="bg-black mb-8"/></NavLink>       
        </div>
    )
}