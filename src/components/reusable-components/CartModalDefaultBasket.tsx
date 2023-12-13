import { ReactNode } from "react"
import { useShoppingCart } from "../../context/CartContext"
import { NavLink } from "react-router-dom"
import { Backdrop } from "./Backdrop"

type CartModalDefaultBasketProps = {
    totalPrice: number 
    lengthOfCart: number
    children: ReactNode
    cartItemDetails: undefined | any[]
}

export function CartModalDefaultBasket ( { children, lengthOfCart, totalPrice, cartItemDetails } : CartModalDefaultBasketProps ) {
    const {
        clearCart,
        handleModalDisplay
    } = useShoppingCart()   

    console.log(totalPrice)
    

    return(
        <>
            <Backdrop />
            <div 
                className="fixed z-50 top-20 left-4 bg-white p-8 shadow-lg] 
                rounded-lg w-[92%] flex flex-col gap-8 border-2"
                >
                <div className="flex justify-between ">
                    <h1 className="font-bold">CART ({lengthOfCart})</h1>
                    <button 
                        className="underline opacity-50"
                        onClick={clearCart}
                        >Remove All</button>
                </div>

                {children}
        
                <div className="flex justify-between">
                    <h5>TOTAL</h5>
                    <h3 className="font-bold">${totalPrice?.toLocaleString()}</h3>
                </div>
                <div 
                    className="bg-[#D87D4A] text-white py-4 rounded-lg disabled:cursor-not-allowed text-center"
                >                                
                        {
                            totalPrice === 0 ? 
                            <button onClick={handleModalDisplay}> Add items to this cart...</button> : 
                            <NavLink onClick={handleModalDisplay} to='/checkout' state={{cartItemDetails, totalPrice}}>CHECKOUT </NavLink>
                        }
                </div>
            </div>
        </>
    )
}