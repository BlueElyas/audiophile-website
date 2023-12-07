import { mappedProductNavLinks } from "../components/reusable-components/ProductNavLinks";
import { SeeProductButton } from "../components/reusable-components/SeeProductButton";

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

            <div className="bg-[#D87D4A] text-white text-center relative h-[600px]">
                <div className="absolute">
                    <img src="src\data\assets\home\mobile\image-speaker-zx9.png" alt="picture of a speaker"/>
                    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
                            <circle cx="472" cy="472" r="235.5"/>
                            <circle cx="472" cy="472" r="270.5"/>
                            <circle cx="472" cy="472" r="471.5"/>
                        </g>
                    </svg>                
                </div>
                <h1 className="text-5xl">ZX9 <br /> SPEAKER</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <SeeProductButton style="bg-black"/>
            </div>
        </>
    )
}