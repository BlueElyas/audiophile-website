import { HamburgerIcon } from "../svgs/HamburgerIcon";
import { CartIcon } from "../svgs/CartIcon";
import { Logo } from "../svgs/Logo";
import { useState } from 'react'
import { NavBar } from "./NavBar";
import { NavLink } from "react-router-dom";

interface CartModalProps {
    handleModalDisplay: () => void
}

export function Header( { handleModalDisplay } : CartModalProps )  {
    const [showNav, setShowNav] = useState(false)

    function handleClick() : void {
        setShowNav(!showNav)
    }

    return (
        <>
            <div className="bg-black text-white flex justify-between px-4 py-7 items-center z-40 relative">
                <div onClick={handleClick} className="cursor-pointer">
                    <HamburgerIcon/>
                </div> 

                <NavLink to="/">
                    <Logo/>
                </NavLink>

                <div onClick={handleModalDisplay} className="m-0 p-0">
                    <CartIcon/>   
                </div>
            </div>

            <div className="">
                {showNav && <NavBar/>}
            </div>  
        </>
    )
}