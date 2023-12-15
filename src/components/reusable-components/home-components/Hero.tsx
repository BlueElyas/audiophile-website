import { NavLink } from "react-router-dom";
import { SeeProductButton } from "../SeeProductButton";
import { useWindowSize } from "../../../hooks/useWindowSize";

export function Hero() {
    const imageObj = {
        mobile: "./assets/home/mobile/image-header.jpg",
        tablet: "./assets/home/tablet/image-header.jpg",
        desktop: "./assets/home/desktop/image-hero.jpg"
    }

    return (
        <div className=" bg-[#191919] text-white text-center flex flex-col justify-start items-center 
                        md:h-[700px] lg:mb-64 xl:mb-8"
        >
            <div className="-translate-y-20">
                <img 
                    src={useWindowSize(imageObj)}
                    alt="picture of black headphones" 
                    className=" w-full "
                />
            </div>
            <div className="absolute top-44 left-4 uppercase grid gap-6 mx-6 
                            md:w-[376px] md:left-[8rem] md:top-48 lg:left-[17rem] lg:top-64 xl:top-48 
                            xl:left-20 xl:text-start"
            >
                <h4 className=" tracking-[1em] opacity-50 shadow-sm">new product</h4>
                <h1 className="text-4xl md:text-7xl">XX99 Mark II HeadphoneS</h1>
                <p className="normal-case opacity-70 shadow-sm md:shadow-lg xl:text-xl">Experience natural, lifelike audio and exceptional build quality 
                    made for the passionate music enthusiast.</p>
                <NavLink to="headphones/xx99-mark-two-headphones">
                    <SeeProductButton style="bg-[#D87D4A] w-2/3 place-self-center md:py-6 md:w-1/2"/>
                </NavLink>
            </div>
        </div>
    ) 
}