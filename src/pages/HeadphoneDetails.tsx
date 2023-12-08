import { useLocation, useParams } from "react-router-dom"

export function HeadphoneDetails() {
    const location = useLocation()
    const selectedItem = location.state

    if (!selectedItem) {
        return <div>Item not found</div>;
    }
    console.log(location.state)
    return (
        <div key={selectedItem.name}>
            <div>
                <img src={selectedItem.categoryImage.mobile.slice(1)} alt={selectedItem.name} />
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