import { NavLink } from "react-router-dom";
import { fetchProductDetails } from "../utilities/fetchProductDetails";
import { Backdrop } from "../components/reusable-components/Backdrop";

type cartItem ={
    slug: string | undefined ;
    quantity: number
}
// clearcart is used, whenever they click go back home, it works
type CheckoutModalProps ={
    totalPrice: number
    checkoutProducts: any
    clearCart: () => void
}

export function CheckoutModal( { totalPrice, checkoutProducts, clearCart } : CheckoutModalProps ) {

    const cartItemDetails = checkoutProducts.map((
        item: cartItem ) => {
        const details = fetchProductDetails(item.slug)
        return {
            ...details,
            quantity: item.quantity
            }
    })

    const multipleOrSingleCartItems = cartItemDetails.length -1 === 1 ? '' : 's' 

    return(
        <>
            <div className="px-6 py-8 m-4bg-white rounded-lg flex flex-col fixed shadow-lg border-2 m-4 bg-white z-50
                            md:top-1 md:left-16 xl:top-64 xl:left-96"
            >
                <div className="flex flex-col gap-6">
                    <div className="relative">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <circle cx="32" cy="32" r="32" fill="#D87D4A"/>    
                        </svg>
                        <svg className="absolute bottom-5 left-5" xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
                            <path d="M1.75391 11.3328L8.50542 18.0843L24.3085 2.28125" stroke="white" strokeWidth="4"/>
                        </svg>   
                    </div>
                    <h1 className="font-bold uppercase text-3xl">thank you for your order</h1>
                    <p className="opacity-60">You will receive an email confirmation shortly...</p>
                </div>
                
                    <div className="bg-gray-100 rounded-t-lg mt-8 md:flex">
                        <div className="flex flex-col justify-between items-center gap-4 mt-8 mb-5 md:flex-1 md:mr-8">    
                            <div className="flex items-center gap-5 border-b-2 pb-6">
                                <img
                                    src={cartItemDetails[0].categoryImage?.mobile.slice(1)}
                                    alt=""
                                    className="w-20 h-20 rounded-lg" 
                                />
                                <div>
                                    <h5 className="text-sm font-bold md:text-base">{cartItemDetails[0].name}</h5>
                                    <p className="opacity-60">$ {cartItemDetails[0].price.toLocaleString()}</p>
                                </div>
                                <p>x{cartItemDetails[0].quantity}</p>
                            </div>
                            <p className="font-bold opacity-60">and {cartItemDetails.length - 1} other item{multipleOrSingleCartItems}</p>
                        </div>

                        <div className="bg-black text-white uppercase p-4 rounded-b-lg font-bold w-full 
                                        md:flex-1 md:flex md:flex-col md:justify-center md:ml-4"
                        >
                            <p className="opacity-60 font-normal md:text-2xl">grand total</p>
                            <p className="md:text-xl">$ {totalPrice.toLocaleString()}</p>
                        </div>
                    </div>
                    
                    
  

                <NavLink onClick={clearCart} className="bg-[#D87D4A] text-white text-center rounded-sm py-4 my-6 " to='/'>BACK TO HOME</NavLink>

            </div>
            <Backdrop/>
        </>
    )
}