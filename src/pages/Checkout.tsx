import { useLocation } from "react-router-dom"

export function Checkout() {
    const location = useLocation()

    console.log(location.state)

    return(
        <>
            Hello
        </>
    )
}