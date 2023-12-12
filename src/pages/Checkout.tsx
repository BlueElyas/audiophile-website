import { useLocation, useNavigate } from "react-router-dom"
import { StyledCheckoutComponent } from "../components/reusable-components/StyledCheckoutGroupHeader"
import { CheckoutInput } from "../components/reusable-components/CheckoutInput"
import { SetStateAction, useState } from "react"
import { CheckoutRadioInput } from "../components/reusable-components/CheckoutRadioInput"
import { CheckoutProductItemSummary } from "../components/reusable-components/CheckoutProductItemSummary"
import { CheckOutPriceSummary } from "../components/reusable-components/CheckoutPriceSummary"

export function Checkout() {
    const [selectedOption, setSelectedOption] = useState('e-Money')

    const location = useLocation()
    const navigate = useNavigate()

    const checkoutProducts = location.state.cartItemDetails
    const totalPrice = location.state.totalPrice

    console.log(totalPrice)

    function handleChange(e: { target: { value: SetStateAction<string> } }) {
        setSelectedOption(e.target.value)
    }

    return(
        <div className="m-4">                
            <button type="button" onClick={() => navigate(-1)} className="mb-8 opacity-60 capitalize">Go back</button>
            <form className="my-2 mx-8">
                <h1 className="text-2xl font-bold mb-8">CHECKOUT</h1>

                <StyledCheckoutComponent>billing details</StyledCheckoutComponent>
                <CheckoutInput type='text' placeholder="Alexei Ward" maxLength={16} name="Name" id="name"  pattern="^[a-zA-Z]+$"/>
                <CheckoutInput type='email' placeholder="alexei@gmail.com" maxLength={50} name="Email Address" id="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" />
                <CheckoutInput type='text' placeholder="+1 202-555-0136" maxLength={16} name="Phone Number" id="phone number" pattern="^[0-9\W_]+$"/>

                <StyledCheckoutComponent>shipping info</StyledCheckoutComponent>
                <CheckoutInput type='text' placeholder="1137 Williams Avenue" maxLength={30} name="Your Address" id="address" pattern="^[a-zA-Z0-9_.-]*$" />
                <CheckoutInput type='text' placeholder="10001" maxLength={10} name="ZIP Code/Post Code" id="zip code" pattern="^[a-zA-Z0-9_.-]*$" />
                <CheckoutInput type='text' placeholder="New York" maxLength={20} name="City" id="city" pattern="^[a-zA-Z]+$" />
                <CheckoutInput type='text' placeholder="United States" maxLength={20} name="Country" id="country" pattern="^[a-zA-Z]+$"/> 

                <StyledCheckoutComponent>payment details</StyledCheckoutComponent>

                <label className="font-bold text-sm block mt-6 mb-4">Payment Method</label>
                <CheckoutRadioInput name='e-Money' selectedOption={selectedOption} handleChange={handleChange}/>
                <CheckoutRadioInput name='Cash on Delivery' selectedOption={selectedOption} handleChange={handleChange}/>

                {selectedOption === 'e-Money' ? 
                <>
                    <CheckoutInput type="text" placeholder="2384219738" maxLength={10} name="e-Money Number" id="e-money-number" pattern="^[0-9]{10}$" /> 
                    <CheckoutInput type="text" placeholder="6969" maxLength={4} name="e-Money Pin" id="e-money-pin" pattern="^[0-9]{4}$" /> 
                </>
                : ''}

                <h1 className="uppercase tracking-wider font-bold mt-8">Summary</h1>
                {CheckoutProductItemSummary(checkoutProducts)}

                <CheckOutPriceSummary totalPrice={totalPrice}/>

                <button type="submit">Continue&pay</button>
            </form>
        </div>
    )
}