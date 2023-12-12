import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartModal } from "../../pages/CartModal";
import { useShoppingCart } from "../../context/CartContext";


export function Layout() {
    const {
        modalDisplay,
        handleModalDisplay
    } = useShoppingCart()
    

    return(
        <>
            
            <Header handleModalDisplay={handleModalDisplay}/>
            <div className={`m-0 p-0  ${modalDisplay ? 'opacity-40 bg-gray-600' : ''}`}>
                <Outlet/>
                <Footer/>
            </div>

            {modalDisplay && <CartModal />}
        </>
    )
}