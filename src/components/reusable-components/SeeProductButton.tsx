import { FC } from "react"

interface ButtonProps {
    style: string
    onClick: VoidFunction

}

export const SeeProductButton: FC<ButtonProps> = ({style, onClick = () => {}}) : JSX.Element => {
    return(
        <>
            <button className={`py-3 px-7 rounded-sm uppercase ${style} `}>
                See Product
            </button>
        </>
    )
}