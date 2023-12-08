import { useParams } from "react-router-dom"
import data from '../data/data.json'

export function HeadphoneDetails() {
    const { id } = useParams()
    const selectedItem = data.find(item => {
        if(!id){
            return
        }
        return item.id === parseInt(id, 10)
    });

    if (!selectedItem) {
        return <div>Item not found</div>;
    }
    console.log(`public${selectedItem.categoryImage.mobile.slice(1)}`)
    return (
        <div key={selectedItem.name}>
            <div>
                <img src={`public${selectedItem.categoryImage.mobile.slice(1)}`} alt={selectedItem.name} />
                <p>new product</p>
                <h1>{selectedItem.name}</h1>
                <p>{selectedItem.description}</p>
                <h4>{selectedItem.price}</h4>
                <div></div>
            </div>
            <div>
                <h5>Features</h5>
                <p>{selectedItem.features}</p>
            </div>
            <div>
                <h5>In the box</h5>
            </div>
        </div>
    )
}