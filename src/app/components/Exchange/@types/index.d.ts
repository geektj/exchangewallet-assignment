import { OptionProps } from "@/app/ui/Dropdown/@types";

export interface ExchangeContainerProps {
  exchangeData: any;
  userInfo: any;
}

export interface ExchangeCardProps {
  onChange: (e: any) => void;
  labelText: string;
  inputValue: string;
  convertedAmount: string;
  balance: string;
  showMax: boolean;
  dropdownOptions: OptionProps[];
  dropdownDefaultValue: OptionProps;
  dropdownGetValue: (value: string) => void;
  disabled?: boolean;
  hasValue?: boolean;
}
