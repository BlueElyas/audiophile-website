import { fetchProductDetails } from "../utilities/fetchProductDetails"
import { useShoppingCart } from "../context/CartContext";
import { CartModalDefaultBasket } from "../components/reusable-components/CartModalDefaultBasket";

type cartItemProperties ={
    slug: string | undefined ;
    quantity: number
}

export function CartModal() {
    const {
        cartModalItems,
        setCartModalItems
    } = useShoppingCart()
    
    const handleIncreaseQuantity = (slug: string) => {
        const updatedItems = cartModalItems.map(item => {
            if (item.slug === slug) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item
        })
        setCartModalItems(updatedItems)
    }

    // Handler for decreasing quantity
    const handleDecreaseQuantity = (slug: string) => {
        const updatedItems = cartModalItems.map(item => {
            if (item.slug === slug) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        }).filter(item => item.quantity > 0)
        setCartModalItems(updatedItems)
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
        const itemSlug = item.slug ? item.slug : ''
       
        return (
            <div className="grid grid-cols-3 items-center justify-center gap-4 " key={item.id}>
                <img
                    src={item.categoryImage?.mobile.slice(1)}
                    alt=""
                    className="w-20 h-20 rounded-lg" />
                <div>
                    <h5 className="text-sm font-bold">{item.name}</h5>
                    <p className="opacity-60">$ {item.price?.toLocaleString()}</p>
                </div>
                <div className="flex bg-[#F1F1F1] gap-4 py-3 px-4 pr-[4.6rem]">
                    <button onClick={() => handleDecreaseQuantity(itemSlug)}>-</button> 
                    <p>{item.quantity}</p>
                    <button onClick={() => handleIncreaseQuantity(itemSlug)} >+</button>
                </div>
            </div>
        )
    })

    const eachProductSum = cartItemDetails.map(item => {
        if (item.price) {
            return item.price * item.quantity
        }
    })

    // Default modal display if there are no items in the basket
    
    if (cartModalItems.length < 1 ) {
        return  <CartModalDefaultBasket lengthOfCart={0} totalPrice={0} cartItemDetails={undefined}> 
                   <h6 className="md:text-2xl">Add items to this cart...</h6> 
                </CartModalDefaultBasket>
    }

    const totalPrice = eachProductSum.reduce((a,b) => {
        if(a && b) {
            return a + b
        } else {
            return a
        }
    })

   

    // 
    return(
        <CartModalDefaultBasket lengthOfCart={cartItemDetails.length} totalPrice={totalPrice ? totalPrice : 0} cartItemDetails={cartItemDetails} > 
            {mappedCartItems}
        </CartModalDefaultBasket>
    )
}