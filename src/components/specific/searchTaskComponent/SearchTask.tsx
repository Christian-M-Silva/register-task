import { Button } from "@/components/ui/atoms/buttonComponent/Button"
import { Input } from "@/components/ui/atoms/inputComponent/Input"

export function SearchTask() {
    return(
        <>
            <Input placeholder="Nome da tarefa" borders="rounded-l-2xl"/>
            <Button icon="search" colorIcon="yellow" colorBackground="yellow" sizeIcon={20} borders="rounded-r-2xl"/>
        </>
    )
}