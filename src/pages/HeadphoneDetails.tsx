import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useLocation } from "react-router-dom"

export function HeadphoneDetails() {
    const location = useLocation()
    const selectedItem = location.state

    if (!selectedItem) {
        return <div>Item not found</div>;
    }
    console.log(location.state)
    return (
        <div className="p-6">
            <div key={selectedItem.name} className="grid gap-8">
                <div className="flex flex-col gap-6">
                    <img 
                        src={selectedItem.categoryImage.mobile.slice(1)} 
                        alt={selectedItem.name} 
                        className="rounded-lg"    
                    />
                    <p className="uppercase text-red-600 tracking-[0.8em]">new product</p>
                    <h1 className="font-bold uppercase text-4xl">{selectedItem.name}</h1>
                    <p className="opacity-50">{selectedItem.description}</p>
                    <h4 className="tracking-wider font-bold">$ {selectedItem.price.toLocaleString()}</h4>
                    <div>
                        add item, add to cart
                    </div>
                </div>
                <div>
                    <h5 className="font-bold text-2xl">FEATURES</h5>
                    <p className="opacity-70">{selectedItem.features}</p>
                </div>
                <div>
                    <h5 className="font-bold text-2xl">IN THE BOX</h5>
                    {selectedItem.includes.map((item: { quantity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
                        return <p className="opacity-60"><span className="text-[#D87D4A] mr-6">{item.quantity}x</span>{item.item}</p>
                    })}
                </div>
            </div>
            <div className="grid gap-6 mt-8">
                <img src={selectedItem.gallery.first.mobile.slice(1)} alt="" className="rounded-lg" />
                <img src={selectedItem.gallery.second.mobile.slice(1)} alt="" className="rounded-lg" />
                <img src={selectedItem.gallery.third.mobile.slice(1)} alt="" className="rounded-lg" />
            </div>
        </div>
    )
}