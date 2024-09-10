export interface InputProps{
    onChange: (e) => void;
    label: string;
    value: string;
    disable?: boolean;
    hasValue?:boolean;
}