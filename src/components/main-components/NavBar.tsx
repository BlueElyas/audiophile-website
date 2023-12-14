import { mappedProductNavLinks } from "../reusable-components/ProductNavLinks";
export function NavBar() {
   

    return(
        <>
            <nav className="absolute z-[30] bg-white w-full md:justify-around  md:flex md:items-center md:pb-10">
                {mappedProductNavLinks}
            </nav>
        </>
    )
}

