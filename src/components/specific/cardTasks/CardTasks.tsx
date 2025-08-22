import { CardTaskProps } from "@/types"
import Link from "next/link"

export function CardTask({ isFinish, title, id }: CardTaskProps) {
    return (

        <Link
            className={`rounded-2xl border p-4 w-2xl shadow-sm cursor-pointer ${isFinish
                ? "bg-green-50 border-green-300 text-green-900"
                : "bg-red-50 border-red-300 text-red-900"}`} href={`/tasks/${id}`}>
            <h3 className="text-lg font-semibold">
                {id} - {title}
            </h3>
        </Link>
    )
}
