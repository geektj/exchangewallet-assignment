import React, {FC} from 'react';
import { CardProps } from './@types';
import { cardContainer } from './styles';
import Image from 'next/image';
import FilterIcon from '../../assets/filterIcon.svg'

export const Card: FC<CardProps> = ({title, children, icon, width='w-[464px]',height='h-fit', bgColor}) => {
    return(
        <div className={`${width} ${height} ${bgColor} ${cardContainer} shadow-custom`}>
            <div className='pl-4 pr-2 flex justify-between items-center'>
                <div className='font-manrope font-650 text-lg text-secondary px-2 py-2'>
                    {title}
                </div>
                <div className='rounded-[12px] px-3 py-2'>
                    {icon}
                    {/* <Image src={FilterIcon} alt="filter icon"/> */}
                </div>
            </div>
            <div className=''>
                {children}
            </div>
        </div>
    )
}