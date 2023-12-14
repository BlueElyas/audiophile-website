import { useEffect, useState } from "react"

type WindowSize = {
    width: number | undefined
}

export function useWindowSize( imageObj : any ) : any {
    const [width, setWidth] = useState({width: 200})

    useEffect(() =>{
        function handleResize() {
            setWidth({width: window.innerWidth})
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    },[])

   
    const tabletOrLaptop = width.width >= 1440 ? imageObj.desktop.slice(1) : imageObj.tablet.slice(1)

    const imageSrc = width.width >= 768 ? tabletOrLaptop : imageObj.mobile.slice(1)

    return imageSrc
}

export function useSpecificWindowValues()  {
    const [width, setWidth] = useState<WindowSize>({width: undefined})

    useEffect(() =>{
        function handleResize() {
            setWidth({width: window.innerWidth})
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    },[])

    return width
}