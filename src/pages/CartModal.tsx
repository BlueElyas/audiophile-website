import { fetchProductDetails } from "../utilities/fetchProductDetails"
import { useShoppingCart } from "../context/CartContext";

type cartItemProperties ={
    slug: string | undefined ;
    quantity: number
}

export function CartModal(this: any) {
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

    const mappedCartItems = cartItemDetails.map(item => {
        return (
            <>
                
                <div className="flex justify-between font-bold items-center gap-4" key={item.id}>
                    <img
                        src={item.categoryImage?.mobile.slice(1)}
                        alt=""
                        className="w-20 h-20 rounded-lg" />
                    <div className="">
                        <h5>{item.name}</h5>
                        <p className="opacity-60">$ {item.price?.toLocaleString()}</p>
                    </div>
                    <div className="flex bg-[#F1F1F1] gap-4 py-3 px-4">
                        <button>-</button>
                        <p>{item.quantity}</p>
                        <button>+</button>
                    </div>
                </div></>
        )
    })

    const eachProductSum = cartItemDetails.map(item => {
        if (item.price) {
            return item.price * item.quantity
        }
    })

    const totalPrice = eachProductSum.reduce((a,b) => {
        if(a && b) {
            return a + b
        } else {
            return a
        }
    })
    
    

    return(
        <>
        
            <div 
                className="fixed z-50 top-32 left-4 bg-white p-8 shadow-lg] 
                rounded-lg w-[92%] flex flex-col gap-8 border-2"
            >
                <div className="flex justify-between ">
                    <h1 className="font-bold">CART ({cartItemDetails.length})</h1>
                    <button className="underline opacity-50">Remove All</button>
                </div>

                {mappedCartItems}

                <div className="flex justify-between">
                    <h5>TOTAL</h5>
                    <h3 className="font-bold">${totalPrice?.toLocaleString()}</h3>
                </div>
                <button className="bg-[#D87D4A] text-white py-4 rounded-sm">CHECKOUT</button>
            </div>
        </>
    )
}