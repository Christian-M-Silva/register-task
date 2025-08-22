import { CardTaskProps } from "@/types"

export function CardTask({ isFinish, title, id }: CardTaskProps) {
    return (
        <>
            <div
                className={`rounded-2xl border p-4 w-2xl shadow-sm cursor-pointer ${isFinish
                    ? "bg-green-50 border-green-300 text-green-900"
                    : "bg-red-50 border-red-300 text-red-900"
                    }`}
            >
                <h3 className="text-lg font-semibold">
                    {id} - {title}
                </h3>
            </div>
        </>
    )
}
