"use client";
import React, { FC, useEffect, useState } from "react";
import { Card } from "@/app/ui/Card";
import { ExchangeContainer } from "../Exchange";
import { Button } from "@/app/ui/Button";
import ExchangeJson from "@/app/shared/exchnage.json";
import UserJson from "@/app/shared/userInfo.json";
import { RecieveWallet } from "../Exchange/recieveWallet";
import { RouteInfo } from "../RouteInfo";
import { FilterIcon } from "@/app/assets/icon";
import { RouteCardList } from "../RouteCardList";
import { useExchange } from "../../context/exchangeContext";
import SwaprIcon from "../../assets/swapIcon.svg";
import Image from "next/image";

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

  const buttonText = sellValue > 0
    ? "Swap with Swapr"
    : "Enter amt to Swap";

  console.log(userInfo, exchangeData);
  return (
    <div className="flex justify-center gap-4">
      <div className="grid gap-4">
        <Card title="Swap" bgColor="bg-gray-100" icon={<FilterIcon />}>
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
        <div>
          {sellValue > 0 ? <RouteInfo /> : null}
        </div>
      </div>
      <div className={` ${showRoute ? 'block': 'hidden'}`}>
        <RouteCardList />
      </div>
    </div>
  );
};
