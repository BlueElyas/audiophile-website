import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";
import { CartModal } from "../../pages/CartModal";


export function Layout() {
    const [modalDisplay, setModalDisplay] = useState(false)

    const handleModalDisplay  = () : void => {
        setModalDisplay(!modalDisplay)
    }

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