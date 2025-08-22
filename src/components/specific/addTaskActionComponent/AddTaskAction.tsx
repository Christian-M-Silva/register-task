'use client'
import { Button } from "@/components/ui/atoms/buttonComponent/Button"

export function AddTaskAction() {
    return (
        <Button borders="rounded-2xl" icon="plus" action={function (): void {
            throw new Error('Function not implemented.')
        }} />
    )
}