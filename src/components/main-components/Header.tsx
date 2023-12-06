import { CartIcon } from "../svgs/CartIcon";
import { HamburgerIcon } from "../svgs/HamburgerIcon";
import { Logo } from "../svgs/Logo";

export function Header()  {
    return (
        <div className="bg-black text-white flex justify-between px-4 py-7 items-center border-b-2 border-white">
            <div>
                <CartIcon/>
            </div>  
            <Logo/>
            <HamburgerIcon/>
        </div>  
    )
}