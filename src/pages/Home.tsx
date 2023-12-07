import { mappedProductNavLinks } from "../components/reusable-components/ProductNavLinks";
import { SeeProductButton } from "../components/reusable-components/SeeProductButton";
import { CirclePatternIcon } from "../components/svgs/CirclePatternIcon";

export function Home() {
    return(
        <>
            <div className="relative text-white text-center">
                    <img 
                        src="src\data\assets\home\mobile\image-header.jpg" 
                        alt="picture of black headphones" 
                        className=" w-full "
                    />
                <div className="absolute top-20  uppercase grid gap-8 ">
                    <h4 className="text-x tracking-widest opacity-50 shadow-sm">new product</h4>
                    <h1 className="text-4xl">XX99 Mark II HeadphoneS</h1>
                    <p className="normal-case opacity-70 shadow-sm">Experience natural, lifelike audio and exceptional build quality 
                        made for the passionate music enthusiast.</p>
                    <SeeProductButton style="bg-[#D87D4A] w-2/3 place-self-center"/>

                </div>
            </div>

            {mappedProductNavLinks}

            <div className="bg-[#D87D4A] text-white">
                <div className="div">
                    <img src="src\data\assets\home\mobile\image-speaker-zx9.png" alt="" />
                    <CirclePatternIcon/>
                </div>
                <h1>ZX9 SPEAKER</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <SeeProductButton style=""/>
            </div>
        </>
    )
}