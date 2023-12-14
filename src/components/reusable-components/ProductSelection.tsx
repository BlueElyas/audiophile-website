import { useLayoutEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowSize"
import { SeeProductButton } from "./SeeProductButton"
import { Link } from "react-router-dom"

export function ProductSelection(data: any[]) {

    

   return data.map(data => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    let rowOrRowReverse
    if(data.id % 2 === 0) {
        rowOrRowReverse = 'row'
    }else{
        rowOrRowReverse = 'row-reverse'
    }
    
        return(
            <div 
                className={`flex flex-col justify-center items-center text-center mx-6 gap-8 my-16 
                            xl:flex-${rowOrRowReverse} xl:justify-between xl:mx-[10rem] `} 
                key={data.id}
            >
                    <div className="xl:flex-1">
                    <img 
                        src={useWindowSize(data.categoryImage)} 
                        alt={`picture of ${data.name}`} 
                        className='rounded-lg'
                        />
                </div>
                <div className="flex flex-col gap-6 xl:items-start xl:justify-center xl:text-start xl:flex-1">
                    {data.new && <p className='uppercase tracking-[0.8rem] text-red-600'>New product</p>}
                    <h1 className='text-4xl font-bold uppercase lg:text-5xl'>{data.name}</h1>
                    <p className="">{data.description}</p>
                    <Link to={`/${data.category}/${data.slug}`} state={data}>
                        <SeeProductButton style="bg-[#D87D4A] text-white"/>
                    </Link>
                </div>
            </div>
        )
    })
}