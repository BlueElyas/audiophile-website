import { ReactNode } from "react"

type StyledCheckoutComponentProps = {
    children: ReactNode
}

export function StyledCheckoutComponent( { children } : StyledCheckoutComponentProps ){
    return <h4 className="uppercase text-[#D87D4A] tracking-wide mt-6">{children}</h4>
}