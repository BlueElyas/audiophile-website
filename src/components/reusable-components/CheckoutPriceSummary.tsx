type CheckOutPriceSummaryProps ={
    totalPrice: number
}

export function CheckOutPriceSummary( {totalPrice} : CheckOutPriceSummaryProps) {
    const shipping = 50
    const vat = (Math.round(((20/100) * totalPrice)))
    const total = Math.round((totalPrice + shipping + vat))

    return(
        <div className="flex flex-col mb-8">
            <div className="flex justify-between items-center">
                <p className="opacity-60 uppercase">Total</p>
                <p className="font-bold">$ {totalPrice.toLocaleString()}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="opacity-60 uppercase">Shipping</p>
                <p className="font-bold">$ {shipping}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="opacity-60 uppercase">VAT (included)</p>
                <p className="font-bold">$ {vat.toLocaleString()}</p>
            </div>
            <br />
            <div className="flex justify-between items-center">
                <p className="opacity-60 uppercase">grand total</p>
                <p className="font-bold text-[#D87D4A]">$ {total.toLocaleString()}</p>
            </div>
        </div>
    )
}