import {  ComponentPropsWithoutRef } from "react"

type CheckoutInputProps = ComponentPropsWithoutRef<'input'>


export function CheckoutInput( { ...props }: CheckoutInputProps ) {
    const { 
        type,
        placeholder,
        required,
        maxLength,
        name,
        id
     } = props

    console.log(props)

    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="font-bold text-sm mt-4">{name}</label>
            <input type={type} id={id} className="border-2 p-2 pl-4 rounded-lg mt-1" placeholder={placeholder} maxLength={maxLength} required/>
        </div>
    )
}