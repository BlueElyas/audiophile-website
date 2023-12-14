import { useWindowSize } from "../../hooks/useWindowSize"

export function AboutSection() {
    const imageObj = {
        mobile:"/assets/shared/mobile/image-best-gear.jpg",
        tablet: "/assets/shared/tablet/image-best-gear.jpg",
        desktop: "/assets/shared/desktop/image-best-gear.jpg"
    }

    return(
        <div className="px-6 text-center flex flex-col gap-8 mt-32 mb-28 md:font-bold md:mx-4">
            <img 
                src={useWindowSize(imageObj)}
                alt="picture of a man with headphones looking to the left"
                className="rounded-lg" />
            <h1 className="text-4xl uppercase ">Bringing you the 
                <span className="text-[#D87D4A]"> best</span> audio gear
            </h1>
            <p className="opacity-60 md:font-normal md:text-lg">Located at the heart of New York City, Audiophile is the premier store for 
                high end headphones, earphones, speakers, and audio accessories. We have a large 
                showroom and luxury demonstration rooms available for you to browse and experience 
                a wide range of our products. Stop by our store to meet some of the fantastic people 
                who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
    )
}