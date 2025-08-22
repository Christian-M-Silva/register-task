import { ViewTask } from '@/components/specific/viewTaskComponent/ViewTask'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tarefas - Listagem',
    description: 'Listagem de todas as tarefas',
}
export default function Tasks() {
    return (
        <ViewTask />
    )
}