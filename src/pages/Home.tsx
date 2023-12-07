import { mappedProductNavLinks } from "../components/reusable-components/ProductNavLinks";

export function Home() {
    return(
        <>
            <div className="relative text-white">
                    <img 
                        src="src\data\assets\home\mobile\image-header.jpg" 
                        alt="picture of black headphones" 
                        className=" w-full -translate-y-1/4"
                    />
                <div className="absolute">
                    <h4></h4>
                    <h1>XX99 Mark II HeadphoneS</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality 
                        made for the passionate music enthusiast.</p>
                    <button className="bg-[#D87D4A] py-2 px-7 rounded-sm">See Product</button>
                </div>
            </div>
            {mappedProductNavLinks}
        </>
    )
}