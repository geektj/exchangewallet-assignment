import { Dropdown } from "@/app/ui/Dropdown";
import { Input } from "@/app/ui/Input";
import React from "react";
import { ExchangeCardProps } from "./@types";

export const ExchangeCard = ({
  onChange,
  labelText,
  inputValue,
  convertedAmount,
  balance,
  showMax,
  dropdownOptions,
  dropdownDefaultValue,
  dropdownGetValue,
  disabled = false,
  hasValue = true,
}: ExchangeCardProps) => {
  const USE_MAX = "Use Max";
 
  return (
    <div className="container bg-grey rounded-[16px] pt-4 pb-3 px-4">
      <div className="flex mb-1">
        <Input onChange={onChange} label={labelText} value={inputValue} disable={disabled} hasValue={hasValue}/>
        <div className="flex items-end w-full justify-end">
          <Dropdown
            options={dropdownOptions}
            defaultValue={dropdownDefaultValue}
            getValue={dropdownGetValue}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="dollar-text font-manrope text-lowGrey font-500 text-xs">
          {convertedAmount}
        </div>
        <div className="flex gap-1">
          <div className="balance-text font-manrope text-lowGrey font-500 text-xs">
            Balance: {balance}
          </div>
          {showMax && (
            <div className="use-max-btn font-600 font-manrope text-purple text-xs">
              {USE_MAX}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
