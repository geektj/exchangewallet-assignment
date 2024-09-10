import React, {FC} from 'react';
import Image from 'next/image';
import SwaprIcon from "../../assets/swapIcon.svg"
// import RouteData from "../../shared/routeInfo.json";
import GasIcon from "../../assets/gasPurple.svg";
import DropdownArrowIcon from "../../assets/downArrow.svg";
import RightDoubleArrowIcon from "../../assets/arrow_double_right.svg"

export const RouteInfo: FC = () => {

    const showRoutes = () => {
        console.log('show routes');
    }
    return(
        <div className='py-3 px-4 border-[2px] rounded-[12px] flex gap-1 sm:gap-0 sm:justify-between mx-auto cursor-pointer border-border1 bg-white shadow-custom-light'>
            <div className='flex w-full md:w-3/4 xl:w-[70%] flex-wrap gap-[3px] md:gap-2 items-center'>
                <div>
                    <Image src={SwaprIcon} alt="swap-icon" height={18} width={18} />
                </div>
                <div className='flex items-center gap-1'>
                    <p className='font-manrope font-600 text-sm text-darkText '>Swapr</p><span className='font-manrope text-darkText text-sm font-400'>→</span>
                </div>
                <div className='flex gap-1 items-center h-[24px] rounded-[6px] bg-purpleLight py-[4px] px-[6px] border-[1px]'>
                    <Image src={GasIcon} alt='gas-icon' width={14} height={14} />
                    <p className='text-purple1 font-600 font-manrope text-xxxs'>$24.62</p>
                </div>
                <div className='h-[24px] py-[4px] px-[6px] flex items-center justify-center rounded-[6px] bg-successAccent font-manrope font-600 text-xxxs text-textSuccess'>
                    Best Return
                </div>
                <div className='h-[24px] px-[6px] py-1 border-[1px] rounded-[6px] border-lightGrey bg-white flex items-center justify-center'>
                    <Image src={DropdownArrowIcon} alt='downarrow-icon' />
                </div>
            </div>
            <div className='flex items-center gap-1' onClick={showRoutes}>
                <p className='text-purple font-manrope font-600 text-sm'>View all routes</p>
                <Image src={RightDoubleArrowIcon} alt="arrow icon" />
            </div>
        </div>
    )
}
