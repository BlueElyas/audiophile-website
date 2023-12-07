import { CartIcon } from "../svgs/CartIcon";
import { HamburgerIcon } from "../svgs/HamburgerIcon";
import { Logo } from "../svgs/Logo";
import { useState } from 'react'
import { NavBar } from "./NavBar";
import { NavLink } from "react-router-dom";

export function Header()  {
    const [showNav, setShowNav] = useState(false)

    function handleClick() : void {
        setShowNav(!showNav)
    }

    return (
        <>
            <div className="bg-black text-white flex justify-between px-4 py-7 items-center">
                <div onClick={handleClick} className="cursor-pointer">
                    <CartIcon/>
                </div> 
                <NavLink to="/">
                    <Logo/>
                </NavLink>
                <HamburgerIcon/>
            </div>
            <div className="">
                {showNav && <NavBar/>}
            </div>  
        </>
    )
}