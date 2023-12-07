import { SeeProductButton } from "./SeeProductButton"

export function ProductSelection(data: any[]) {
   return data.map(data => {
        return(
            <div className="flex flex-col justify-center items-center text-center mx-6 gap-8 my-16" key={data.id}>
                <img 
                    src={`src/data${data.categoryImage.mobile.slice(1)}`} 
                    alt={`picture of ${data.name}`} 
                    className='rounded-lg'
                    />
                {data.new && <p className='uppercase tracking-widest text-red-600'>New product</p>}
                <h1 className='text-4xl font-bold uppercase'>{data.name}</h1>
                <p>{data.description}</p>
                <SeeProductButton style="bg-[#D87D4A] text-white"/>
            </div>
        )
    })
}