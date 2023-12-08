import { AboutSection } from "../components/reusable-components/AboutSection";
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
                    <SeeProductButton style="bg-[#D87D4A] w-2/3 place-self-center" handleClick={() => {}}/>

                </div>
            </div>

            {mappedProductNavLinks}

            <div className="bg-[#D87D4A] text-white text-center h-[600px] 
                flex flex-col mx-6 rounded-lg items-center justify-end gap-8 px-4
                py-4 ">
                <div className="relative pt-4 top-6">
                    <div className="rounded-full border-white border-2 w-64 h-64 opacity-10 flex justify-center items-center">
                        <div className="rounded-full border-white border-2 w-56 h-56"></div>
                    </div>
                    <img 
                        src="src\data\assets\home\mobile\image-speaker-zx9.png" 
                        alt="picture of speakers" 
                        className="absolute w-30 h-40 top-16 left-16"
                    />
                </div>
                <h1 className="text-5xl">ZX9 <br /> SPEAKER</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <SeeProductButton style="bg-black mb-8" handleClick={() => {}}/>
            </div>

            <div className="relative px-6 mt-4 mb-4 ">
                <img 
                    src="src\data\assets\home\mobile\image-speaker-zx7.jpg" 
                    alt=""
                    className="rounded-lg" />
                <div className="absolute top-24 ml-7">
                    <h1 className="font-bold text-3xl mb-6">ZX7 SPEAKER</h1>
                    <SeeProductButton style="border-black border-[1px] font-bold" handleClick={() => {}}/>
                </div>
            </div>

            <div className="px-6">
                <img 
                    src="src\data\assets\home\mobile\image-earphones-yx1.jpg" 
                    alt="" 
                    className="rounded-lg"/>
                <div className="bg-gray-100 mt-4 py-8 px-6 rounded-lg">
                    <h1 className="font-bold text-3xl mb-6">YX1 EARPHONES</h1>
                    <SeeProductButton style="border-black border-[1px] font-bold" handleClick={() => {}}/>
                </div>
            </div>

            <AboutSection />
        </>
    )
}