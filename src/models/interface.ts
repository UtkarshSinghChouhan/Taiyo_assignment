import { STATUS } from "./enums";

export interface IContact{
    id: string;
    firstName : string;
    lastName : string;
    status : STATUS
}

export interface IContacts {
    contacts: Array<IContact> | null;
}

export interface IOption {
    label: string;
    value: string;
}