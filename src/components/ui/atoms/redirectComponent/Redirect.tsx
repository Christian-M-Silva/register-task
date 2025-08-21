import { RedirectProps } from "@/types";
import Link from "next/link";

export function Redirect({ hrf, label }: RedirectProps) {
    return <Link data-cy="button-redirect" className={`py-1.5 px-6 flex justify-center items-center gap-1.5 cursor-pointer bg-blue-600 rounded-lg`} href={`/${hrf}`}> {label} </Link>
}