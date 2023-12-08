import { FC } from "react"

interface ButtonProps {
    style: string
    handleClick: VoidFunction

}

export const SeeProductButton: FC<ButtonProps> = ({style, handleClick = () => {}}) : JSX.Element => {
    return(
        <>
            <button className={`py-3 px-7 rounded-sm uppercase ${style} `}>
                See Product
            </button>
        </>
    )
}