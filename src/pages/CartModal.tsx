
export function CartModal() {
    const cartItems : string | any = localStorage.getItem('cart')
    console.log(JSON.parse(cartItems))
    return(
        <>
            <div className="bg-black text-white fixed">
                Hello
            </div>
        </>
    )
}