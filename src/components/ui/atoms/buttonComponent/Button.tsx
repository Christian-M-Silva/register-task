'use client'
import { DynamicIcon } from 'lucide-react/dynamic';
import { ButtonProps, colorMap } from "@/types";


export function Button({ label, icon, colorBackground = 'blue', colorIcon }: ButtonProps) {
    return <button className={`py-1.5 px-6 rounded-2xl flex gap-1.5 ${colorMap[colorBackground]}`}>  {icon && <DynamicIcon name={icon} color={colorIcon} />} {label}</button>
}