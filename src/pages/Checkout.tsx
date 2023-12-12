import { useLocation, useNavigate } from "react-router-dom"

export function Checkout() {
    const location = useLocation()
    const navigate = useNavigate()

    console.log(location)

    return(
        <>                
            <button onClick={() => navigate(-1)} className="mb-8 opacity-60 capitalize">Go back</button>
            <div className="">
                <h1></h1>
            </div>
        </>
    )
}