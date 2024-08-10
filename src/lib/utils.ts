import { nanoid } from '@reduxjs/toolkit';
import {clsx, ClassArray} from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassArray) {
    return twMerge(clsx(inputs));
}

export const Utils = {
    generateUniqueId : (): string => {
        return nanoid(8); 
    }
}


