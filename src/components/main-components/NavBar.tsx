import { NavLink } from "react-router-dom";

export function NavBar() {
    return(
        <>
            <nav className="flex gap-5">
                <NavLink to="/headphones">Headphones</NavLink>
                <NavLink to="/speakers">Speakers</NavLink>
                <NavLink to="/earphones">Earphones</NavLink>
            </nav>
        </>
    )
}