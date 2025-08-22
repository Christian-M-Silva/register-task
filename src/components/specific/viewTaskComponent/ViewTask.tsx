'use client'
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/atoms/buttonComponent/Button"
import { CardTask } from "../cardTasks/CardTasks"
import { SearchTask } from "../searchTaskComponent/SearchTask"

export function ViewTask() {
    const [tasks, setTasks] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null)

    async function renderTask(id?: string) {
        try {
            let response

            if (id) {
                response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            } else {
                response = await fetch("https://jsonplaceholder.typicode.com/todos")
            }

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`)
            }

            const data = await response.json()

            setTasks(Array.isArray(data) ? data : [data])
        } catch (err: any) {
            console.error("Erro ao buscar tarefas:", err)
            setError("Erro ao carregar tarefas")
        }
    }

    useEffect(() => {
        renderTask()
    }, [])

    if (error) return <p>{error}</p>

    return (
        <div className="flex flex-col items-center gap-5 mt-2.5">
            <div className="flex gap-5">
                <SearchTask search={(id) => renderTask(id)}/>
                <Button
                    borders="rounded-2xl"
                    icon="plus"
                    action={() => {
                        console.log("Adicionar nova tarefa")
                    }}
                />
            </div>

            {tasks.map((el) => (
                <CardTask title={el.title} isFinish={el.completed} key={el.id} id={el.id}/>
            ))}
        </div>
    )
}
