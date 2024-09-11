
import React, { useMemo, useState } from "react";
import { ExchangeCard } from "./exchangeCard";
import { OptionProps } from "@/app/ui/Dropdown/@types";
import Image from "next/image";
import EtherumIcon from "../../assets/ethereum.svg";
import MaticIcon from "../../assets/matic.svg";
import BitcoinIcon from "../../assets/bitcoin.svg";
import BNBIcon from "../../assets/bnbIcon.svg";
import SolIcon from "../../assets/solanaIcon.svg";
import ReverseIcon from '../../assets/reverse.svg'
import { ExchangeContainerProps } from "./@types";
import { useExchange } from "@/app/context/exchangeContext";

export const ExchangeContainer = ({
  exchangeData,
  userInfo,
}: ExchangeContainerProps) => {

  const {
    sellValue,
    setSellValue,
    recciveValue,
    setRecciveValue,
  } = useExchange();

  const [sellSelectedCurrency, setSellSelectedCurrency] = useState('eth');
  const [recciveSelectedCurrency, setRecciveSelectedCurrency] = useState('matic');

  const sellDropdownOptions: OptionProps[] = [
    { name: "ETH", icon: <Image src={EtherumIcon} alt="etherum icon" /> },
    {
      name: "BTC",
      icon: (
        <Image src={BitcoinIcon} alt="bitcoin icon" height={18} width={18} />
      ),
    },
    { name: "USDT", icon: <Image src={EtherumIcon} alt="sol icon" /> },
    { name: "MATIC", icon: <Image src={MaticIcon} alt="matic icon" /> },
  ];

  const recciveDropdownOptions: OptionProps[] = [
    { name: "ETH", icon: <Image src={EtherumIcon} alt="etherum icon" /> },
    {
      name: "BTC",
      icon: (
        <Image src={BitcoinIcon} alt="bitcoin icon" height={18} width={18} />
      ),
    },
    {
      name: "SOL",
      icon: <Image src={SolIcon} alt="sol icon" height={18} width={18} />,
    },
    {
      name: "BNB",
      icon: <Image src={BNBIcon} alt="bnb icon" height={18} width={18} />,
    },
    { name: "USDT", icon: <Image src={EtherumIcon} alt="sol icon" /> },
    { name: "MATIC", icon: <Image src={MaticIcon} alt="matic icon" /> },
  ];

  const handleExchangeValue = (e: any, type: string) => {
    switch (type) {
      case "sell":
        setSellValue(e?.target?.value || "");
        const recciveConvertedAmount = (
          (exchangeData?.[sellSelectedCurrency]?.[recciveSelectedCurrency] || 0) * e?.target?.value
        ).toString();
        setRecciveValue(recciveConvertedAmount);
        return;
      case "reccive":
        setRecciveValue(e?.target?.value || "");
        return;
    }
  };

  useMemo(() => {
    const recciveConvertedAmount = (
        (exchangeData?.[sellSelectedCurrency]?.[recciveSelectedCurrency] || 0) * Number(sellValue)
      ).toString();
      setRecciveValue(recciveConvertedAmount);
  }, [sellSelectedCurrency, recciveSelectedCurrency])

  const sellDollarConvertedAmount = (exchangeData?.[sellSelectedCurrency]?.dollar || 0) * Number(sellValue);
  const recciveDollarConvertedAmount = (exchangeData?.[recciveSelectedCurrency]?.dollar || 0) * Number(recciveValue);

  const reverseClick = () => {
    console.log('reverse click');
  }

  return (
    <div className="relative gap-2 grid">
      <ExchangeCard
        onChange={(e: any) => handleExchangeValue(e, "sell")}
        labelText={"YOU SELL"}
        inputValue={sellValue}
        convertedAmount={`$${sellDollarConvertedAmount}`}
        balance={userInfo?.ethBalance}
        showMax={true}
        dropdownOptions={sellDropdownOptions}
        dropdownDefaultValue={sellDropdownOptions[0]}
        dropdownGetValue={setSellSelectedCurrency}
        disabled={false}
        // hasValue={true}
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" onClick={reverseClick}>
        <div className="bg-white flex justify-center items-center rounded-[12px] w-[40px] h-[40px]">
          <Image src={ReverseIcon} alt="reverse icon" />
        </div>
      </div>
      <ExchangeCard
        onChange={(e: any) => handleExchangeValue(e, "reccive")}
        labelText={"YOU RECEIVE"}
        inputValue={recciveValue}
        convertedAmount={`$${recciveDollarConvertedAmount}`}
        balance={"1500"}
        showMax={false}
        dropdownOptions={recciveDropdownOptions}
        dropdownDefaultValue={recciveDropdownOptions[5]}
        dropdownGetValue={setRecciveSelectedCurrency}
        disabled={true}
        hasValue={Number(sellValue) > 0}
      />
    </div>
  );
};
