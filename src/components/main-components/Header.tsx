import { HamburgerIcon } from "../svgs/HamburgerIcon";
import { CartIcon } from "../svgs/CartIcon";
import { Logo } from "../svgs/Logo";
import { useState } from 'react'
import { NavBar } from "./NavBar";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/CartContext";
import { CartModal } from "../../pages/CartModal";
import { useWindowSize } from "../../hooks/useWindowSize";


export function Header( )  {
    const [showNav, setShowNav] = useState(false)

    const {
        handleModalDisplay,
        modalDisplay
    } = useShoppingCart()

    function handleClick() : void {
        setShowNav(!showNav)
    }

    const windowSize = useWindowSize()
    const windowWidth = windowSize.width

    

    return windowWidth && (
        <>
            <div 
                className="bg-[#1A1A1A] text-white flex justify-between px-4 py-7 items-center z-40 relative 
                            md:px-10 "
            >

                {windowWidth >= 768 ? <div className="md:flex md:items-center md:gap-8">
                    <div onClick={handleClick}>
                        <HamburgerIcon/>
                    </div> 

                    <NavLink to="/" className="md:justify-self-start md:col-span-8">
                        <Logo/>
                    </NavLink>
                </div> :
                <>
                    <div onClick={handleClick}>
                        <HamburgerIcon/>
                    </div> 

                    <NavLink to="/" className="md:justify-self-start md:col-span-8">
                        <Logo/>
                    </NavLink>
                </>}

                <div onClick={handleModalDisplay} className="m-0 p-0 md:justify-self-end">
                    <CartIcon/>   
                </div>
            </div>

            <div>
                {showNav && <NavBar/>}
            </div>  

            <div className="bg-[#1A1A1A] flex items-center justify-center relative z-30"><div className="bg-gray-600 h-[2px] w-[90%] opacity-30"></div></div>
            {modalDisplay && <CartModal />}
        </>
    )
}