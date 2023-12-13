import { NavLink } from "react-router-dom";
import { SeeProductButton } from "./SeeProductButton";

export function Zx9Speaker() {
    return(
        <div className="bg-[#D87D4A] text-white text-center h-[600px] 
            flex flex-col mx-6 rounded-lg items-center justify-end gap-8 px-4
            py-4 ">
            <div className="relative pt-4 top-6">
                <div className="rounded-full border-white border-2 w-64 h-64 opacity-10 flex justify-center items-center">
                    <div className="rounded-full border-white border-2 w-56 h-56"></div>
                </div>
                <img 
                    src="\assets\home\mobile\image-speaker-zx9.png" 
                    alt="picture of speakers" 
                    className="absolute w-30 h-40 top-16 left-16"
                />
            </div>
            <h1 className="text-5xl">ZX9 <br /> SPEAKER</h1>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <NavLink to="speakers/zx9-speaker"><SeeProductButton style="bg-black mb-8"/></NavLink>       
        </div>
    )
}