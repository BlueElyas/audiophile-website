import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { SeeProductButton } from "../components/reusable-components/SeeProductButton";
import { fetchProductDetails } from "../utilities/fetchProductDetails";
import { AboutSection } from "../components/reusable-components/AboutSection";
import { useShoppingCart } from "../context/CartContext";
import { useWindowSize } from "../hooks/useWindowSize";

export function ProductDetails() {
    // This gets the functions from the cart context
    const { 
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        addToCart
    } = useShoppingCart()

    // Used for navigation in recommended products
    const  { slug } = useParams()
    const navigate = useNavigate()

    // This gets the specific product and its details from the fetchProducDetails function.
    const selectedItem = fetchProductDetails(slug)

    // For responsive design
    
    
    const quantity = getItemQuantity(slug!)

    if(!selectedItem) {
        return
    }

    return (
        <div className="p-6">
            <button onClick={() => navigate(`/${selectedItem.category}`)} className="mb-8 opacity-60 capitalize">
                Go back
            </button>

            <div key={selectedItem.name} className="grid gap-8">
                <div className="flex flex-col gap-6">
                    <img 
                        src={useWindowSize(selectedItem.categoryImage)} 
                        alt={selectedItem.name} 
                        className="rounded-lg"    
                    />
                    <p className="uppercase text-red-600 tracking-[0.8em]">new product</p>
                    <h1 className="font-bold uppercase text-4xl">{selectedItem.name}</h1>
                    <p className="opacity-50">{selectedItem.description}</p>
                    <h4 className="tracking-wider font-bold">$ {selectedItem.price.toLocaleString()}</h4>
                    <div className="flex items-center justify-around">
                        <div className="flex bg-[#F1F1F1] gap-8 py-4 px-6">
                            <button onClick={() => decreaseCartQuantity(slug!) }>-</button>
                            <p>{quantity >= 0 ? quantity : 0}</p> 
                            <button onClick={() => increaseCartQuantity(slug!) }>+</button>
                        </div>
                        <button 
                            onClick={addToCart}
                            className="py-4 px-6 bg-[#D87D4A] text-white">
                                ADD TO CART
                        </button>
                    </div>
                </div>

                <div>
                    <h5 className="font-bold text-2xl">FEATURES</h5>
                    <p className="opacity-70">{selectedItem.features}</p>
                </div>

                <div>
                    <h5 className="font-bold text-2xl">IN THE BOX</h5>
                    {selectedItem.includes.map((item: { 
                        quantity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                    }, index: number) => {
                        return <p className="opacity-60" key={index}>
                            <span className="text-[#D87D4A] mr-6">{item.quantity}x</span>
                            {item.item}
                        </p>
                    })}
                </div>
            </div>
            
            <div className="grid gap-6 mt-8">
                <img src={useWindowSize(selectedItem.gallery.first)} alt="" className="rounded-lg" />
                <img src={useWindowSize(selectedItem.gallery.second)} alt="" className="rounded-lg" />
                <img src={useWindowSize(selectedItem.gallery.third)} alt="" className="rounded-lg" />
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
                                src={useWindowSize(item.image)} 
                                alt="" 
                                className="rounded-lg"    
                            />
                            <h5>{item.name}</h5>
                            <Link to={`/${itemCategory}/${item.slug}`}>
                                <SeeProductButton 
                                    style="bg-[#D87D4A] text-white text-sm tracking-wide font-normal" />
                            </Link>
                        </div>
                    )
                })}
            </div>

            <AboutSection />

        </div>
    )
}