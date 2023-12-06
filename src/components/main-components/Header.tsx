import { CartIcon } from "../svgs/CartIcon";
import { HamburgerIcon } from "../svgs/HamburgerIcon";
import { Logo } from "../svgs/Logo";
import { useState } from 'react'
import { NavBar } from "./NavBar";

export function Header()  {
    const [showNav, setShowNav] = useState(false)

    function handleClick() {
        setShowNav(!showNav)
    }

    return (
        <>
            <div className="bg-black text-white flex justify-between px-4 py-7 items-center border-b-2 border-white">
                <div onClick={handleClick}>
                    <CartIcon/>
                </div> 
                <Logo/>
                <HamburgerIcon/>
            </div>
            <div className="">
                {showNav && <NavBar/>}
            </div>  
        </>
    )
}