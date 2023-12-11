import { fetchProductDetails } from "../utilities/fetchProductDetails"
import { useShoppingCart } from "../context/CartContext";

type cartItemProperties ={
    slug: string | undefined ;
    quantity: number
}

export function CartModal() {
    const {
        cartModalItems,
    } = useShoppingCart()

    if(!(typeof cartModalItems)) {
        return <h1>Information not found</h1>
    }

    const cartItemDetails = cartModalItems.map((
        item: cartItemProperties ) => {
        const details = fetchProductDetails(item.slug)
        return {
            ...details,
            quantity: item.quantity
            }
    })

    

    return(
        <>
            <div 
                className="fixed z-50 top-48  bg-white p-8 shadow-lg] 
                rounded-lg w-[92%] flex flex-col gap-8 border-2">
                <div className="flex justify-between">
                    <h1 className="font-bold">CART ({cartItemDetails.length})</h1>
                    <button className="underline opacity-50">Remove All</button>
                </div>
                <div className="flex justify-between font-bold items-center">
                    <img 
                        src="\assets\cart\image-xx59-headphones.jpg" 
                        alt="" 
                        className="w-20 h-20 rounded-lg"/>
                    <div className="">
                        <h5>NAME</h5>
                        <p className="font-normal opacity-60">$ PRICE</p>
                    </div>
                    <div className="flex bg-[#F1F1F1] gap-8 py-4 px-6">
                        <button>-</button>
                        <p>0</p> 
                        <button>+</button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h5>TOTAL</h5>
                    <h3 className="font-bold">TOTAL PRICE</h3>
                </div>
                <button className="bg-[#D87D4A] text-white py-4 rounded-sm">CHECKOUT</button>
            </div>
        </>
    )
}