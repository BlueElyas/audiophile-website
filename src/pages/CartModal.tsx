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

    console.log(cartModalItems)

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


    // console.log(cartItemDetails)
    
    return(
        <>
            <div className="fixed z-50 top-48 left-[36%] bg-white p-8 shadow-[0 5px 15px rgba(0, 0, 0, 0.5)] rounded-lg">
                <div className="">
                    <h1>CART ({cartItemDetails.length})</h1>
                    <button>Remove All</button>
                </div>
            </div>
        </>
    )
}