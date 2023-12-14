import { AboutSection } from '../components/reusable-components/AboutSection'
import { mappedProductNavLinks } from '../components/reusable-components/ProductNavLinks'
import { ProductSelection } from '../components/reusable-components/ProductSelection'
import data from '../data/data.json'

export function Speakers() {
    const speakersData = data.filter(data => data.category === 'speakers')
    return(
        <>
            <h1 className='bg-black text-white text-center py-8 uppercase text-3xl font-bold xl:text-4xl xl:py-12'>speakers</h1>
            {ProductSelection(speakersData)}

            <div className="md:flex md:justify-around xl:mx-[10rem]">
                {mappedProductNavLinks}
            </div>
            <AboutSection/>
        </>
    )
}