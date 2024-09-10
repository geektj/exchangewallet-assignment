import React, { FC, useState } from "react";
import { SwitchProps } from "./@types";

export const Switch: FC<SwitchProps> = ({ isChecked = false, onChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div
      onClick={handleToggle}
      className={`relative inline-flex cursor-pointer ${
        checked ? "bg-purple" : "bg-gray-200"
      } p-1 w-[40px] h-[24px] rounded-[12px]`}
    >
      <span
        className={`block w-[16px] h-[16px] bg-white rounded-[12px] transform transition-transform ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
        className="sr-only"
      />
    </div>
  );
};
