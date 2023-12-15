import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const location = useLocation()

    useEffect(()=>{
        window.scroll(0, 0)
    },[location])

    return null
}