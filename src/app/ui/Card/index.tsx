import React, { FC } from "react";
import { CardProps } from "./@types";
import { cardContainer } from "./styles";
import { useExchange } from "@/app/context/exchangeContext";

export const Card: FC<CardProps> = ({
  title,
  children,
  icon,
  width = "w-[464px]",
  height = "h-fit",
  bgColor,
}) => {

    const {setShowRoute, setIsViewingRouteDetails} = useExchange()

    const handleBack = () => {
        console.log('handle back');
        setIsViewingRouteDetails(false);
        setShowRoute(false);
    }
  return (
    <div
      className={`${width} ${height} ${bgColor} ${cardContainer} shadow-custom`}
    >
      <div className="pl-4 pr-2 flex justify-between items-center">
        <div className="font-manrope font-650 text-lg text-secondary px-2 py-2">
          {title}
        </div>
        <div className="px-3 py-2">
          {title === "Select Route" ? (
            <div className="rounded-[12px] w-[40px] h-[40px] border-[1px] flex items-center justify-center bg-primary cursor-pointer" onClick={() => handleBack()}>
              {icon}
            </div>
          ) : (
            <div>{icon}</div>
          )}
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  );
};
