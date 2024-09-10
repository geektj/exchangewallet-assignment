import React, { useState } from "react";
import { DropdownProps, OptionProps } from "./@types";
import Image from "next/image";
import DownArrowIcon from "../../assets/downArrow.svg";
import EtherumIcon from "../../assets/ethereum.svg";

export const Dropdown = ({
  options,
  defaultValue,
  getValue,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const defaultSelectedOption = defaultValue || {
    name: "ETH",
    icon: <Image src={EtherumIcon} alt="etherum icon" />,
  };
  const [selectedOption, setSelectedOption] = useState<OptionProps | null>(
    defaultSelectedOption
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: OptionProps) => {
    if (getValue) {
      getValue(option?.name?.toLowerCase() || "");
    }
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="h-[40px] rounded-[12px] bg-lightGrey">
      <div onClick={toggleDropdown} className="">
        {selectedOption ? (
          <div className="w-full h-[40px] flex items-center justify-center px-3 py-2 gap-1">
            {selectedOption?.icon}
            <div className="font-manrope text-secondary font-600 text-sm">
              {selectedOption.name}
            </div>
            {/* <div className="flex items-center justify-center"> */}
            <Image
              src={DownArrowIcon}
              alt="dropdownIcon"
              // height={18}
              // width={18}
            />
            {/* </div> */}
          </div>
        ) : null}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.name}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option.icon}
              <span className="ml-2">{option.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
