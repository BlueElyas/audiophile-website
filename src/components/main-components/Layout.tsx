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
            <div className={`m-0 p-0  ${modalDisplay ? 'opacity-40 ' : ''}`}>
                <Header handleModalDisplay={handleModalDisplay}/>
                <Outlet/>
                <Footer/>
            </div>

            {modalDisplay && <CartModal />}
        </>
    )
}