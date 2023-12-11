import { fetchProductDetails } from "../utilities/fetchProductDetails"

export function CartModal() {
    const cartItems : string | any = (localStorage.getItem('cart'))
    const parsedCartItems = JSON.parse(cartItems)

    const cartItemDetails = parsedCartItems.map((
        item: {
        slug: string | undefined ;
        quantity: number
    }) => {
        const details = fetchProductDetails(item.slug)
        return {
            ...details,
            quantity: item.quantity
            }
    })

    
    console.log(cartItemDetails)
    
    return(
        <>
            <div className="fixed z-50 top-10 bg-white p-8 shadow-[0 5px 15px rgba(0, 0, 0, 0.5)]">
                Hello
            </div>
        </>
    )
}