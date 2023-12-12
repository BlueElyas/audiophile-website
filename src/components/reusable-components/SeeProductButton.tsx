import { FC } from "react"

interface ButtonProps {
    style: string

}

export const SeeProductButton: FC<ButtonProps> = ({style}) : JSX.Element => {
    return(
        <>
            <button className={`py-3 px-7 rounded-sm uppercase font-bold ${style} `}>
                See Product
            </button>
        </>
    )
}