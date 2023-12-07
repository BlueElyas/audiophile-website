import { AboutSection } from '../components/reusable-components/AboutSection'
import { SeeProductButton } from '../components/reusable-components/SeeProductButton'
import data from '../data/data.json'

export function Headphones() {
    const headphoneData = data.filter(data => data.category === 'headphones')
    console.log(headphoneData)
    const mappedHeadphoneData = headphoneData.map(data => {
        return(
            <div className="flex flex-col justify-center items-center text-center mx-6 gap-8 my-16">
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
    return(
        <>
            <h1 className='bg-black text-white text-center py-8 uppercase text-3xl font-bold'>Headphones</h1>
            {mappedHeadphoneData}
            <AboutSection/>
        </>
    )
}