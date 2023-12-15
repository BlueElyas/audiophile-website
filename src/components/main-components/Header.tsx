import { HamburgerIcon } from "../svgs/HamburgerIcon";
import { CartIcon } from "../svgs/CartIcon";
import { Logo } from "../svgs/Logo";
import { useState } from 'react'
import { NavBar } from "./NavBar";
import { NavLink, useLocation } from "react-router-dom";
import { useShoppingCart } from "../../context/CartContext";
import { CartModal } from "../../pages/CartModal";
import { useSpecificWindowValues } from "../../hooks/useWindowSize";
import { Backdrop } from "../reusable-components/Backdrop";


export function Header( )  {
    const [showNav, setShowNav] = useState<boolean>(false)
    const [isNavOpen, setNavOpen] = useState<boolean>(false)

    const {
        handleModalDisplay,
        modalDisplay,
        cartModalItems
    } = useShoppingCart()

    function handleClick() : void {
        setShowNav(!showNav)
        setNavOpen(!isNavOpen)
    }

    const location = useLocation()

    const windowSize = useSpecificWindowValues()
    const windowWidth = windowSize.width

    if(!windowWidth){
        return
    }

    const desktopWidth = windowWidth >= 1280 ? '' : <div onClick={handleClick}><HamburgerIcon/></div> 
    
    const desktopNavbar = windowWidth >=1280 ? <ul className="flex gap-8 uppercase tracking-wider">
                                                    <NavLink to="/">Home</NavLink>
                                                    <NavLink to="/headphones">Headphones</NavLink>
                                                    <NavLink to="/speakers">Speakers</NavLink>
                                                    <NavLink to="/earphones">earphones</NavLink>
                                                </ul> : ''

    return windowWidth && (
        <>
            <div 
                className={`${location.pathname === '/' ?  'bg-[#1A1A1A]' : 'bg-black' } 
                        text-white flex justify-between px-4 py-7 items-center z-50 relative 
                            md:px-10 xl:px-36`}
            >

                {
                    windowWidth >= 768 ? 
                        <div className="md:flex md:items-center md:gap-8">
                            {desktopWidth}

                            <NavLink to="/" className="md:justify-self-start md:col-span-8">
                                <Logo/>
                            </NavLink>
                        </div> :
                        <>
                            <div onClick={handleClick} >
                                <HamburgerIcon/>
                            </div> 

                            <NavLink to="/" className="md:justify-self-start md:col-span-8">
                                <Logo/>
                            </NavLink>
                        </>
                }

                {desktopNavbar}

                <div onClick={handleModalDisplay} className="m-0 p-0 ">  
                    <div className="relative z-10"><CartIcon/></div>  
                    <div className="absolute bg-[#D87D4A] rounded-full w-6 flex justify-center items-center bottom-3 z-0 right-5 xl:right-32">
                        {cartModalItems.length}
                    </div> 
                </div>
            </div>
            
            <div>
                {showNav && <><Backdrop onClick={handleClick}/> <NavBar click={handleClick} isNavOpen={isNavOpen}/> </> }
            </div>
              
            {/* This div is to display that gray underline in the header */}
            <div className="bg-[#1A1A1A] flex items-center justify-center relative z-30 xl:px-20">
                <div className="bg-gray-600 h-[2px] w-[90%] opacity-30"></div>
            </div>

            {modalDisplay && <><Backdrop onClick={handleModalDisplay}/><CartModal /></>}
        </>
    )
}