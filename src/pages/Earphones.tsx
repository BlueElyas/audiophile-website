import { AboutSection } from "../components/reusable-components/AboutSection"
import { ProductSelection } from "../components/reusable-components/ProductSelection"
import data from "../data/data.json"

export function Earphones() {
    const earphoneData = data.filter(data => data.category === 'earphones')
    return(
        <>
            <h1 className='bg-black text-white text-center py-8 uppercase text-3xl font-bold'>earphones</h1>
            {ProductSelection(earphoneData)}
            <AboutSection/>
        </>
    )
}