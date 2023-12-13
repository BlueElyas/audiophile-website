import { NavLink } from "react-router-dom";
import { AboutSection } from "../components/reusable-components/AboutSection";
import { mappedProductNavLinks } from "../components/reusable-components/ProductNavLinks";
import { SeeProductButton } from "../components/reusable-components/SeeProductButton";
import { Hero } from "../components/reusable-components/Hero";

export function Home() {
    return(
        <>
            <Hero />

            {mappedProductNavLinks}

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

            <div className="relative px-6 mt-4 mb-4 ">
                <img 
                    src="\assets\home\mobile\image-speaker-zx7.jpg" 
                    alt=""
                    className="rounded-lg" />
                <div className="absolute top-24 ml-7">
                    <h1 className="font-bold text-3xl mb-6">ZX7 SPEAKER</h1>
                    <NavLink to="speakers/zx7-speaker"><SeeProductButton style="border-black border-[1px] font-bold"/></NavLink>
                </div>
            </div>

            <div className="px-6">
                <img 
                    src="\assets\home\mobile\image-earphones-yx1.jpg" 
                    alt="" 
                    className="rounded-lg"/>
                <div className="bg-gray-100 mt-4 py-8 px-6 rounded-lg">
                    <h1 className="font-bold text-3xl mb-6">YX1 EARPHONES</h1>
                    <NavLink to="speakers/yx1-earphones"><SeeProductButton style="border-black border-[1px] font-bold"/></NavLink>
                </div>
            </div>

            <AboutSection />
        </>
    )
}