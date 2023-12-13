import { mappedProductNavLinks } from "../reusable-components/ProductNavLinks";
export function NavBar() {
   

    return(
        <>
            <nav className="absolute z-[30] bg-white w-full md:flex md:items-center justify-around">
                {mappedProductNavLinks}
            </nav>
        </>
    )
}

