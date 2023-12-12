

export const CheckoutProductItemSummary = ( products: any[]) => products.map((item) => {
    return (
        <div className="flex justify-between items-center gap-8 my-8" key={item.id}>    
            <div className="flex items-center gap-8">
                <img
                    src={item.categoryImage?.mobile.slice(1)}
                    alt=""
                    className="w-20 h-20 rounded-lg" 
                />
                <div>
                    <h5 className="text-sm font-bold">{item.name}</h5>
                    <p className="opacity-60">$ {item.price?.toLocaleString()}</p>
                </div>
            </div>
            <p>x{item.quantity}</p>
        </div>
    )
}) 
