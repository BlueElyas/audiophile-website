import { useLocation, useNavigate } from "react-router-dom"
import { StyledCheckoutComponent } from "../components/reusable-components/StyledCheckoutGroupHeader"
import { CheckoutInput } from "../components/reusable-components/CheckoutInput"

export function Checkout() {
    const location = useLocation()
    const navigate = useNavigate()

    console.log(location)

    return(
        <div className="m-4">                
            <button onClick={() => navigate(-1)} className="mb-8 opacity-60 capitalize">Go back</button>
            <div className="my-2 mx-8">
                <h1 className="text-2xl font-bold mb-8">CHECKOUT</h1>
                <StyledCheckoutComponent>billing details</StyledCheckoutComponent>
                <CheckoutInput type='text' placeholder="Alexei Ward" required={false} maxLength={16} name="Name" id="name" />
            </div>
        </div>
    )
}