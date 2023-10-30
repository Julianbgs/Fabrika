export interface HeaderItemInterface {
    title: string;
    isHover?: boolean;
}

export interface SelectInterface {
    options: SelectOptionInterface[];
}

export interface SelectOptionInterface {
    title: string;
    address: string;
}