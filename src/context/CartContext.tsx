import { ReactNode, createContext, useContext, useState } from "react"

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
    
    function getItemQuantity(slug: string) {
        return cartItems.find(item => item.slug === slug)?.quantity || 0
    }

    function increaseCartQuantity(slug: string) {
        setCartItems((currItems : any[]) => {
            if (currItems.find(item => item.slug === slug) == null) {
                return [...currItems, { slug, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.slug === slug) {
                        return { ...item, quantity: item.quantity + 1}
                    } else {
                        return 1
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(slug: string) {
        setCartItems((currItems : any[]) => {
            if (currItems.find(item => item.slug === slug)?.quantity === 1) {
                return currItems.filter( item => item.slug !== slug)
            } else {
                return currItems.map(item => {
                    if (item.slug === slug) {
                        return { ...item, quantity: item.quantity - 1}
                    } else {
                        return 1
                    }
                })
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

// const [cart, setCart] = useState([])

    // useEffect(() => {
    //     const savedCart = localStorage.getItem('cart')
    //     if(savedCart) {
    //         setCart(JSON.parse(savedCart))
    //     }
    // },[])

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cart))
    // },[cart])

