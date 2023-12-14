import { useWindowSize } from "../../hooks/useWindowSize"
import { SeeProductButton } from "./SeeProductButton"
import { Link } from "react-router-dom"

export function ProductSelection(data: any[]) {
    const window = useWindowSize()
    const width = window.width

   return data.map(data => {
    if (!width) {
        return
    }
    const image = width >= 768 ?data.categoryImage.tablet : data.categoryImage.mobile
        return(
            <div className="flex flex-col justify-center items-center text-center mx-6 gap-8 my-16" key={data.id}>
                <img 
                    src={`${image}`} 
                    alt={`picture of ${data.name}`} 
                    className='rounded-lg'
                    />
                {data.new && <p className='uppercase tracking-[0.8rem] text-red-600'>New product</p>}
                <h1 className='text-4xl font-bold uppercase'>{data.name}</h1>
                <p>{data.description}</p>
                <Link to={`/${data.category}/${data.slug}`} state={data}>
                    <SeeProductButton style="bg-[#D87D4A] text-white"/>
                </Link>
            </div>
        )
    })
}