import { NavLink } from "react-router-dom";
import { AboutSection } from "../components/reusable-components/AboutSection";
import { mappedProductNavLinks } from "../components/reusable-components/ProductNavLinks";
import { SeeProductButton } from "../components/reusable-components/SeeProductButton";
import { Hero } from "../components/reusable-components/home-components/Hero";
import { Zx9Speaker } from "../components/reusable-components/home-components/Zx9Speaker";
import { Zx7Speaker } from "../components/reusable-components/home-components/Zx7Speaker";

export function Home() {
    return(
        <>
            <Hero />

            <div className="md:flex md:justify-around ">
                {mappedProductNavLinks}
            </div>

            <Zx9Speaker/>
            
            <Zx7Speaker/>

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