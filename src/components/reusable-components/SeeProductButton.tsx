import { FC } from "react"

interface ButtonProps {
    style: string
}

export const SeeProductButton: FC<ButtonProps> = (props) : JSX.Element => {
    return(
        <>
            <button className={`py-3 px-7 rounded-sm uppercase ${props.style} `}>
                See Product
            </button>
        </>
    )
}