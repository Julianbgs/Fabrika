export interface HeaderItemInterface {
    title: string;
}

export interface SelectInterface {
    title: string;
    address: string;
    options: SelectOptionInterface[];
}

export interface SelectOptionInterface {
    title: string;
    address: string;
}