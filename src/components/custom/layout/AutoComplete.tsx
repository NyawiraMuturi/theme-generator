import { Item } from "@/types/types"
import { ChangeEvent, useState } from "react"

type AutocompleteProps = {
    item: Item
}
const AutoComplete = ({ item }: AutocompleteProps) => {
    const [inputValue, setInputValue] = useState('')
    const [inputSuggestions, setInputSuggestions] = useState([])
    const [selectedInput, setSelectedInput] = useState('')

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
    }


    return (
        <div>
            <input
                value={inputValue}
                type="text"
                onChange={handleInputChange}
                placeholder="Search Here"
            />
            {inputSuggestions.length > 0 && (
                <ul>
                    something
                </ul>
            )}
        </div>
    )
}

export default AutoComplete
