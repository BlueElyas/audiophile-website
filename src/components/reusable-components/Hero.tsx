import { NavLink } from "react-router-dom";
import { SeeProductButton } from "./SeeProductButton";

export function Hero() {
    return (
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
                    <NavLink to="headphones/xx99-mark-two-headphones"><SeeProductButton style="bg-[#D87D4A] w-2/3 place-self-center"/></NavLink>

            </div>
        </div>
    ) 
}