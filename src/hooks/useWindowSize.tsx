import { useEffect, useState } from "react"

type WindowSize = {
    width:  number 
    height:  number 
}


export function useWindowSize() : WindowSize {
    const [windowSise, setWindowSize] = useState<WindowSize>({width: 375, height: 375})
    useEffect(() =>{

        function handleResize() {
            setWindowSize({width: window.innerWidth, height: window.innerHeight})
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    },[])
    return windowSise
}