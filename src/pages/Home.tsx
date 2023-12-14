import { AboutSection } from "../components/reusable-components/AboutSection";
import { mappedProductNavLinks } from "../components/reusable-components/ProductNavLinks";
import { Hero } from "../components/reusable-components/home-components/Hero";
import { Zx9Speaker } from "../components/reusable-components/home-components/Zx9Speaker";
import { Zx7Speaker } from "../components/reusable-components/home-components/Zx7Speaker";
import { Yx1Earphones } from "../components/reusable-components/home-components/Yx1Earphones";

export function Home() {
    return(
        <>
            <Hero />
            <div className="md:my-32 lg:block lg:my-[19rem] xl:my-0"></div>

            <div className="md:flex md:justify-around xl:mb-20 xl:mx-[10rem]">
                {mappedProductNavLinks}
            </div>

            <Zx9Speaker/>
            
            <Zx7Speaker/>

            <Yx1Earphones />

            <AboutSection />

        </>
    )
}