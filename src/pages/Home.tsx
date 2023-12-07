import { mappedProductNavLinks } from "../components/reusable-components/ProductNavLinks";

export function Home() {
    return(
        <>
            <div className="">
                <img 
                    src="src\data\assets\home\mobile\image-header.jpg" 
                    alt="picture of black headphones" 
                    className="relative"
                />
                <div className="absolute bottom-0">
                    <h4></h4>
                    <h1>XX99 Mark II HeadphoneS</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality 
                        made for the passionate music enthusiast.</p>
                    <button>See Product</button>
                </div>
            </div>
            {mappedProductNavLinks}
        </>
    )
}