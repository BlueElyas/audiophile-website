export function AboutSection() {
    return(
        <div className="px-6 text-center flex flex-col gap-8 mt-32 mb-28">
            <img 
                src="public\assets\shared\mobile\image-best-gear.jpg" 
                alt="picture of a man with headphones looking to the left"
                className="rounded-lg" />
            <h1 className="text-4xl uppercase font=bold">Bringing you the 
                <span className="text-[#D87D4A]"> best</span> audio gear
            </h1>
            <p className="opacity-60">Located at the heart of New York City, Audiophile is the premier store for 
                high end headphones, earphones, speakers, and audio accessories. We have a large 
                showroom and luxury demonstration rooms available for you to browse and experience 
                a wide range of our products. Stop by our store to meet some of the fantastic people 
                who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
    )
}