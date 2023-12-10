import data from '../data/data.json'

export const fetchProductDetails = (productSlug : string | undefined) => {
    return data.find(product => product.slug === productSlug)
}