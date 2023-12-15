import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { SeeProductButton } from "../components/reusable-components/SeeProductButton";
import { fetchProductDetails } from "../utilities/fetchProductDetails";
import { AboutSection } from "../components/reusable-components/AboutSection";
import { useShoppingCart } from "../context/CartContext";
import { useWindowSize } from "../hooks/useWindowSize";
import { mappedProductNavLinks } from "../components/reusable-components/ProductNavLinks";

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

    // For features section to create 2 paragraphs
    const description = selectedItem.features;
    const middleIndex = Math.ceil(description.length / 2);
    const splitIndex = description.indexOf('. ', middleIndex) + 1; // +1 to include the full stop in the first half

    const firstHalf = description.substring(0, splitIndex);
    const secondHalf = description.substring(splitIndex);




    return (
        <>
            <div className="p-6 xl:mx-[10rem]">
                <button onClick={() => navigate(`/${selectedItem.category}`)} className="mb-8 opacity-60 capitalize">
                    Go back
                </button>

                <div key={selectedItem.name} className="grid gap-8">
                    <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10 xl:gap-24">
                        <div className="md:bg-[#F1F1F1] md:rounded-lg md:flex md:flex-col md:justify-center md:overflow-hidden">
                            <img 
                                src={useWindowSize(selectedItem.categoryImage)} 
                                alt={selectedItem.name} 
                                className="rounded-lg md:scale-150"    
                            />
                        </div>
                        <div className="md:flex md:flex-col md:gap-8 md:items-start">
                            <p className="uppercase text-red-600 tracking-[0.8em] xl:mt-16 py-4">new product</p>
                            <h1 className="font-bold uppercase text-4xl">{selectedItem.name}</h1>
                            <p className="opacity-50 xl:text-xl py-4">{selectedItem.description}</p>
                            <h4 className="tracking-wider font-bold xl:text-2xl py-4">$ {selectedItem.price.toLocaleString()}</h4>
                            <div className="flex items-center justify-around md:gap-8">
                                <div className="flex bg-[#F1F1F1] gap-8 py-4 px-6">
                                    <button onClick={() => decreaseCartQuantity(slug!) }>-</button>
                                    <p>{quantity >= 0 ? quantity : 0}</p> 
                                    <button onClick={() => increaseCartQuantity(slug!) }>+</button>
                                </div>
                                <button 
                                    onClick={addToCart}
                                    className="py-4 px-6 bg-[#D87D4A] text-white xl:px-10">
                                        ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="xl:flex xl:justify-center xl:items-start xl:gap-16 xl:mt-16">
                        <div className="md:mb-16 xl:text-lg  xl:flex-1 ">
                            <h5 className="font-bold text-2xl mb-4 xl:text-4xl xl:mb-7">FEATURES</h5>
                            <p className="opacity-70">{firstHalf}</p>
                            <br />
                            <p className="opacity-70">{secondHalf}</p>
                        </div>

                        <div className="md:flex md:justify-between md:mr-40 md:mb-16 xl:flex-col xl:justify-normal ">
                            <h5 className="font-bold text-2xl mb-6 md:text-3xl">IN THE BOX</h5>
                            <div>
                                {selectedItem.includes.map((item: { 
                                    quantity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                                }, index: number) => {
                                    return <p className="opacity-60 xl:mb-4 xl:text-lg" key={index}>
                                        <span className="text-[#D87D4A] mr-6">{item.quantity}x</span>
                                        {item.item}
                                    </p>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="grid gap-6 mt-8 md:flex ">
                    <div className="md:col-span-2 md:flex md:flex-col md:justify-between">
                        <img src={useWindowSize(selectedItem.gallery.first)} alt="" className="rounded-lg mb-4 md:mb-12" />
                        <img src={useWindowSize(selectedItem.gallery.second)} alt="" className="rounded-lg" />
                    </div>
                    <div className="md:col-span-3">
                        <img src={useWindowSize(selectedItem.gallery.third)} alt="" className="rounded-lg md:h-full" />
                    </div>
                </div>

                <div className="text-center text-3xl font-bold my-24">
                    <h5 className="mb-10 md:text-4xl">YOU MAY ALSO LIKE</h5>
                    <div className="md:grid md:grid-cols-3 md:gap-6">
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
                </div>

                <div className="flex flex-col md:flex-row">
                    {mappedProductNavLinks}
                </div>
                
            </div>
            <AboutSection />
        </>
    )
}