import { NavLink } from "react-router-dom"

const ProductNavLinks :  {name: string, image: any}[] = [
    {
        name: "headphones",
        image:  "src/data/assets/shared/desktop/image-category-thumbnail-headphones.png"
    },
    {
        name: "speakers",
        image: "src/data/assets/shared/desktop/image-category-thumbnail-speakers.png"
    },
    {
        name: "earphones",
        image: "src/data/assets/shared/desktop/image-category-thumbnail-earphones.png"
    }
]

export const mappedProductNavLinks : JSX.Element[] = ProductNavLinks.map((data, index) => {
    return (
        <div className="flex gap-16 uppercase flex-col m-6 mt-16" key={index}>
            <NavLink 
                to={`/${data.name}`} 
                className="bg-gray-200 bg-opacity-60 rounded-lg relative h-40 flex flex-col justify-end items-center">
                <img 
                    src={data.image}
                    alt={`pictore of a ${data.name}`} 
                    className="w-32 h-28 absolute top-0 -translate-y-1/3"
                    />
                <h1 className="font-bold tracking-wide">{data.name}</h1>
                <p className="mt-3 mb-5">Shop <span className="text-red-400">{'>'}</span></p> 
            </NavLink>
        </div>
    )
})