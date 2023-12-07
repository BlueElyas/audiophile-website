import { mappedProductNavLinks } from "../reusable-components/ProductNavLinks";
export function NavBar() {
   

    return(
        <>
            <nav className="flex gap-16 uppercase flex-col m-6 mt-16 sticky top-0 z-50">
                {mappedProductNavLinks}
            </nav>
        </>
    )
}

