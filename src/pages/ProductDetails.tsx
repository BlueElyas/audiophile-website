import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { SeeProductButton } from "../components/reusable-components/SeeProductButton";
import { fetchProductDetails } from "../utilities/fetchProductDetails";

export function ProductDetails() {
    const[itemQuantity, setitemQuantity] = useState(0)
    const  { slug } = useParams()
    const navigate = useNavigate()

    
    const selectedItem = fetchProductDetails(slug)
    
    if (!selectedItem) {
        return <div>Item not found</div>
    }
    return (
        <div className="p-6">
            <button onClick={() => navigate(`/${selectedItem.category}`)} className="mb-8 opacity-60 capitalize">
                Go back
            </button>

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
                    <div className="flex items-center justify-around">
                        <div className="flex bg-[#F1F1F1] gap-8 py-4 px-6">
                            <button onClick={() => setitemQuantity(itemQuantity - 1)}>-</button>
                            <p>{itemQuantity >= 0 ? itemQuantity : 0}</p>
                            <button onClick={() => setitemQuantity(itemQuantity + 1)}>+</button>
                        </div>
                        <button className="py-4 px-6 bg-[#D87D4A] text-white">ADD TO CART</button>
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

            <div className="text-center text-3xl font-bold my-24">
                <h5>YOU MAY ALSO LIKE</h5>
                {selectedItem.others.map((item : any) => {
                    const specificItem = fetchProductDetails(item.slug)
                    if (!specificItem) return
                    const itemCategory = specificItem.category
                    return(
                        <div className="flex flex-col gap-8 mb-8" key={item.name}>
                            <img 
                                src={item.image.mobile.slice(1)} 
                                alt="" 
                                className="rounded-lg"    
                            />
                            <h5>{item.name}</h5>
                            <Link to={`/${itemCategory}/${item.slug}`}>
                                <SeeProductButton 
                                    style="bg-[#D87D4A] text-white text-sm tracking-wide font-normal" 
                                    handleClick={()=>{}}/>
                            </Link>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}