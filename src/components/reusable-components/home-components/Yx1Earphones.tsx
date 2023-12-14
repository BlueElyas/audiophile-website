import { NavLink } from "react-router-dom";
import { SeeProductButton } from "../SeeProductButton";
import { useWindowSize } from "../../../hooks/useWindowSize";

export function Yx1Earphones() {
    
    const imageObj = {
        mobile: "./assets/home/mobile/image-earphones-yx1.jpg",
        tablet: "./assets/home/tablet/image-earphones-yx1.jpg" ,
        desktop: "./assets/home/deskop/image-earphones-yx1.jpg"
    }

    // const image = width >= 768 ? "/assets/home/tablet/image-earphones-yx1.jpg"  : "/assets/home/mobile/image-earphones-yx1.jpg" 

    return(
        <div className="px-6 md:flex md:justify-center md:items-center md:gap-2">
            <div className="md:flex-1">
                <img 
                    src={useWindowSize(imageObj)} 
                    alt="" 
                    className="rounded-lg  md:h-96"
                />
            </div>
            
            <div className="bg-gray-100 mt-4 py-8 px-6 rounded-lg md:h-96 md:mt-0 md:flex-1 md:flex md:flex-col md:justify-center">
                <h1 className="font-bold text-3xl mb-6">YX1 EARPHONES</h1>
                <NavLink to="speakers/yx1-earphones"><SeeProductButton style="border-black border-[1px] font-bold"/></NavLink>
            </div>
        </div>
    )
}