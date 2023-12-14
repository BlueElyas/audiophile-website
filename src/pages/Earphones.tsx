import { AboutSection } from "../components/reusable-components/AboutSection"
import { mappedProductNavLinks } from "../components/reusable-components/ProductNavLinks"
import { ProductSelection } from "../components/reusable-components/ProductSelection"
import data from "../data/data.json"

export function Earphones() {
    const earphoneData = data.filter(data => data.category === 'earphones')
    return(
        <>
            <h1 className='bg-black text-white text-center py-8 uppercase text-3xl font-bold xl:text-4xl xl:py-12'>earphones</h1>
            {ProductSelection(earphoneData)}

            <div className="md:flex md:justify-around xl:mx-[10rem]">
                {mappedProductNavLinks}
            </div>

            <AboutSection/>
        </>
    )
}