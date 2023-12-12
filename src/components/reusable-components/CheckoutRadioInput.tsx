import { SetStateAction } from "react"

type CheckoutInputProps = {
    name: string
    selectedOption: string
    handleChange: (e: { target: { value: SetStateAction<string>; }; }) => void
}

export function CheckoutRadioInput( {name, selectedOption, handleChange}: CheckoutInputProps ) {

    
    return(
        <div className={`flex gap-8 p-2 pl-4 rounded-lg  border-2 mb-4 ${selectedOption === name ? 'border-[#D87D4A]' : ''}`}>
            <input 
                type="radio" 
                className={`border-4 ${selectedOption === name ? 'accent-[#D87D4A]' : ''}`}
                placeholder={name} 
                value={name}
                id={name}
                checked={selectedOption === name}
                onChange={handleChange}
            />
            <label htmlFor={name} className="font-bold">{name}</label>
        </div>
    )
}