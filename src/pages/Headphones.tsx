import { AboutSection } from '../components/reusable-components/AboutSection'
import { mappedProductNavLinks } from '../components/reusable-components/ProductNavLinks'
import { ProductSelection } from '../components/reusable-components/ProductSelection'
import data from '../data/data.json'

export function Headphones() {
    const headphoneData = data.filter(data => data.category === 'headphones')
    return(
        <>
            <h1 className='bg-black text-white text-center py-8 uppercase text-3xl font-bold xl:text-4xl xl:py-12'>Headphones</h1>
            {ProductSelection(headphoneData)}

            <div className="md:flex md:justify-around xl:mx-[10rem]">
                {mappedProductNavLinks}
            </div>
            
            <AboutSection/>
        </>
    )
}