import { useLocation, useNavigate } from "react-router-dom"
import { StyledCheckoutComponent } from "../components/reusable-components/StyledCheckoutGroupHeader"
import { CheckoutInput } from "../components/reusable-components/CheckoutInput"
import { SetStateAction, useState } from "react"
import { CheckoutRadioInput } from "../components/reusable-components/CheckoutRadioInput"

export function Checkout() {
    const [selectedOption, setSelectedOption] = useState('e-Money')

    const location = useLocation()
    const navigate = useNavigate()

    console.log(location.state)

    function handleChange(e: { target: { value: SetStateAction<string> } }) {
        setSelectedOption(e.target.value)
    }


    return(
        <div className="m-4">                
            <button type="button" onClick={() => navigate(-1)} className="mb-8 opacity-60 capitalize">Go back</button>
            <form className="my-2 mx-8">
                <h1 className="text-2xl font-bold mb-8">CHECKOUT</h1>

                <StyledCheckoutComponent>billing details</StyledCheckoutComponent>
                <CheckoutInput type='text' placeholder="Alexei Ward" required={true} maxLength={16} name="Name" id="name" />
                <CheckoutInput type='email' placeholder="alexei@gmail.com" required={true} maxLength={50} name="Email Address" id="email" />
                <CheckoutInput type='text' placeholder="+1 202-555-0136" required={true} maxLength={16} name="Phone Number" id="phone number" />

                <StyledCheckoutComponent>shipping info</StyledCheckoutComponent>
                <CheckoutInput type='text' placeholder="1137 Williams Avenue" required={true} maxLength={30} name="Your Address" id="address" />
                <CheckoutInput type='text' placeholder="10001" required={true} maxLength={10} name="ZIP Code/Post Code" id="zip code" />
                <CheckoutInput type='text' placeholder="New York" required={true} maxLength={20} name="City" id="city" />
                <CheckoutInput type='text' placeholder="United States" required={true} maxLength={20} name="Country" id="country" />

                <StyledCheckoutComponent>payment details</StyledCheckoutComponent>

                <label className="font-bold text-sm block mt-6 mb-4">Payment Method</label>
                <CheckoutRadioInput name='e-Money' selectedOption={selectedOption} handleChange={handleChange}/>
                <CheckoutRadioInput name='Cash on Delivery' selectedOption={selectedOption} handleChange={handleChange}/>

                {selectedOption === 'e-Money' ? 
                <>
                    <CheckoutInput type="number" placeholder="2384219738" required={true} maxLength={10} name="e-Money Number" id="e-money-number" /> 
                    <CheckoutInput type="number" placeholder="6969" required={true} maxLength={4} name="e-Money Pin" id="e-money-pin" /> 
                </>
                : ''}
            
            </form>
        </div>
    )
}