import React, {FC, ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import { InputProps } from './@types';



export const Input: FC <InputProps> = ({onChange, label, value}) => (
    <div>
        <label className='text-lowGrey font-manrope font-600 text-xxs'>{label}</label>
        <div className=''>
            <input className='w-full h-[40px] font-manrope font-500 text-3xl text-secondary bg-grey outline-none focus:outline-none' value={value} onChange={onChange} />
        </div>
       
    </div>
)
