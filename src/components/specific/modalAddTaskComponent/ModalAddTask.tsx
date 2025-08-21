import { Button } from "@/components/ui/atoms/buttonComponent/Button";
import { Input } from "@/components/ui/atoms/inputComponent/Input";
import { useState } from "react";


export function ModalAddTask() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        console.log("Input 1:", title);
        console.log("Input 2:", description);
        closeModal()
    };

    function closeModal() {
        setTitle("")
        setDescription("")
        setIsOpen(false)
    }

    return (
        <>
            <Button label="Adicionar tarefa" action={() => setIsOpen(true)} />

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-cyan-950 rounded-lg p-6 w-96 shadow-lg flex flex-col gap-7">
                        <h2 className="text-xl font-semibold">Adicionar tarefas</h2>

                        <Input placeholder={"Titulo da tarefa"} borders="rounded-lg" value={title} change={(e) => setTitle(e.target.value)} />

                        <Input placeholder={"Descrição da tarefa"} borders="rounded-lg" value={description} change={(e) => setDescription(e.target.value)} />

                        <div className="flex justify-around">
                            <Button label="Adicionar" action={handleSubmit} />

                            <Button label="Cancelar" action={closeModal} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}