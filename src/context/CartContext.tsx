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
    addToCart: () => void
    cartModalItems: CartItem[]
    clearCart: () => void
    setCartModalItems: Function
    modalDisplay: boolean
    handleModalDisplay: () => void
}

const CartContext = createContext({} as ShoppingCartContext)

// Used for importing values into other components
export function useShoppingCart() {
    return useContext(CartContext)
}

export function ShoppingCartProvider( { children } : ShoppingCartProviderProps ) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [initializedLoading, setInitializedLoading] = useState(true)
    const [cartModalItems, setCartModalItems] = useState<typeof cartItems>([])
    const [modalDisplay, setModalDisplay] = useState(false)

    const handleModalDisplay  = () : void => {
        setModalDisplay(!modalDisplay)
    }

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cart')
        if(savedCartItems) {
            const parsedItems = JSON.parse(savedCartItems)
            setCartItems(parsedItems)
            setCartModalItems(parsedItems)
        }
        setInitializedLoading(false)
    },[])

    useEffect(() => {
        if(!initializedLoading){
            localStorage.setItem('cart', JSON.stringify(cartModalItems))
        }
    },[cartModalItems])

    function addToCart() {
        setCartModalItems((prevModalItems) => {
            const updatedModalItems = [...prevModalItems]

            cartItems.forEach(cartItem => {
                const existingModalItem = updatedModalItems.find(item => item.slug === cartItem.slug)
                if (existingModalItem) {
                    existingModalItem.quantity += cartItem.quantity
                } else {
                    updatedModalItems.push({ ...cartItem })
                }
            })

            return updatedModalItems
        })

        // Reset the quantity in cartItems to 0
        setCartItems(cartItems.map(item => ({ ...item, quantity: 0 })));
    }
    
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
        setCartModalItems(currItems => {
            return currItems.filter(item => item.slug !== slug)
        })
        localStorage.clear()
    }

    function clearCart() {
        setCartItems([])
        setCartModalItems([])
        localStorage.clear()
    }

    

    return(
        <CartContext.Provider 
            value={{ 
                getItemQuantity, 
                increaseCartQuantity, 
                decreaseCartQuantity, 
                removeFromCart, 
                addToCart, 
                cartModalItems, 
                clearCart, 
                setCartModalItems,
                handleModalDisplay,
                modalDisplay }}>
            {children}
        </CartContext.Provider>
    )
}