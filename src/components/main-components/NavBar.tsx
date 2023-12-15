import { navLinks } from "../reusable-components/ProductNavLinks";

type NavBarProps = {
    isNavOpen: boolean
    click: () => void

}

export function NavBar( {isNavOpen, click } : NavBarProps ) {



    return(
        <>
            {isNavOpen &&
            <nav className="absolute z-50 bg-white w-full md:justify-around  md:flex md:items-center md:pb-10">
                {navLinks(click )}
            </nav>}
        </>
    )
}

