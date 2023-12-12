
export function CheckoutInput() {

    
    return (
        <div className="flex flex-col">
            <label htmlFor="name" className="font-bold text-sm mt-4">Name</label>
            <input type="text" id="name" className="border-2 p-2 pl-4 rounded-lg mt-1" placeholder="name"/>
        </div>
    )
}