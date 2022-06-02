export interface IRangeValidation {
    max?: number;
    min?: number;
}

export interface IInputDescription {
    title?: string;
    placeholder?: string;
    type?: string;
    ngModelInput?: string;
}

export interface ISelectDescription {
    title: string;
    options: string[];
    type: string;
}

export interface IInput {
    title: string;
    type: string;
    bottomText?: string;
    class?: string;
}
