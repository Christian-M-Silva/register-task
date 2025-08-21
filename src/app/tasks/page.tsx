import { AddTaskAction } from '@/components/specific/addTaskActionComponent/AddTaskAction'
import { SearchTask } from '@/components/specific/searchTaskComponent/SearchTask'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Tarefas - Listagem',
  description: 'Listagem de todas as tarefas',
}

export default function Tasks() {
    return(
        <>
            <SearchTask/>
            <AddTaskAction/>
        </>
    )
}