import { RouteDataProps } from "./type";
import SwapIcon from "../../assets/swapIcon.svg";
import CoswapIcon from "../../assets/coswap.svg";
import ParaswapIcon from "../../assets/paraswap.svg";
import EnsoIcon from "../../assets/enso.svg";
import InchIcon from "../../assets/1inch.svg";
import OpenoceanIcon from "../../assets/openocean.svg";
import ZeroXIcon from "../../assets/0x.svg";

export const RouteInfo: RouteDataProps[] = [
  {
    id: 1,
    icon: SwapIcon,
    routeName: "Swapr",
    isReturn: true,
    returnPercentage: "",
    price: "24.62",
    fee: "84.4335",
    afterFeesAmt: "82.25",
  },
  {
    id: 2,
    icon: CoswapIcon,
    routeName: "Coswap",
    isReturn: false,
    returnPercentage: "-0.2%",
    price: "24.62",
    fee: "84.4335",
    afterFeesAmt:" 82.25",
  },
  {
    id: 3,
    icon:ParaswapIcon,
    routeName: "Paraswap",
    isReturn: false,
    returnPercentage: "-0.2%",
    price: "24.62",
    fee: "84.4335",
    afterFeesAmt:" 82.25",
  },
  {
    id: 4,
    icon: EnsoIcon,
    routeName: "Enso",
    isReturn: false,
    returnPercentage: "-0.2%",
    price: "24.62",
    fee: "84.4335",
    afterFeesAmt: "82.25",
  },
  {
    id: 5,
    icon: InchIcon,
    routeName: "1inch",
    isReturn: false,
    returnPercentage: "-0.2%",
    price: "24.62",
    fee: "84.4335",
    afterFeesAmt: "82.25",
  },
  {
    id: 6,
    icon: OpenoceanIcon,
    routeName: "Openocean",
    isReturn: false,
    returnPercentage: "-0.2%",
    price: "24.62",
    fee: "84.4335",
    afterFeesAmt:" 82.25",
  },
  {
    id: 7,
    icon: ZeroXIcon,
    routeName: "0x",
    isReturn: false,
    returnPercentage: "-0.2%",
    price: "24.62",
    fee: "84.4335",
    afterFeesAmt: "82.25",
  },
];
