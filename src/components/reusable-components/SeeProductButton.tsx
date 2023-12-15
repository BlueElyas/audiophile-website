import { FC } from "react"

interface ButtonProps {
    style: string

}

export const SeeProductButton: FC<ButtonProps> = ({style}) : JSX.Element => {
    return(
        <>
            <button className={`py-3 px-7 rounded-sm uppercase font-bold ${style} hover:opacity-40 hover:scale-110`}>
                See Product
            </button>
        </>
    )
}