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

export const SwapWrapper: FC = () => {
  const [exchangeData, setExchangeData] = useState({});
  const [userInfo, setUserInfo] = useState({});

  const handleOnClick = () => {
    console.log("button click");
  };

  useEffect(() => {
    setUserInfo(UserJson);
    setExchangeData(ExchangeJson);
  }, []);

  console.log(userInfo, exchangeData);
  return (
    <div className="flex justify-center gap-4">
      <div className="grid gap-4">
        <Card
          title="Swap"
          bgColor="bg-gray-100"
          icon={<FilterIcon />}
        >
          <div className="px-2  grid gap-2">
            <ExchangeContainer
              exchangeData={exchangeData}
              userInfo={userInfo}
            />
            <Button onClick={handleOnClick}>Enter amt to Swap</Button>
            <RecieveWallet />
          </div>
        </Card>
        <div>
          <RouteInfo />
        </div>
      </div>
      <div>
        <RouteCardList />
      </div>
    </div>
  );
};
