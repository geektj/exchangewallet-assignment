export interface OptionProps {
    name: string;
    icon: JSX.Element;
}

export interface DropdownProps {
    options: OptionProps[];
    defaultValue?: OptionProps;
    getValue?: (value: string) => void;
}