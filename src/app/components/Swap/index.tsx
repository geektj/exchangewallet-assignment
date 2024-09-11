"use client";
import React, { FC, useEffect, useState } from "react";
import { Card } from "@/app/ui/Card";
import { ExchangeContainer } from "../Exchange";
import { Button } from "@/app/ui/Button";
import ExchangeJson from "@/app/shared/exchnage.json";
import UserJson from "@/app/shared/userInfo.json";
import { RecieveWallet } from "../Exchange/recieveWallet";
import { RouteInfo } from "../RouteInfo";
import { RouteCardList } from "../RouteCardList";
import { useExchange } from "../../context/exchangeContext";
import SwaprIcon from "../../assets/swapIcon.svg";
import Image from "next/image";

const filterIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75 5.25C3.75 4.42157 4.42157 3.75 5.25 3.75C6.07843 3.75 6.75 4.42157 6.75 5.25C6.75 6.07843 6.07843 6.75 5.25 6.75C4.42157 6.75 3.75 6.07843 3.75 5.25ZM5.25 2.25C3.59315 2.25 2.25 3.59315 2.25 5.25C2.25 6.90685 3.59315 8.25 5.25 8.25C6.64788 8.25 7.82245 7.29392 8.15549 6H15.75V4.5H8.15549C7.82245 3.20608 6.64788 2.25 5.25 2.25ZM3 12H9.84451C10.1775 10.7061 11.3521 9.75 12.75 9.75C14.4069 9.75 15.75 11.0931 15.75 12.75C15.75 14.4069 14.4069 15.75 12.75 15.75C11.3521 15.75 10.1775 14.7939 9.84451 13.5H3V12ZM12.75 14.25C11.9216 14.25 11.25 13.5784 11.25 12.75C11.25 11.9216 11.9216 11.25 12.75 11.25C13.5784 11.25 14.25 11.9216 14.25 12.75C14.25 13.5784 13.5784 14.25 12.75 14.25Z"
      fill="#494656"
    />
  </svg>
);

export const SwapWrapper: FC = () => {
  const [exchangeData, setExchangeData] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const { sellValue, showRoute, setShowRoute } = useExchange();

  const handleOnClick = () => {
    console.log("button click");
  };

  useEffect(() => {
    setUserInfo(UserJson);
    setExchangeData(ExchangeJson);
  }, []);

  const buttonText = sellValue > 0 ? "Swap with Swapr" : "Enter amt to Swap";

  console.log(userInfo, exchangeData);
  return (
    <div className="flex justify-center gap-4">
      <div className="grid gap-4">
        <Card title="Swap" bgColor="bg-gray-100" icon={filterIcon}>
          <div className="px-2  grid gap-2">
            <ExchangeContainer
              exchangeData={exchangeData}
              userInfo={userInfo}
            />
            <Button onClick={handleOnClick}>
              {buttonText}
              {sellValue > 0 && (
                <Image src={SwaprIcon} alt="swap icon" className="mr-2" />
              )}
            </Button>
            {sellValue > 0 ? <RecieveWallet /> : null}
          </div>
        </Card>
        <div>{sellValue > 0 ? <RouteInfo /> : null}</div>
      </div>
      <div className={` ${showRoute ? "block" : "hidden"}`}>
        <RouteCardList />
      </div>
    </div>
  );
};
