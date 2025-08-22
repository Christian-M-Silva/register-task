'use client'
import { Button } from "@/components/ui/atoms/buttonComponent/Button"
import { Input } from "@/components/ui/atoms/inputComponent/Input"
import { SearchTaskProps } from "@/types"
import { useState } from "react"

export function SearchTask({search}: SearchTaskProps) {
    const [valueInput, setValueInput] = useState("")
    return(
        <div className="flex">
            <Input placeholder="Nome da tarefa" borders="rounded-l-2xl" value={valueInput} change={(e)=>{
                setValueInput(e.target.value)
            }}/>
            <Button icon="search" colorIcon="yellow" colorBackground="yellow" sizeIcon={20} borders="rounded-r-2xl" action={() => search(valueInput)}/>
        </div>
    )
}