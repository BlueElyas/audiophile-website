import { useParams } from "react-router-dom"
import data from '../data/data.json'

export function HeadphoneDetails() {
    const  { id }   = useParams()
    const selectedItem = data.filter(data => {
        if(!id) {
            return
        }
        return data.id === parseInt(id)
    })
    console.log(selectedItem)
    return(
        <>

        </>
    )
}