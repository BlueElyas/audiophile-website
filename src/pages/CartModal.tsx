import { fetchProductDetails } from "../utilities/fetchProductDetails"
import { useShoppingCart } from "../context/CartContext";
import { CartModalDefaultBasket } from "../components/reusable-components/CartModalDefaultBasket";

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
                
                <div className="grid grid-cols-3 items-center justify-center gap-4 " key={item.id}>
                    <img
                        src={item.categoryImage?.mobile.slice(1)}
                        alt=""
                        className="w-20 h-20 rounded-lg" />
                    <div>
                        <h5 className="text-sm font-bold">{item.name}</h5>
                        <p className="opacity-60">$ {item.price?.toLocaleString()}</p>
                    </div>
                    <div className="flex bg-[#F1F1F1] gap-4 py-3 px-3 pr-24">
                        <button onClick={() => item.quantity - 1} >-</button> {/*Remove these
                        onclick functions */}
                        <p>{item.price}</p>
                        <button onClick={() => item.quantity + 1}>+</button>
                    </div>
                </div>
            </>
        )
    })

    const eachProductSum = cartItemDetails.map(item => {
        if (item.price) {
            return item.price * item.quantity
        }
    })

    if (eachProductSum.length < 1) {
        return  <CartModalDefaultBasket lengthOfCart={0} totalPrice={0} > 
                    Add items to this cart...
                </CartModalDefaultBasket>
    }

    const totalPrice = eachProductSum.reduce((a,b) => {
        if(a && b) {
            return a + b
        } else {
            return a
        }
    })

    if(totalPrice)
    return(
            <CartModalDefaultBasket lengthOfCart={cartItemDetails.length} totalPrice={totalPrice} > 
                {mappedCartItems}
            </CartModalDefaultBasket>
    )
}