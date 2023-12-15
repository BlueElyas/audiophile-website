import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLayoutEffect } from "react";


export function Layout() {
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      },[]);
      
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}