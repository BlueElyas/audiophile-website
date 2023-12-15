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
            <Backdrop onClick={() => {}} />
            <div 
                className="fixed z-50 top-20 left-4 bg-white p-8 shadow-lg] 
                rounded-lg w-[92%] flex flex-col gap-8 border-2
                md:right-10 md:left-auto md:w-1/2 md:h-max md:top-28 md:justify-between"
                >
                <div className="flex justify-between xl:text-2xl">
                    <h1 className="font-bold ">CART ({lengthOfCart})</h1>
                    <button 
                        className="underline opacity-50"
                        onClick={clearCart}
                        >Remove All</button>
                </div>

                {children}
                
                <div className="xl:text-2xl">
                    <div className="flex justify-between mb-6">
                        <h5>TOTAL</h5>
                        <h3 className="font-bold">${totalPrice?.toLocaleString()}</h3>
                    </div>

                    <div 
                        className="bg-[#D87D4A] text-white py-4 rounded-sm disabled:cursor-not-allowed text-center
                                    md:justify-self-end xl:text-3xl"
                    >                                
                        {
                            totalPrice === 0 ? 
                            <NavLink  to="/" onClick={handleModalDisplay}> Add items to this cart...</NavLink> : 
                            <NavLink onClick={handleModalDisplay} to='/checkout' state={{cartItemDetails, totalPrice}}>CHECKOUT </NavLink>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}