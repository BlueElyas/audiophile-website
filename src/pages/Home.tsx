import { mappedProductNavLinks } from "../components/reusable-components/ProductNavLinks";

export function Home() {
    return(
        <>
            <div className="relative text-white text-center h-[520px]">
                    <img 
                        src="src\data\assets\home\mobile\image-header.jpg" 
                        alt="picture of black headphones" 
                        className=" w-full -translate-y-24"
                    />
                <div className="absolute top-20 mx-16 uppercase grid gap-8 ">
                    <h4 className="text-x tracking-widest opacity-50 shadow-sm">new product</h4>
                    <h1 className="text-4xl">XX99 Mark II HeadphoneS</h1>
                    <p className="normal-case opacity-70 shadow-sm">Experience natural, lifelike audio and exceptional build quality 
                        made for the passionate music enthusiast.</p>
                    <button className="bg-[#D87D4A] py-3 px-7 rounded-sm w-2/3 place-self-center uppercase">See Product</button>
                </div>
            </div>
            {mappedProductNavLinks}
        </>
    )
}