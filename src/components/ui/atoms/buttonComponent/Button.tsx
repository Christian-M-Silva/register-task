'use client'
import { DynamicIcon } from 'lucide-react/dynamic';
import { ButtonProps, colorMap } from "@/types";


export function Button({ label, icon, colorBackground = 'blue', colorIcon, sizeIcon, borders, action }: ButtonProps) {
    return <button className={`py-1.5 px-6 flex justify-center items-center gap-1.5 cursor-pointer ${colorMap[colorBackground]} ${borders}`} onClick={action}>  {icon && <DynamicIcon name={icon} size={sizeIcon} color={colorIcon} />} {label}</button>
}