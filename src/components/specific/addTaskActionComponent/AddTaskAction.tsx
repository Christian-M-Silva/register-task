'use client'
import { Button } from "@/components/ui/atoms/buttonComponent/Button"

export function AddTaskAction() {
    return (
        <Button action={function (): void {
            throw new Error('Function not implemented.')
        }} />
    )
}