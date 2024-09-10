import React, {FC} from 'react';
import { InputProps } from './@types';

export const Input: FC <InputProps> = ({onChange, label, value, disable, hasValue}) => {

    const textColorClass = () => {
        if(disable){
            return hasValue ? 'text-purple' : 'text-disable'
        }
        return 'text-secondary'
    }
    return(
        <div>
        <label className='text-lowGrey font-manrope font-600 text-xxs'>{label}</label>
        <div className=''>
            <input className={` ${textColorClass()} w-full h-[40px] font-manrope font-500 text-3xl bg-grey outline-none focus:outline-none`} value={value} onChange={onChange} disabled={disable}/>
        </div>
       
    </div>
    )
}
