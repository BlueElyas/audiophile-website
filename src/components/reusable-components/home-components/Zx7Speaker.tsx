import { NavLink } from "react-router-dom";
import { SeeProductButton } from "../SeeProductButton";
import { useWindowSize } from "../../../hooks/useWindowSize";

export function Zx7Speaker() {
    const imageObj = {
        mobile: "./assets/home/mobile/image-speaker-zx7.jpg",
        tablet: "./assets/home/tablet/image-speaker-zx7.jpg", 
        desktop: "./assets/home/desktop/image-speaker-zx7.jpg" 
    }

    return(
        <div className="relative px-6 mt-4 mb-4 flex flex-col">
            <img 
                src={useWindowSize(imageObj)}
                alt=""
                className="rounded-lg" />
            <div className="absolute top-24 ml-8 xl:ml-24 ">
                <h1 className="font-bold text-3xl mb-6 xl:text-4xl xl:mb-12">ZX7 SPEAKER</h1>
                <NavLink to="speakers/zx7-speaker"><SeeProductButton style="border-black border-[1px] font-bold"/></NavLink>
            </div>
        </div>
    )
}