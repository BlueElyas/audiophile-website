import { HamburgerIcon } from "../svgs/HamburgerIcon";
import { CartIcon } from "../svgs/CartIcon";
import { Logo } from "../svgs/Logo";
import { useState } from 'react'
import { NavBar } from "./NavBar";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/CartContext";
import { CartModal } from "../../pages/CartModal";


export function Header( )  {
    const [showNav, setShowNav] = useState(false)

    const {
        handleModalDisplay,
        modalDisplay
    } = useShoppingCart()

    function handleClick() : void {
        setShowNav(!showNav)
    }

    return (
        <>
            <div 
                className="bg-[#1A1A1A] text-white flex justify-between px-4 py-7 items-center z-40 relative 
                            md:px-8">
                
                <div onClick={handleClick}>
                    <HamburgerIcon/>
                </div> 

                <NavLink to="/" className=" ">
                    <Logo/>
                </NavLink>

                <div onClick={handleModalDisplay} className="m-0 p-0">
                    <CartIcon/>   
                </div>
            </div>

            <div>
                {showNav && <NavBar/>}
            </div>  
            <div className="bg-[#1A1A1A] flex items-center justify-center"><div className="bg-gray-600 h-[2px] w-[90%] opacity-30"></div></div>
            {modalDisplay && <CartModal />}
        </>
    )
}