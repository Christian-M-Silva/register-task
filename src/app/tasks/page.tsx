import { AddTaskAction } from '@/components/specific/addTaskActionComponent/AddTaskAction'
import { CardTask } from '@/components/specific/cardTasks/CardTasks'
import { SearchTask } from '@/components/specific/searchTaskComponent/SearchTask'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tarefas - Listagem',
    description: 'Listagem de todas as tarefas',
}
export default async function Tasks() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`)
        }

        const data = await response.json()

        return (
            <div className='flex flex-col items-center'>
                <SearchTask />
                <AddTaskAction />
                {data.map((el: any) => <CardTask title={el.title} isFinish={el.completed} key={el.id} />)}
            </div>
        )
    } catch (error) {
        console.error("Erro ao buscar tarefas:", error)
        return <p>Erro ao carregar tarefas</p>
    }
}