import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Backdrop } from "../reusable-components/Backdrop";
import { useShoppingCart } from "../../context/CartContext";


export function Layout() {
    const {
        handleModalDisplay,
        modalDisplay
    } = useShoppingCart()

    return(
        <>
            {modalDisplay && <Backdrop onClick={handleModalDisplay} />}
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}