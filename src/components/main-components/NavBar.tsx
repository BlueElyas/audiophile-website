import { mappedProductNavLinks } from "../reusable-components/ProductNavLinks";
export function NavBar() {
   

    return(
        <>
            <nav className="sticky">
                {mappedProductNavLinks}
            </nav>
        </>
    )
}

