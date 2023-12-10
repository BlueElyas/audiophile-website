
export function CartModal() {
    const cartItems : string | any = (localStorage.getItem('cart'))
    const parsedCartItems = JSON.parse(cartItems)
    console.log(parsedCartItems)
    return(
        <>
            <div className="bg-black text-white fixed">
                Hello
            </div>
        </>
    )
}