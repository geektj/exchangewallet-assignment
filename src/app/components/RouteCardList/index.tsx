import React, { FC } from "react";
import { Card } from "@/app/ui/Card";
import { LeftDoubleArrowIcon } from "@/app/assets/icon";
import Image from "next/image";
// import { RouteDataProps } from '@/app/shared/RouteData/type';
import { RouteInfo } from "@/app/shared/RouteData/routeInfo";
import GasIcon from "@/app/assets/defaultGas.svg";
import { useExchange } from "@/app/context/exchangeContext";

export const RouteCardList:FC = () => {
  const {selectedRoute, setSelectedRoute} = useExchange();
  
  const handleRouteClick = (route: typeof RouteInfo[0]) => {
    setSelectedRoute(route);
  }

  console.log('selectedRoute', selectedRoute)

  return (
    <div className="w-full">
      <Card
        title="Select Route"
        icon={<LeftDoubleArrowIcon />}
        bgColor="bg-white"
        width="w-[520px]"
      >
        <div className="px-[16px]">
          <p className="py-[16px] px-[8px] font-manrope font-600 text-xs text-lowGrey">
            Best route is selected based on net output after gas fees.
          </p>
          <div className="px-[8px]">
            {RouteInfo.map((routeDetail: any) => (
              <div
                className={`px-4 py-2 lg:py-3 grid lg:flex items-center justify-between cursor-pointer ${routeDetail?.id === selectedRoute?.id ? "rounded-[16px] border-[2px] border-borderGreen" : ""}`}
                key={routeDetail.id}
                onClick={() => handleRouteClick(routeDetail)}
              >
                <div className="flex gap-2 items-center">
                  <Image src={routeDetail?.icon} alt="icons" width={32} height={32} />
                  <p className="font-manrope text-secondary text-xl font-600">
                    {routeDetail?.routeName}
                  </p>
                </div>
                <div className="flex gap-4 items-center lg:items-start justify-between lg:justify-normal">
                  <div className="flex gap-2">
                    {routeDetail.isReturn === true ? (
                      <div className="h-[24px] py-[4px] px-[6px] flex items-center justify-center rounded-[6px] bg-successAccent font-manrope font-600 text-xxxs text-textSuccess">
                        Best Return
                      </div>
                    ) : (
                      <div className="bg-dangerAccent h-[24px] rounded-[6px] px-[6px] py-[4px] flex items-center justify-center font-manrope font-600 text-xxxs text-textDanger">
                        {routeDetail?.returnPercentage}
                      </div>
                    )}
                    <div className="flex gap-1 items-center h-[24px] rounded-[6px] bg-purpleLight py-[4px] px-[6px] border-[1px]">
                      <Image
                        src={GasIcon}
                        alt="gas-icon"
                        width={14}
                        height={14}
                      />
                      <p className="text-darkText font-600 font-manrope text-xxxs">
                        {routeDetail?.price}
                      </p>
                    </div>
                  </div>
                  <div className="grid justify-end">
                    <div className="text-secondary font-manrope font-700 text-base flex justify-end">{routeDetail?.fee} USDC</div>
                    <div className="text-lowGrey font-manrope font-600 text-sm"><span>~</span>${routeDetail?.afterFeesAmt} after fees</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
