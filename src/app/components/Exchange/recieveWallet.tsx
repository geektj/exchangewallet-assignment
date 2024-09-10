import { Switch } from '@/app/ui/Switch';
import React,{FC} from 'react';

export const RecieveWallet:FC = () => {
    const handleSwitchChange =(checked: boolean) => {
        console.log("Switch is ", checked ? 'ON': 'OFF')
    }
    return(
        <div className='px-4 py-3 flex rounded-[12px] justify-between items-center border-[1px] bg-white border-borders'>
            <p className='font-manrope font-500 text-sm text-darkText'>Receive USDT to another wallet</p>
            <Switch isChecked={false} onChange={handleSwitchChange}/>
        </div>
    )
}