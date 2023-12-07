import { AboutSection } from '../components/reusable-components/AboutSection'
import { ProductSelection } from '../components/reusable-components/ProductSelection'
import data from '../data/data.json'

export function Headphones() {
    const headphoneData = data.filter(data => data.category === 'headphones')
    return(
        <>
            <h1 className='bg-black text-white text-center py-8 uppercase text-3xl font-bold'>Headphones</h1>
            {ProductSelection(headphoneData)}
            <AboutSection/>
        </>
    )
}