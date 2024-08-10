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

export const getWorldWideData = async () => {
    const data = await fetch("https://disease.sh/v3/covid-19/all");
    const jsonData = await data.json();

    return jsonData;
}

export const getCountryWiseData = async () => {
    const data = await fetch("https://disease.sh/v3/covid-19/countries");
    const jsonData = await data.json();

    return jsonData;
}

export const getGraphData = async () => {
    const data = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
    const jsonData = await data.json();

    return jsonData;
}
