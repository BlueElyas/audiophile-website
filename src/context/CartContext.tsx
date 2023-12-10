import { ReactNode, createContext, useContext, useEffect, useState } from "react"

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    slug: string
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (slug: string) => number 
    increaseCartQuantity: (slug: string) => void
    decreaseCartQuantity: (slug: string) => void
    removeFromCart: (slug: string) => void
}

const CartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(CartContext)
}

export function ShoppingCartProvider( { children } : ShoppingCartProviderProps ) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [initializedLoading, setInitializedLoading] = useState(true)

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cart')
        if(savedCartItems) {
            setCartItems(JSON.parse(savedCartItems))
        }
        setInitializedLoading(false)
    },[])

    useEffect(() => {
        if(!initializedLoading){
            localStorage.setItem('cart', JSON.stringify(cartItems))
        }
    },[cartItems])

    
    function getItemQuantity(slug: string) {
        return cartItems.find(item => item.slug === slug)?.quantity || 0
    }

    function increaseCartQuantity(slug: string) {
        setCartItems((currItems : CartItem[]) => {

            const itemExists = currItems.find(item => item.slug === slug)

            if (itemExists) {
                return currItems.map(item => {
                   return item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
                })
            } else {
                return [...currItems, { slug, quantity: 1 }]
            }
        })
    }

    function decreaseCartQuantity(slug: string) {
        setCartItems((currItems : CartItem[]) => {

            const itemExists = currItems.find(item => item.slug === slug)

            if (itemExists) {
                if(itemExists.quantity === 1) {

                    return currItems.filter( item => item.slug !== slug)
                } else {

                    return currItems.map(item => {
                        return item.slug === slug ? { ...item, quantity: item.quantity - 1} : item
                        }
                    )
                }
            } else {
                return currItems
            }
        })
    }

    function removeFromCart(slug: string) {
        setCartItems(currItems => {
            return currItems.filter(item => item.slug !== slug)
        })
    }

    return(
        <CartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}