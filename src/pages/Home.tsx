import { NavLink } from "react-router-dom";
import { AboutSection } from "../components/reusable-components/AboutSection";
import { mappedProductNavLinks } from "../components/reusable-components/ProductNavLinks";
import { SeeProductButton } from "../components/reusable-components/SeeProductButton";
import { Hero } from "../components/reusable-components/Hero";
import { Zx9Speaker } from "../components/reusable-components/Zx9Speaker";

export function Home() {
    return(
        <>
            <Hero />

            <div className="flex justify-around mx-4 mb-4">
                {mappedProductNavLinks}
            </div>

            <Zx9Speaker/>
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